import { Award, CalendarDays, CheckCircle2, Clock3, DollarSign, GraduationCap, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type CourseLogistics = {
  duration?: string;
  schedule?: string;
  mode?: string;
  facilitation?: string;
  investment?: string;
  payment?: string;
  contact?: string;
};

type CourseRequirements = {
  academic?: string;
  professional?: string;
  qualification?: string;
  targetGroup?: string;
  prerequisites?: string;
  certification?: string;
  experience?: string;
  management?: string;
};

export type AcademicCourse = {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  courseContent: string[];
  duration: string;
  badge: string;
  logistics?: CourseLogistics;
  requirements?: CourseRequirements;
  accreditation?: string | string[];
  certification?: string | string[];
  whyAims?: string[];
};

type DetailItem = {
  label: string;
  value: string;
  icon: typeof Clock3;
};

function asList(value: string | string[] | undefined) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

export default function AcademicCourseDetail({ course }: { course?: AcademicCourse }) {
  if (!course) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-white px-4">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-slate-900">Course Not Found</h1>
          <Button asChild className="mt-5 bg-[#263f6b] hover:bg-[#1f3459]">
            <Link href="/academic-pillar">Back to Courses</Link>
          </Button>
        </div>
      </main>
    );
  }

  const logistics: DetailItem[] = [
    { label: "Duration", value: course.logistics?.duration ?? course.duration, icon: Clock3 },
    { label: "Schedule", value: course.logistics?.schedule ?? "", icon: CalendarDays },
    { label: "Learning Mode", value: course.logistics?.mode ?? "", icon: Users },
    { label: "Facilitation", value: course.logistics?.facilitation ?? "", icon: GraduationCap },
    { label: "Investment", value: course.logistics?.investment ?? "", icon: DollarSign },
    { label: "Payment", value: course.logistics?.payment ?? "", icon: DollarSign },
    { label: "Contact", value: course.logistics?.contact ?? "", icon: CalendarDays },
  ].filter((item) => item.value.trim().length > 0);

  const requirements: DetailItem[] = [
    { label: "Academic Requirement", value: course.requirements?.academic ?? "", icon: GraduationCap },
    { label: "Professional Experience", value: course.requirements?.professional ?? "", icon: Award },
    { label: "Minimum Qualification", value: course.requirements?.qualification ?? "", icon: GraduationCap },
    { label: "Target Group", value: course.requirements?.targetGroup ?? "", icon: Users },
    { label: "Prerequisites", value: course.requirements?.prerequisites ?? "", icon: CheckCircle2 },
    { label: "Certification Level", value: course.requirements?.certification ?? "", icon: Award },
    { label: "Practical Experience", value: course.requirements?.experience ?? "", icon: Award },
    { label: "Management Experience", value: course.requirements?.management ?? "", icon: Award },
  ].filter((item) => item.value.trim().length > 0);

  const recognitions = [
    ...asList(course.accreditation).map((value) => ({ label: "Accreditation", value })),
    ...asList(course.certification).map((value) => ({ label: "Certification", value })),
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="relative isolate flex min-h-[290px] items-center justify-center overflow-hidden bg-[#15233a] px-4 py-14 sm:min-h-[360px] md:min-h-[420px]">
        <Image src={course.image} alt="" fill priority sizes="100vw" className="object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-[#15233a]/70" />
        <div className="relative mx-auto w-full max-w-5xl text-center">
          <Badge className="mb-5 border border-white/30 bg-white/15 px-4 py-1.5 text-sm text-white backdrop-blur-sm">
            {course.badge}
          </Badge>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-white drop-shadow sm:text-4xl md:text-5xl">
            {course.title}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-pretty text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
            {course.subtitle}
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Course Overview</h2>
          <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">{course.description}</p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50/60 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Course Content</h2>
          <Card className="mt-7 border-slate-200 shadow-sm">
            <CardContent className="p-5 sm:p-7">
              <ul className="space-y-4">
                {course.courseContent.map((item, index) => (
                  <li key={`${index}-${item}`} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[#263f6b]" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {logistics.length > 0 && (
        <section className="border-t border-slate-200 bg-white px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Course Logistics</h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {logistics.map(({ label, value, icon: Icon }) => (
                <Card key={label} className="border-slate-200 shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-base font-semibold text-slate-900">
                      <Icon aria-hidden="true" className="size-5 text-[#263f6b]" />
                      {label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-relaxed text-slate-700">{value}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {requirements.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50/60 px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Entry Requirements</h2>
            <Card className="mt-7 border-slate-200 shadow-sm">
              <CardContent className="grid gap-5 p-5 sm:grid-cols-2 sm:p-7">
                {requirements.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-start gap-3">
                    <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[#263f6b]" />
                    <div>
                      <p className="font-semibold text-slate-900">{label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-700">{value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {course.whyAims && course.whyAims.length > 0 && (
        <section className="border-t border-slate-200 bg-white px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Why AIMS?</h2>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {course.whyAims.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 p-5 text-slate-700">
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[#263f6b]" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {recognitions.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50/60 px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Recognition and Accreditation</h2>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {recognitions.map(({ label, value }, index) => (
                <li key={`${label}-${index}`} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 text-slate-700">
                  <Award aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[#263f6b]" />
                  <span className="leading-relaxed">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="bg-[#263f6b] px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Ready to Start Your Journey?</h2>
          <p className="mt-3 text-base leading-relaxed text-white/85 sm:text-lg">
            Enroll now and take the first step towards advancing your career
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-white text-[#263f6b] hover:bg-slate-100">
              <Link href="/contact">Enroll Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
              <Link href="/academic-pillar">Back to Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
