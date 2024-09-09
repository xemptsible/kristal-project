// To parse this data:
//
//   import { Convert } from "./file";
//
//   const category = Convert.toCategory(json);

export interface ICategory {
  id: number;
  name: string;
  stocks: IStock[];
}

export interface IStock {
  date: Date;
  stock: number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toCategory(json: string): ICategory[] {
    return JSON.parse(json);
  }

  public static categoryToJson(value: ICategory[]): string {
    return JSON.stringify(value);
  }
}

export class Category implements ICategory {
  id: number;
  name: string;
  stocks: IStock[];

  constructor(id: number, name: string, stocks: IStock[]) {
    this.id = id;
    this.name = name;
    this.stocks = stocks;
  }
}