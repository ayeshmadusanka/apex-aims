import type { LucideIcon } from "lucide-react"

type FactCardProps = {
  icon: LucideIcon
  label: string
  value: string
  accessibleValue?: string
  className?: string
  labelClassName?: string
}

export default function FactCard({
  icon: Icon,
  label,
  value,
  accessibleValue,
  className = "",
  labelClassName = "",
}: FactCardProps) {
  return (
    <div className={`grid min-h-20 grid-cols-[2.25rem_minmax(0,1fr)] items-center gap-x-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-3.5 ${className}`}>
      <span className="row-span-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#263f6b] text-white">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </span>
      <dt className={`min-w-0 text-[11px] font-semibold uppercase tracking-wide text-slate-500 sm:text-xs ${labelClassName}`}>
        {label}
      </dt>
      <dd className="col-start-2 mt-0.5 min-w-0 break-words text-sm font-semibold leading-snug text-[#263f6b] sm:text-base">
        {accessibleValue ? (
          <>
            <span aria-hidden="true" className="tabular-nums">{value}</span>
            <span className="sr-only">{accessibleValue}</span>
          </>
        ) : value}
      </dd>
    </div>
  )
}
