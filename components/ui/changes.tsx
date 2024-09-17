import { changesDropdownData } from "@/assets/data";
import { DropdownMenu } from "../dropdown";

export function ChangesComponent() {
  return (
    <div className="grid md:grid-cols-2 [&>div]:p-2 border border-color-secondary-alt">
      <div className="col-span-1 sm:col-span-2 text-center text-white font-bold border-b border-color-secondary-alt bg-color-secondary">
        Thay đổi của giá trị danh mục
      </div>
      <div className="border-b sm:border-b-0 sm:border-r border-color-secondary-alt">
        <h1 className="text-lg font-bold">Từ lúc bắt đầu danh mục</h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-2 border-color-secondary-alt">
        <h1 className="text-lg font-bold sm:mb-2">Thời gian</h1>
        <DropdownMenu
          title={changesDropdownData[0].text}
          data={changesDropdownData}
        />
      </div>
    </div>
  );
}
