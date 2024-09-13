import { ChevronDown } from "lucide-react";
import { Button } from "../cva/button";

export function ChangesComponent() {
  return (
    <div className="grid md:grid-cols-2 divide-y md:divide-x md:divide-y-0 [&>div]:p-2 border">
      <div className="flex flex-grow flex-col md:flex-row md:items-baseline justify-between gap-2">
        <h2 className="text-lg font-bold">Từ lúc bắt đầu danh mục</h2>
      </div>
      <div className="flex flex-grow flex-col md:flex-row md:items-baseline justify-between gap-2">
        <h2 className="text-lg font-bold">Thời gian</h2>
        <div className="flex flex-wrap flex-col md:flex-row">
          <Button variant={"dropdown"}>
            6 tháng qua
            <ChevronDown />
          </Button>
        </div>
      </div>
    </div>
  );
}
