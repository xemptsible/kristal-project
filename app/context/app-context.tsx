import { IDropdownItem } from "@/assets/data";
import { createContext, useContext, useMemo, useState } from "react";

interface IViewContext {
  isChart: boolean;
  toggleView: () => void;
}

interface IDropdownIndexContext {
  selectedItem: string;
  setDropdownItem: (item: string) => void;
}

interface IPagination {
  totalCount: IDropdownItem[];
  currentPage: number;
  setPage: () => void;
}

interface IDateRangeContext {
  dateStart: Date;
  dateEnd: Date;
  setDateRange: () => void;
}

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

export function ApplicationContext({ children }: any) {
  const [isChart, toggle] = useState(false);
  const [selectedItem, set] = useState("Tất cả danh mục");

  function toggleView() {
    toggle((currentState) => (currentState = !isChart));
  }

  function setDropdownItem(item: string) {
    console.log(item);
    set((currentItem) => (currentItem = item));
  }

  const viewValue = useMemo(() => ({ isChart, toggleView }), [isChart]);
  const dropdownValue = useMemo(
    () => ({ selectedItem, setDropdownItem }),
    [selectedItem]
  );

  return (
    <ViewContext.Provider value={viewValue}>
      <DropdownIndexContext.Provider value={dropdownValue}>
        {children}
      </DropdownIndexContext.Provider>
    </ViewContext.Provider>
  );
}
