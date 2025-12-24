import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function AcademicPillarPage() {

  return (
    <div className="min-h-screen bg-white">
      <section className="relative w-full flex flex-col items-center justify-center overflow-hidden h-[150px] md:min-h-[200px] md:h-[40vh] md:max-h-[300px] bg-black">
        <div className="relative w-full aspect-video md:aspect-auto md:h-full overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/images/hero/breadcrumb.png"
              alt="AIMS Professional Services - Academic Pillar"
              fill
              className="object-cover opacity-80"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-[#0056B3]/50 to-black/50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container mx-auto px-4 flex items-center justify-center text-center">
                <h1 className="text-4xl lg:text-5xl font-bold text-white">Academic Pillar</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-gray-700">
              Join the Academic Pillar of AIMS and kickstart your career in the
              manufacturing industry! Our mission is to help professionals and
              school leavers smoothly transition into this exciting field by
              immersing them in the working environment. With our expert
              guidance and top-notch training, we'll equip you with the skills
              and knowledge you need to thrive as a responsible professional.
              And if you're already working in manufacturing and seeking career
              growth, we offer a range of Certificate and Diploma Programs to
              help you develop your competencies and advance your career. Take
              the first step towards your dream career with AIMS today!
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Our Programs
            </h2>
          </div>

          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="certificate" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full gap-4 mb-20 md:mb-16 bg-transparent">
                <TabsTrigger
                  value="certificate"
                  className="px-4 py-3 text-sm font-medium rounded-lg bg-gray-100 text-gray-700 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Certificate
                </TabsTrigger>
                <TabsTrigger
                  value="university"
                  className="px-4 py-3 text-sm font-medium rounded-lg bg-gray-100 text-gray-700 data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  University
                </TabsTrigger>
                <TabsTrigger
                  value="diploma"
                  className="px-4 py-3 text-sm font-medium rounded-lg bg-gray-100 text-gray-700 data-[state=active]:bg-red-600 data-[state=active]:text-white"
                >
                  Diploma
                </TabsTrigger>
                <TabsTrigger
                  value="lean"
                  className="px-4 py-3 text-sm font-medium rounded-lg bg-gray-100 text-gray-700 data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  Lean
                </TabsTrigger>
              </TabsList>

              <TabsContent value="certificate" className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {[
                    { title: "Certificate in Work Study", image: "/images/academic-pillar/Certificate Courses/certificate in work study.png", duration: "12 weeks", description: "Comprehensive training in work measurement and method study techniques" },
                    { title: "Certificate in Merchandising", image: "/images/academic-pillar/Certificate Courses/certificate in merchendising.png", duration: "10 weeks", description: "Specialized training in retail merchandising and product management" },
                    { title: "Certificate in Industrial Engineering", image: "/images/academic-pillar/Certificate Courses/certificate in industrial engineering.png", duration: "6 months", description: "Core industrial engineering principles and optimization techniques" },
                    { title: "Advanced Certificate in Apparel Production Management", image: "/images/academic-pillar/Certificate Courses/advanced certificate in apparel production management.png", duration: "3 months", description: "Advanced apparel production and operational management" },
                    { title: "Advanced Certificate in Organization Planning and Controlling", image: "/images/academic-pillar/Certificate Courses/advanced certificate in organization planning and controlling.png", duration: "18 weeks", description: "Strategic planning and organizational control systems" },
                    { title: "Certified PMTS & Costing Practitioner", image: "/images/academic-pillar/Certificate Courses/certified PMTS & Costing Practitioner.png", duration: "50 hours", description: "Predetermined motion time systems and accurate costing methods" },
                    { title: "Quality Assurance Management", image: "/images/academic-pillar/Certificate Courses/quality assurance management.png", duration: "3 months", description: "Quality systems, auditing, and continuous improvement" },
                    { title: "Certified Lean White Belt", image: "/images/academic-pillar/Certificate Courses/certified lean white belt.png", duration: "4 weeks", description: "Foundation level lean principles and basic improvement tools" },
                    { title: "Certified Lean Yellow Belt Practitioner", image: "/images/academic-pillar/Certificate Courses/certified lean yellow belt practitioner.png", duration: "8 weeks", description: "Foundation lean certification with practical application" },
                    { title: "Certified Lean Green Belt", image: "/images/academic-pillar/Certificate Courses/certified lean green belt.png", duration: "12 weeks", description: "Intermediate lean practitioner with project leadership skills" },
                    { title: "Certified Lean Black Belt Practitioner", image: "/images/academic-pillar/Certificate Courses/certified Lean Black belt practitioner.png", duration: "16 weeks", description: "Advanced lean expert with change management capabilities" },
                    { title: "Diploma in Industrial Engineering", image: "/images/academic-pillar/Certificate Courses/diploma in industrial engineering.png", duration: "56 weeks", description: "Advanced industrial engineering and process optimization" },
                    { title: "Diploma in Production Management", image: "/images/academic-pillar/Certificate Courses/diploma in production management.png", duration: "56 weeks", description: "Production planning, control and operational excellence" },
                    { title: "Diploma in Quality Management", image: "/images/academic-pillar/Certificate Courses/diploma in quality management.png", duration: "56 weeks", description: "Advanced quality systems implementation and management" },
                    { title: "Diploma in Fashion Design", image: "/images/academic-pillar/Certificate Courses/diploma in fashion design.png", duration: "56 weeks", description: "Fashion design principles and garment technology" },
                    { title: "Pattern Making & Grading", image: "/images/academic-pillar/Certificate Courses/pattern making & grading.png", duration: "4 months", description: "Technical pattern making and size grading techniques" },
                    { title: "Diploma in Human Resource Management", image: "/images/academic-pillar/Certificate Courses/diploma in human resource management.png", duration: "56 weeks", description: "Strategic HR management and organizational development" },
                    { title: "Diploma in Industrial Management", image: "/images/academic-pillar/Certificate Courses/Diploma in Industrial management.png", duration: "180 days", description: "Comprehensive industrial operations and strategic management" },
                  ].map((course, index) => (
                    <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <div className="relative aspect-[1/1.41] bg-gray-100">
                        <Image src={course.image} alt={course.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute inset-0 flex flex-col justify-end p-4">
                          <h3 className="text-white font-bold text-sm line-clamp-2 drop-shadow-lg">{course.title}</h3>
                          <p className="text-white/90 text-xs mt-1 line-clamp-2">{course.description}</p>
                        </div>
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-blue-600 text-white text-xs border-blue-600">{course.duration}</Badge>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="university" className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "University Bridge Program", image: "/images/academic-pillar/Courses for University Students/23.png", duration: "45 days", description: "Bridge program designed for university students transitioning to professional careers" },
                    { title: "Professional Skills Development", image: "/images/academic-pillar/Courses for University Students/24.png", duration: "30 days", description: "Essential professional skills and workplace readiness for university graduates" },
                    { title: "Industry Internship Preparation", image: "/images/academic-pillar/Courses for University Students/25.png", duration: "60 days", description: "Comprehensive preparation for successful industry internships and practical experience" },
                    { title: "Career Foundation Program", image: "/images/academic-pillar/Courses for University Students/Academic Pillar Images.png", duration: "90 days", description: "Foundation program for career planning and professional development strategies" },
                  ].map((course, index) => (
                    <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <div className="relative aspect-[4/3] bg-gray-100">
                        <Image src={course.image} alt={course.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute inset-0 flex flex-col justify-end p-4">
                          <h3 className="text-white font-bold text-sm line-clamp-2 drop-shadow-lg">{course.title}</h3>
                          <p className="text-white/90 text-xs mt-1 line-clamp-2">{course.description}</p>
                        </div>
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-green-600 text-white text-xs border-green-600">{course.duration}</Badge>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="diploma" className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "Diploma in Manufacturing Management", image: "/images/academic-pillar/Diploma Courses/9.png", duration: "180 days", description: "Comprehensive manufacturing operations and strategic management" },
                    { title: "Diploma in Quality Management Systems", image: "/images/academic-pillar/Diploma Courses/10.png", duration: "150 days", description: "Advanced quality systems implementation and management" },
                    { title: "Diploma in Operations Management", image: "/images/academic-pillar/Diploma Courses/11.png", duration: "120 days", description: "Strategic operations planning and optimization" },
                    { title: "Diploma in Project Management", image: "/images/academic-pillar/Diploma Courses/12.png", duration: "120 days", description: "Professional project management with PMP preparation" },
                    { title: "Diploma in Supply Chain Management", image: "/images/academic-pillar/Diploma Courses/13.png", duration: "135 days", description: "End-to-end supply chain optimization and logistics" },
                    { title: "Diploma in Industrial Engineering", image: "/images/academic-pillar/Diploma Courses/14.png", duration: "160 days", description: "Advanced industrial engineering and process optimization" },
                  ].map((course, index) => (
                    <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <div className="relative aspect-[4/3] bg-gray-100">
                        <Image src={course.image} alt={course.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute inset-0 flex flex-col justify-end p-4">
                          <h3 className="text-white font-bold text-sm line-clamp-2 drop-shadow-lg">{course.title}</h3>
                          <p className="text-white/90 text-xs mt-1 line-clamp-2">{course.description}</p>
                        </div>
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-red-600 text-white text-xs border-red-600">{course.duration}</Badge>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="lean" className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "Lean Yellow Belt Certification", image: "/images/academic-pillar/Lean/16.png", duration: "14 days", description: "Foundation level lean principles and basic improvement tools" },
                    { title: "Lean Green Belt Certification", image: "/images/academic-pillar/Lean/17.png", duration: "60 days", description: "Intermediate lean practitioner with project leadership skills" },
                    { title: "Lean Black Belt Certification", image: "/images/academic-pillar/Lean/18.png", duration: "90 days", description: "Advanced lean expert with change management capabilities" },
                    { title: "Lean Six Sigma Yellow Belt", image: "/images/academic-pillar/Lean/19.png", duration: "21 days", description: "Combined lean and six sigma foundation certification" },
                    { title: "Lean Six Sigma Green Belt", image: "/images/academic-pillar/Lean/20.png", duration: "75 days", description: "Intermediate lean six sigma with statistical analysis" },
                    { title: "Lean Six Sigma Black Belt", image: "/images/academic-pillar/Lean/21.png", duration: "120 days", description: "Expert level lean six sigma with advanced statistics" },
                  ].map((course, index) => (
                    <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <div className="relative aspect-[4/3] bg-gray-100">
                        <Image src={course.image} alt={course.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute inset-0 flex flex-col justify-end p-4">
                          <h3 className="text-white font-bold text-sm line-clamp-2 drop-shadow-lg">{course.title}</h3>
                          <p className="text-white/90 text-xs mt-1 line-clamp-2">{course.description}</p>
                        </div>
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-green-600 text-white text-xs border-green-600">{course.duration}</Badge>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
}
