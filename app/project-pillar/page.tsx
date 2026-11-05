import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BriefcaseBusiness, Building2, Handshake } from "lucide-react"
import Image from "next/image"
import { PillarHero } from "@/components/pillar-hero";
import SectionLabel from "@/components/section-label"
import CompanyLogoGrid from "@/components/company-logo-grid"

export default function ProjectPillarPage() {
  return (
    <div className="min-h-screen bg-white">
      <PillarHero
        image="/images/project-pillar/header.webp"
        alt="AIMS Professional Services - Project Pillar"
        title="Project Pillar"
      />

      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-8 max-w-3xl text-center">
            <SectionLabel icon={BriefcaseBusiness}>Organization support</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Practical support for <span className="text-[#263f6b]">better operations</span>
            </h2>
          </header>
          <div className="mx-auto max-w-3xl">
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              AIMS is a premier management consulting firm that endeavors to augment the efficiency, effectiveness, and
              profitability of organizations. We facilitate the implementation of cutting-edge business operation
              strategies. These interventions are implemented by our team of highly qualified and experienced pool of
              consultants. With a proven track record of executing major consulting assignments across various
              industries and geographies, AIMS has earned the trust and confidence of more than 15 organizations since
              its inception.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <SectionLabel icon={Building2}>Training & consulting</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Our <span className="text-[#263f6b]">Solutions</span>
            </h2>
          </header>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                image: "/images/project-pillar/solutions/supervisors-training-development.webp",
                title: "Supervisor's Training & Development",
                description: "Develop leadership skills for supervisors, line leaders, and team members"
              },
              {
                image: "/images/project-pillar/solutions/work-study-fundamentals.webp",
                title: "Basic Training for Fundamental in Work Study",
                description: "Comprehensive work study fundamentals for TL/GL, supervisors, and work study officers"
              },
              {
                image: "/images/project-pillar/solutions/practical-work-study.webp",
                title: "Practical Approach of Work Study",
                description: "Hands-on work study methodologies for supervisors and work study officers"
              },
              {
                image: "/images/project-pillar/solutions/organizational-planning-controlling.webp",
                title: "Oraganizational Planning & Controlling",
                description: "Essential merchandising skills for trainee and junior merchandisers"
              },
              {
                image: "/images/project-pillar/solutions/industrial-engineering-approaches.webp",
                title: "What is Industrial Engineering & Its Approaches",
                description: "Understanding IE concepts and approaches for work study officers and executives"
              },
              {
                image: "/images/project-pillar/solutions/merchandising-practice.webp",
                title: "How to Perform in Merchandising",
                description: "Essential merchandising skills for trainee and junior merchandisers"
              },
              {
                image: "/images/project-pillar/solutions/quality-management.webp",
                title: "Quality Management",
                description: "Quality management systems for in-line QC, supervisors, and quality assistants"
              },
              {
                image: "/images/project-pillar/solutions/garment-training-costing.webp",
                title: "Garment Training Costing Practical Program",
                description: "Practical garment costing training program for all industrial engineers"
              },
              {
                image: "/images/project-pillar/solutions/apparel-production-management.webp",
                title: "Apparel Production Management",
                description: "Production management skills for supervisors, line leaders, and team members"
              },
              {
                image: "/images/project-pillar/solutions/ergonomics-work-design.webp",
                title: "Ergonomics & Work Design",
                description: "Ergonomic principles and work design for leaders and team members"
              },
              {
                image: "/images/project-pillar/solutions/quality-control-system.webp",
                title: "Quality Controlling System",
                description: "Quality control systems for in-line QC, supervisors, and quality assistants"
              },
              {
                image: "/images/project-pillar/solutions/5s-implementation.webp",
                title: "5S Implementation",
                description: "Implement 5S methodology across all staff for workplace organization"
              },
              {
                image: "/images/project-pillar/solutions/process-mapping-value-stream-mapping.webp",
                title: "Process Mapping & Value Stream Mapping",
                description: "Process and value stream mapping for management and executive staff"
              },
              {
                image: "/images/project-pillar/solutions/standardized-work-sop-process-analysis.webp",
                title: "STW, SOP & Process Analyzing",
                description: "Standardized work, SOP development and process analysis techniques"
              },
              {
                image: "/images/project-pillar/solutions/work-life-personal-life-management.webp",
                title: "Management Skills for Managing Both Work Life & Personal Life",
                description: "Balance work and personal life through effective management skills for all staff"
              }
            ].map((solution) => (
              <Card key={solution.image} className="group overflow-hidden border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="overflow-hidden bg-white">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    width={800}
                    height={520}
                    sizes="(min-width: 1280px) 368px, (min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                    className="h-auto w-full object-contain"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-left text-lg font-semibold leading-snug text-slate-900">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-left text-sm leading-relaxed text-slate-600">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <SectionLabel icon={Handshake}>Selected Projects</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Our Project <span className="text-[#263f6b]">Contributions</span>
            </h2>
          </header>

          <div className="mx-auto max-w-6xl space-y-8">
            <Card className="border-slate-200 bg-white shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white">
                    <Image
                      src="/images/project-pillar/major-assistance/hirdaramani-logo.webp"
                      alt="Hirdaramani Logo"
                      width={64}
                      height={64}
                      className="rounded-sm object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <CardTitle className="text-xl text-slate-900">Hirdaramani (Pvt) Ltd</CardTitle>
                    <p className="text-sm font-medium text-[#263f6b]">Organizational Transformation Project</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="w-full text-pretty text-base leading-7 text-slate-600">
                  Hirdaramani (Pvt) Ltd is one of the major company in the apparel field. This was a project on
                  Organizational Transformation. Therefore, we organized some programs to Transfer Lean knowledge &
                  Skills to leadership team. It included training the leadership team, application of lean through
                  mapping, Total Quality Management (TQM), Total Productive Maintenance (TPM) and introducing the six
                  sigma of Lean with basic lean and advanced lean concepts. A 3 month project was conducted with the
                  Management team.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white">
                    <Image
                      src="/images/project-pillar/major-assistance/ttcl-logo.webp"
                      alt="Tucking Trading Company Logo"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <CardTitle className="text-xl text-slate-900">
                      Tucking Trading Company Limited (TTCL) Pvt Ltd
                    </CardTitle>
                    <p className="text-sm font-medium text-[#263f6b]">Sales Process Standardization</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="w-full text-pretty text-base leading-7 text-slate-600">
                  In trading industry, Tucking Trading Company Limited (TTCL) Pvt Ltd is one of the leading in the
                  field. The project of TTCL was Reengineering the sales process to create a standardized sales process.
                  With the scope of establishing a standardized sales process, data collection and creating a
                  standardization, we conducted several programs such as Lean knowledge & Skills transfer, Business
                  Process Mapping (BPM), Business Process Analysis (BPA), identification & elimination of wastes in the
                  system, setting up of quality control system, establishing periodic review mechanism.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white">
                    <Image
                      src="/images/project-pillar/major-assistance/ru-salu-logo.webp"
                      alt="Ru Salu Clothing Logo"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <CardTitle className="text-xl text-slate-900">Ru Salu (Pvt) Ltd</CardTitle>
                    <p className="text-sm font-medium text-[#263f6b]">Quality Control System Implementation</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="w-full text-pretty text-base leading-7 text-slate-600">
                  These days we are having an ongoing project with Ru Salu (Pvt) Ltd. This is also a company in apparel
                  clothing. The project we are conducting is the quality control system and also the delivery system by
                  strengthening quality gates. As the scope, we recognized re-engineering the quality control system,
                  re-structuring the quality control function and up-grading the key quality roles are imminent steps
                  that should be taken. Therefore, with the theories, we are transferring the Lean knowledge, Business
                  Process Mapping (BPM) with the team, Manager of the team, establishing daily management system and
                  creating & implementing the quality control database will be associated with the management team
                  within 4 months.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <SectionLabel icon={Building2}>Our Partners</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Our Assistance to <span className="text-[#263f6b]">Leading Companies</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Trusted by industry leaders across various sectors
            </p>
          </header>

          <CompanyLogoGrid label="Organizations supported by AIMS" />
        </div>
      </section>
    </div>
  )
}
