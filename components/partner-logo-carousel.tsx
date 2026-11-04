import Image from "next/image"

const partnerLogoNumbers = [
  ...Array.from({ length: 21 }, (_, index) => 100 + index),
  ...Array.from({ length: 19 }, (_, index) => 122 + index),
]

const partnerLogos = partnerLogoNumbers.map((number, index) => ({
  src: `/images/company/company-logo-${number}.webp`,
  alt: `Partner organization ${index + 1}`,
}))

export default function PartnerLogoCarousel() {
  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Partner organizations"
      tabIndex={0}
      className="partner-logo-viewport overflow-hidden py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263f6b] focus-visible:ring-offset-2"
    >
      <div className="partner-logo-track flex w-max">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1 ? true : undefined}
            className="flex shrink-0 gap-3 pr-3 sm:gap-4 sm:pr-4"
          >
            {partnerLogos.map((partner) => (
              <div
                key={`${copy}-${partner.src}`}
                className="flex h-24 w-44 shrink-0 items-center justify-center sm:h-28 sm:w-52 lg:h-32"
              >
                <div className="relative h-full w-full px-4 sm:px-5">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    fill
                    sizes="(min-width: 640px) 168px, 144px"
                    loading="lazy"
                    unoptimized
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
