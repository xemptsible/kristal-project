import { TableViewComponent } from "@/components/ui/views/table-view";
import { PageHeaderComponent } from "@/components/ui/header";
import { TrackerComponent } from "@/components/ui/tracker";
import { ChangesComponent } from "@/components/ui/changes";

export default function Home() {
  return (
    <div className="max-h-dvh max-w-screen-lg flex flex-col m-auto px-3">
      <PageHeaderComponent />
      <TableViewComponent />
      <TrackerComponent />
      <ChangesComponent />
    </div>
  );
}
