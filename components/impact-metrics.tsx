"use client"

import { Award, BookOpen, Globe, GraduationCap, UserCheck } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import FactCard from "@/components/fact-card"

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
  const metricsRef = useRef<HTMLDListElement>(null)
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
    <dl
      ref={metricsRef}
      className="mx-auto grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
    >
      {metrics.map(({ value, target, suffix = "", label, icon: Icon }) => {
        const currentValue = target === undefined
          ? value
          : `${Math.round(target * progress).toLocaleString("en-US")}${suffix}`

        return (
          <FactCard
            key={label}
            icon={Icon}
            label={label}
            value={currentValue}
            accessibleValue={value}
            className="home-metric"
            labelClassName="lg:text-[10px] lg:tracking-normal"
          />
        )
      })}
    </dl>
  )
}
