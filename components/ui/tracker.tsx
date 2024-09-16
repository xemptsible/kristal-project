import { useDateRangeContext } from "@/app/context/app-context";

export function TrackerComponent() {
  const { dateRange } = useDateRangeContext();

  return (
    <table className="table-auto my-2">
      <thead>
        <tr>
          <th className="border border-color-secondary-alt bg-color-secondary text-white py-2">
            Tên
          </th>
          <th className="border border-color-secondary-alt bg-color-secondary text-white py-2">
            Ngày bắt đầu <br />({dateRange[0]!.toLocaleDateString()})
          </th>
          <th className="border border-color-secondary-alt bg-color-secondary text-white py-2">
            Ngày kết thúc <br />({dateRange[1]!.toLocaleDateString()})
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
            test
          </td>
          <td className="border border-color-secondary-alt py-2 text-center text-color-main">
            test
          </td>
          <td className="border border-color-secondary-alt py-2 text-center text-color-main">
            test
          </td>
        </tr>
        <tr>
          <th className="border border-color-secondary-alt py-2 text-center text-color-main bg-color-tertiary">
            Danh mục B
          </th>
          <td className="border border-color-secondary-alt py-2 text-center text-color-main">
            test
          </td>
          <td className="border border-color-secondary-alt py-2 text-center text-color-main">
            test
          </td>
          <td className="border border-color-secondary-alt py-2 text-center text-color-main">
            test
          </td>
        </tr>
        <tr>
          <th className="border border-color-secondary-alt py-2 text-center text-color-main bg-color-tertiary">
            Danh mục C
          </th>
          <td className="border border-color-secondary-alt py-2 text-center text-color-main">
            test
          </td>
          <td className="border border-color-secondary-alt py-2 text-center text-color-main">
            test
          </td>
          <td className="border border-color-secondary-alt py-2 text-center text-color-main">
            test
          </td>
        </tr>
      </tbody>
    </table>
  );
}
