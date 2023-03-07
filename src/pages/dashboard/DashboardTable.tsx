import { Table } from "@ui/table/Table";
import { useMemo } from "react";
import { Column } from "react-table";
import { Opportunity } from "@api-services/dashboard/opportunity";
import { format } from "date-fns";

export const DashboardTable = ({
  opportunities,
}: {
  opportunities: Opportunity[];
}) => {
  const data = useMemo(
    () =>
      opportunities?.map((opp) =>
        Object.values(opp).reduce(
          (acc, curr, i) => ({
            ...acc,
            [`col${i + 1}`]: isNaN(Date.parse(curr))
              ? curr
              : format(new Date(curr), "MM/dd/yyyy"),
          }),
          {}
        )
      ),
    []
  );

  const columns = useMemo(
    () =>
      [
        {
          Header: "Opp ID",
          accessor: "col1",
        },
        {
          Header: "Data Placed",
          accessor: "col2",
        },
        {
          Header: "Data submitted",
          accessor: "col3",
        },
        {
          Header: "Farmer",
          accessor: "col4",
        },
        {
          Header: "Delivery Address",
          accessor: "col5",
        },
        {
          Header: "Total Price",
          accessor: "col6",
        },
      ] as Column[],
    []
  );
  return <Table {...{ data, columns }} />;
};
