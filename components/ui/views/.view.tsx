import { useViewContext } from "@/app/context/app-context";
import { ChartViewComponent } from "./chart-view";
import { TableViewComponent } from "./table-view";

export function ViewComponent() {
    const { isChart } = useViewContext();
    return !isChart ? <TableViewComponent /> : <ChartViewComponent />;
  }