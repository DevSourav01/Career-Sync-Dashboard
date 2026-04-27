"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Header({ count }: { count: number }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`);
    });
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h1 className="text-base font-semibold">
        Employees <span className="font-normal">({count})</span>
      </h1>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {/* Sort */}
        <div className="flex items-center gap-2">
          <span className="text-sm shrink-0">Sort by:</span>
          <Select
            value={searchParams.get("sort") ?? "position"}
            onValueChange={(value) => updateParam("sort", value)}
          >
            <SelectTrigger className="w-37.5">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="position">Position</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="date">Start Date</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Status */}
        <div className="flex items-center gap-2">
          <span className="text-sm shrink-0">Status:</span>
          <Select
            value={searchParams.get("status") ?? "all"}
            onValueChange={(value) => updateParam("status", value)}
          >
            <SelectTrigger className="w-37.5">
              <SelectValue placeholder="All status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="leave">Leave</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}