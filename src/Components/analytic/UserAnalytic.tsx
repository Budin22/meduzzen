import React, { memo, useEffect, useMemo, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Box from "@mui/material/Box";
import { getUserGlobalRatingAnalytic } from "../../Api/user-data-api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface DataSet {
  label: string;
  data: string[];
  backgroundColor: string;
}

export const UserAnalytic = memo(
  ({ userId, name }: { userId: number; name: string }) => {
    const [labels, setLabels] = useState<string[]>([]);
    const [average, setAverage] = useState<number>();
    const [datasets, setDatasets] = useState<DataSet[]>([]);

    useEffect(() => {
      getUserGlobalRatingAnalytic(userId)
        .then((res) => {
          const analytic = res.result.rating;

          const myCurrent: { [key: string]: number[] } = {};
          analytic.forEach((q) => {
            if (!myCurrent[q.pass_at]) myCurrent[q.pass_at] = [];
            myCurrent[q.pass_at].push(q.current_rating);
          });

          const currentDates = Object.keys(myCurrent).sort();

          const data: string[] = [];
          const labels: string[] = [];

          currentDates.forEach((date) => {
            labels.push(date);
            if (myCurrent[date] && myCurrent[date].length !== 0) {
              data.push(
                (
                  myCurrent[date].reduce((a, b) => a + b) /
                  myCurrent[date].length
                ).toString(),
              );
            }
          });

          setLabels(labels);
          setAverage(
            data.map((item) => Number(item)).reduce((a, b) => a + b) /
              data.length,
          );
          setDatasets([
            {
              label: "current",
              data: data,
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ]);
        })
        .catch((err) => console.log(err));
    }, [userId]);

    const options = useMemo(() => {
      return {
        responsive: true,
        plugins: {
          legend: {
            position: "top" as const,
          },
          title: {
            display: true,
            text: name,
          },
        },
      };
    }, [name]);

    return (
      <Box width="900px" height="800px">
        {average && <span>Average rating: {average}</span>}
        <Bar options={options} data={{ labels, datasets }} />
      </Box>
    );
  },
);
