import { ChevronDown } from "lucide-react";
import { Button } from "../button";

export function ChangesComponent() {
  return (
    <div className="grid md:grid-cols-2 [&>div]:p-2 border md:divide-x divide-y">
      <div>
        <h2 className="text-lg font-bold">Từ lúc bắt đầu danh mục</h2>
      </div>
      <div className="flex flex-grow flex-col md:flex-row md:items-baseline justify-between">
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
