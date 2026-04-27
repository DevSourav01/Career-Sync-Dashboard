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
    background: "rgba(16, 185, 129, 0.12)",
    color: "#34d399",
    border: "1px solid rgba(16, 185, 129, 0.25)",
  },
  pending: {
    background: "rgba(245, 158, 11, 0.12)",
    color: "#fbbf24",
    border: "1px solid rgba(245, 158, 11, 0.25)",
  },
  leave: {
    background: "rgba(239, 68, 68, 0.12)",
    color: "#f87171",
    border: "1px solid rgba(239, 68, 68, 0.25)",
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
    <TableRow className="mb-3 block rounded-lg border border-white/5 bg-white/3 p-3 sm:mb-0 sm:table-row sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 hover:bg-white/3">
      <TableCell className="block px-0 py-2 sm:table-cell sm:px-4 sm:py-3.5">
        <div className="flex items-center gap-3">
          <Image
            src={employee.image}
            alt={employee.name}
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover"
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

      <TableCell className="block px-0 py-2 sm:table-cell sm:px-4 sm:py-3.5">
        <span
          style={{
            background: badge.background,
            color: badge.color,
            border: badge.border,
          }}
          className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium capitalize"
        >
          {employee.status}
        </span>
      </TableCell>
    </TableRow>
  );
}