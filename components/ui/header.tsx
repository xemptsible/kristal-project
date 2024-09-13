import { Calendar, ChartLine, Table } from "lucide-react";
import { Button } from "../cva/button";
import { DropdownMenu } from "../dropdown";
import {
  getDropdownIndexContext,
  getIndexContext,
} from "@/app/context/app-context";
import { useState } from "react";

export function HeaderComponent({ data }: any) {
  const { isChart, toggleView } = getIndexContext();
  const { setDropdownItem } = getDropdownIndexContext();

  const [index, setSelection] = useState("");

  function handleFilters(newItem: string) {
    setSelection(newItem);
  }

  function confirm() {
    setDropdownItem(index);
  }

  return (
    <nav className="flex flex-wrap flex-col sm:flex-row justify-between gap-2 my-2">
      <div className="flex flex-grow flex-col sm:flex-row w-full sm:w-fit gap-2">
        <DropdownMenu
          id={"index"}
          title={"Tất cả danh mục"}
          data={data}
          onSelect={handleFilters}
        />
        <DateFilter />
        <Button onClick={() => confirm()}>
          <p className="overflow-hidden overflow-ellipsis">Tra cứu</p>
        </Button>
      </div>
      <div className="flex flex-row self-end ml-auto">
        <Toggles isChart={isChart} toggleView={toggleView} />
      </div>
    </nav>
  );
}

export function DateFilter() {
  return (
    <>
      <Button
        variant={"dropdown"}
        className="flex flex-grow md:flex-grow-0 gap-4"
      >
        <p className="overflow-hidden overflow-ellipsis">
          10/08/2020 - 01/08/2020
        </p>
        <Calendar />
      </Button>
    </>
  );
}

export function Toggles({
  isChart,
  toggleView,
}: {
  isChart: boolean;
  toggleView: () => void;
}) {
  return (
    <>
      <Button
        variant={"icon"}
        size={"icon"}
        className="flex self-end"
        onClick={toggleView}
      >
        <ChartLine color={isChart ? "hsl(26, 81%, 52%)" : "currentColor"} />
      </Button>
      <Button
        variant={"icon"}
        size={"icon"}
        className="flex self-end"
        onClick={toggleView}
      >
        <Table color={!isChart ? "hsl(26, 81%, 52%)" : "currentColor"} />
      </Button>
    </>
  );
}
