import EmployeeRow from "./EmployeeRow";
import type { Employee } from "@/app/employees/page";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function EmployeeTable({ employees }: { employees: Employee[] }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <Table className="w-full md:min-w-200">
        <TableHeader className="hidden sm:table-header-group">
          <TableRow className="border-white/5 hover:bg-transparent">
            <TableHead className="text-xs font-medium uppercase tracking-wider">Full Name</TableHead>
            <TableHead className="text-xs font-medium uppercase tracking-wider">Email</TableHead>
            <TableHead className="text-xs font-medium uppercase tracking-wider">Start Date</TableHead>
            <TableHead className="text-xs font-medium uppercase tracking-wider">Role</TableHead>
            <TableHead className="text-xs font-medium uppercase tracking-wider">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="block sm:table-row-group">
          {employees.map((employee) => (
            <EmployeeRow key={employee.id} employee={employee} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}