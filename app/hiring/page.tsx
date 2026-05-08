import Header from "@/components/providers/Vacancie/Header";
import JobCard from "@/components/providers/Vacancie/JobCard";
import React from "react";

export default function Hiring() {
  return (
    <div className="min-h-screen px-2 py-2 sm:px-6 lg:px-8 ">
      <Header />
      <JobCard />
    </div>
  );
}
