// import { useQuery } from "@tanstack/react-query";
// import { Category } from "../model/category";
import data from "@/assets/json/data.json";

export function CategoryComponent() {
  // const { isPending, error, data } = useQuery<Category[]>({
  //   queryKey: ["stock-data"],
  //   queryFn: () => FetchJson(),
  // });

  // console.log(isPending);

  // if (isPending) return "Loading...";
  // if (error) return "An error has occurred: " + error.message;

  return data.map((category, i) => {
    return (
      <>
        <h1 key={category.id}>{"Danh mục " + category.name}</h1>
        <h2 key={category.stocks[i].id}>
          {"Ngày bắt đầu: " + category.stocks[i].stock}
        </h2>
      </>
    );
  });
}
