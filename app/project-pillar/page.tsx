import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { PillarHero } from "@/components/pillar-hero";

export default function ProjectPillarPage() {
  return (
    <div className="min-h-screen bg-white">
      <PillarHero
        image="/images/project-pillar/header.webp"
        alt="AIMS Professional Services - Project Pillar"
        title="Project Pillar"
      />

      <section className="bg-white border-t border-slate-200 py-14 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <p className="text-base leading-8 text-gray-700 sm:text-lg">
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

      <section className="bg-white py-14 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Our Solutions</h2>
          </div>

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
              <Card key={solution.image} className="group overflow-hidden border border-gray-200 bg-white transition-shadow duration-200 hover:shadow-lg">
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-left text-lg font-semibold leading-snug text-gray-900 transition-colors duration-200 group-hover:text-blue-700">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-left text-sm leading-relaxed text-gray-600">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-slate-200 py-14 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Our Major Assistance</h2>
          </div>

          <div className="mx-auto max-w-6xl space-y-8">
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                    <Image
                      src="/images/project-pillar/major-assistance/hirdaramani-logo.webp"
                      alt="Hirdaramani Logo"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">Hirdaramani (Pvt) Ltd</CardTitle>
                    <p className="text-blue-600">Organizational Transformation Project</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="max-w-4xl text-base leading-7 text-gray-700">
                  Hirdaramani (Pvt) Ltd is one of the major company in the apparel field. This was a project on
                  Organizational Transformation. Therefore, we organized some programs to Transfer Lean knowledge &
                  Skills to leadership team. It included training the leadership team, application of lean through
                  mapping, Total Quality Management (TQM), Total Productive Maintenance (TPM) and introducing the six
                  sigma of Lean with basic lean and advanced lean concepts. A 3 month project was conducted with the
                  Management team.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                    <Image
                      src="/images/project-pillar/major-assistance/ttcl-logo.webp"
                      alt="Tucking Trading Company Logo"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">
                      Tucking Trading Company Limited (TTCL) Pvt Ltd
                    </CardTitle>
                    <p className="text-red-600">Sales Process Standardization</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="max-w-4xl text-base leading-7 text-gray-700">
                  In trading industry, Tucking Trading Company Limited (TTCL) Pvt Ltd is one of the leading in the
                  field. The project of TTCL was Reengineering the sales process to create a standardized sales process.
                  With the scope of establishing a standardized sales process, data collection and creating a
                  standardization, we conducted several programs such as Lean knowledge & Skills transfer, Business
                  Process Mapping (BPM), Business Process Analysis (BPA), identification & elimination of wastes in the
                  system, setting up of quality control system, establishing periodic review mechanism.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                    <Image
                      src="/images/project-pillar/major-assistance/ru-salu-logo.webp"
                      alt="Ru Salu Clothing Logo"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">Ru Salu (Pvt) Ltd</CardTitle>
                    <p className="text-green-600">Quality Control System Implementation</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="max-w-4xl text-base leading-7 text-gray-700">
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

      <section className="bg-white border-t border-slate-200 py-14 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Our Assistance in Leading Companies</h2>
            <p className="text-xl text-gray-600">Trusted by industry leaders across various sectors</p>
          </div>

        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
              {[
                { name: "Company 100", logo: "/images/company/company-logo-100.png" },
                { name: "Company 101", logo: "/images/company/company-logo-101.png" },
                { name: "Company 102", logo: "/images/company/company-logo-102.png" },
                { name: "Company 103", logo: "/images/company/company-logo-103.png" },
                { name: "Company 104", logo: "/images/company/company-logo-104.png" },
                { name: "Company 105", logo: "/images/company/company-logo-105.png" },
                { name: "Company 106", logo: "/images/company/company-logo-106.png" },
                { name: "Company 107", logo: "/images/company/company-logo-107.png" },
                { name: "Company 108", logo: "/images/company/company-logo-108.png" },
                { name: "Company 109", logo: "/images/company/company-logo-109.png" },
                { name: "Company 110", logo: "/images/company/company-logo-110.png" },
                { name: "Company 111", logo: "/images/company/company-logo-111.png" },
                { name: "Company 112", logo: "/images/company/company-logo-112.png" },
                { name: "Company 113", logo: "/images/company/company-logo-113.png" },
                { name: "Company 114", logo: "/images/company/company-logo-114.png" },
                { name: "Company 115", logo: "/images/company/company-logo-115.png" },
                { name: "Company 116", logo: "/images/company/company-logo-116.png" },
                { name: "Company 117", logo: "/images/company/company-logo-117.png" },
                { name: "Company 118", logo: "/images/company/company-logo-118.png" },
                { name: "Company 119", logo: "/images/company/company-logo-119.png" },
                { name: "Company 120", logo: "/images/company/company-logo-120.png" },                
                { name: "Company 122", logo: "/images/company/company-logo-122.png" },
                { name: "Company 123", logo: "/images/company/company-logo-123.png" },
                { name: "Company 124", logo: "/images/company/company-logo-124.png" },
                { name: "Company 125", logo: "/images/company/company-logo-125.png" },
                { name: "Company 126", logo: "/images/company/company-logo-126.png" },
                { name: "Company 127", logo: "/images/company/company-logo-127.png" },
                { name: "Company 128", logo: "/images/company/company-logo-128.png" },
                { name: "Company 129", logo: "/images/company/company-logo-129.png" },
                { name: "Company 130", logo: "/images/company/company-logo-130.png" },
                { name: "Company 131", logo: "/images/company/company-logo-131.png" },
                { name: "Company 132", logo: "/images/company/company-logo-132.png" },
                { name: "Company 133", logo: "/images/company/company-logo-133.png" },
                { name: "Company 134", logo: "/images/company/company-logo-134.png" },
                { name: "Company 135", logo: "/images/company/company-logo-135.png" },
                { name: "Company 136", logo: "/images/company/company-logo-136.png" },
                { name: "Company 137", logo: "/images/company/company-logo-137.png" },
                { name: "Company 138", logo: "/images/company/company-logo-138.png" },
                { name: "Company 139", logo: "/images/company/company-logo-139.png" },
                { name: "Company 140", logo: "/images/company/company-logo-140.png" },
              ].map((company) => (
                <div
                  key={company.logo}
                  className="flex h-24 items-center justify-center rounded-xl border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md"
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={120}
                    height={80}
                    sizes="120px"
                    className="max-h-full max-w-full object-contain opacity-75 transition-opacity duration-200 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
