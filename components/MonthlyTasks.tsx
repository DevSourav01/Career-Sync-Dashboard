import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type MonthlyTasksProps = {
  tasks: string[]
}

export default function MonthlyTasks({ tasks }: MonthlyTasksProps) {
  return (
    <Card className="border-slate-200 bg-white text-slate-900 shadow-sm dark:border-white/5 dark:bg-[#1b1d22] dark:text-white dark:shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-xl">Monthly Tasks</CardTitle>
        <button className="text-sm font-medium text-slate-700 dark:text-blue-400">
          View all
        </button>
      </CardHeader>

      <CardContent className="space-y-3">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-xl bg-slate-50 p-3 dark:bg-white/3"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-lg bg-pink-400/20 text-pink-300">
                ✦
              </div>

              <div>
                <p className="text-xs font-medium text-slate-700 dark:text-white/90">
                  {task}
                </p>
                <p className="text-xs text-slate-400 dark:text-white/35">
                  A piece of work to be done or undertaken
                </p>
              </div>
            </div>

            <div className="flex -space-x-2">
              <div className="h-6 w-6 rounded-full border-2 border-white bg-sky-400 dark:border-[#1b1d22]" />
              <div className="h-6 w-6 rounded-full border-2 border-white bg-orange-400 dark:border-[#1b1d22]" />
              <div className="h-6 w-6 rounded-full border-2 border-white bg-lime-400 dark:border-[#1b1d22]" />
              <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-[10px] text-slate-700 dark:border-[#1b1d22] dark:bg-white/10 dark:text-white">
                +6
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}