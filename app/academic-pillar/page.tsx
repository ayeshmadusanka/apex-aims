"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, BookOpen, Award, Users, Play, Building2 } from "lucide-react";
import Image from "next/image";

export default function AcademicPillarPage() {
  const certificatePrograms = [
    "Certificate in work study",
    "Certificate of fundamental in work study",
    "Certificate in merchandising",
    "Certificate in Industrial Engineering",
    "Advanced Certificate in quality assurance management",
    "Certified PMTS and costing practitioner program",
    "Advance certificate in apparel production management performance rating practices",
    "Certificate in soft skills development",
    "Certificate in ergonomics & work design program of lean BIQ Excellence Tool kit",
    "Certificate Programs",
  ];

  const diplomaPrograms = [
    "Diploma in Manufacturing Management",
    "Diploma in Quality Management Systems",
    "Diploma in Operations Management",
    "Diploma in Project Management",
    "Diploma in Supply Chain Management",
    "Diploma in Industrial Engineering",
    "Diploma in Production Planning",
    "Diploma in Business Process Improvement",
  ];

  const leanPrograms = [
    "Lean Yellow Belt Certification",
    "Lean Green Belt Certification",
    "Lean Black Belt Certification",
    "Lean Six Sigma Yellow Belt",
    "Lean Six Sigma Green Belt",
    "Lean Six Sigma Black Belt",
    "Lean Manufacturing Excellence",
    "Lean Leadership Development",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Academic Pillar
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering professionals through comprehensive education and
            certification programs
          </p>
        </div>
      </section>

      {/* Mission Statement */}
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

      {/* Our Programs - List Format */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Our Programs
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="certificate" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-100 mb-8">
                <TabsTrigger
                  value="certificate"
                  className="text-gray-700 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  CERTIFICATE COURSES
                </TabsTrigger>
                <TabsTrigger
                  value="diploma"
                  className="text-gray-700 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  DIPLOMA PROGRAMS
                </TabsTrigger>
                <TabsTrigger
                  value="lean"
                  className="text-gray-700 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  LEAN PRACTITIONER PROGRAMS
                </TabsTrigger>
              </TabsList>

              <TabsContent value="certificate" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Certificate in Work Study",
                      description:
                        "Comprehensive training in work measurement and method study techniques",
                      duration: "30 days",
                      fee: 45000,
                      image:
                        "https://apexinstituteedu.com/wp-content/uploads/2023/03/10.png",
                      modules: 8,
                      level: "Beginner to Intermediate",
                    },
                    {
                      title: "Certificate of Fundamental in Work Study",
                      description:
                        "Foundation course covering basic work study principles and applications",
                      duration: "21 days",
                      fee: 35000,
                      image:
                        "https://apexinstituteedu.com/wp-content/uploads/2023/03/8-min.png",
                      modules: 6,
                      level: "Beginner",
                    },
                    {
                      title: "Certificate in Merchandising",
                      description:
                        "Specialized training in retail merchandising and product management",
                      duration: "25 days",
                      fee: 40000,
                      image:
                        "https://apexinstituteedu.com/wp-content/uploads/2023/03/7-min.png",
                      modules: 7,
                      level: "Intermediate",
                    },
                    {
                      title: "Certificate in Industrial Engineering",
                      description:
                        "Core industrial engineering principles and optimization techniques",
                      duration: "60 days",
                      fee: 75000,
                      image:
                        "https://apexinstituteedu.com/wp-content/uploads/2023/03/8-min-1.png",
                      modules: 12,
                      level: "Intermediate",
                    },
                    {
                      title: "Advanced Certificate in Quality Assurance Management",
                      description:
                        "Advanced quality systems, auditing, and continuous improvement",
                      duration: "45 days",
                      fee: 60000,
                      image:
                        "https://apexinstituteedu.com/wp-content/uploads/2023/03/10.png",
                      modules: 10,
                      level: "Advanced",
                    },
                    {
                      title: "Certified PMTS and Costing Practitioner Program",
                      description:
                        "Predetermined motion time systems and accurate costing methods",
                      duration: "35 days",
                      fee: 55000,
                      image:
                        "https://apexinstituteedu.com/wp-content/uploads/2023/03/8-min.png",
                      modules: 9,
                      level: "Intermediate",
                    },
                    {
                      title: "Certificate in Soft Skills Development",
                      description:
                        "Essential communication, leadership, and professional skills",
                      duration: "21 days",
                      fee: 35000,
                      image:
                        "https://apexinstituteedu.com/wp-content/uploads/2023/03/7-min.png",
                      modules: 6,
                      level: "All Levels",
                    },
                    {
                      title: "Certificate in Ergonomics & Work Design",
                      description:
                        "Workplace design and ergonomic principles for safety and efficiency",
                      duration: "28 days",
                      fee: 42000,
                      image:
                        "https://apexinstituteedu.com/wp-content/uploads/2023/03/8-min-1.png",
                      modules: 8,
                      level: "Intermediate",
                    },
                  ].map((course, index) => (
                    <Card
                      key={index}
                      className="bg-white border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
                    >
                      <div className="relative w-full pb-[75%] bg-gray-100">
                        {/* 4:3 Aspect Ratio (height / width = 3 / 4 = 0.75 = 75%) */}
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge
                            variant="outline"
                            className="bg-blue-100 text-blue-800 border-blue-600 text-xs"
                          >
                            Certificate
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {course.duration}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg text-gray-900">
                          {course.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col flex-grow p-6 pt-0">
                        {/* Removed CardDescription */}
                        {/* Removed modules and level details */}
                        <div className="space-y-2 mb-4 mt-auto">
                          <div className="flex items-center text-sm text-gray-600">
                            <span className="text-green-600 font-bold text-lg">
                              {new Intl.NumberFormat("en-LK", {
                                minimumFractionDigits: 0,
                              }).format(course.fee)}{" "}
                              LKR
                            </span>
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
                          >
                            Learn More
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                          >
                            Enroll
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="diploma" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Diploma in Manufacturing Management",
                      description:
                        "Comprehensive manufacturing operations and strategic management",
                      duration: "180 days",
                      fee: 200000,
                      image:
                        "https://apexinstituteedu.com/wp-content/uploads/2023/03/14.png",
                      modules: 20,
                      level: "Advanced",
                    },
                    {
                      title: "Diploma in Quality Management Systems",
                      description:
                        "Advanced quality systems implementation and management",
                      duration: "150 days",
                      fee: 175000,
                      image:
                        "https://apexinstituteedu.com/wp-content/uploads/2023/03/16.png",
                      modules: 18,
                      level: "Advanced",
                    },
                    {
                      title: "Diploma in Operations Management",
                      description:
                        "Strategic operations planning and optimization",
                      duration: "120 days",
                      fee: 160000,
                      image:
                        "https://apexinstituteedu.com/wp-content/uploads/2023/03/12.png",
                      modules: 16,
                      level: "Advanced",
                    },
                    {
                      title: "Diploma in Project Management",
                      description:
                        "Professional project management with PMP preparation",
                      duration: "120 days",
                      fee: 180000,
                      image:
                        "https://apexinstituteedu.com/wp-content/uploads/2023/03/13.png",
                      modules: 16,
                      level: "Intermediate to Advanced",
                    },
                    {
                      title: "Diploma in Supply Chain Management",
                      description:
                        "End-to-end supply chain optimization and logistics",
                      duration: "135 days",
                      fee: 165000,
                      image:
                        "https://apexinstituteedu.com/wp-content/uploads/2023/03/15.png",
                      modules: 17,
                      level: "Advanced",
                    },
                    {
                      title: "Diploma in Industrial Engineering",
                      description:
                        "Advanced industrial engineering and process optimization",
                      duration: "160 days",
                      fee: 185000,
                      image:
                        "https://apexinstituteedu.com/wp-content/uploads/2023/03/14.png",
                      modules: 19,
                      level: "Advanced",
                    },
                    {
                      title: "Diploma in Production Planning",
                      description:
                        "Strategic production planning and scheduling systems",
                      duration: "110 days",
                      fee: 155000,
                      image:
                        "https://apexinstituteedu.com/wp-content/uploads/2023/03/16.png",
                      modules: 15,
                      level: "Intermediate to Advanced",
                    },
                    {
                      title: "Diploma in Business Process Improvement",
                      description:
                        "Advanced process analysis and improvement methodologies",
                      duration: "125 days",
                      fee: 170000,
                      image:
                        "https://apexinstituteedu.com/wp-content/uploads/2023/03/12.png",
                      modules: 16,
                      level: "Advanced",
                    },
                  ].map((course, index) => (
                    <Card
                      key={index}
                      className="bg-white border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
                    >
                      <div className="relative w-full pb-[75%] bg-gray-100">
                        {/* 4:3 Aspect Ratio (height / width = 3 / 4 = 0.75 = 75%) */}
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge
                            variant="outline"
                            className="bg-red-100 text-red-800 border-red-600 text-xs"
                          >
                            Diploma
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {course.duration}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg text-gray-900">
                          {course.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col flex-grow p-6 pt-0">
                        {/* Removed CardDescription */}
                        {/* Removed modules and level details */}
                        <div className="space-y-2 mb-4 mt-auto">
                          <div className="flex items-center text-sm text-gray-600">
                            <span className="text-green-600 font-bold text-lg">
                              {new Intl.NumberFormat("en-LK", {
                                minimumFractionDigits: 0,
                              }).format(course.fee)}{" "}
                              LKR
                            </span>
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            className="bg-red-600 hover:bg-red-700 text-white flex-1"
                          >
                            Learn More
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                          >
                            Enroll
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="lean" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Lean Yellow Belt Certification",
                      description:
                        "Foundation level lean principles and basic improvement tools",
                      duration: "14 days",
                      fee: 35000,
                      image:
                        "https://apexinstituteedu.com/wp-content/uploads/2023/03/17.png",
                      modules: 5,
                      level: "Beginner",
                    },
                    {
                      title: "Lean Green Belt Certification",
                      description:
                        "Intermediate lean practitioner with project leadership skills",
                      duration: "60 days",
                      fee: 110000,
                      image:
                        "https://apexinstituteedu.com/wp-content/uploads/2023/03/18.png",
                      modules: 12,
                      level: "Intermediate",
                    },
                    {
                      title: "Lean Black Belt Certification",
                      description:
                        "Advanced lean expert with change management capabilities",
                      duration: "90 days",
                      fee: 150000,
                      image:
                        "https://apexinstituteedu.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-27-at-18.01.08.jpeg",
                      modules: 18,
                      level: "Advanced",
                    },
                    {
                      title: "Lean Six Sigma Yellow Belt",
                      description:
                        "Combined lean and six sigma foundation certification",
                      duration: "21 days",
                      fee: 45000,
                      image:
                        "https://apexinstituteedu.com/wp-content/uploads/2023/03/19.png",
                      modules: 7,
                      level: "Beginner",
                    },
                    {
                      title: "Lean Six Sigma Green Belt",
                      description:
                        "Intermediate lean six sigma with statistical analysis",
                      duration: "75 days",
                      fee: 125000,
                      image:
                        "https://apexinstituteedu.com/wp-content/uploads/2023/03/20.png",
                      modules: 15,
                      level: "Intermediate",
                    },
                    {
                      title: "Lean Six Sigma Black Belt",
                      description:
                        "Expert level lean six sigma with advanced statistics",
                      duration: "120 days",
                      fee: 180000,
                      image:
                        "https://apexinstituteedu.com/wp-content/uploads/2023/03/21.png",
                      modules: 22,
                      level: "Advanced",
                    },
                    {
                      title: "Lean Manufacturing Excellence",
                      description:
                        "Comprehensive lean manufacturing implementation program",
                      duration: "45 days",
                      fee: 85000,
                      image:
                        "https://apexinstituteedu.com/wp-content/uploads/2023/03/22.png",
                      modules: 10,
                      level: "Intermediate",
                    },
                    {
                      title: "Lean Leadership Development",
                      description:
                        "Leadership skills for lean transformation initiatives",
                      duration: "30 days",
                      fee: 65000,
                      image:
                        "https://apexinstituteedu.com/wp-content/uploads/2023/03/23.png",
                      modules: 8,
                      level: "Advanced",
                    },
                  ].map((course, index) => (
                    <Card
                      key={index}
                      className="bg-white border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
                    >
                      <div className="relative w-full pb-[75%] bg-gray-100">
                        {/* 4:3 Aspect Ratio (height / width = 3 / 4 = 0.75 = 75%) */}
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge
                            variant="outline"
                            className="bg-green-100 text-green-800 border-green-600 text-xs"
                          >
                            Lean
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {course.duration}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg text-gray-900">
                          {course.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col flex-grow p-6 pt-0">
                        {/* Removed CardDescription */}
                        {/* Removed modules and level details */}
                        <div className="space-y-2 mb-4 mt-auto">
                          <div className="flex items-center text-sm text-gray-600">
                            <span className="text-green-600 font-bold text-lg">
                              {new Intl.NumberFormat("en-LK", {
                                minimumFractionDigits: 0,
                              }).format(course.fee)}{" "}
                              LKR
                            </span>
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700 text-white flex-1"
                          >
                            Learn More
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
                          >
                            Enroll
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              What Our Clients Thought About Our Program
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "LEAN BLACK BELT PRACTITIONER PROGRAM",
                  subtitle: "Boost your career with us...",
                  phone: "0772 600 478",
                },
                {
                  title: "LEAN BLACK BELT PRACTITIONER PROGRAM",
                  subtitle: "Boost your career with us...",
                  phone: "0772 600 478",
                },
                {
                  title: "LEAN SIX SIGMA BLACK BELT PRACTITIONER PROGRAM",
                  subtitle: "Boost your career with us...",
                  phone: "0772 600 478",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 overflow-hidden shadow-sm"
                >
                  <div className="relative">
                    <div className="bg-gray-100 h-48 flex items-center justify-center">
                      <Play className="h-12 w-12 text-gray-400" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white">PROGRAM</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {testimonial.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{testimonial.subtitle}</p>
                    <p className="text-blue-600 font-semibold">
                      {testimonial.phone}
                    </p>
                  </CardContent>
                </Card>
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
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-gray-700">
                      Professional Education Services
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  What you are looking for is not on the list?
                </h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Don't worry:
                  </h3>
                  <p className="text-gray-700">
                    Please contact us. We will provide the best solution for
                    you.
                  </p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg">
                  Contact us
                </Button>
                <div className="flex items-center space-x-3 pt-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Trusted by 500+
                    </p>
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Start Your Learning Journey Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have advanced their careers
            through our academic programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Enroll Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              View Programs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
