"use client"

import { Award, BookOpen, Globe, GraduationCap, UserCheck } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const metrics: Array<{
  value: string
  label: string
  icon: LucideIcon
  target?: number
  suffix?: string
}> = [
  { value: "15+", target: 15, suffix: "+", label: "Specialised courses", icon: BookOpen },
  { value: "10+", target: 10, suffix: "+", label: "Expert lecturers", icon: UserCheck },
  { value: "5,000+", target: 5000, suffix: "+", label: "Students enrolled", icon: GraduationCap },
  { value: "14+", target: 14, suffix: "+", label: "Countries reached", icon: Globe },
  { value: "ISO 9001:2015", label: "Quality certified", icon: Award },
]

export default function ImpactMetrics() {
  const metricsRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const element = metricsRef.current
    if (!element) return

    const showFinalValues = () => setProgress(1)
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      showFinalValues()
      return
    }

    let animationFrame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        observer.disconnect()
        const startTime = performance.now()
        const animate = (time: number) => {
          const amount = Math.min((time - startTime) / 1200, 1)
          setProgress(1 - Math.pow(1 - amount, 3))
          if (amount < 1) animationFrame = window.requestAnimationFrame(animate)
        }

        animationFrame = window.requestAnimationFrame(animate)
      },
      { threshold: 0.3 },
    )

    observer.observe(element)
    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div
      ref={metricsRef}
      className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-3 lg:grid-cols-5"
    >
      {metrics.map(({ value, target, suffix = "", label, icon: Icon }) => {
        const currentValue = target === undefined
          ? value
          : `${Math.round(target * progress).toLocaleString("en-US")}${suffix}`

        return (
          <div
            key={label}
            className="home-metric group flex min-h-36 flex-col items-center justify-center bg-white px-3 py-6 text-center sm:min-h-40 sm:px-4"
          >
            <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#eef3f9] text-[#263f6b] transition-colors duration-300 group-hover:bg-[#263f6b] group-hover:text-white">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span aria-hidden="true" className={`tabular-nums font-semibold tracking-tight text-slate-900 ${value.length > 8 ? "text-lg sm:text-xl" : "text-2xl sm:text-3xl"}`}>
              {currentValue}
            </span>
            <span className="sr-only">{value}</span>
            <span className="mt-1.5 text-xs font-medium text-slate-600 sm:text-sm">{label}</span>
          </div>
        )
      })}
    </div>
  )
}
