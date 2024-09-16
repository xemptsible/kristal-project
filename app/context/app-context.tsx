import {
  IViewContext,
  IDropdownIndexContext,
  IDateRangeContext,
} from "@/assets/interfaces";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import mock_data from "@/assets/MOCK_DATA.json";

export const ViewContext = createContext<IViewContext | undefined>(undefined);

export const DropdownIndexContext = createContext<
  IDropdownIndexContext | undefined
>(undefined);

export const DateRangeContext = createContext<IDateRangeContext | undefined>(
  undefined
);

export function useViewContext() {
  const context = useContext(ViewContext);

  if (context == undefined) {
    throw Error("IndexContext must be used in the provider");
  }

  return context;
}

export function useDropdownIndexContext() {
  const context = useContext(DropdownIndexContext);

  if (context == undefined) {
    throw Error("DropdownIndexContext must be used in the provider");
  }

  return context;
}

export function useDateRangeContext() {
  const context = useContext(DateRangeContext);

  if (context == undefined) {
    throw Error("DateRangeContext must be used in the provider");
  }

  return context;
}

export function ApplicationContext({ children }: { children: ReactNode }) {
  const [isChart, toggle] = useState(false);
  const [selectedItem, setItem] = useState("Tất cả danh mục");
  const [dateRange, setDate] = useState<[Date | null, Date | null]>([
    new Date(mock_data[0].date),
    new Date(mock_data[mock_data.length - 1].date),
  ]);

  // https://react.dev/reference/react/useContext#optimizing-re-renders-when-passing-objects-and-functions

  const toggleView = useCallback(() => {
    toggle((isChart) => !isChart);
  }, [toggle]);

  const setDropdownItem = useCallback(
    (item: string) => {
      setItem(item);
    },
    [setItem]
  );

  const setDateRange = useCallback(
    (date: [Date | null, Date | null]) => {
      setDate(date);
    },
    [setDate]
  );

  const viewValue = useMemo(
    () => ({ isChart, toggleView }),
    [isChart, toggleView]
  );
  const dropdownValue = useMemo(
    () => ({ selectedItem, setDropdownItem }),
    [selectedItem, setDropdownItem]
  );
  const dateRangeValue = useMemo(
    () => ({ dateRange, setDateRange }),
    [dateRange, setDateRange]
  );

  return (
    <ViewContext.Provider value={viewValue}>
      <DropdownIndexContext.Provider value={dropdownValue}>
        <DateRangeContext.Provider value={dateRangeValue}>
          {children}
        </DateRangeContext.Provider>
      </DropdownIndexContext.Provider>
    </ViewContext.Provider>
  );
}
