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
        <ChartLine color={isChart ? "hsl(26, 81%, 52%)" : "currentColor"} />
      </Button>
      <Button
        variant={"icon"}
        size={"icon"}
        className="flex self-end"
        onClick={onClick}
      >
        <Table color={!isChart ? "hsl(26, 81%, 52%)" : "currentColor"} />
      </Button>
    </>
  );
}
