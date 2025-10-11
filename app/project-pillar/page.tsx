import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Lightbulb, TrendingUp, Users, Building2 } from "lucide-react"
import Image from "next/image"

export default function ProjectPillarPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 overflow-hidden" style={{backgroundImage: 'url("/images/hero/breadcrumb.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="mx-auto w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
            <Target className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Project Pillar</h1>
          <p className="text-lg lg:text-xl text-white/95 max-w-4xl mx-auto leading-relaxed">
            Transforming organizations through strategic consulting and innovative solutions
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-gray-700">
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Our Solutions</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {[
              {
                image: "/images/project-pillar/Our Solutions/1.png",
                title: "Process Excellence",
                description: "Streamline operations with advanced process optimization methodologies"
              },
              {
                image: "/images/project-pillar/Our Solutions/2.png",
                title: "Quality Management",
                description: "Implement robust quality systems for consistent excellence"
              },
              {
                image: "/images/project-pillar/Our Solutions/3.png",
                title: "Lean Transformation",
                description: "Eliminate waste and maximize value through lean principles"
              },
              {
                image: "/images/project-pillar/Our Solutions/4.png",
                title: "Performance Management",
                description: "Drive productivity with strategic performance optimization"
              },
              {
                image: "/images/project-pillar/Our Solutions/5.png",
                title: "Business Analysis",
                description: "Data-driven insights for informed decision making"
              },
              {
                image: "/images/project-pillar/Our Solutions/6.png",
                title: "Supply Chain Optimization",
                description: "Enhance efficiency across your entire supply chain"
              },
              {
                image: "/images/project-pillar/Our Solutions/7.png",
                title: "Strategic Planning",
                description: "Develop comprehensive strategies for sustainable growth"
              },
              {
                image: "/images/project-pillar/Our Solutions/8.png",
                title: "Operational Excellence",
                description: "Achieve peak performance through operational improvements"
              },
              {
                image: "/images/project-pillar/Our Solutions/9.png",
                title: "Change Management",
                description: "Successfully navigate organizational transformations"
              },
              {
                image: "/images/project-pillar/Our Solutions/10.png",
                title: "Business Process Reengineering",
                description: "Redesign processes for maximum efficiency and effectiveness"
              },
              {
                image: "/images/project-pillar/Our Solutions/11.png",
                title: "Continuous Improvement",
                description: "Foster a culture of ongoing enhancement and innovation"
              },
              {
                image: "/images/project-pillar/Our Solutions/12.png",
                title: "Project Management",
                description: "Execute projects with precision and proven methodologies"
              },
              {
                image: "/images/project-pillar/Our Solutions/13.png",
                title: "Leadership Development",
                description: "Build strong leaders to drive organizational success"
              },
              {
                image: "/images/project-pillar/Our Solutions/14.png",
                title: "Digital Transformation",
                description: "Leverage technology for competitive advantage"
              },
              {
                image: "/images/project-pillar/Our Solutions/15.png",
                title: "Risk Management",
                description: "Identify and mitigate risks for business resilience"
              }
            ].map((solution, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-gray-900 text-center font-semibold group-hover:text-blue-600 transition-colors duration-300">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 text-center text-sm leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Our Major Assistance</h2>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                    <Image
                      src="/images/project-pillar/Our Major Assistance/Hidramani Logo.png"
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
                <p className="text-gray-700 leading-relaxed">
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
                      src="/images/project-pillar/Our Major Assistance/TTCL .png"
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
                <p className="text-gray-700 leading-relaxed">
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
                      src="/images/project-pillar/Our Major Assistance/Rusalu Logo.png"
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
                <p className="text-gray-700 leading-relaxed">
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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Our Assistance in Leading Companies</h2>
            <p className="text-xl text-gray-600">Trusted by industry leaders across various sectors</p>
          </div>

        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
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
                { name: "Company 121", logo: "/images/company/company-logo-121.png" },
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
              ].map((company, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={120}
                    height={80}
                    className="object-contain max-w-full max-h-full opacity-70 hover:opacity-100 transition-opacity duration-300"
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
