import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Opportunitys", href: "#", icon: UsersIcon, current: false },
  { name: "Your orders", href: "#", icon: FolderIcon, current: false },
  { name: "Help", href: "#", icon: CalendarIcon, current: false },
];

type ClassNames = (...classes: any[]) => string;
const classNames: ClassNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};
export const Navbar = () => {
  return (
    <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
      <div className="flex h-16 flex-shrink-0 items-center bg-gray-900 px-4">
        <Link className="text-white" to="/">
          Sales Portal
        </Link>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto">
        <nav className="flex-1 space-y-1 px-2 py-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
              )}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? "text-gray-300"
                    : "text-gray-400 group-hover:text-gray-300",
                  "mr-3 h-6 w-6 flex-shrink-0"
                )}
                aria-hidden="true"
              />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};
