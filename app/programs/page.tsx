"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Award, BookOpen, DollarSign, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function ProgramsPage() {
  const [selectedFilter, setSelectedFilter] = useState("All")

  const courses = [
    {
      id: "certificate-work-study",
      course_name: "Certificate in Work Study",
      course_description:
        "Comprehensive training in work measurement, method study, and productivity improvement techniques for manufacturing professionals.",
      duration: 30,
      course_fee: 45000,
      category: "Certificate",
      image: "https://apexinstituteedu.com/wp-content/uploads/2023/03/10.png",
      level: "Beginner to Intermediate",
      modules: 8,
    },
    {
      id: "quality-assurance-management",
      course_name: "Quality Assurance Management",
      course_description:
        "Advanced certificate program covering quality systems, auditing, and continuous improvement methodologies.",
      duration: 45,
      course_fee: 60000,
      category: "Certificate",
      image: "https://apexinstituteedu.com/wp-content/uploads/2023/03/8-min.png",
      level: "Intermediate",
      modules: 10,
    },
    {
      id: "industrial-engineering-fundamentals",
      course_name: "Industrial Engineering Fundamentals",
      course_description:
        "Learn industrial engineering principles, process optimization, and manufacturing systems design.",
      duration: 60,
      course_fee: 75000,
      category: "Certificate",
      image: "https://apexinstituteedu.com/wp-content/uploads/2023/03/7-min.png",
      level: "Intermediate",
      modules: 12,
    },
    {
      id: "soft-skills-development",
      course_name: "Soft Skills Development",
      course_description:
        "Develop essential soft skills including communication, leadership, teamwork, and professional presentation abilities.",
      duration: 21,
      course_fee: 35000,
      category: "Certificate",
      image: "https://apexinstituteedu.com/wp-content/uploads/2023/03/8-min-1.png",
      level: "All Levels",
      modules: 6,
    },
    {
      id: "manufacturing-management-diploma",
      course_name: "Manufacturing Management Diploma",
      course_description:
        "Comprehensive diploma covering all aspects of manufacturing operations, planning, and strategic management.",
      duration: 180,
      course_fee: 200000,
      category: "Diploma",
      image: "https://apexinstituteedu.com/wp-content/uploads/2023/03/14.png",
      level: "Advanced",
      modules: 20,
    },
    {
      id: "project-management-professional",
      course_name: "Project Management Professional",
      course_description:
        "Professional diploma in project management with industry-recognized certification preparation and practical applications.",
      duration: 120,
      course_fee: 180000,
      category: "Diploma",
      image: "https://apexinstituteedu.com/wp-content/uploads/2023/03/16.png",
      level: "Intermediate to Advanced",
      modules: 16,
    },
    {
      id: "operations-excellence-program",
      course_name: "Operations Excellence Program",
      course_description:
        "Strategic operations management covering supply chain, logistics, and operational excellence methodologies.",
      duration: 75,
      course_fee: 120000,
      category: "Diploma",
      image: "https://apexinstituteedu.com/wp-content/uploads/2023/03/12.png",
      level: "Advanced",
      modules: 14,
    },
    {
      id: "lean-six-sigma-black-belt",
      course_name: "Lean Six Sigma Black Belt",
      course_description:
        "Expert-level lean practitioner program with advanced statistical tools and change management techniques.",
      duration: 90,
      course_fee: 150000,
      category: "Lean",
      image: "https://apexinstituteedu.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-27-at-18.01.08.jpeg",
      level: "Advanced",
      modules: 18,
    },
    {
      id: "lean-manufacturing-principles",
      course_name: "Lean Manufacturing Principles",
      course_description:
        "Foundation course in lean manufacturing concepts, waste elimination, and continuous improvement.",
      duration: 45,
      course_fee: 90000,
      category: "Lean",
      image: "https://apexinstituteedu.com/wp-content/uploads/2023/03/19.png",
      level: "Beginner to Intermediate",
      modules: 10,
    },
    {
      id: "lean-six-sigma-green-belt",
      course_name: "Lean Six Sigma Green Belt",
      course_description:
        "Intermediate lean practitioner certification with project leadership and statistical analysis skills.",
      duration: 60,
      course_fee: 110000,
      category: "Lean",
      image: "https://apexinstituteedu.com/wp-content/uploads/2023/03/17.png",
      level: "Intermediate",
      modules: 12,
    },
  ]

  const formatCurrency = (amount: number) => {
    return (
      new Intl.NumberFormat("en-LK", {
        minimumFractionDigits: 0,
      }).format(amount) + " LKR"
    )
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Certificate":
        return "bg-blue-100 text-blue-800 border-blue-600"
      case "Diploma":
        return "bg-red-100 text-red-800 border-red-600"
      case "Lean":
        return "bg-green-100 text-green-800 border-green-600"
      default:
        return "bg-gray-100 text-gray-800 border-gray-600"
    }
  }

  const filteredCourses =
    selectedFilter === "All" ? courses : courses.filter((course) => course.category === selectedFilter)

  const filterOptions = ["All", "Certificate", "Diploma", "Lean"]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive range of management programs designed to shape tomorrow's leaders
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Filter by Category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((filter) => (
                <Button
                  key={filter}
                  variant={selectedFilter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter(filter)}
                  className={
                    selectedFilter === filter
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {selectedFilter === "All" ? "All Programs" : `${selectedFilter} Programs`}
            </h2>
            <p className="text-xl text-gray-600">
              {filteredCourses.length} program{filteredCourses.length !== 1 ? "s" : ""} available
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCourses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden flex flex-col bg-white">
                <div className="relative w-full" style={{ paddingTop: "75%" }}>
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.course_name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className={getCategoryColor(course.category)}>
                      {course.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {course.duration} days
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{course.course_name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-end">
                  <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                    {course.course_description}
                  </CardDescription>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{course.modules} modules</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="h-4 w-4 mr-2 text-purple-600" />
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="h-4 w-4 mr-2 text-green-600" />
                      <span className="font-bold text-lg text-green-600">{formatCurrency(course.course_fee)}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Link href={`/programs/${course.id}`} className="flex-1">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">Learn More</Button>
                    </Link>
                    <Button
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
        </div>
      </section>

      {/* Program Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Programs?</h2>
            <p className="text-xl text-gray-600">What makes our programs stand out</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-t-4 border-t-blue-600">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Industry-Relevant Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Curriculum designed with industry input to ensure relevance and applicability.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-t-red-600">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-lg">Expert Faculty</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Learn from experienced academicians and industry professionals.</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-t-blue-600">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Global Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Internationally recognized degrees and certifications.</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-t-red-600">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-lg">Flexible Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Multiple learning modes to suit working professionals.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Take the first step towards your management career with AIMS</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
