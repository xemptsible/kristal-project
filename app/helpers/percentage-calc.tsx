import { IIndexData } from "@/assets/interfaces";
import { dateDiffInDays } from "./date-diff";

export function percentageDiff(startingValue: number, endValue: number) {
  const changedValue = endValue - startingValue;
  const percentage = (changedValue / startingValue) * 100;

  return Number.isNaN(percentage) ? 0 : percentage.toFixed(2);
}

export function percentageDiffByDate(
  timePeriod: string,
  data: IIndexData[],
  endDate: Date | null
) {
  let percentage: number | string;

  switch (timePeriod) {
    case "Hôm qua":
      const filter = data.filter((_, i) => {
        return (
          dateDiffInDays(new Date(data[i].date), endDate!) == 1 ||
          new Date(data[i].date).getTime() == endDate!.getTime()
        );
      });

      percentage = percentageDiff(filter[0].indexA, filter[1].indexA);
      return percentage;
    case "3 ngày qua":
      break;
    case "1 tuần qua":
      break;
    case "2 tuần qua":
      break;
    case "1 tháng qua":
      break;
    default:
      break;
  }
}
