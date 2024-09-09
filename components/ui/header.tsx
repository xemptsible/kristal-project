import { Calendar, ChartLineIcon, ChevronDown, TableIcon } from "lucide-react";
import { Button } from "../button";

export function PageHeaderComponent() {
  return (
    <div className="flex flex-grow flex-col md:flex-row justify-between py-2">
      <div className="flex flex-wrap flex-col md:flex-row gap-2 md:gap-4">
        <Button variant="dropdown">
          Tất cả danh mục
          <ChevronDown />
        </Button>
        <Button variant="picker">
          01/07/2020 - 10/08/2020
          <Calendar />
        </Button>
        <Button>Tra cứu</Button>
      </div>
      <div className="flex ml-auto mt-3 md:mt-0 gap-2">
        <Button variant="icon" size="icon">
          <ChartLineIcon />
        </Button>
        <Button variant="icon" size="icon">
          <TableIcon />
        </Button>
      </div>
    </div>
  );
}