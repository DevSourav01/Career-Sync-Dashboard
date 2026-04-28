import StateCard from "@/components/StateCard"
import StatisticsChart from "@/components/StatisticsChart"
import UpcomingProjects from "@/components/UpcomingProjects"
import MonthlyTasks from "@/components/MonthlyTasks"
import Meetings from "@/components/Meetings"
import OverallProgress from "@/components/OverallProgress"

const cardData = [
  { title: "Total Applications", number: 3654, percent: 85, color: "#2f6bff" },
  { title: "Successful Interview", number: 1325, percent: 72, color: "#4ade80" },
  { title: "Unsuccessful Interview", number: 635, percent: 42, color: "#ff8b8b" },
]

const projects = [
  "Career Sync Dashboard UI Revamp",
  "Employee Directory Search Module",
  "Analytics Overview Page",
  "Authentication Flow Setup",
  "Application Tracker Board",
  "Interview Pipeline Dashboard",
  "Profile Settings Panel",
  "Notification Center Design",
  "Admin Reports Module",
];

const monthlyTasks = [
  "Finalize employee table sorting and filtering",
  "Build responsive dashboard sidebar",
];

const meetings = [
  {
    date: "08",
    title: "Sprint planning with product team",
    time: "08:30 AM - 09:15 AM",
  },
  {
    date: "09",
    title: "Frontend design review",
    time: "10:30 AM - 11:15 AM",
  },
  {
    date: "12",
    title: "Client feedback discussion",
    time: "02:00 PM - 03:00 PM",
  },
  
];

export default function Home() {
  return (
    <main className="min-h-screen text-slate-900 dark:text-white md:p-4">
      <div>
        <h1 className="text-2xl">Dashboard</h1>
      <p className="mb-5 text-sm">Hello, Sourav Welcome to the CareerSync</p>
      </div>
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1fr_290px]">
        <div className="space-y-5">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
            {cardData.map((card) => (
              <StateCard key={card.title} {...card} />
            ))}
          </div>

          <StatisticsChart />
        </div>

        <UpcomingProjects projects={projects} />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-3">
        <MonthlyTasks tasks={monthlyTasks} />
        <Meetings meetings={meetings} />
        <OverallProgress />
      </div>
    </main>
  )
}