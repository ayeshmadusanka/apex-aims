import type { LucideIcon } from "lucide-react"

type FactCardProps = {
  icon: LucideIcon
  label: string
  value: string
}

export default function FactCard({ icon: Icon, label, value }: FactCardProps) {
  return (
    <div className="flex min-h-20 items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-3.5">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#263f6b] text-white">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <dt className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 sm:text-xs">
          {label}
        </dt>
        <dd className="mt-0.5 break-words text-sm font-semibold leading-snug text-[#263f6b] sm:text-base">
          {value}
        </dd>
      </div>
    </div>
  )
}
