import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Clock, Calendar, DollarSign, GraduationCap, Award, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const courses: Record<string, any> = {
  "lean-certified-white-belt-practitioner": {
    title: "Certified Lean White Belt Practitioner",
    subtitle: "Start Your Journey to Continuous Improvement",
    image: "/images/academic-pillar/Lean/16.png",
    description: "Gain a foundational understanding of Lean Six Sigma and the essential tools used to enhance efficiency and eliminate waste. This entry-level practitioner program is designed to create a culture of excellence and prepare you for active participation in process improvement initiatives.",
    courseContent: [
      "Lean & Six Sigma Fundamentals: Understanding the history, principles, and synergy between Lean and Six Sigma",
      "The 8 Wastes (Muda): Learning to identify defects, overproduction, waiting, and other inefficiencies",
      "DMAIC Methodology: A comprehensive overview of the Define, Measure, Analyze, Improve, and Control framework",
      "Essential Lean Tools: Introduction to 5S (Sort, Set in Order, Shine, Standardize, Sustain), Visual Management, and Kaizen",
      "Process Mapping: Understanding the basics of creating flowcharts and identifying value-added activities",
      "Problem Solving: Introduction to root cause analysis using tools like the Fishbone Diagram and the 5 Whys"
    ],
    logistics: {
      duration: "1 hour (self-paced) to 1 full day (instructor-led)",
      mode: "Online sessions via Zoom, self-paced eLearning, or in-person classroom training",
      investment: "Costs vary by provider, ranging from free introductory courses to approximately $349–$995"
    },
    requirements: {
      prerequisites: "None. This course is specifically designed for individuals with no prior knowledge of Lean Six Sigma",
      targetGroup: "Senior leaders, project team members, manufacturing operators, and any professional seeking to improve workplace efficiency"
    },
    accreditation: [
      "Certified Training: Study with recognized providers to earn an industry-approved White Belt Certification",
      "International Recognition: Many programs are aligned with global standards such as those set by the Council for Six Sigma Certification (CSSC)"
    ],
    duration: "Flexible",
    badge: "Foundation"
  },
  "lean-certified-yellow-belt-practitioner": {
    title: "Certified Lean Yellow Belt Practitioner",
    subtitle: "Enhance Your Knowledge & Upgrade Your Career With Passion",
    image: "/images/academic-pillar/Lean/17.png",
    description: "Advance your expertise in operational excellence with the Certified Lean Yellow Belt Practitioner program. This course is highly beneficial for graduates and undergraduates with industrial experience who want to gain in-depth knowledge in lean manufacturing.",
    courseContent: [
      "Lean Fundamentals: Overview of Lean Manufacturing and Lean Leadership",
      "Waste & Mapping: Identification of Types of Waste and mastery of Process Mapping | VSM (Value Stream Mapping)",
      "Continuous Improvement: Engaging in Kaizen Activities and Problem Solving techniques",
      "Operational Controls: Implementing Visual Control, Standard Work, and Just in Time (JIT) principles",
      "Advanced Metrics & Maintenance: Understanding the Lean Matrix and the Basics of TPM (Total Productive Maintenance)"
    ],
    logistics: {
      duration: "08 Weeks",
      mode: "Online Sessions via Zoom technology",
      investment: "50,000 LKR"
    },
    requirements: {
      targetGroup: "Ideal for Graduates, Undergraduates, and those with industrial experience seeking to deepen their lean manufacturing knowledge"
    },
    accreditation: [
      "Certified Training: Facilitated by qualified lecturers at an ISO Certified Institute",
      "Institute: Apex Institute of Management Services (AIMS)"
    ],
    duration: "08 Weeks",
    badge: "6 days (24 Hrs)"
  },
  "lean-certified-green-belt-practitioner": {
    title: "Certified Lean Green Belt Practitioner",
    subtitle: "Master the advanced tools of operational excellence and lead significant process improvement projects within your organization.",
    image: "/images/academic-pillar/Lean/18.png",
    description: "This practitioner-level course is highly beneficial for graduates and professionals with industrial experience who want to gain in-depth, actionable knowledge in lean manufacturing.",
    courseContent: [
      "Foundations: Detailed study of the LEAN Belt System and an Introduction of Lean Manufacturing",
      "Leadership & Coaching: Training in Coaching & Monitoring and Hoshin Kanri (Strategic Planning)",
      "Advanced Problem Solving: Mastering methods such as 8 Steps and A3 Thinking",
      "Technical Lean Tools: Implementation of Advanced 5S, Job Instruction Training, and Value Stream Mapping",
      "Process Optimization: Strategies for Continuous Flow, BIQ (Built-In Quality), and FMEA (Failure Mode and Effects Analysis)"
    ],
    logistics: {
      duration: "12 Weeks",
      mode: "Online Sessions",
      investment: "95,000 LKR",
      payment: "Flexible installments are available"
    },
    requirements: {
      targetGroup: "Professionals with industrial experience, graduates, and those looking for specialized expertise in lean manufacturing"
    },
    accreditation: [
      "Certified Quality: Join an ISO Certified & TVEC Approved Institute",
      "Institute: Apex Institute of Management Services (AIMS)"
    ],
    duration: "12 Weeks",
    badge: "12 Days (48 Hrs)"
  },
  "lean-certified-black-belt-practitioner": {
    title: "Certified Lean Black Belt Practitioner",
    subtitle: "Master Advanced Leadership & Strategy",
    image: "/images/academic-pillar/Lean/19.png",
    description: "AIMS is a leading training partner dedicated to helping organizations transform into efficient, effective, and financially profitable entities. Developed to bridge the gap between operational and managerial theoretical knowledge, this program focuses on the practical application of advanced theories at a global scale.",
    courseContent: [
      "16 Technical Modules: In-depth exploration of advanced lean engineering and process optimization tools",
      "04 Management Modules: Specialized modules focused on high-level strategic leadership and organizational transformation"
    ],
    logistics: {
      investment: "250,000 LKR"
    },
    requirements: {
      certification: "Must hold a Lean Green Belt level qualification",
      experience: "A satisfactory level of lean tool application experience",
      management: "More than 3 years of management experience"
    },
    whyAims: [
      "Proven Track Record: Training over 2,000 professionals since 2013",
      "Global Reach: Presence in over 5 countries with more than 12 partners and 4 university affiliations",
      "Multilingual Support: Instruction available in 2 languages"
    ],
    duration: "Advanced",
    badge: "14 Days (84 Hrs)"
  }
}

