"use client";

export default function Header() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h1 className="text-base font-semibold">
        Employees <span className="font-normal">(185)</span>
      </h1>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <span className="text-sm shrink-0">Sort by:</span>
          <select className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none transition-colors focus:border-white/20">
            <option value="position">Position</option>
            <option value="name">Name</option>
            <option value="date">Start Date</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm shrink-0">Status:</span>
          <select className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none transition-colors focus:border-white/20">
            <option value="all">All status</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="leave">Leave</option>
          </select>
        </div>
      </div>
    </div>
  );
}