import { useState } from "react";
import { Button } from "../cva/button";
import { DropdownMenu } from "../dropdown";
import {
  useDateRangeContext,
  useDropdownIndexContext,
  useViewContext,
} from "@/app/context/app-context";
import { DateRangerPicker } from "../date-range-picker";
import { Toggles } from "../toggle";
import { IDropdownItem } from "@/assets/interfaces";

import "react-datepicker/dist/react-datepicker.css";

export function HeaderComponent({ data }: { data: IDropdownItem[] }) {
  const { isChart, toggleView } = useViewContext();
  const { setDropdownItem } = useDropdownIndexContext();
  const { setDateRange } = useDateRangeContext();

  const [index, setSelection] = useState("Tất cả danh mục");
  const [ranges, setRange] = useState<[Date | null, Date | null]>([null, null]);

  function handleNewIndex(newIndex: string) {
    setSelection(newIndex);
  }

  function handleNewRange(newRange: [Date | null, Date | null]) {
    setRange(newRange);
  }

  function confirm() {
    setDropdownItem(index);
    setDateRange(ranges);
  }

  return (
    <nav className="flex flex-wrap flex-col sm:flex-row justify-between gap-2 my-2">
      <div className="flex flex-grow flex-col sm:flex-row w-full sm:w-fit gap-2">
        <DropdownMenu
          id={"index"}
          title={"Tất cả danh mục"}
          data={data}
          onSelect={handleNewIndex}
        />
        <DateRangerPicker getDateRange={handleNewRange} />
        <Button onClick={confirm}>
          <p className="overflow-hidden overflow-ellipsis">Tra cứu</p>
        </Button>
      </div>
      <div className="flex flex-row self-end ml-auto">
        <Toggles isChart={isChart} onClick={toggleView} />
      </div>
    </nav>
  );
}
