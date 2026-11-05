import {
  ArrowLeft,
  ArrowRight,
  Award,
  CalendarDays,
  CheckCircle2,
  Clock3,
  CreditCard,
  DollarSign,
  GraduationCap,
  Phone,
  Users,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
  subtitle?: string;
  image: string;
  description: string;
  courseContent?: string[];
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
  icon: LucideIcon;
};

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <header className="mb-7">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#263f6b]">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
    </header>
  );
}

function asList(value: string | string[] | undefined) {
  if (!value) return [];
  return (Array.isArray(value) ? value : [value]).filter(
    (item) => item.trim().length > 0,
  );
}

export default function AcademicCourseDetail({ course }: { course?: AcademicCourse }) {
  if (!course) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-white px-4">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-slate-900">Course Not Found</h1>
          <Button asChild className="mt-5 bg-[#263f6b] hover:bg-[#1f3459]">
            <Link href="/academic-pillar">Back to Courses</Link>
          </Button>
        </div>
      </div>
    );
  }

  const overviewDetails: DetailItem[] = [
    { label: "Duration", value: course.logistics?.duration ?? course.duration, icon: Clock3 },
    { label: "Schedule", value: course.logistics?.schedule ?? "", icon: CalendarDays },
    { label: "Learning Mode", value: course.logistics?.mode ?? "", icon: Users },
    { label: "Facilitation", value: course.logistics?.facilitation ?? "", icon: GraduationCap },
    { label: "Investment", value: course.logistics?.investment ?? "", icon: DollarSign },
    { label: "Payment", value: course.logistics?.payment ?? "", icon: CreditCard },
    { label: "Contact", value: course.logistics?.contact ?? "", icon: Phone },
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
    <div className="min-h-screen bg-white text-slate-900">
      <section className="relative isolate flex min-h-[320px] w-full items-center justify-center overflow-hidden bg-[#15233a] px-5 py-14 sm:aspect-[18/5] sm:min-h-[300px] sm:px-8 md:min-h-[360px]">
        <Image src="/images/academic-pillar/header.webp" alt="" fill priority sizes="100vw" className="object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#15233a]/90 via-[#15233a]/65 to-[#15233a]/40" />
        <div className="relative mx-auto w-full max-w-5xl text-center">
          <Badge className="mb-5 border border-white/35 bg-white/15 px-4 py-1.5 text-sm text-white backdrop-blur-sm">
            {course.badge}
          </Badge>
          <h1 className="mx-auto max-w-4xl text-balance text-3xl font-semibold tracking-tight text-white drop-shadow sm:text-4xl md:text-5xl">
            {course.title}
          </h1>
          {course.subtitle && (
            <p className="mx-auto mt-4 max-w-3xl text-pretty text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
              {course.subtitle}
            </p>
          )}
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionHeading eyebrow="Programme overview" title="Practical learning for your next step" />
            <p className="text-base leading-8 text-slate-600 sm:text-lg">{course.description}</p>
          </div>
          <div className="mx-auto w-full max-w-xl lg:max-w-none">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
              <Image
                src={course.image}
                alt={`${course.title} course image`}
                width={1000}
                height={1000}
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="aspect-square h-auto w-full rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {requirements.length > 0 && (
        <section className="border-t border-slate-200 bg-white px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <SectionHeading eyebrow="Before you apply" title="Entry requirements" />
            <dl className="grid gap-x-10 sm:grid-cols-2">
              {requirements.map(({ label, value, icon: Icon }) => (
                <div key={label} className="border-t border-slate-200 py-5">
                  <dt className="flex items-center gap-2 text-sm font-medium text-slate-500">
                    <Icon aria-hidden="true" className="size-4 text-[#263f6b]" />
                    {label}
                  </dt>
                  <dd className="mt-2 text-base leading-relaxed text-slate-700">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {course.courseContent && course.courseContent.length > 0 && (
        <section className="border-t border-slate-200 bg-white px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <SectionHeading eyebrow="What you will learn" title="Course content" />
            <ol className="divide-y divide-slate-200 border-y border-slate-200">
              {course.courseContent.map((item, index) => (
                <li key={`${index}-${item}`} className="flex items-start gap-4 py-5 sm:gap-6">
                  <span className="mt-0.5 min-w-8 font-mono text-sm font-semibold tabular-nums text-[#263f6b]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-base leading-7 text-slate-700">{item}</span>
                  <CheckCircle2 aria-hidden="true" className="mt-1 size-5 shrink-0 text-[#263f6b]" />
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {overviewDetails.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50/60 px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <SectionHeading eyebrow="Course details" title="Plan your study" />
            <dl className="divide-y divide-slate-200 border-y border-slate-200">
              {overviewDetails.map(({ label, value, icon: Icon }) => (
                <div key={label} className="grid gap-2 py-4 sm:grid-cols-[minmax(12rem,0.7fr)_1.3fr] sm:gap-6">
                  <dt className="flex items-center gap-3 text-sm font-semibold text-[#263f6b]">
                    <Icon aria-hidden="true" className="size-5 shrink-0" />
                    {label}
                  </dt>
                  <dd className="pl-8 text-sm leading-relaxed text-slate-700 sm:pl-0">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {course.whyAims && course.whyAims.length > 0 && (
        <section className="border-t border-slate-200 bg-white px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <SectionHeading eyebrow="Learn with AIMS" title="Why AIMS?" />
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {course.whyAims.map((item) => (
                <li key={item} className="flex items-start gap-3 border-t border-slate-200 py-5 text-slate-700">
                  <CheckCircle2 aria-hidden="true" className="mt-1 size-5 shrink-0 text-[#263f6b]" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {recognitions.length > 0 && (
        <section className="border-t border-slate-200 bg-white px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <SectionHeading eyebrow="Quality and recognition" title="Accreditation and certification" />
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {recognitions.map(({ label, value }, index) => (
                <li key={`${label}-${index}`} className="flex items-start gap-3 border-t border-slate-200 py-5">
                  <Award aria-hidden="true" className="mt-1 size-5 shrink-0 text-[#263f6b]" />
                  <div>
                    <p className="text-sm font-medium text-slate-500">{label}</p>
                    <p className="mt-1 leading-relaxed text-slate-700">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="border-t border-slate-200 bg-white px-5 py-12 text-slate-900 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#263f6b]">Take your next step</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Ready to start your journey?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Enroll now and take the first step towards advancing your career
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-[#263f6b] text-white hover:bg-[#1e3356]">
              <Link href="/contact">
                Enroll Now <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#263f6b]/40 bg-white text-[#263f6b] hover:bg-slate-100 hover:text-[#1e3356]">
              <Link href="/academic-pillar">
                <ArrowLeft aria-hidden="true" /> Back to Courses
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
