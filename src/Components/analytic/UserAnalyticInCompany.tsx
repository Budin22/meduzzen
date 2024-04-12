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
import { getAnalyticDataForChart } from "../../Util/getAnalyticDataForChart";
import { getCompanySummaryRatingAnalyticForUser } from "../../Api/company-data-api";

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

export const UserAnalyticInCompany = memo(
  ({
    companyId,
    userId,
    name,
  }: {
    companyId: number;
    userId: number;
    name: string;
  }) => {
    const [labels, setLabels] = useState<string[]>([]);
    const [datasets, setDatasets] = useState<DataSet[]>([]);

    useEffect(() => {
      getCompanySummaryRatingAnalyticForUser(companyId, userId)
        .then((res) => {
          const analytic = res.result.rating;
          const { labels, data } = getAnalyticDataForChart(analytic);
          setLabels(labels);
          setDatasets([
            {
              label: "current",
              data: data,
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ]);
        })
        .catch((err) => console.log(err));
    }, [companyId, userId]);

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
        <Bar options={options} data={{ labels, datasets }} />
      </Box>
    );
  },
);
