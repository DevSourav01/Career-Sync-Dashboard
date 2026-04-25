"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

const chartData = [
  { day: "Sat", applications: 4500 },
  { day: "Sun", applications: 3200 },
  { day: "Mon", applications: 1800 },
  { day: "Tue", applications: 4800 },
  { day: "Wed", applications: 2200 },
  { day: "Thu", applications: 1200 },
  { day: "Fri", applications: 2400 },
]

const chartConfig = {
  applications: {
    label: "Applications",
    color: "#7CFF9B",
  },
} satisfies ChartConfig

export default function StatisticsChart() {
  return (
    <Card className="border-slate-200 bg-white text-slate-900 shadow-sm dark:border-white/5 dark:bg-[#1b1d22] dark:text-white dark:shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-2xl">Statistic</CardTitle>

        <div className="flex items-center gap-6 text-sm text-slate-600 dark:text-white/70">
          <button className="flex items-center gap-2 text-slate-900 dark:text-blue-400">
            <span className="h-4 w-4 rounded-full border-2 border-slate-700 ring-2 ring-slate-300 dark:border-blue-500 dark:ring-blue-500/20" />
            Week
          </button>
          <button className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full border border-slate-400 dark:border-blue-500/60" />
            Month
          </button>
          <button className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full border border-slate-400 dark:border-blue-500/60" />
            Year
          </button>
        </div>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-80 w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 20, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              vertical={false}
              stroke="rgba(148,163,184,0.25)"
              strokeDasharray="4 6"
            />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "rgba(100,116,139,0.9)", fontSize: 14 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "rgba(100,116,139,0.9)", fontSize: 14 }}
              ticks={[0, 500, 2000, 4000, 8000]}
            />
            <ChartTooltip
              cursor={{ stroke: "rgba(100,116,139,0.45)", strokeWidth: 2 }}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              type="monotone"
              dataKey="applications"
              stroke="var(--color-applications)"
              strokeWidth={4}
              dot={false}
              activeDot={{
                r: 8,
                fill: "#ffffff",
                stroke: "var(--color-applications)",
                strokeWidth: 4,
              }}
              style={{
                filter: "drop-shadow(0 0 6px rgba(124,255,155,0.45))",
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}