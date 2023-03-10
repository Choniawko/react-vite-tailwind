import { useAtom } from "jotai";
import { filterAtom } from "./TableContext";

export const SearchField = () => {
  const [globalFilter, setGlobalFilter] = useAtom(filterAtom);
  return (
    <input
      data-theme="light"
      className="input"
      type="text"
      placeholder="Search..."
      value={globalFilter || ""}
      onChange={(e) => {
        setGlobalFilter(e.target.value);
      }}
    />
  );
};
