import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Lightbulb, TrendingUp, Users, Building2 } from "lucide-react"
import Image from "next/image"

export default function ProjectPillarPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
            <Target className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Project Pillar</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Transforming organizations through strategic consulting and innovative solutions
          </p>
        </div>
      </section>

      {/* Company Description */}
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

      {/* Our Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Our Solutions</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-100">
                <Image
                  src="/images/solution-1.png"
                  alt="Problem-Solving Tools"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 text-center">Problem-Solving Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Advanced methodologies and tools for identifying, analyzing, and solving complex business problems.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-100">
                <Image
                  src="/images/solution-2.png"
                  alt="Product Integration"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 text-center">Product Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Seamless integration of products and systems to optimize workflow and enhance operational efficiency.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-100">
                <Image
                  src="/images/solution-3.png"
                  alt="Process Map and SOP"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 text-center">Process Map and SOP</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Comprehensive process mapping and standard operating procedures for streamlined operations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-100">
                <Image
                  src="/images/solution-4.png"
                  alt="Quality Management Systems"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 text-center">Quality Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Implementation of quality management systems to ensure consistent product and service excellence.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-100">
                <Image
                  src="/images/solution-5.png"
                  alt="Lean Manufacturing"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 text-center">Lean Manufacturing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Lean principles implementation to eliminate waste and maximize value in manufacturing processes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-100">
                <Image
                  src="/images/solution-6.png"
                  alt="Performance Optimization"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 text-center">Performance Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Strategic performance improvement initiatives to enhance productivity and operational efficiency.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-100">
                <Image
                  src="/images/solution-7.png"
                  alt="Training and Development"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 text-center">Training & Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Comprehensive training programs to develop workforce capabilities and leadership skills.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-100">
                <Image
                  src="/images/solution-8.png"
                  alt="Strategic Consulting"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 text-center">Strategic Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Expert strategic consulting services to guide organizational transformation and growth initiatives.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Major Assistance */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Our Major Assistance</h2>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Hirdaramani */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                    <Image
                      src="https://apexinstituteedu.com/wp-content/uploads/2023/01/hirdaramani-logo.jpg"
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

            {/* Tucking Trading Company */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                    <Image
                      src="https://apexinstituteedu.com/wp-content/uploads/2023/01/tudawe-logo.png"
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

            {/* Ru Salu */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                    <Image
                      src="https://apexinstituteedu.com/wp-content/uploads/2023/01/Ru-Salu-Clothing-PVT-LTD-Logo.jpg"
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

      {/* AIMS Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">AIMS Gallery</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white border border-gray-200 overflow-hidden shadow-sm">
              <div className="relative h-64 bg-gray-100">
                <Image
                  src="/placeholder.svg?height=256&width=400"
                  alt="Black Belt Field Visit"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Black Belt Field Visit</h3>
                <p className="text-gray-600">Practical field experience and hands-on learning sessions</p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 overflow-hidden shadow-sm">
              <div className="relative h-64 bg-gray-100">
                <Image
                  src="/placeholder.svg?height=256&width=400"
                  alt="Omegaline Outbound Training Program"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Omegaline Outbound Training Program</h3>
                <p className="text-gray-600">Team building and leadership development activities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Assistance in Leading Companies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Our Assistance in Leading Companies</h2>
            <p className="text-xl text-gray-600">Trusted by industry leaders across various sectors</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {[
                { name: "Leading Manufacturing Company", logo: "https://apexinstituteedu.com/wp-content/uploads/2023/12/1.png" },
                { name: "JB Manufacturing", logo: "https://apexinstituteedu.com/wp-content/uploads/2023/01/jb-logo.jpg" },
                { name: "Midas Safety", logo: "https://apexinstituteedu.com/wp-content/uploads/2023/01/midas-logo.png" },
                { name: "Brandix Lanka Limited", logo: "https://apexinstituteedu.com/wp-content/uploads/2023/01/brandix-logo.png" },
                { name: "Lanwa Holdings", logo: "https://apexinstituteedu.com/wp-content/uploads/2023/01/lanwa-logo.jpg" },
                { name: "Hirdaramani Group", logo: "https://apexinstituteedu.com/wp-content/uploads/2023/01/hirdaramani-logo.jpg" },
                { name: "Undil Lanka", logo: "https://apexinstituteedu.com/wp-content/uploads/2023/01/undil-logo.jpg" },
                { name: "Empire Teas", logo: "https://apexinstituteedu.com/wp-content/uploads/2023/01/empire-teas-logp.jpg" },
                { name: "Renuka Foods", logo: "https://apexinstituteedu.com/wp-content/uploads/2023/01/renuka-logo.jpg" },
                { name: "Ansell Lanka", logo: "https://apexinstituteedu.com/wp-content/uploads/2023/01/ansell-logo.png" },
                { name: "Singer Sri Lanka", logo: "https://apexinstituteedu.com/wp-content/uploads/2023/01/singer-logo.jpg" },
                { name: "Solex Lanka", logo: "https://apexinstituteedu.com/wp-content/uploads/2023/01/solex-logo.jpg" },
                { name: "Benji Limited", logo: "https://apexinstituteedu.com/wp-content/uploads/2023/01/Benji-Ltd-min.png" },
              ].map((company, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-6"
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

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-gray-700">Professional Consulting Services</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">What you are looking for is not on the list?</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Don't worry:</h3>
                  <p className="text-gray-700">Please contact us. We will provide the best solution for you.</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg">Contact us</Button>
                <div className="flex items-center space-x-3 pt-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Trusted by 500+</p>
                    <p className="text-gray-600">Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with AIMS to unlock your organization's full potential through strategic consulting
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
