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

export const indexDropdownData = [
  {
    id: "1",
    text: "Tất cả danh mục",
  },
  {
    id: "2",
    text: "Danh mục A",
  },
  {
    id: "3",
    text: "Danh mục B",
  },
  {
    id: "4",
    text: "Danh mục C",
  },
  {
    id: "5",
    text: "Danh mục Danh mục Danh mục AAAAAAAAAAAAA",
  },
];

export const data = [
  {
    id: 1,
    name: "A",
    rates: [
      {
        id: 1,
        date: new Date("2024/09/06"),
        rate: 200,
      },
      {
        id: 2,
        date: new Date("2024/09/07"),
        rate: 260,
      },
      {
        id: 3,
        date: new Date("2024/09/08"),
        rate: 245,
      },
      {
        id: 4,
        date: new Date("2024/09/09"),
        rate: 230,
      },
      {
        id: 5,
        date: new Date("2024/09/10"),
        rate: 250,
      },
      {
        id: 6,
        date: new Date("2024/09/11"),
        rate: 255,
      },
      {
        id: 7,
        date: new Date("2024/09/12"),
        rate: 252,
      },
      {
        id: 8,
        date: new Date("2024/09/13"),
        rate: 260,
      },
      {
        id: 9,
        date: new Date("2024/09/14"),
        rate: 280,
      },
      {
        id: 10,
        date: new Date("2024/09/15"),
        rate: 270,
      },
    ],
  },
  {
    id: 2,
    name: "B",
    rates: [
      {
        id: 1,
        date: new Date("2024/09/11"),
        rate: 180,
      },
      {
        id: 2,
        date: new Date("2024/09/12"),
        rate: 125,
      },
    ],
  },
  {
    id: 3,
    name: "C",
    rates: [
      {
        id: 1,
        date: new Date("2024/09/13"),
        rate: 40,
      },
      {
        id: 2,
        date: new Date("2024/09/14"),
        rate: 50,
      },
      {
        id: 3,
        date: new Date("2024/09/15"),
        rate: 90,
      },
    ],
  },
];
