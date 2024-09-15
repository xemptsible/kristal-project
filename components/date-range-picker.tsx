import { Calendar } from "lucide-react";
import { useState, forwardRef, ForwardedRef } from "react";
import { Button } from "./cva/button";

import DatePicker from "react-datepicker";
import mock_data from "@/assets/MOCK_DATA.json";

export function DateRangerPicker({
  getDateRange,
}: {
  getDateRange: (dates: [Date | null, Date | null]) => void;
}) {
  const [dates, setDateInput] = useState<[Date | null, Date | null]>([
    new Date(mock_data[0].date),
    new Date(mock_data[mock_data.length - 1].date),
  ]);
  const [startDate, endDate] = dates;

  const CustomDateInput = forwardRef(
    (
      { value, onClick, className }: any,
      ref: ForwardedRef<HTMLButtonElement>
    ) => (
      <Button
        ref={ref}
        className={className}
        onClick={onClick}
        variant={"action"}
      >
        {value}
        <Calendar />
      </Button>
    )
  );

  return (
    <DatePicker
      selectsRange={true}
      startDate={startDate ?? undefined}
      endDate={endDate ?? undefined}
      onChange={(update) => {
        setDateInput(update);
        getDateRange(update);
      }}
      wrapperClassName="flex flex-grow md:flex-grow-0"
      customInput={<CustomDateInput className="gap-4 w-full md:w-fit" />}
      customInputRef="dateRangeInputRef"
    />
  );
}
