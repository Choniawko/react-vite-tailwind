import { createContext, useContext } from "react";

import {
  useReactTable,
  Table,
  getCoreRowModel,
  getPaginationRowModel,
  FilterFn,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { atom, useAtom } from "jotai";
import { rankItem } from "@tanstack/match-sorter-utils";

type TableContextProps = {
  columns: any;
  data: any;
  children: React.ReactNode;
};

const TableContext = createContext<Table<any>>({} as Table<any>);

export const filterAtom = atom("");

const fuzzyFilter: FilterFn<any> = (row, id, filterValue, addMeta) => {
  const itemRank = rankItem(row.getValue(id), filterValue);
  addMeta({
    itemRank,
  });
  return itemRank.passed;
};

export const TableProvider = ({
  columns,
  data,
  children,
}: TableContextProps) => {
  const [globalFilter, setGlobalFilter] = useAtom(filterAtom);
  const tableData = useReactTable({
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    data,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <TableContext.Provider value={{ ...tableData }}>
      {children}
    </TableContext.Provider>
  );
};

export const useTableContext = () => {
  return useContext(TableContext);
};
