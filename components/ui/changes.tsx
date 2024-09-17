import { timePeriodDropdownData } from "@/assets/data";
import { DropdownMenu } from "../dropdown";
import { useMemo, useState } from "react";
import { useDateRangeContext } from "@/app/context/app-context";
import { percentageDiffByDate } from "@/app/helpers/percentage-calc";

import mock_data from "@/assets/MOCK_DATA.json";

export function ChangesComponent() {
  const { dateRange } = useDateRangeContext();

  const [timePeriod, setNewTimePeriod] = useState(
    timePeriodDropdownData[0].text
  );

  const changesOvertimeData = useMemo(() => {
    const filteredData = mock_data.filter((_, i) => {
      return (
        new Date(mock_data[i].date).getTime() >= dateRange[0]!.getTime() ||
        new Date(mock_data[i].date).getTime() <= dateRange[1]!.getTime()
      );
    });

    return filteredData;
  }, [dateRange]);

  return (
    <div className="grid md:grid-cols-2 [&>div]:px-4 [&>div]:py-2 border border-color-secondary-alt">
      <div className="col-span-1 md:col-span-2 text-center text-white font-bold border-b border-color-secondary-alt bg-color-secondary">
        <h1>Thay đổi của giá trị danh mục</h1>
      </div>
      <div className="items-center border-b md:border-b-0 sm:border-r border-color-secondary-alt">
        <h2 className="font-bold py-2">Từ lúc bắt đầu danh mục</h2>
      </div>
      <div className="border-color-secondary-alt">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h2 className="font-bold mb-1 sm:mb-0">Thời gian</h2>
          <DropdownMenu
            id={"lastChanged"}
            title={timePeriodDropdownData[0].text}
            data={timePeriodDropdownData}
            onSelect={(item) => {
              setNewTimePeriod(item);
            }}
          />
        </div>
        <ul className="[&>li]:py-2 mt-2">
          <li>
            <div className="flex justify-between">
              <span>Danh mục A</span>
              <span>{`${percentageDiffByDate(
                "a",
                timePeriod,
                changesOvertimeData,
                dateRange[1]
              )}%`}</span>
            </div>
          </li>
          <li>
            <div className="flex justify-between">
              <span>Danh mục B</span>
              <span>{`${percentageDiffByDate(
                "b",
                timePeriod,
                changesOvertimeData,
                dateRange[1]
              )}%`}</span>
            </div>
          </li>
          <li>
            <div className="flex justify-between">
              <span>Danh mục C</span>
              <span>{`${percentageDiffByDate(
                "c",
                timePeriod,
                changesOvertimeData,
                dateRange[1]
              )}%`}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
