import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type UpcomingProjectsProps = {
  projects: string[]
}

export default function UpcomingProjects({
  projects,
}: UpcomingProjectsProps) {
  const colors = [
    "bg-orange-400",
    "bg-sky-400",
    "bg-pink-300",
    "bg-green-400",
    "bg-blue-300",
    "bg-purple-300",
    "bg-amber-300",
    "bg-indigo-300",
    "bg-lime-300",
  ]

  return (
    <Card className="border-slate-200 bg-white text-slate-900 shadow-sm dark:border-white/5 dark:bg-[#1b1d22] dark:text-white dark:shadow-lg">
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div>
          <CardTitle className="text-xl">Upcoming Projects</CardTitle>
          <CardDescription className="mt-1 text-slate-500 dark:text-white/50">
            Total 22 to view
          </CardDescription>
        </div>

        <button className="text-sm font-medium text-slate-700 dark:text-blue-400">
          View all
        </button>
      </CardHeader>

      <CardContent className="space-y-3">
        {projects.map((project, index) => (
          <div key={index} className="flex items-start gap-3">
            <div
              className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-lg ${colors[index % colors.length]}`}
            >
              <span className="text-xs text-white">✦</span>
            </div>

            <div>
              <p className="text-sm font-medium leading-5 text-slate-700 dark:text-white/90">
                {project}
              </p>
              <p className="text-xs text-slate-400 dark:text-white/35">
                Work to be done or undertaken
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}