import {
  CompanyRatingItem,
  CompanyRatingItemForUser,
} from "../Type/company-data-types";
import { AnalyticItem } from "../Type/share-types";

export const getAnalyticDataForChart = (
  analytic:
    | CompanyRatingItem<AnalyticItem[]>[]
    | CompanyRatingItemForUser<AnalyticItem[]>[],
) => {
  const myCurrent: { [key: string]: number[] } = {};
  analytic.forEach((item) => {
    item.rating.forEach((q) => {
      if (!myCurrent[q.pass_at]) myCurrent[q.pass_at] = [];
      myCurrent[q.pass_at].push(q.current_rating);
    });
  });

  const currentDates = Object.keys(myCurrent).sort();

  const data: string[] = [];
  const labels: string[] = [];

  currentDates.forEach((date) => {
    labels.push(date);
    if (myCurrent[date] && myCurrent[date].length !== 0) {
      data.push(
        (
          myCurrent[date].reduce((a, b) => a + b) / myCurrent[date].length
        ).toString(),
      );
    }
  });

  return {
    data,
    labels,
  };
};
