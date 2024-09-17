import { ChartLine, Table } from "lucide-react";
import { Button } from "./cva/button";

export function Toggles({
  isChart,
  onClick,
}: {
  isChart: boolean;
  onClick: () => void;
}) {
  return (
    <>
      <Button
        variant={"icon"}
        size={"icon"}
        className="flex self-end"
        onClick={onClick}
      >
        <ChartLine color={isChart ? "var(--main)" : "currentColor"} />
      </Button>
      <Button
        variant={"icon"}
        size={"icon"}
        className="flex self-end"
        onClick={onClick}
      >
        <Table color={!isChart ? "var(--main)" : "currentColor"} />
      </Button>
    </>
  );
}
