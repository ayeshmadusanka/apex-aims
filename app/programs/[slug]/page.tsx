import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Award, BookOpen, DollarSign, CheckCircle, ArrowLeft, Download, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// This would typically come from a database or CMS
const programsData = {
  "certificate-work-study": {
    id: "certificate-work-study",
    course_name: "Certificate in Work Study",
    course_description:
      "Comprehensive training in work measurement, method study, and productivity improvement techniques for manufacturing professionals.",
    detailed_description:
      "This comprehensive certificate program is designed to equip professionals with essential work study skills including time and motion study, method study, work measurement, and productivity improvement techniques. Participants will learn to analyze work processes, eliminate waste, and optimize operations for maximum efficiency.",
    duration: 30,
    course_fee: 45000,
    category: "Certificate",
    image: "https://apexinstituteedu.com/wp-content/uploads/2023/03/10.png",
    level: "Beginner to Intermediate",
    modules: 8,
    learning_outcomes: [
      "Master work measurement techniques and time study methods",
      "Conduct effective method study and process analysis",
      "Implement productivity improvement strategies",
      "Design efficient workplace layouts and workflows",
      "Apply statistical analysis to work study data",
      "Develop standard operating procedures",
      "Lead continuous improvement initiatives",
      "Calculate labor standards and performance metrics",
    ],
    curriculum: [
      {
        module: "Module 1: Introduction to Work Study",
        topics: ["Fundamentals of work study", "Historical development", "Applications in industry"],
      },
      {
        module: "Module 2: Method Study Techniques",
        topics: ["Process analysis", "Flow charts", "Method improvement"],
      },
      {
        module: "Module 3: Work Measurement",
        topics: ["Time study", "Predetermined motion time systems", "Work sampling"],
      },
      {
        module: "Module 4: Productivity Analysis",
        topics: ["Performance rating", "Allowances", "Standard time calculation"],
      },
      {
        module: "Module 5: Workplace Design",
        topics: ["Ergonomics", "Layout planning", "Workplace organization"],
      },
      {
        module: "Module 6: Statistical Applications",
        topics: ["Data collection", "Statistical analysis", "Control charts"],
      },
      {
        module: "Module 7: Implementation Strategies",
        topics: ["Change management", "Training programs", "Performance monitoring"],
      },
      {
        module: "Module 8: Case Studies & Project",
        topics: ["Real-world applications", "Project presentation", "Certification assessment"],
      },
    ],
    prerequisites: "Basic understanding of manufacturing processes. No prior work study experience required.",
    certification: "AIMS Certificate in Work Study - Internationally recognized",
    career_opportunities: [
      "Industrial Engineer",
      "Process Improvement Specialist",
      "Operations Analyst",
      "Production Supervisor",
      "Quality Assurance Manager",
      "Lean Manufacturing Coordinator",
    ],
    schedule: {
      format: "Weekend Classes",
      duration_weeks: 10,
      class_hours: "Saturday & Sunday, 9:00 AM - 5:00 PM",
      next_intake: "March 15, 2024",
    },
  },
  "quality-assurance-management": {
    id: "quality-assurance-management",
    course_name: "Quality Assurance Management",
    course_description:
      "Advanced certificate program covering quality systems, auditing, and continuous improvement methodologies.",
    detailed_description:
      "This advanced certificate program provides comprehensive training in quality assurance management, covering quality systems implementation, auditing techniques, statistical process control, and continuous improvement methodologies. Ideal for professionals seeking to advance their careers in quality management.",
    duration: 45,
    course_fee: 60000,
    category: "Certificate",
    image: "https://apexinstituteedu.com/wp-content/uploads/2023/03/8-min.png",
    level: "Intermediate",
    modules: 10,
    learning_outcomes: [
      "Implement comprehensive quality management systems",
      "Conduct internal and external quality audits",
      "Apply statistical process control techniques",
      "Lead continuous improvement initiatives",
      "Develop quality policies and procedures",
      "Manage supplier quality programs",
      "Analyze quality data and metrics",
      "Ensure regulatory compliance",
    ],
    curriculum: [
      {
        module: "Module 1: Quality Management Fundamentals",
        topics: ["Quality concepts", "Quality gurus", "Quality evolution"],
      },
      {
        module: "Module 2: Quality Management Systems",
        topics: ["ISO 9001 standards", "QMS implementation", "Documentation requirements"],
      },
      {
        module: "Module 3: Quality Auditing",
        topics: ["Audit principles", "Audit planning", "Audit execution and reporting"],
      },
      {
        module: "Module 4: Statistical Process Control",
        topics: ["Control charts", "Process capability", "Statistical analysis"],
      },
      {
        module: "Module 5: Quality Tools and Techniques",
        topics: ["Seven quality tools", "Problem-solving methods", "Root cause analysis"],
      },
      {
        module: "Module 6: Supplier Quality Management",
        topics: ["Supplier evaluation", "Quality agreements", "Supplier development"],
      },
      {
        module: "Module 7: Continuous Improvement",
        topics: ["Kaizen methodology", "PDCA cycle", "Improvement projects"],
      },
      {
        module: "Module 8: Quality Costs and Metrics",
        topics: ["Cost of quality", "Quality metrics", "Performance measurement"],
      },
      {
        module: "Module 9: Regulatory Compliance",
        topics: ["Industry standards", "Compliance requirements", "Risk management"],
      },
      {
        module: "Module 10: Leadership in Quality",
        topics: ["Quality leadership", "Team management", "Change management"],
      },
    ],
    prerequisites: "Basic knowledge of quality concepts. 2+ years of industry experience preferred.",
    certification: "AIMS Advanced Certificate in Quality Assurance Management",
    career_opportunities: [
      "Quality Manager",
      "Quality Assurance Specialist",
      "Quality Auditor",
      "Process Improvement Manager",
      "Compliance Officer",
      "Operations Manager",
    ],
    schedule: {
      format: "Evening Classes",
      duration_weeks: 12,
      class_hours: "Monday & Wednesday, 6:00 PM - 9:00 PM",
      next_intake: "April 1, 2024",
    },
  },
  // Add more programs as needed
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function ProgramDetailPage({ params }: PageProps) {
  const program = programsData[params.slug as keyof typeof programsData]

  if (!program) {
    notFound()
  }

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <section className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <Link href="/programs" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Programs
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Badge variant="outline" className={getCategoryColor(program.category)}>
                  {program.category}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  {program.level}
                </Badge>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">{program.course_name}</h1>

              <p className="text-xl text-gray-600 leading-relaxed">{program.detailed_description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-900">{program.duration} Days</div>
                  <div className="text-xs text-gray-600">Duration</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <BookOpen className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-900">{program.modules} Modules</div>
                  <div className="text-xs text-gray-600">Curriculum</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Award className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-900">Certificate</div>
                  <div className="text-xs text-gray-600">Qualification</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <DollarSign className="h-6 w-6 text-red-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-900">{formatCurrency(program.course_fee)}</div>
                  <div className="text-xs text-gray-600">Investment</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Enroll Now
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 bg-transparent">
                  <Download className="h-4 w-4 mr-2" />
                  Download Brochure
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.course_name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Learning Outcomes */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <CheckCircle className="h-6 w-6 mr-3 text-green-600" />
                    Learning Outcomes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {program.learning_outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Curriculum */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <BookOpen className="h-6 w-6 mr-3 text-blue-600" />
                    Curriculum
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {program.curriculum.map((module, index) => (
                      <div key={index} className="border-l-4 border-blue-600 pl-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{module.module}</h3>
                        <ul className="space-y-1">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="text-gray-600 flex items-center">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Career Opportunities */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <Award className="h-6 w-6 mr-3 text-purple-600" />
                    Career Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {program.career_opportunities.map((career, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <Users className="h-5 w-5 text-purple-600" />
                        <span className="text-gray-700 font-medium">{career}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Program Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Program Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">{program.duration} days</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Format</span>
                    <span className="font-medium">{program.schedule.format}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Schedule</span>
                    <span className="font-medium text-sm">{program.schedule.class_hours}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Next Intake</span>
                    <span className="font-medium text-blue-600">{program.schedule.next_intake}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Investment</span>
                    <span className="font-bold text-lg text-green-600">{formatCurrency(program.course_fee)}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Prerequisites</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{program.prerequisites}</p>
                </CardContent>
              </Card>

              {/* Certification */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Certification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{program.certification}</p>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Need More Information?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">+94 77 123 4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">programs@aims.edu</span>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Contact Admissions</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
