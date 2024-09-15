import {
  IViewContext,
  IDropdownIndexContext,
  IDateRangeContext,
} from "@/assets/interfaces";
import { createContext, useContext, useMemo, useState } from "react";

import mock_data from "@/assets/MOCK_DATA.json";

export const ViewContext = createContext<IViewContext | undefined>(undefined);

export const DropdownIndexContext = createContext<
  IDropdownIndexContext | undefined
>(undefined);

export const DateRangeContext = createContext<IDateRangeContext | undefined>(
  undefined
);

export function getIndexContext() {
  let context = useContext(ViewContext);

  if (context == undefined) {
    throw Error("IndexContext must be used in the provider");
  }

  return context;
}

export function getDropdownIndexContext() {
  let context = useContext(DropdownIndexContext);

  if (context == undefined) {
    throw Error("DropdownIndexContext must be used in the provider");
  }

  return context;
}

export function getDateRangeContext() {
  let context = useContext(DateRangeContext);

  if (context == undefined) {
    throw Error("DateRangeContext must be used in the provider");
  }

  return context;
}

export function ApplicationContext({ children }: any) {
  const [isChart, toggle] = useState(false);
  const [selectedItem, set] = useState("Tất cả danh mục");
  const [dateRange, setDate] = useState<[Date | null, Date | null]>([
    new Date(mock_data[0].date),
    new Date(mock_data[mock_data.length - 1].date),
    // new Date(mock_data[2].date),
    // null,
    // null,
  ]);

  function toggleView() {
    toggle((currentState) => (currentState = !isChart));
  }

  function setDropdownItem(item: string) {
    set((currentItem) => (currentItem = item));
  }

  function setDateRange(date: [Date | null, Date | null]) {
    setDate((newDate) => (newDate = date));
    console.log(date[0]);
    console.log(date[1]);
  }

  const dateRangeValue = useMemo(
    () => ({ dateRange, setDateRange }),
    [dateRange]
  );
  const viewValue = useMemo(() => ({ isChart, toggleView }), [isChart]);
  const dropdownValue = useMemo(
    () => ({ selectedItem, setDropdownItem }),
    [selectedItem]
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
