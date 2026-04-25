"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { Cell, Pie, PieChart } from "recharts"

const progressData = [
  { name: "Total Projects", value: 75, color: "#4ade80" },
  { name: "Inprogress Task", value: 48, color: "#d8a7ff" },
  { name: "Upcoming Project", value: 27, color: "#ff8b8b" },
]

const chartConfig = {
  total: {
    label: "Progress",
    color: "#4ade80",
  },
} satisfies ChartConfig

export default function OverallProgress() {
  return (
    <Card className="border-slate-200 bg-white text-slate-900 shadow-sm dark:border-white/5 dark:bg-[#1b1d22] dark:text-white dark:shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-xl">Overall Progress</CardTitle>
        <button className="text-sm text-slate-600 dark:text-white/60">
          See All
        </button>
      </CardHeader>

      <CardContent className="relative flex items-center justify-between gap-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-white/80">
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <span>75 Total Projects</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-white/80">
            <span className="h-2.5 w-2.5 rounded-full bg-purple-300" />
            <span>48 Inprogress Task</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-white/80">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span>27 Upcoming Project</span>
          </div>
        </div>

        <div className="relative">
          <ChartContainer config={chartConfig} className="h-35.5 w-35.5">
            <PieChart>
              <Pie
                data={progressData}
                dataKey="value"
                nameKey="name"
                innerRadius={42}
                outerRadius={62}
                stroke="none"
                paddingAngle={2}
              >
                {progressData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-semibold">85%</span>
            <span className="text-[10px] text-slate-400 dark:text-white/45">
              Complete
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}