import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Meeting = {
  date: string
  title: string
  time: string
}

type MeetingsProps = {
  meetings: Meeting[]
}

export default function Meetings({ meetings }: MeetingsProps) {
  return (
    <Card className="border-slate-200 bg-white text-slate-900 shadow-sm dark:border-white/5 dark:bg-[#1b1d22] dark:text-white dark:shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-xl">Meetings</CardTitle>
        <button className="rounded-full bg-[#193cb8] px-4 py-1.5 text-sm font-medium text-white">
          + Create new
        </button>
      </CardHeader>

      <CardContent className="space-y-4">
        {meetings.map((meeting, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-col items-center justify-center rounded-lg bg-slate-100 text-xs text-slate-500 dark:bg-white/5 dark:text-white/70">
              <span className="text-[10px] uppercase text-sky-500">Mon</span>
              <span className="font-semibold text-slate-800 dark:text-white">
                {meeting.date}
              </span>
            </div>

            <div className="flex-1">
              <p className="text-xs font-medium text-slate-700 dark:text-white/90">
                {meeting.title}
              </p>
              <p className="mt-1 text-xs text-slate-400 dark:text-white/35">
                {meeting.time}
              </p>
            </div>

            <button className="text-slate-400 dark:text-white/40">⋮</button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}