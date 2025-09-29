import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { reports } from "@/lib/data";

export function ReportsTable() {
  return (
    <Table>
      <TableCaption>A list of your recent reports.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Pages</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reports.map((report) => (
          <TableRow key={report.id}>
            <TableCell className="font-medium">{report.id}</TableCell>
            <TableCell>{report.title}</TableCell>
            <TableCell>{report.date}</TableCell>
            <TableCell>{report.type}</TableCell>
            <TableCell>{report.status}</TableCell>
            <TableCell className="text-right">{report.pages}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
