import { IIndexData } from "@/assets/interfaces";
import { dateDiffInDays } from "./date-diff";

export function percentageDiff(startingValue: number, endValue: number) {
  const changedValue = endValue - startingValue;
  const percentage = (changedValue / startingValue) * 100;

  return Number.isNaN(percentage) ? 0 : percentage.toFixed(2);
}

export function percentageDiffByDate(
  index: string,
  timePeriod: string,
  data: IIndexData[],
  endDate: Date | null
) {
  let filteredData: IIndexData[];

  function getDataByDays(days: number) {
    return data.filter((_, i) => {
      return (
        dateDiffInDays(new Date(data[i].date), endDate!) == days ||
        new Date(data[i].date).getTime() == endDate!.getTime()
      );
    });
  }

  switch (timePeriod) {
    case "1 ngày qua":
      filteredData = getDataByDays(1);
      break;
    case "3 ngày qua":
      filteredData = getDataByDays(3);
      break;
    case "1 tuần qua":
      filteredData = getDataByDays(7);
      break;
    case "2 tuần qua":
      filteredData = getDataByDays(14);
      break;
    case "1 tháng qua":
      filteredData = getDataByDays(30);
      break;
    default:
      return null;
  }

  switch (index) {
    case "a":
      return percentageDiff(filteredData[0]?.indexA, filteredData[1]?.indexA);
    case "b":
      return percentageDiff(filteredData[0]?.indexB, filteredData[1]?.indexB);
    case "c":
      return percentageDiff(filteredData[0]?.indexC, filteredData[1]?.indexC);
  }
}
