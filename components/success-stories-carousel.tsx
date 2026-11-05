"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"

const stories = [
  { src: "/images/success-stories/client-1.webp", alt: "AIMS success story featuring Nadeesha Samanmalee" },
  { src: "/images/success-stories/client-2.webp", alt: "AIMS success story featuring J. Savin Niranjana De Silva" },
  { src: "/images/success-stories/client-3.webp", alt: "AIMS success story featuring Mihiri Ranasinghe" },
  { src: "/images/success-stories/client-4.webp", alt: "AIMS success story featuring Samantha Gamage" },
  { src: "/images/success-stories/client-5.webp", alt: "AIMS success story featuring S. P. J. Ranganath" },
  { src: "/images/success-stories/client-6.webp", alt: "AIMS success story featuring Nuwan Thilakshitha" },
  { src: "/images/success-stories/client-7.webp", alt: "AIMS success story featuring Eraj Aponso" },
]

export default function SuccessStoriesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(1)
  const [selectedStory, setSelectedStory] = useState<(typeof stories)[number] | null>(null)
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    const tabletQuery = window.matchMedia("(min-width: 768px)")
    const desktopQuery = window.matchMedia("(min-width: 1024px)")
    const updateVisibleCount = () => {
      setVisibleCount(desktopQuery.matches ? 3 : tabletQuery.matches ? 2 : 1)
    }

    updateVisibleCount()
    tabletQuery.addEventListener("change", updateVisibleCount)
    desktopQuery.addEventListener("change", updateVisibleCount)

    return () => {
      tabletQuery.removeEventListener("change", updateVisibleCount)
      desktopQuery.removeEventListener("change", updateVisibleCount)
    }
  }, [])

  const visibleStories = Array.from({ length: visibleCount }, (_, offset) => {
    const index = (activeIndex + offset) % stories.length
    return { ...stories[index], index }
  })

  const showStory = (index: number) => {
    setActiveIndex((index + stories.length) % stories.length)
  }

  const moveStory = (direction: -1 | 1) => {
    showStory(activeIndex + direction)
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="AIMS success stories"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          moveStory(-1)
        }
        if (event.key === "ArrowRight") {
          event.preventDefault()
          moveStory(1)
        }
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.changedTouches[0]?.clientX ?? null
      }}
      onTouchEnd={(event) => {
        const touch = event.changedTouches[0]
        if (touchStartX.current === null || !touch) {
          touchStartX.current = null
          return
        }
        const distance = touch.clientX - touchStartX.current
        if (Math.abs(distance) > 48) moveStory(distance < 0 ? 1 : -1)
        touchStartX.current = null
      }}
      onTouchCancel={() => {
        touchStartX.current = null
      }}
      className="mx-auto max-w-6xl rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-[#263f6b] focus-visible:ring-offset-4"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visibleStories.map((story) => (
          <figure
            key={story.src}
            role="group"
            aria-roledescription="slide"
            aria-label={`Story ${story.index + 1} of ${stories.length}`}
            className="success-story-appear overflow-hidden rounded-3xl border border-white/90 bg-white/60 p-2.5 shadow-[0_12px_36px_rgba(38,63,107,0.12)] ring-1 ring-[#263f6b]/5 backdrop-blur-xl sm:p-3"
          >
            <button
              type="button"
              onClick={() => setSelectedStory(story)}
              aria-label={`Open ${story.alt}`}
              className="block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-white/80 bg-white text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263f6b]"
            >
              <span className="relative block aspect-square">
                <Image
                  src={story.src}
                  alt={story.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-contain"
                />
              </span>
            </button>
          </figure>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visibleStories.length} of {stories.length} success stories, starting with story {activeIndex + 1}.
      </p>

      <div className="mt-5 flex items-center justify-between gap-1 rounded-2xl border border-white/80 bg-white/65 px-3 py-2.5 shadow-sm backdrop-blur-xl sm:gap-3 sm:px-4">
        <button
          type="button"
          onClick={() => moveStory(-1)}
          aria-label="Previous success story"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white bg-white/80 text-[#263f6b] shadow-sm transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263f6b]"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <div role="group" aria-label="Choose a success story" className="flex min-w-0 items-center justify-center gap-0 sm:gap-1">
          {stories.map((story, index) => (
            <button
              key={story.src}
              type="button"
              onClick={() => showStory(index)}
              aria-label={`Show success story ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className="flex h-8 w-6 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263f6b] sm:w-7"
            >
              <span
                className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "w-6 bg-[#263f6b]" : "w-2 bg-[#263f6b]/30 hover:bg-[#263f6b]/60"}`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => moveStory(1)}
          aria-label="Next success story"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white bg-white/80 text-[#263f6b] shadow-sm transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263f6b]"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <Dialog open={selectedStory !== null} onOpenChange={(open) => !open && setSelectedStory(null)}>
        <DialogContent className="w-fit max-h-[94vh] max-w-[min(96vw,960px)] overflow-visible border-0 bg-transparent p-0 shadow-none sm:rounded-none [&>button:last-child]:right-2 [&>button:last-child]:top-2 [&>button:last-child]:z-10 [&>button:last-child]:flex [&>button:last-child]:size-7 [&>button:last-child]:items-center [&>button:last-child]:justify-center [&>button:last-child]:rounded-full [&>button:last-child]:border [&>button:last-child]:border-white/80 [&>button:last-child]:bg-white [&>button:last-child]:text-[#263f6b] [&>button:last-child]:opacity-100 [&>button:last-child]:shadow-lg [&>button:last-child]:transition-transform [&>button:last-child]:hover:scale-105 [&>button:last-child]:focus:ring-[#263f6b] [&>button:last-child>svg]:size-3.5">
          {selectedStory && (
            <>
              <DialogTitle className="sr-only">{selectedStory.alt}</DialogTitle>
              <DialogDescription className="sr-only">Full-size success story poster.</DialogDescription>
              <Image
                src={selectedStory.src}
                alt={selectedStory.alt}
                width={1080}
                height={1080}
                loading="lazy"
                unoptimized
                className="mx-auto max-h-[88vh] w-auto max-w-full rounded-xl object-contain"
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
