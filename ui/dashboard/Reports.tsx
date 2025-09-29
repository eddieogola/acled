import { ReportsTable } from "@/components/dashboard/reports/Table";

const Reports = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Reports</h1>
      <p className="mt-4 mb-4 text-gray-400">
        Generate and download detailed reports on conflict data, trends, and
        analysis.
      </p>
      <ReportsTable />
    </div>
  );
};

export default Reports;
