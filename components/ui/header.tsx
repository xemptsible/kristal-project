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
import mock_data from "@/assets/MOCK_DATA.json";
import { indexDropdownData } from "@/assets/data";

export function HeaderComponent({ data }: { data: IDropdownItem[] }) {
  const { isChart, toggleView } = useViewContext();
  const { setDropdownItem } = useDropdownIndexContext();
  const { setDateRange } = useDateRangeContext();

  const [index, setNewIndex] = useState("Tất cả danh mục");
  const [ranges, setNewRange] = useState<[Date | null, Date | null]>([
    new Date(mock_data[0].date),
    new Date(mock_data[mock_data.length - 1].date),
  ]);

  function confirm() {
    setDropdownItem(index);
    setDateRange(ranges);
  }

  return (
    <nav className="flex flex-wrap flex-col sm:flex-row justify-between gap-2 my-2">
      <div className="flex flex-grow flex-col sm:flex-row w-full sm:w-fit gap-2">
        <DropdownMenu
          title={indexDropdownData[0].text}
          data={data}
          onSelect={(newIndex: string) => setNewIndex(newIndex)}
        />
        <DateRangerPicker
          getDateRange={(newRange: [Date | null, Date | null]) =>
            setNewRange(newRange)
          }
        />
        <Button onClick={() => confirm()}>
          <p className="overflow-hidden overflow-ellipsis">Tra cứu</p>
        </Button>
      </div>
      <div className="flex flex-row self-end ml-auto">
        <Toggles isChart={isChart} onClick={toggleView} />
      </div>
    </nav>
  );
}
