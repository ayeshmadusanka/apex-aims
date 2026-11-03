import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

type SectionLabelProps = {
  children: ReactNode
  icon: LucideIcon
}

export default function SectionLabel({ children, icon: Icon }: SectionLabelProps) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#263f6b] sm:text-sm">
      <Icon className="h-4 w-4" aria-hidden="true" />
      {children}
    </div>
  )
}
