import React from "react";
import type { Employee } from "@/app/employees/page";
import Image from "next/image";
import { TableCell, TableRow } from "@/components/ui/table";

type StatusStyle = {
  background: string;
  color: string;
  border: string;
};
const statusStyles: Record<string, StatusStyle> = {
  active: {
    background: "#16a34a",
    color: "#ffffff",
    border: "none",
  },
  pending: {
    background: "#eab308",
    color: "#ffffff",
    border: "none",
  },
  leave: {
    background: "#dc2626",
    color: "#ffffff",
    border: "none",
  },
};

const fallbackStyle: StatusStyle = {
  background: "rgba(255,255,255,0.05)",
  color: "rgba(255,255,255,0.4)",
  border: "1px solid rgba(255,255,255,0.1)",
};

export default function EmployeeRow({ employee }: { employee: Employee }) {
  const styleKey = employee.status.toLowerCase();
  const badge = statusStyles[styleKey] ?? fallbackStyle;

  return (
    <TableRow className="mb-3 block p-3 sm:mb-0 sm:table-row sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 hover:bg-blue-500 hover:cursor-pointer hover:rounded-b-3xl">
      <TableCell className="block px-0 py-2 sm:table-cell sm:px-4 sm:py-3.5 ">
        <div className="flex items-center gap-3">
          <Image
            src={employee.image}
            alt={employee.name}
            width={36}
            height={36}
            className="h-7 w-7 rounded-full object-cover"
          />
          <span className="text-sm font-medium">{employee.name}</span>
        </div>
      </TableCell>

      <TableCell className="block px-0 py-2 text-sm sm:table-cell sm:px-4 sm:py-3.5">
        {employee.email}
      </TableCell>

      <TableCell className="block px-0 py-2 text-sm sm:table-cell sm:px-4 sm:py-3.5">
        {employee.startDate}
      </TableCell>

      <TableCell className="block px-0 py-2 text-sm sm:table-cell sm:px-4 sm:py-3.5">
        {employee.role}
      </TableCell>

      <TableCell className="px-4 py-3.5 text-center align-middle">
        <span
          style={{
            background: badge.background,
            color: badge.color,
            border: badge.border,
          }}
          className="inline-flex h-8 w-20 items-center justify-center rounded-full text-xs font-medium capitalize"
        >
          {employee.status}
        </span>
      </TableCell>
    </TableRow>
  );
}
