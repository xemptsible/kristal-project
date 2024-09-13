import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../cva/button";
import { useState } from "react";
import { getDropdownIndexContext } from "@/app/context/app-context";

export function TableViewComponent() {
  const { selectedItem } = getDropdownIndexContext();

  const [currentPage, setPage] = useState(0);

  return (
    <>
      <TableComponent selectedItem={selectedItem} />
      <Pagination />
    </>
  );
}

function TableComponent({ selectedItem }: { selectedItem: string }) {
  return (
    <table className="table-auto my-2">
      {selectedItem == "Tất cả danh mục" ? (
        <AllIndexes />
      ) : (
        <SelectedIndex indexName={selectedItem} />
      )}
    </table>
  );
}

function Pagination() {
  return (
    <div className="flex flex-grow justify-center gap-1">
      <Button disabled={true} variant={"button"} size={"icon"}>
        <ChevronLeft />
      </Button>
      <Button
        variant={"icon"}
        size={"icon"}
        className="px-3.5 text-color-orange"
      >
        1
      </Button>
      <Button variant={"icon"} size={"icon"} className="px-3.5">
        2
      </Button>
      <Button variant={"icon"} size={"icon"} className="px-3.5">
        3
      </Button>
      <Button variant={"icon"} size={"icon"} className="px-3.5">
        4
      </Button>
      <Button variant={"icon"} size={"icon"} className="px-3.5">
        5
      </Button>
      <Button variant={"button"} size={"icon"}>
        <ChevronRight />
      </Button>
    </div>
  );
}

function AllIndexes() {
  return (
    <>
      <thead>
        <tr>
          <th className="border">Ngày</th>
          <th className="border">Danh mục A</th>
          <th className="border">Danh mục B</th>
          <th className="border">Danh mục C</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border text-center">test</td>
          <td className="border text-center">test</td>
          <td className="border text-center">test</td>
          <td className="border text-center">test</td>
        </tr>
        <tr>
          <td className="border text-center">test</td>
          <td className="border text-center">test</td>
          <td className="border text-center">test</td>
          <td className="border text-center">test</td>
        </tr>
        <tr>
          <td className="border text-center">test</td>
          <td className="border text-center">test</td>
          <td className="border text-center">test</td>
          <td className="border text-center">test</td>
        </tr>
        <tr>
          <td className="border text-center">test</td>
          <td className="border text-center">test</td>
          <td className="border text-center">test</td>
          <td className="border text-center">test</td>
        </tr>
        <tr>
          <td className="border text-center">test</td>
          <td className="border text-center">test</td>
          <td className="border text-center">test</td>
          <td className="border text-center">test</td>
        </tr>
      </tbody>
    </>
  );
}

function SelectedIndex({ indexName }: { indexName: string }) {
  return (
    <>
      <thead>
        <tr>
          <th className="border text-center">Ngày</th>
          <th className="border text-center">{indexName}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border text-center">test</td>
          <td className="border text-center">test</td>
        </tr>
        <tr>
          <td className="border text-center">test</td>
          <td className="border text-center">test</td>
        </tr>
        <tr>
          <td className="border text-center">test</td>
          <td className="border text-center">test</td>
        </tr>
        <tr>
          <td className="border text-center">test</td>
          <td className="border text-center">test</td>
        </tr>
        <tr>
          <td className="border text-center">test</td>
          <td className="border text-center">test</td>
        </tr>
        <tr>
          <td className="border text-center">test</td>
          <td className="border text-center">test</td>
        </tr>
      </tbody>
    </>
  );
}
