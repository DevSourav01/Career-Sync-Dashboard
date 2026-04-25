import { Card, CardContent } from "@/components/ui/card"

type StateCardProps = {
  title: string
  number: number
  percent: number
  color: string
}

export default function StateCard({
  title,
  number,
  percent,
  color,
}: StateCardProps) {
  const radius = 26
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset =
    circumference - (percent / 100) * circumference

  return (
    <Card className="border-slate-200 bg-white text-slate-900 shadow-sm dark:border-white/5 dark:bg-[#1b1d22] dark:text-white dark:shadow-lg">
      <CardContent className="flex items-center justify-between p-5">
        <div>
          <p className="text-sm whitespace-nowrap font-medium text-slate-500 dark:text-white/80">
            {title}
          </p>
          <h3 className="mt-2 text-3xl font-semibold tracking-tight">
            {number}
          </h3>

          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-white/70">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-xs dark:bg-white/10">
              ✦
            </span>
            <span>22% Inc</span>
          </div>
        </div>

        <div className="relative flex h-20 w-20 items-center justify-center">
          <svg className="-rotate-90" width="80" height="80">
            <circle
              cx="40"
              cy="40"
              r={radius}
              stroke="rgba(100,116,139,0.18)"
              strokeWidth="7"
              fill="none"
            />
            <circle
              cx="40"
              cy="40"
              r={radius}
              stroke={color}
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>
          <span className="absolute text-sm font-semibold">{percent}%</span>
        </div>
      </CardContent>
    </Card>
  )
}