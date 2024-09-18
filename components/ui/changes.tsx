import { timePeriodDropdownData } from "@/assets/data";
import { DropdownMenu } from "../dropdown";
import { useMemo, useState } from "react";
import { useDateRangeContext } from "@/app/context/app-context";
import {
  percentageDiff,
  percentageDiffByDate,
} from "@/app/helpers/percentage-calc";

import mock_data from "@/assets/MOCK_DATA.json";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function ChangesComponent() {
  const { dateRange } = useDateRangeContext();

  const [timePeriod, setNewTimePeriod] = useState(
    timePeriodDropdownData[0].text
  );

  const changesOverTimeData = useMemo(() => {
    const filteredData = mock_data.filter((_, i) => {
      return (
        new Date(mock_data[i].date).getTime() >= dateRange[0]!.getTime() ||
        new Date(mock_data[i].date).getTime() <= dateRange[1]!.getTime()
      );
    });

    return filteredData;
  }, [dateRange]);

  const indexChangesOverTimeData = useMemo(() => {
    const filteredData = mock_data.filter((_, i) => {
      return (
        new Date(mock_data[i].date).getTime() == dateRange[0]!.getTime() ||
        new Date(mock_data[i].date).getTime() == dateRange[1]!.getTime()
      );
    });

    const percentageValues = [
      {
        name: "Danh mục A",
        percent: percentageDiff(
          filteredData[0]!.indexA,
          filteredData[1]!.indexA
        ),
      },
      {
        name: "Danh mục B",
        percent: percentageDiff(
          filteredData[0]!.indexB,
          filteredData[1]!.indexB
        ),
      },
      {
        name: "Danh mục C",
        percent: percentageDiff(
          filteredData[0]!.indexC,
          filteredData[1]!.indexC
        ),
      },
    ];

    return percentageValues;
  }, [dateRange]);

  return (
    <div className="grid md:grid-cols-2 [&>div]:px-4 [&>div]:py-2 border border-color-secondary-alt">
      <div className="col-span-1 md:col-span-2 text-center text-white font-bold border-b border-color-secondary-alt bg-color-secondary">
        <h1>Thay đổi của giá trị danh mục</h1>
      </div>
      <div className="items-center border-b md:border-b-0 sm:border-r border-color-secondary-alt">
        <h2 className="font-bold py-2">Từ lúc bắt đầu danh mục</h2>
        <ChangesOverTimeChart data={indexChangesOverTimeData} />
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
                changesOverTimeData,
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
                changesOverTimeData,
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
                changesOverTimeData,
                dateRange[1]
              )}%`}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function ChangesOverTimeChart({
  data,
}: {
  data: {
    name: string;
    percent: string | number;
  }[];
}) {
  return (
    <ResponsiveContainer height={200} width={"100%"}>
      <BarChart layout="vertical" data={data}>
        <CartesianGrid horizontal={false} strokeDasharray={10} />
        <XAxis type="number" />
        <YAxis type="category" dataKey={"name"} />
        <Tooltip
          labelStyle={{ color: "var(--foreground)" }}
          contentStyle={{ backgroundColor: "var(--background)" }}
        />
        <Bar unit={"%"} name={"Tăng/Giảm"} dataKey="percent" fill="#6ECEB2" />
      </BarChart>
    </ResponsiveContainer>
  );
}
