import { useOpportunitiesQuery } from "@api-services/dashboard";
import Layout from "@ui/Layout";
import { DashboardTable } from "./DashboardTable";

export const Dashboard = () => {
  const { data: opportunities, isLoading, isError } = useOpportunitiesQuery();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  return (
    <div>
      <Layout>
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6 lg:px-8">
            {opportunities && <DashboardTable {...{ opportunities }} />}
          </div>
        </div>
      </Layout>
    </div>
  );
};
