import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../../button";

export function TableViewComponent() {
  return (
    <>
      <table className="table-auto border-2 my-2">
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
      </table>
      <Pagination />
    </>
  );
}

function Pagination() {
  return (
    <div className="flex flex-grow justify-center">
      <Button variant={"icon"} size={"icon"}>
        <ArrowLeft />
      </Button>
      <Button variant={"icon"} size={"icon"} className="px-3.5">
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
      <Button variant={"icon"} size={"icon"}>
        <ArrowRight />
      </Button>
    </div>
  );
}
