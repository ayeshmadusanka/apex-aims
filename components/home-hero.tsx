"use client"

import { Pause, Play } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const slides = [
  { image: "/images/hero/1.webp", title: "Join our programs and shape your career" },
  { image: "/images/hero/2.webp", title: "Discover learning without limits" },
  { image: "/images/hero/3.webp", title: "Committed to global standards" },
  { image: "/images/hero/4.webp", title: "Learning that moves careers forward" },
]

export default function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const slide = slides[activeSlide]
  const rotationPaused = isPaused || prefersReducedMotion

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updateMotionPreference = () => setPrefersReducedMotion(motionPreference.matches)

    updateMotionPreference()
    motionPreference.addEventListener("change", updateMotionPreference)

    return () => motionPreference.removeEventListener("change", updateMotionPreference)
  }, [])

  useEffect(() => {
    if (rotationPaused) return

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 7000)

    return () => window.clearInterval(timer)
  }, [rotationPaused])

  return (
    <section id="hero" aria-label="Featured AIMS programmes" className="bg-white">
      <div className="relative aspect-[16/5] w-full overflow-hidden bg-white">
        <Image
          key={slide.image}
          src={slide.image}
          alt={slide.title}
          fill
          preload={activeSlide === 0}
          sizes="100vw"
          className="object-contain"
        />
        <div
          role="group"
          aria-label="Hero slide controls"
          className="absolute inset-x-0 bottom-1.5 z-10 flex justify-center px-2 sm:bottom-3"
        >
          <div className="flex items-center gap-1 rounded-full border border-white/45 bg-[#263f6b]/90 p-1 shadow-md backdrop-blur-xl sm:gap-1.5 sm:p-1.5">
            <button
              type="button"
              onClick={() => setIsPaused((paused) => !paused)}
              aria-label={
                prefersReducedMotion
                  ? "Automatic slide rotation is disabled by your motion preference"
                  : isPaused
                    ? "Resume hero slides"
                    : "Pause hero slides"
              }
              aria-pressed={rotationPaused}
              disabled={prefersReducedMotion}
              className="flex h-7 w-7 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#263f6b] disabled:cursor-not-allowed disabled:opacity-60 sm:h-8 sm:w-8"
            >
              {rotationPaused ? <Play className="h-3.5 w-3.5" aria-hidden="true" /> : <Pause className="h-3.5 w-3.5" aria-hidden="true" />}
            </button>
            <span aria-hidden="true" className="mx-0.5 h-5 w-px bg-white/30" />
            {slides.map((item, index) => (
              <button
                key={item.image}
                type="button"
                aria-label={`Show slide ${index + 1}: ${item.title}`}
                aria-current={index === activeSlide ? "true" : undefined}
                onClick={() => setActiveSlide(index)}
                className="group flex h-7 w-7 items-center justify-center rounded-full border border-white/35 bg-white/10 transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#263f6b] sm:h-8 sm:w-8"
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full transition-all sm:h-2 sm:w-2 ${
                    index === activeSlide ? "bg-white opacity-100" : "bg-white opacity-55 group-hover:opacity-90"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
