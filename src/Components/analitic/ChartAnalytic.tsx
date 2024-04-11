import React, { memo, useEffect, useState } from "react";
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
import { getCompanySummaryRatingAnalyticForUsers } from "../../Api/company-data-api";

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

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Summary analytic for users in company ",
    },
  },
};

export const ChartAnalytic = memo(({ companyId }: { companyId: number }) => {
  const [labels, setLabels] = useState<string[]>([]);
  const [datasets, setDatasets] = useState<DataSet[]>([]);

  useEffect(() => {
    getCompanySummaryRatingAnalyticForUsers(companyId)
      .then((data) => {
        const myAverage: { [key: string]: number[] } = {};
        const myCurrent: { [key: string]: number[] } = {};

        data.result.rating.forEach((item) => {
          item.rating.forEach((q) => {
            if (!myAverage[q.pass_at]) myAverage[q.pass_at] = [];
            if (!myCurrent[q.pass_at]) myCurrent[q.pass_at] = [];
            myAverage[q.pass_at].push(q.average_rating);
            myCurrent[q.pass_at].push(q.current_rating);
          });
        });

        const averageDates = Object.keys(myAverage).sort();
        const currentDates = Object.keys(myCurrent).sort();
        const allDates = new Set(currentDates.concat(averageDates));

        const averageData: string[] = [];
        const currentData: string[] = [];
        const dateData: string[] = [];

        allDates.forEach((date) => {
          dateData.push(date);
          if (myAverage[date] && myAverage[date].length !== 0) {
            averageData.push(
              (
                myAverage[date].reduce((a, b) => a + b) / myAverage[date].length
              ).toString(),
            );
          }

          if (myCurrent[date] && myCurrent[date].length !== 0) {
            currentData.push(
              (
                myCurrent[date].reduce((a, b) => a + b) / myCurrent[date].length
              ).toString(),
            );
          }
        });

        setLabels(dateData);
        setDatasets([
          {
            label: "current",
            data: currentData,
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "average",
            data: averageData,
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ]);
      })
      .catch((err) => console.log(err));
  }, [companyId]);

  return <Bar options={options} data={{ labels, datasets }} />;
});
