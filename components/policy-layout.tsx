import type { ReactNode } from "react"
import PageHero from "@/components/page-hero"

export type PolicySection = {
  title: string
  content: ReactNode
}

type PolicyLayoutProps = {
  title: string
  closingName: string
  sections: PolicySection[]
}

export default function PolicyLayout({ title, closingName, sections }: PolicyLayoutProps) {
  return (
    <div className="bg-white text-slate-900">
      <PageHero title={title} />
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <header className="mb-8 border-b border-slate-200 pb-7 sm:mb-10">
          <p className="text-lg font-semibold text-slate-900 sm:text-xl">Apex Institute of Management Services (AIMS)</p>
        </header>

        <div className="space-y-8 text-slate-600 [&_address]:not-italic [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-slate-900 [&_li]:pl-1 [&_li]:leading-7 [&_p]:text-base [&_p]:leading-7 [&_p+p]:mt-3 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
          {sections.map(({ title: sectionTitle, content }, index) => (
            <section
              key={sectionTitle}
              className={index === sections.length - 1 ? "pb-0" : "border-b border-slate-200 pb-8"}
            >
              <h2 className="mb-3 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                {sectionTitle}
              </h2>
              {content}
            </section>
          ))}
          <footer className="border-t border-slate-200 pt-6 text-sm font-semibold leading-6 text-slate-900">
            {closingName}<br />
            All Rights Reserved.
          </footer>
        </div>
      </article>
    </div>
  )
}
