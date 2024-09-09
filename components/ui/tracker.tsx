export function TrackerComponent() {
  return (
    <table className="table-auto border-2 my-2">
      <thead>
        <tr>
          <th className="border">Tên</th>
          <th className="border">Ngày bắt đầu (day)</th>
          <th className="border">Ngày kết thúc (day)</th>
          <th className="border">Tăng/Giảm (%)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="border text-center">Danh mục A</th>
          <td className="border text-center">test</td>
          <td className="border text-center">test</td>
          <td className="border text-center">test</td>
        </tr>
        <tr>
          <th className="border text-center">Danh mục B</th>
          <td className="border text-center">test</td>
          <td className="border text-center">test</td>
          <td className="border text-center">test</td>
        </tr>
        <tr>
          <th className="border text-center">Danh mục C</th>
          <td className="border text-center">test</td>
          <td className="border text-center">test</td>
          <td className="border text-center">test</td>
        </tr>
      </tbody>
    </table>
  );
}
