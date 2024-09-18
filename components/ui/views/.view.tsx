import { useViewContext } from "@/app/context/app-context";
import { ChartViewComponent } from "./chart-view";
import { TableViewComponent } from "./table-view";
import { useMemo } from "react";
import { useDateRangeContext } from "@/app/context/app-context";

import mock_data from "@/assets/MOCK_DATA.json";

export function ViewComponent() {
  const { dateRange } = useDateRangeContext();

  const currentData = useMemo(() => {
    return mock_data.filter((_, i) => {
      return (
        new Date(mock_data[i].date).getTime() >= dateRange[0]!.getTime() &&
        new Date(mock_data[i].date).getTime() <= dateRange[1]!.getTime()
      );
    });
  }, [dateRange]);

  const { isChart } = useViewContext();
  return !isChart ? (
    <TableViewComponent data={currentData} />
  ) : (
    <ChartViewComponent data={currentData} />
  );
}
