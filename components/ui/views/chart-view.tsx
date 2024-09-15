import { useDropdownIndexContext } from "@/app/context/app-context";

export function ChartViewComponent() {
  const { selectedItem } = useDropdownIndexContext();
  return <div>{selectedItem}</div>;
}
