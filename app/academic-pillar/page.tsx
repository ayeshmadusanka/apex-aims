import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
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
  badgeColor,
}: {
  course: Course;
  href: string;
  badgeColor: string;
}) {
  return (
    <Link href={href} className="group block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">
      <Card className="h-full overflow-hidden border border-gray-200 bg-white transition-shadow duration-200 group-hover:shadow-lg">
        <div className="relative aspect-square bg-gray-100">
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <CardContent className="flex min-h-44 flex-col p-5">
          <Badge className={`mb-3 w-fit text-xs text-white ${badgeColor}`}>
            {course.duration}
          </Badge>
          <h3 className="text-base font-semibold leading-snug text-gray-900 group-hover:text-blue-700">
            {course.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {course.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function AcademicPillarPage() {
  return (
    <div className="min-h-screen bg-white">
      <PillarHero
        image="/images/academic-pillar/Header.webp"
        alt="AIMS Professional Services - Academic Pillar"
        title="Academic Pillar"
      />

      <section className="bg-white border-t border-slate-200 py-14 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <p className="text-base leading-8 text-gray-700 sm:text-lg">
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

      <section className="bg-white py-14 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Our Programs
            </h2>
          </div>

          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="certificate" className="w-full">
              <TabsList className="mb-10 grid h-auto w-full grid-cols-2 gap-2 bg-gray-100 p-2 sm:mb-12 md:grid-cols-4">
                <TabsTrigger
                  value="certificate"
                  className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Certificate
                </TabsTrigger>
                <TabsTrigger
                  value="university"
                  className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  University
                </TabsTrigger>
                <TabsTrigger
                  value="diploma"
                  className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 data-[state=active]:bg-red-600 data-[state=active]:text-white"
                >
                  Diploma
                </TabsTrigger>
                <TabsTrigger
                  value="lean"
                  className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  Lean
                </TabsTrigger>
              </TabsList>

              <TabsContent value="certificate" className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "Certificate in Work Study", slug: "certificate-in-work-study", image: "/images/academic-pillar/Certificate Courses/1.webp", duration: "12 Weeks", description: "Comprehensive training in work measurement and method study techniques" },
                    { title: "Workstudy NVQ Level 4", slug: "workstudy-nvq-level-4", image: "/images/academic-pillar/Certificate Courses/2.webp", duration: "06 Months", description: "NVQ Level 4 qualification in work study methodologies" },
                    { title: "Certificate in Merchandising", slug: "certificate-in-merchandising", image: "/images/academic-pillar/Certificate Courses/3.webp", duration: "10 Weeks", description: "Specialized training in retail merchandising and product management" },
                    { title: "Quality Assurance Management", slug: "quality-assurance-management", image: "/images/academic-pillar/Certificate Courses/4.webp", duration: "03 Months", description: "Quality systems, auditing, and continuous improvement" },
                    { title: "Advanced Certificate in Apparel Production Management", slug: "advanced-certificate-apparel-production-management", image: "/images/academic-pillar/Certificate Courses/5.webp", duration: "03 Months", description: "Advanced apparel production and operational management" },
                    { title: "Pattern Making & Grading", slug: "pattern-making-grading", image: "/images/academic-pillar/Certificate Courses/6.webp", duration: "4 Months", description: "Technical pattern making and size grading techniques" },
                    { title: "Organization Planning & Controlling", slug: "organization-planning-controlling", image: "/images/academic-pillar/Certificate Courses/7.webp", duration: "45 Days", description: "Strategic planning and organizational control systems" },
                  ].map((course) => (
                    <CourseCard
                      key={course.slug}
                      course={course}
                      href={`/academic-pillar/certificate/${course.slug}`}
                      badgeColor="bg-blue-600 border-blue-600"
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="university" className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "Industrial Engineering and Process Excellence", slug: "industrial-engineering-process-excellence", image: "/images/academic-pillar/Courses for University Students/23.webp", duration: "45 days", description: "Industrial engineering principles and process optimization techniques" },
                    { title: "Certified PMTS & Costing Practitioner Program", slug: "certified-pmts-costing-practitioner", image: "/images/academic-pillar/Courses for University Students/24.webp", duration: "50 Hours", description: "Predetermined motion time systems and accurate costing methods" },
                    { title: "Certificate in Merchandising", slug: "certificate-in-merchandising-university", image: "/images/academic-pillar/Courses for University Students/25.webp", duration: "60 days", description: "Specialized training in retail merchandising and product management" },
                    { title: "Certified Lean White Belt Practitioner Program", slug: "certified-lean-white-belt-university", image: "/images/academic-pillar/Courses for University Students/Academic Pillar Images.webp", duration: "90 days", description: "Foundation level lean principles and basic improvement tools" },
                  ].map((course) => (
                    <CourseCard
                      key={course.slug}
                      course={course}
                      href={`/academic-pillar/university/${course.slug}`}
                      badgeColor="bg-green-600 border-green-600"
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="diploma" className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "Diploma in Industrial Engineering", slug: "diploma-in-industrial-engineering", image: "/images/academic-pillar/Diploma Courses/9.webp", duration: "56 Weeks", description: "Advanced industrial engineering and process optimization" },
                    { title: "Diploma in Industrial Management", slug: "diploma-in-industrial-management", image: "/images/academic-pillar/Diploma Courses/10.webp", duration: "56 Weeks", description: "Comprehensive industrial operations and strategic management" },
                    { title: "Diploma in Apparel Production Management", slug: "diploma-in-apparel-production-management", image: "/images/academic-pillar/Diploma Courses/11.webp", duration: "56 Weeks", description: "Advanced apparel production and operational management" },
                    { title: "Diploma in Quality Management", slug: "diploma-in-quality-management", image: "/images/academic-pillar/Diploma Courses/12.webp", duration: "56 Weeks", description: "Advanced quality systems implementation and management" },
                    { title: "Diploma in Human Resource Management", slug: "diploma-in-human-resource-management", image: "/images/academic-pillar/Diploma Courses/13.webp", duration: "56 Weeks", description: "Strategic HR management and organizational development" },
                    { title: "Diploma in Fashion Design", slug: "diploma-in-fashion-design", image: "/images/academic-pillar/Diploma Courses/14.webp", duration: "1-2 Years", description: "Fashion design principles and garment technology" },
                  ].map((course) => (
                    <CourseCard
                      key={course.slug}
                      course={course}
                      href={`/academic-pillar/diploma/${course.slug}`}
                      badgeColor="bg-red-600 border-red-600"
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="lean" className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "Lean Certified White Belt Practitioner", slug: "lean-certified-white-belt-practitioner", image: "/images/academic-pillar/Lean/16.webp", duration: "Flexible", description: "Foundation level lean principles and basic improvement tools" },
                    { title: "Lean Certified Yellow Belt Practitioner", slug: "lean-certified-yellow-belt-practitioner", image: "/images/academic-pillar/Lean/17.webp", duration: "6 days (24 Hrs)", description: "Foundation lean certification with practical application" },
                    { title: "Lean Certified Green Belt Practitioner", slug: "lean-certified-green-belt-practitioner", image: "/images/academic-pillar/Lean/18.webp", duration: "12 Days (48 Hrs)", description: "Intermediate lean practitioner with project leadership skills" },
                    { title: "Lean Certified Black Belt Practitioner", slug: "lean-certified-black-belt-practitioner", image: "/images/academic-pillar/Lean/19.webp", duration: "14 Days (84 Hrs)", description: "Advanced lean expert with change management capabilities" },
                    { title: "Lean Six Sigma Green Belt Practitioner Program for Finance", slug: "lean-six-sigma-green-belt-finance", image: "/images/academic-pillar/Lean/20.webp", duration: "75 days", description: "Lean Six Sigma Green Belt specialized for finance professionals" },
                    { title: "Lean Six Sigma Black Belt Practitioner Program for Finance", slug: "lean-six-sigma-black-belt-finance", image: "/images/academic-pillar/Lean/21.webp", duration: "120 days", description: "Lean Six Sigma Black Belt specialized for finance professionals" },
                  ].map((course) => (
                    <CourseCard
                      key={course.slug}
                      course={course}
                      href={`/academic-pillar/lean/${course.slug}`}
                      badgeColor="bg-green-600 border-green-600"
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
