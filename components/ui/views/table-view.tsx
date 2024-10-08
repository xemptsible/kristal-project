import { ReactNode, useMemo, useState } from "react";
import { useDropdownIndexContext } from "@/app/context/app-context";
import { Pagination } from "@/components/pagination";
import { IIndexData } from "@/assets/interfaces";

export function TableViewComponent({ data }: { data: IIndexData[] }) {
  const [currentPage, setCurrentPage] = useState(1);

  const defaultPageSize = 5;

  const currentTableData = useMemo(() => {
    const first = (currentPage - 1) * defaultPageSize;
    const last = first + defaultPageSize;

    // Reset page count to 1 if total data is only worth 1 page or is over the new total page count
    // Reset số trang về trang đầu tiên nếu dữ liệu chỉ đủ cho 1 trang hoặc hơn số trang mới
    const isOverPageCount = currentPage > data.length / defaultPageSize + 1;

    if (data.length <= defaultPageSize || isOverPageCount) {
      setCurrentPage(1);
    }

    const filteredData = data.slice(first, last);

    return filteredData;
  }, [currentPage, data]);

  return (
    <>
      <Table data={currentTableData} />
      <Pagination
        currentPage={currentPage}
        totalCount={data.length}
        siblingCount={1}
        pageSize={defaultPageSize}
        onPageChange={(page: number) => {
          setCurrentPage(page);
        }}
      />
    </>
  );
}

function Table({ data }: { data: IIndexData[] }) {
  const { selectedItem } = useDropdownIndexContext();

  function tableHandler(item: string) {
    const sub = "tất cả";
    const isAllIndex = item.toLowerCase().includes(sub);

    switch (isAllIndex) {
      case true:
        return <AllIndexes data={data} />;
      case false:
        return <SelectedIndex data={data} />;
      default:
        return <div className="text-center">Danh mục không tồn tại</div>;
    }
  }

  return tableHandler(selectedItem);
}

function AllIndexes({ data }: { data: IIndexData[] }) {
  return (
    <table className="table-auto my-2">
      <thead>
        <tr>
          <th className="border border-color-secondary-alt bg-color-secondary text-white py-2">
            Ngày
          </th>
          <th className="border border-color-secondary-alt bg-color-secondary text-white py-2">
            Danh mục A
          </th>
          <th className="border border-color-secondary-alt bg-color-secondary text-white py-2">
            Danh mục B
          </th>
          <th className="border border-color-secondary-alt bg-color-secondary text-white py-2">
            Danh mục C
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: IIndexData) => {
          return (
            <tr key={item.id}>
              <td
                key={item.date}
                className="border py-2 border-color-secondary-alt text-center"
              >
                {item.date}
              </td>
              <td
                key={item.indexA}
                className="border py-2 border-color-secondary-alt text-center"
              >
                {item.indexA}
              </td>
              <td
                key={item.indexB}
                className="border py-2 border-color-secondary-alt text-center"
              >
                {item.indexB}
              </td>
              <td
                key={item.indexC}
                className="border py-2 border-color-secondary-alt text-center"
              >
                {item.indexC}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function SelectedIndex({ data }: { data: IIndexData[] }) {
  const { selectedItem } = useDropdownIndexContext();

  function indexHandler(selectedItem: string) {
    let node: ReactNode;

    switch (selectedItem) {
      case "Danh mục A":
        node = data.map((item: IIndexData) => {
          return (
            <TestIndex key={item.id} index={item.indexA} date={item.date} />
          );
        });
        break;
      case "Danh mục B":
        node = data.map((item: IIndexData) => {
          return (
            <TestIndex key={item.id} index={item.indexB} date={item.date} />
          );
        });
        break;
      case "Danh mục C":
        node = data.map((item: IIndexData) => {
          return (
            <TestIndex key={item.id} index={item.indexB} date={item.date} />
          );
        });
        break;
    }

    return node;
  }

  return (
    <table className="table-auto my-2">
      <thead>
        <tr>
          <th className="border py-2 border-color-secondary-alt bg-color-secondary text-center text-white">
            Ngày
          </th>
          <th className="border py-2 border-color-secondary-alt bg-color-secondary text-center text-white">
            {selectedItem ?? "Error"}
          </th>
        </tr>
      </thead>
      <tbody>{indexHandler(selectedItem)}</tbody>
    </table>
  );
}

function TestIndex({ date, index }: { date: string; index: number }) {
  return (
    <tr>
      <td className="border py-2 border-color-secondary-alt text-center">
        {date}
      </td>
      <td className="border py-2 border-color-secondary-alt text-center">
        {index}
      </td>
    </tr>
  );
}
