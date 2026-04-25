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
  "NFT website landing Page design",
  "Development",
  "NFT website landing Page design",
  "NFT website landing Page design",
  "NFT website landing Page design",
  "NFT website landing Page design",
  "NFT website landing Page design",
  "NFT website landing Page design",
  "NFT website landing Page design",
]

const monthlyTasks = [
  "Digital Agency landing page design",
  "Digital Agency landing page design",
]

const meetings = [
  {
    date: "08",
    title: "Meeting with the manager",
    time: "08:30 AM-11:00 AM",
  },
  {
    date: "09",
    title: "Interview",
    time: "10:30 AM-11:30 AM",
  },
  {
    date: "09",
    title: "Interview with developers",
    time: "10:30 AM-12:00 AM",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen text-slate-900 dark:text-white md:p-4">
      <div>
        <h1 className="text-2xl">Dashboard</h1>
      <p className="mb-5 text-sm">Hello, Sourav Welcome to the CareerSync</p>
      </div>
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1fr_290px]">
        <div className="space-y-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
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