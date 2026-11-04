import Image from "next/image"

const partnerLogos = Array.from({ length: 41 }, (_, index) => ({
  src: `/images/company/company-logo-${100 + index}.webp`,
  alt: `Partner organization ${index + 1}`,
  scale: index === 21 ? "scale-[3.5]" : "",
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
                className="flex h-24 w-44 shrink-0 items-center justify-center px-4 sm:h-28 sm:w-52 sm:px-5 lg:h-32"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={300}
                  height={160}
                  loading="lazy"
                  unoptimized
                  className={`h-full w-full object-contain ${partner.scale}`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