export async function generateStaticParams() {
  return Object.keys(courses).map((slug) => ({
    slug: slug,
  }))
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = courses[params.slug]

  if (!course) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <Link href="/academic-pillar">
            <Button>Back to Courses</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] bg-black">
        <div className="relative w-full h-full">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-green-900/60 to-black/70"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <Badge className="mb-4 bg-green-600 text-white">{course.badge}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{course.title}</h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">{course.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{course.description}</p>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Course Content</h2>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {course.courseContent.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Logistics */}
      {course.logistics && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Course Logistics</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {course.logistics.duration && (
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Clock className="w-5 h-5 text-green-600" />
                        Duration
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{course.logistics.duration}</p>
                    </CardContent>
                  </Card>
                )}

                {course.logistics.mode && (
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Users className="w-5 h-5 text-green-600" />
                        Learning Mode
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{course.logistics.mode}</p>
                    </CardContent>
                  </Card>
                )}

                {course.logistics.investment && (
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <DollarSign className="w-5 h-5 text-green-600" />
                        Investment
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 font-semibold text-lg">{course.logistics.investment}</p>
                      {course.logistics.payment && (
                        <p className="text-gray-600 mt-2">{course.logistics.payment}</p>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Entry Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {course.whyAims ? "Why AIMS?" : "Entry Requirements"}
            </h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {course.requirements?.prerequisites && (
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Prerequisites</p>
                        <p className="text-gray-700">{course.requirements.prerequisites}</p>
                      </div>
                    </div>
                  )}
                  {course.requirements?.certification && (
                    <div className="flex items-start gap-3">
                      <Award className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Certification Level</p>
                        <p className="text-gray-700">{course.requirements.certification}</p>
                      </div>
                    </div>
                  )}
                  {course.requirements?.experience && (
                    <div className="flex items-start gap-3">
                      <Award className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Practical Experience</p>
                        <p className="text-gray-700">{course.requirements.experience}</p>
                      </div>
                    </div>
                  )}
                  {course.requirements?.management && (
                    <div className="flex items-start gap-3">
                      <Award className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Management Experience</p>
                        <p className="text-gray-700">{course.requirements.management}</p>
                      </div>
                    </div>
                  )}
                  {course.requirements?.targetGroup && (
                    <div className="flex items-start gap-3">
                      <Users className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Target Group</p>
                        <p className="text-gray-700">{course.requirements.targetGroup}</p>
                      </div>
                    </div>
                  )}
                  {course.whyAims && (
                    <ul className="space-y-3">
                      {course.whyAims.map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-green-100 text-lg mb-8">
              Enroll now and take the first step towards advancing your career
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Enroll Now
              </Button>
              <Link href="/academic-pillar">
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                  Back to Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
