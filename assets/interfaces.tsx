export interface IDropdownItem {
  id: string;
  text: string;
}

export interface IDropdownProps {
  id: string;
  title: string;
  data: IDropdownItem[];
  selectedId?: string;
  onSelect?: (dataItem: string) => void;
}

export interface IDropdownIndexContext {
  selectedItem: string;
  setDropdownItem: (item: string) => void;
}

export interface IIndexData {
  id: number;
  date: string;
  indexA: number;
  indexB: number;
  indexC: number;
}

export interface IViewContext {
  isChart: boolean;
  toggleView: () => void;
}

export interface IDateRangeContext {
  dateRange: [Date | null, Date | null];
  setDateRange: (date: [Date | null, Date | null]) => void;
}

export interface IPagniation {
  currentPage: number;
  totalCount: number;
  siblingCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

export interface IPaginationProps {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
}
