import Image from "next/image"
import { companyLogos } from "@/lib/company-logos"

type CompanyLogoGridProps = {
  label?: string
}

export default function CompanyLogoGrid({ label = "Partner organizations" }: CompanyLogoGridProps) {
  return (
    <ul
      aria-label={label}
      className="mx-auto grid max-w-6xl grid-cols-3 items-center gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8"
    >
      {companyLogos.map((company) => (
        <li
          key={company.src}
          className="flex h-16 items-center justify-center rounded-xl border border-slate-200 bg-white p-1.5 transition-shadow duration-200 hover:shadow-sm"
        >
          <div className="relative h-10 w-full max-w-28">
            <Image
              src={company.src}
              alt={company.name}
              fill
              sizes="112px"
              loading="lazy"
              unoptimized
              className="rounded-sm object-contain"
            />
          </div>
        </li>
      ))}
    </ul>
  )
}
