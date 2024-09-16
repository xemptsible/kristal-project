"use client";

import { ChangesComponent } from "@/components/ui/changes";
import { HeaderComponent } from "@/components/ui/header";
import { indexDropdownData } from "@/assets/data";
import { ApplicationContext } from "./context/app-context";
import { ViewComponent } from "@/components/ui/views/.view";

export default function Home() {
  return (
    <ApplicationContext>
      <header>
        <HeaderComponent data={indexDropdownData} />
      </header>
      <main className="flex flex-col flex-grow">
        <ViewComponent />
        <ChangesComponent />
      </main>
    </ApplicationContext>
  );
}
