import { useDateRangeContext } from "@/app/context/app-context";

import mock_data from "@/assets/MOCK_DATA.json";
import { useMemo } from "react";

export function TrackerComponent() {
  const { dateRange } = useDateRangeContext();

  const currentTrackerData = useMemo(() => {
    const filteredData = mock_data.filter((_, i) => {
      return (
        new Date(mock_data[i].date).getTime() == dateRange[0]!.getTime() ||
        new Date(mock_data[i].date).getTime() == dateRange[1]!.getTime()
      );
    });

    return filteredData;
  }, [dateRange]);

  function percentageDiff(startingValue: number, endValue: number) {
    const changedValue = endValue - startingValue;
    const percentage = (changedValue / startingValue) * 100;

    return percentage.toFixed(2);
  }

  return (
    <table className="table-auto my-2">
      <thead>
        <tr>
          <th className="border border-color-secondary-alt bg-color-secondary text-white py-2">
            Tên
          </th>
          <th className="border border-color-secondary-alt bg-color-secondary text-white py-2">
            Ngày bắt đầu <br />({dateRange[0]?.toLocaleDateString()})
          </th>
          <th className="border border-color-secondary-alt bg-color-secondary text-white py-2">
            Ngày kết thúc <br />({dateRange[1]?.toLocaleDateString()})
          </th>
          <th className="border border-color-secondary-alt bg-color-secondary text-white py-2">
            Tăng/Giảm (%)
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="border border-color-secondary-alt py-2 text-center text-color-main bg-color-tertiary">
            Danh mục A
          </th>
          <td className="border border-color-secondary-alt py-2 text-center text-color-main">
            {currentTrackerData[0]?.indexA ?? "null"}
          </td>
          <td className="border border-color-secondary-alt py-2 text-center text-color-main">
            {currentTrackerData[1]?.indexA ?? "null"}
          </td>
          <td className="border border-color-secondary-alt py-2 text-center text-color-main">
            {percentageDiff(
              currentTrackerData[0]?.indexA,
              currentTrackerData[1]?.indexA
            )}
          </td>
        </tr>
        <tr>
          <th className="border border-color-secondary-alt py-2 text-center text-color-main bg-color-tertiary">
            Danh mục B
          </th>
          <td className="border border-color-secondary-alt py-2 text-center text-color-main">
            {currentTrackerData[0]?.indexB ?? "null"}
          </td>
          <td className="border border-color-secondary-alt py-2 text-center text-color-main">
            {currentTrackerData[1]?.indexB ?? "null"}
          </td>
          <td className="border border-color-secondary-alt py-2 text-center text-color-main">
            {percentageDiff(
              currentTrackerData[0]?.indexB,
              currentTrackerData[1]?.indexB
            )}
          </td>
        </tr>
        <tr>
          <th className="border border-color-secondary-alt py-2 text-center text-color-main bg-color-tertiary">
            Danh mục C
          </th>
          <td className="border border-color-secondary-alt py-2 text-center text-color-main">
            {currentTrackerData[0]?.indexC ?? "null"}
          </td>
          <td className="border border-color-secondary-alt py-2 text-center text-color-main">
            {currentTrackerData[1]?.indexC ?? "null"}
          </td>
          <td className="border border-color-secondary-alt py-2 text-center text-color-main">
            {percentageDiff(
              currentTrackerData[0]?.indexC,
              currentTrackerData[1]?.indexC
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
