import { Table, Pagination, SearchField } from "@ui/table";
import { Opportunity } from "@api-services/dashboard/opportunity";
import { format } from "date-fns";
import { createColumnHelper } from "@tanstack/react-table";
import { TableProvider } from "../../shared/ui/table/TableContext";

export const DashboardTable = ({
  opportunities,
}: {
  opportunities: Opportunity[];
}) => {
  const columnHelper = createColumnHelper<Opportunity>();

  const columns = [
    columnHelper.accessor("oppId", {
      header: () => "Opp ID",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("datePlaced", {
      header: () => "Date Placed",
      cell: (info) => format(new Date(info.getValue()), "MM/dd/yyyy"),
    }),
    columnHelper.accessor("dateSubmitted", {
      header: () => "Date Submitted",
      cell: (info) => format(new Date(info.getValue()), "MM/dd/yyyy"),
    }),
    columnHelper.accessor("farmerName", {
      header: () => "Farmer",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("shipToAddress", {
      header: () => "Ship Address",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("totalCost", {
      header: () => "Total Cost",
      cell: (info) => info.renderValue(),
    }),
  ];

  return (
    <TableProvider data={opportunities} {...{ columns }}>
      <SearchField />
      <Table />
      <Pagination />
    </TableProvider>
  );
};
