import { ReactNode, useMemo, useState } from "react";
import {
  useDateRangeContext,
  useDropdownIndexContext,
} from "@/app/context/app-context";
import { Pagination } from "@/components/pagination";
import { IIndexData } from "@/assets/interfaces";
import { dateDiffInDays } from "@/app/helpers/date-diff";

import mock_data from "@/assets/MOCK_DATA.json";
import { TrackerComponent } from "../tracker";

export function TableViewComponent() {
  const { dateRange } = useDateRangeContext();
  const [currentPage, setCurrentPage] = useState(1);

  const defaultPageSize = 5;

  const currentTableData = useMemo(() => {
    const first = (currentPage - 1) * defaultPageSize;
    const last = first + defaultPageSize;

    const initialData = mock_data.filter((_, i) => {
      return (
        new Date(mock_data[i].date).getTime() >= dateRange[0]!.getTime() &&
        new Date(mock_data[i].date).getTime() <= dateRange[1]!.getTime()
      );
    });

    const filteredData = initialData.slice(first, last);
    return filteredData;
  }, [currentPage, dateRange]);

  return (
    <>
      <Table data={currentTableData} />
      <Pagination
        currentPage={currentPage}
        totalCount={dateDiffInDays(dateRange[0]!, dateRange[1]!)}
        siblingCount={1}
        pageSize={defaultPageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
      <TrackerComponent data={currentTableData} />
    </>
  );
}

function Table({ data }: { data: IIndexData[] }) {
  const { selectedItem } = useDropdownIndexContext();
  return (
    <table className="table-auto my-2">
      {selectedItem == "Tất cả danh mục" ? (
        <AllIndexes data={data} />
      ) : (
        <SelectedIndex data={data} />
      )}
    </table>
  );
}

function AllIndexes({ data }: { data: IIndexData[] }) {
  return (
    <>
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
    </>
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
            </tr>
          );
        });
        break;
      case "Danh mục B":
        node = data.map((item: IIndexData) => {
          return (
            <tr key={item.id}>
              <td
                key={item.date}
                className="border py-2 border-color-secondary-alt text-center"
              >
                {item.date}
              </td>
              <td
                key={item.indexB}
                className="border py-2 border-color-secondary-alt text-center"
              >
                {item.indexB}
              </td>
            </tr>
          );
        });
        break;
      case "Danh mục C":
        node = data.map((item: IIndexData) => {
          return (
            <tr key={item.id}>
              <td
                key={item.date}
                className="border py-2 border-color-secondary-alt text-center"
              >
                {item.date}
              </td>
              <td
                key={item.indexC}
                className="border py-2 border-color-secondary-alt text-center"
              >
                {item.indexC}
              </td>
            </tr>
          );
        });
        break;
    }

    return node;
  }

  return (
    <>
      <thead>
        <tr>
          <th className="border py-2 border-color-secondary-alt bg-color-secondary text-center">
            Ngày
          </th>
          <th className="border py-2 border-color-secondary-alt bg-color-secondary text-center">
            {selectedItem ?? "Error"}
          </th>
        </tr>
      </thead>
      <tbody>{indexHandler(selectedItem)}</tbody>
    </>
  );
}
