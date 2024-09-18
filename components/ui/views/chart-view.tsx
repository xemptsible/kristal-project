import { useDropdownIndexContext } from "@/app/context/app-context";
import { IIndexData } from "@/assets/interfaces";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function ChartViewComponent({ data }: { data: IIndexData[] }) {
  const { selectedItem } = useDropdownIndexContext();

  function lineHandler() {
    switch (selectedItem) {
      case "Danh mục A":
        return (
          <Line
            name="Danh mục A"
            type="monotone"
            dataKey="indexA"
            stroke="#E87722"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
        );
      case "Danh mục B":
        return (
          <Line
            name="Danh mục B"
            type="monotone"
            dataKey="indexB"
            stroke="#FED141"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
        );
      case "Danh mục C":
        return (
          <Line
            name="Danh mục C"
            type="monotone"
            dataKey="indexC"
            stroke="#6ECEB2"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
        );
      default:
        return (
          <>
            <Line
              name="Danh mục A"
              type="monotone"
              dataKey="indexA"
              stroke="#E87722"
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
            <Line
              name="Danh mục B"
              type="monotone"
              dataKey="indexB"
              stroke="#FED141"
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
            <Line
              name="Danh mục C"
              type="monotone"
              dataKey="indexC"
              stroke="#6ECEB2"
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
          </>
        );
    }
  }

  return (
    <ResponsiveContainer width="100%" height={305}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="10" />
        <XAxis dataKey="date" />
        <YAxis interval={"preserveStartEnd"} padding={{ top: 0, bottom: 0 }} />
        <Tooltip />
        <Legend />
        {lineHandler()}
      </LineChart>
    </ResponsiveContainer>
  );
}
