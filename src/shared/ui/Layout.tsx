import { useState } from "react";
import { Header } from "./Header";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { Navbar } from "./Navbar";
import { MobileSidebar } from "./MobileSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <MobileSidebar {...{ sidebarOpen, setSidebarOpen }} />
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col ">
        <Navbar />
      </div>
      <div className="flex flex-col lg:pl-64">
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <Header />
        </div>

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
