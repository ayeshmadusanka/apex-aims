import { ArrowRight, Clock3, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionLabel from "@/components/section-label";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PillarHero } from "@/components/pillar-hero";
type Course = {
  title: string;
  slug: string;
  image: string;
  duration: string;
  description: string;
};

function CourseCard({
  course,
  href,
}: {
  course: Course;
  href: string;
}) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-square overflow-hidden bg-white">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain"
        />
      </div>
      <CardContent className="flex flex-1 flex-col p-5">
        <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
          <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
          {course.duration}
        </span>
        <h3 className="text-base font-semibold leading-snug text-slate-900">
          {course.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {course.description}
        </p>
        <Button
          asChild
          className="mt-5 h-11 w-full rounded-lg bg-[#263f6b] font-semibold text-white hover:bg-[#1e3356]"
        >
          <Link href={href} aria-label={`View details for ${course.title}`}>
            View details <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function AcademicPillarPage() {
  return (
    <div className="min-h-screen bg-white">
      <PillarHero
        image="/images/academic-pillar/header.webp"
        alt="AIMS Professional Services - Academic Pillar"
        title="Academic Pillar"
      />

      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-8 max-w-3xl text-center">
            <SectionLabel icon={GraduationCap}>Study at AIMS</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Practical learning for <span className="text-[#263f6b]">career growth</span>
            </h2>
          </header>
          <div className="mx-auto max-w-3xl">
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
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

      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <SectionLabel icon={GraduationCap}>Browse courses</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Our <span className="text-[#263f6b]">Programs</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Explore certificate, university, diploma and Lean programmes.
            </p>
          </header>

          <div className="mx-auto max-w-6xl">
            <Tabs defaultValue="certificate" className="w-full">
              <TabsList className="mb-8 grid h-auto w-full grid-cols-2 gap-2 rounded-xl border border-slate-200 bg-slate-50 p-1.5 sm:mb-10 md:grid-cols-4">
                <TabsTrigger
                  value="certificate"
                  className="min-h-11 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 data-[state=active]:bg-[#263f6b] data-[state=active]:text-white data-[state=active]:shadow-sm"
                >
                  Certificate
                </TabsTrigger>
                <TabsTrigger
                  value="university"
                  className="min-h-11 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 data-[state=active]:bg-[#263f6b] data-[state=active]:text-white data-[state=active]:shadow-sm"
                >
                  University
                </TabsTrigger>
                <TabsTrigger
                  value="diploma"
                  className="min-h-11 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 data-[state=active]:bg-[#263f6b] data-[state=active]:text-white data-[state=active]:shadow-sm"
                >
                  Diploma
                </TabsTrigger>
                <TabsTrigger
                  value="lean"
                  className="min-h-11 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 data-[state=active]:bg-[#263f6b] data-[state=active]:text-white data-[state=active]:shadow-sm"
                >
                  Lean
                </TabsTrigger>
              </TabsList>

              <TabsContent value="certificate" className="space-y-8">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { title: "Certificate in Work Study", slug: "certificate-in-work-study", image: "/images/academic-pillar/certificate-courses/certificate-in-work-study.webp", duration: "12 Weeks", description: "Comprehensive training in work measurement and method study techniques" },
                    { title: "Workstudy NVQ Level 4", slug: "workstudy-nvq-level-4", image: "/images/academic-pillar/certificate-courses/workstudy-nvq-level-4.webp", duration: "06 Months", description: "NVQ Level 4 qualification in work study methodologies" },
                    { title: "Certificate in Merchandising", slug: "certificate-in-merchandising", image: "/images/academic-pillar/certificate-courses/certificate-in-merchandising.webp", duration: "10 Weeks", description: "Specialized training in retail merchandising and product management" },
                    { title: "Quality Assurance Management", slug: "quality-assurance-management", image: "/images/academic-pillar/certificate-courses/quality-assurance-management.webp", duration: "03 Months", description: "Quality systems, auditing, and continuous improvement" },
                    { title: "Advanced Certificate in Apparel Production Management", slug: "advanced-certificate-apparel-production-management", image: "/images/academic-pillar/certificate-courses/advanced-certificate-apparel-production-management.webp", duration: "03 Months", description: "Advanced apparel production and operational management" },
                    { title: "Pattern Making & Grading", slug: "pattern-making-grading", image: "/images/academic-pillar/certificate-courses/pattern-making-and-grading.webp", duration: "4 Months", description: "Technical pattern making and size grading techniques" },
                    { title: "Organization Planning & Controlling", slug: "organization-planning-controlling", image: "/images/academic-pillar/certificate-courses/organization-planning-and-controlling.webp", duration: "45 Days", description: "Strategic planning and organizational control systems" },
                  ].map((course) => (
                    <CourseCard
                      key={course.slug}
                      course={course}
                      href={`/academic-pillar/certificate/${course.slug}`}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="university" className="space-y-8">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { title: "Industrial Engineering and Process Excellence", slug: "industrial-engineering-process-excellence", image: "/images/academic-pillar/university-courses/industrial-engineering-process-excellence.webp", duration: "45 days", description: "Industrial engineering principles and process optimization techniques" },
                    { title: "Certified PMTS & Costing Practitioner Program", slug: "certified-pmts-costing-practitioner", image: "/images/academic-pillar/university-courses/certified-pmts-costing-practitioner.webp", duration: "50 Hours", description: "Predetermined motion time systems and accurate costing methods" },
                    { title: "Certificate in Merchandising", slug: "certificate-in-merchandising-university", image: "/images/academic-pillar/university-courses/certificate-in-merchandising.webp", duration: "60 days", description: "Specialized training in retail merchandising and product management" },
                    { title: "Certified Lean White Belt Practitioner Program", slug: "certified-lean-white-belt-university", image: "/images/academic-pillar/university-courses/lean-white-belt.webp", duration: "90 days", description: "Foundation level lean principles and basic improvement tools" },
                  ].map((course) => (
                    <CourseCard
                      key={course.slug}
                      course={course}
                      href={`/academic-pillar/university/${course.slug}`}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="diploma" className="space-y-8">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { title: "Diploma in Industrial Engineering", slug: "diploma-in-industrial-engineering", image: "/images/academic-pillar/diploma-courses/industrial-engineering.webp", duration: "56 Weeks", description: "Advanced industrial engineering and process optimization" },
                    { title: "Diploma in Industrial Management", slug: "diploma-in-industrial-management", image: "/images/academic-pillar/diploma-courses/industrial-management.webp", duration: "56 Weeks", description: "Comprehensive industrial operations and strategic management" },
                    { title: "Diploma in Apparel Production Management", slug: "diploma-in-apparel-production-management", image: "/images/academic-pillar/diploma-courses/apparel-production-management.webp", duration: "56 Weeks", description: "Advanced apparel production and operational management" },
                    { title: "Diploma in Quality Management", slug: "diploma-in-quality-management", image: "/images/academic-pillar/diploma-courses/quality-management.webp", duration: "56 Weeks", description: "Advanced quality systems implementation and management" },
                    { title: "Diploma in Human Resource Management", slug: "diploma-in-human-resource-management", image: "/images/academic-pillar/diploma-courses/human-resource-management.webp", duration: "56 Weeks", description: "Strategic HR management and organizational development" },
                    { title: "Diploma in Fashion Design", slug: "diploma-in-fashion-design", image: "/images/academic-pillar/diploma-courses/fashion-design.webp", duration: "1-2 Years", description: "Fashion design principles and garment technology" },
                  ].map((course) => (
                    <CourseCard
                      key={course.slug}
                      course={course}
                      href={`/academic-pillar/diploma/${course.slug}`}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="lean" className="space-y-8">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { title: "Lean Certified White Belt Practitioner", slug: "lean-certified-white-belt-practitioner", image: "/images/academic-pillar/lean/white-belt.webp", duration: "Flexible", description: "Foundation level lean principles and basic improvement tools" },
                    { title: "Lean Certified Yellow Belt Practitioner", slug: "lean-certified-yellow-belt-practitioner", image: "/images/academic-pillar/lean/yellow-belt.webp", duration: "6 days (24 Hrs)", description: "Foundation lean certification with practical application" },
                    { title: "Lean Certified Green Belt Practitioner", slug: "lean-certified-green-belt-practitioner", image: "/images/academic-pillar/lean/green-belt.webp", duration: "12 Days (48 Hrs)", description: "Intermediate lean practitioner with project leadership skills" },
                    { title: "Lean Certified Black Belt Practitioner", slug: "lean-certified-black-belt-practitioner", image: "/images/academic-pillar/lean/black-belt.webp", duration: "14 Days (84 Hrs)", description: "Advanced lean expert with change management capabilities" },
                    { title: "Lean Six Sigma Green Belt Practitioner Program for Finance", slug: "lean-six-sigma-green-belt-finance", image: "/images/academic-pillar/lean/six-sigma-green-belt-finance.webp", duration: "75 days", description: "Lean Six Sigma Green Belt specialized for finance professionals" },
                    { title: "Lean Six Sigma Black Belt Practitioner Program for Finance", slug: "lean-six-sigma-black-belt-finance", image: "/images/academic-pillar/lean/six-sigma-black-belt-finance.webp", duration: "120 days", description: "Lean Six Sigma Black Belt specialized for finance professionals" },
                  ].map((course) => (
                    <CourseCard
                      key={course.slug}
                      course={course}
                      href={`/academic-pillar/lean/${course.slug}`}
                    />
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
