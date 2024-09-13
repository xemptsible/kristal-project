import { getDropdownIndexContext } from "@/app/context/app-context";

export function ChartViewComponent() {
  const { selectedItem } = getDropdownIndexContext();
  return <div>{selectedItem}</div>;
}
