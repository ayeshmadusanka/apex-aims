"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AcademicPillarPage() {
  const [activeTab, setActiveTab] = useState("certificate");

  useEffect(() => {
    // Restore the saved tab from localStorage on mount
    const savedTab = localStorage.getItem("academicPillarTab");
    if (savedTab) {
      setActiveTab(savedTab);
    }
  }, []);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    localStorage.setItem("academicPillarTab", value);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="relative w-full aspect-[18/5] overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/images/academic-pillar/Header.png"
              alt="AIMS Professional Services - Academic Pillar"
              fill
              className="object-cover"
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
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "Certificate in Work Study", slug: "certificate-in-work-study", image: "/images/academic-pillar/Certificate Courses/1.png", duration: "12 Weeks", description: "Comprehensive training in work measurement and method study techniques" },
                    { title: "Workstudy NVQ Level 4", slug: "workstudy-nvq-level-4", image: "/images/academic-pillar/Certificate Courses/2.png", duration: "06 Months", description: "NVQ Level 4 qualification in work study methodologies" },
                    { title: "Certificate in Merchandising", slug: "certificate-in-merchandising", image: "/images/academic-pillar/Certificate Courses/3.png", duration: "10 Weeks", description: "Specialized training in retail merchandising and product management" },
                    { title: "Quality Assurance Management", slug: "quality-assurance-management", image: "/images/academic-pillar/Certificate Courses/4.png", duration: "03 Months", description: "Quality systems, auditing, and continuous improvement" },
                    { title: "Advanced Certificate in Apparel Production Management", slug: "advanced-certificate-apparel-production-management", image: "/images/academic-pillar/Certificate Courses/5.png", duration: "03 Months", description: "Advanced apparel production and operational management" },
                    { title: "Pattern Making & Grading", slug: "pattern-making-grading", image: "/images/academic-pillar/Certificate Courses/6.png", duration: "4 Months", description: "Technical pattern making and size grading techniques" },
                    { title: "Organization Planning & Controlling", slug: "organization-planning-controlling", image: "/images/academic-pillar/Certificate Courses/7.png", duration: "45 Days", description: "Strategic planning and organizational control systems" },
                  ].map((course, index) => (
                    <Link key={index} href={`/academic-pillar/certificate/${course.slug}`}>
                      <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer h-full">
                        <div className="relative aspect-square bg-gray-100">
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
                    </Link>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="university" className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "Industrial Engineering and Process Excellence", slug: "industrial-engineering-process-excellence", image: "/images/academic-pillar/Courses for University Students/23.png", duration: "45 days", description: "Industrial engineering principles and process optimization techniques" },
                    { title: "Certified PMTS & Costing Practitioner Program", slug: "certified-pmts-costing-practitioner", image: "/images/academic-pillar/Courses for University Students/24.png", duration: "50 Hours", description: "Predetermined motion time systems and accurate costing methods" },
                    { title: "Certificate in Merchandising", slug: "certificate-in-merchandising-university", image: "/images/academic-pillar/Courses for University Students/25.png", duration: "60 days", description: "Specialized training in retail merchandising and product management" },
                    { title: "Certified Lean White Belt Practitioner Program", slug: "certified-lean-white-belt-university", image: "/images/academic-pillar/Courses for University Students/Academic Pillar Images.png", duration: "90 days", description: "Foundation level lean principles and basic improvement tools" },
                  ].map((course, index) => (
                    <Link key={index} href={`/academic-pillar/university/${course.slug}`}>
                      <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer h-full">
                        <div className="relative aspect-square bg-gray-100">
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
                    </Link>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="diploma" className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "Diploma in Industrial Engineering", slug: "diploma-in-industrial-engineering", image: "/images/academic-pillar/Diploma Courses/9.png", duration: "56 Weeks", description: "Advanced industrial engineering and process optimization" },
                    { title: "Diploma in Industrial Management", slug: "diploma-in-industrial-management", image: "/images/academic-pillar/Diploma Courses/10.png", duration: "56 Weeks", description: "Comprehensive industrial operations and strategic management" },
                    { title: "Diploma in Apparel Production Management", slug: "diploma-in-apparel-production-management", image: "/images/academic-pillar/Diploma Courses/11.png", duration: "56 Weeks", description: "Advanced apparel production and operational management" },
                    { title: "Diploma in Quality Management", slug: "diploma-in-quality-management", image: "/images/academic-pillar/Diploma Courses/12.png", duration: "56 Weeks", description: "Advanced quality systems implementation and management" },
                    { title: "Diploma in Human Resource Management", slug: "diploma-in-human-resource-management", image: "/images/academic-pillar/Diploma Courses/13.png", duration: "56 Weeks", description: "Strategic HR management and organizational development" },
                    { title: "Diploma in Fashion Design", slug: "diploma-in-fashion-design", image: "/images/academic-pillar/Diploma Courses/14.png", duration: "1-2 Years", description: "Fashion design principles and garment technology" },
                  ].map((course, index) => (
                    <Link key={index} href={`/academic-pillar/diploma/${course.slug}`}>
                      <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer h-full">
                        <div className="relative aspect-square bg-gray-100">
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
                    </Link>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="lean" className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "Lean Certified White Belt Practitioner", slug: "lean-certified-white-belt-practitioner", image: "/images/academic-pillar/Lean/16.png", duration: "Flexible", description: "Foundation level lean principles and basic improvement tools" },
                    { title: "Lean Certified Yellow Belt Practitioner", slug: "lean-certified-yellow-belt-practitioner", image: "/images/academic-pillar/Lean/17.png", duration: "6 days (24 Hrs)", description: "Foundation lean certification with practical application" },
                    { title: "Lean Certified Green Belt Practitioner", slug: "lean-certified-green-belt-practitioner", image: "/images/academic-pillar/Lean/18.png", duration: "12 Days (48 Hrs)", description: "Intermediate lean practitioner with project leadership skills" },
                    { title: "Lean Certified Black Belt Practitioner", slug: "lean-certified-black-belt-practitioner", image: "/images/academic-pillar/Lean/19.png", duration: "14 Days (84 Hrs)", description: "Advanced lean expert with change management capabilities" },
                    { title: "Lean Six Sigma Green Belt Practitioner Program for Finance", slug: "lean-six-sigma-green-belt-finance", image: "/images/academic-pillar/Lean/20.png", duration: "75 days", description: "Lean Six Sigma Green Belt specialized for finance professionals" },
                    { title: "Lean Six Sigma Black Belt Practitioner Program for Finance", slug: "lean-six-sigma-black-belt-finance", image: "/images/academic-pillar/Lean/21.png", duration: "120 days", description: "Lean Six Sigma Black Belt specialized for finance professionals" },
                  ].map((course, index) => (
                    <Link key={index} href={`/academic-pillar/lean/${course.slug}`}>
                      <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer h-full">
                        <div className="relative aspect-square bg-gray-100">
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
                    </Link>
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
