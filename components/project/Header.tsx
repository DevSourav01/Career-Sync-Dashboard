// Header.tsx
"use client"
import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { ProjectCard } from "./ProjectCard"; // or your path

export default function Header() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const stats = [
    { id: 1, num: 6, desc: "Total active" },
    { id: 2, num: 3, desc: "On track" },
    { id: 3, num: 2, desc: "At risk" },
    { id: 4, num: 1, desc: "Overdue" },
  ];

  const projects = [
  {
    id: 1,
    title: "Backend Engineer Hiring",
    category: "Hiring",
    department: "Engineering",
    owner: "Ananya Sharma",
    due: "May 18, 2026",
    status: "On track",
    progress: 72,
  },
  {
    id: 2,
    title: "Sales Team Onboarding",
    category: "Onboarding",
    department: "Sales",
    owner: "Rahul Mehta",
    due: "May 22, 2026",
    status: "At risk",
    progress: 48,
  },
  {
    id: 3,
    title: "Leave Policy Update",
    category: "Policy",
    department: "Operations",
    owner: "Priya Das",
    due: "May 14, 2026",
    status: "Overdue",
    progress: 90,
  },
  {
    id: 4,
    title: "POSH Training Rollout",
    category: "L&D",
    department: "All Departments",
    owner: "Sneha Roy",
    due: "May 30, 2026",
    status: "On track",
    progress: 64,
  },
  {
    id: 5,
    title: "Frontend Developer Hiring",
    category: "Hiring",
    department: "Engineering",
    owner: "Ananya Sharma",
    due: "June 5, 2026",
    status: "On track",
    progress: 55,
  },
  {
    id: 6,
    title: "Design Team Onboarding",
    category: "Onboarding",
    department: "Design",
    owner: "Arjun Patel",
    due: "May 28, 2026",
    status: "On track",
    progress: 60,
  },
  {
    id: 7,
    title: "Remote Work Policy Refresh",
    category: "Policy",
    department: "People & Culture",
    owner: "Priya Das",
    due: "June 10, 2026",
    status: "On track",
    progress: 40,
  },
  {
    id: 8,
    title: "Manager Training Program",
    category: "L&D",
    department: "All Departments",
    owner: "Sneha Roy",
    due: "July 15, 2026",
    status: "On track",
    progress: 30,
  },
  {
    id: 9,
    title: "GDPR & Data Compliance Review",
    category: "Compliance",
    department: "Legal & HR",
    owner: "Rahul Mehta",
    due: "May 25, 2026",
    status: "At risk",
    progress: 52,
  },
  {
    id: 10,
    title: "Performance Review Cycle Setup",
    category: "L&D",
    department: "All Departments",
    owner: "Priya Das",
    due: "June 1, 2026",
    status: "On track",
    progress: 68,
  },
  {
    id: 11,
    title: "Customer Support Hiring",
    category: "Hiring",
    department: "Customer Support",
    owner: "Ananya Sharma",
    due: "June 12, 2026",
    status: "On track",
    progress: 25,
  },
  {
    id: 12,
    title: "New HR System Onboarding",
    category: "Onboarding",
    department: "HR",
    owner: "Rahul Mehta",
    due: "May 31, 2026",
    status: "On track",
    progress: 80,
  },
  {
    id: 13,
    title: "Anti‑Harassment Policy Compliance Check",
    category: "Compliance",
    department: "All Departments",
    owner: "Priya Das",
    due: "June 5, 2026",
    status: "On track",
    progress: 75,
  },
  {
    id: 14,
    title: "Internship Program Onboarding",
    category: "Onboarding",
    department: "All Departments",
    owner: "Sneha Roy",
    due: "June 20, 2026",
    status: "On track",
    progress: 10,
  },
  {
    id: 15,
    title: "Health & Wellness Policy Rollout",
    category: "Policy",
    department: "People & Culture",
    owner: "Priya Das",
    due: "July 1, 2026",
    status: "On track",
    progress: 20,
  },
];

  const filters = ["All", "Hiring", "Onboarding", "Policy", "L&D", "Compliance"];

  const visibleProjects = projects.filter((p) => {
    if (activeFilter === "All") return true;
    return p.category === activeFilter;
  });

  return (
    <div className="p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-md font-bold">Projects</h1>
            <p className="text-gray-500 text-sm">
              Active hiring & HR initiatives across departments
            </p>
          </div>

          <div className="flex gap-3 mt-4 ">
            <button className="px-2 hover:cursor-pointer py-2 bg-black text-white border rounded-md">
              Filter
            </button>
            <button className="px-2 hover:cursor-pointer py-2 bg-black text-white rounded-md">
              + New Project
            </button>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <h2 className="text-2xl font-bold">{item.num}</h2>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filter buttons */}
        <div className="flex flex-row flex-wrap gap-3 ">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-md hover:cursor-pointer border text-sm ${
                activeFilter === filter
                  ? "bg-black text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              department={project.department}
              owner={project.owner}
              due={project.due}
              status={project.status}
              progress={project.progress}
            />
          ))}
        </div>
      </div>
    </div>
  );
}