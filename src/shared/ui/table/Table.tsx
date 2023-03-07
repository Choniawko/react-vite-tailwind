import React from "react";
import {
  useTable,
  usePagination,
  Column,
  TableInstance,
  Row,
} from "react-table";
import { Pagination } from "./Pagination";

export interface TableData {
  // Definiujesz swoje typy danych
}

export interface TableProps {
  data: TableData[];
}

export interface TablePaginationProps {
  page: Row<TableData>[];
  pageCount: number;
  nextPage: () => void;
  previousPage: () => void;
  canNextPage: boolean;
  canPreviousPage: boolean;
  gotoPage: (page: number) => void;
  pageOptions: number[];
  setPageSize: (size: number) => void;
  pageIndex: number;
  pageSize: number;
}

// Definiujesz interfejs TableInstance z właściwościami paginacji
export interface TableInstanceWithPagination
  extends TableInstance<TableData>,
    TablePaginationProps {}

export const Table = ({ data, columns }: any) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    prepareRow,
    gotoPage,
    previousPage,
    nextPage,
    pageCount,
    canPreviousPage,
    canNextPage,
    pageOptions,
    setPageSize,
    state: { pageIndex, pageSize },
    ...rest
  } = useTable(
    { columns, data },
    usePagination
  ) as TableInstanceWithPagination & {
    state: {
      pageIndex: number;
      pageSize: number;
    };
  };
  console.log(rest);
  return (
    <>
      <table
        data-theme="light"
        className="table-zebra table"
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        {...{
          gotoPage,
          previousPage,
          nextPage,
          pageCount,
          canPreviousPage,
          canNextPage,
          pageIndex,
          pageOptions,
          pageSize,
          setPageSize,
        }}
      />
    </>
  );
};
