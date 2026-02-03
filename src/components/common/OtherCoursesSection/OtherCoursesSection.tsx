"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { useTranslation } from "@/context";

const COURSES = [
  {
    id: "drills" as const,
    href: "/courses/drills",
    src: "/images/courses/indio-curso-drills.webp",
    titleKey: "courseDrillsTitle" as const,
    descKey: "courseDrillsDesc" as const,
  },
  {
    id: "halfguard" as const,
    href: "/courses/halfguard",
    src: "/images/courses/indio-curso-meia-guarda.webp",
    titleKey: "courseHalfGuardTitle" as const,
    descKey: "courseHalfGuardDesc" as const,
  },
  {
    id: "nogi" as const,
    href: "/courses/nogi",
    src: "/images/courses/indio-curso-nogi.webp",
    titleKey: "courseNogiTitle" as const,
    descKey: "courseNogiDesc" as const,
  },
  {
    id: "openguard" as const,
    href: "/courses/openguard",
    src: "/images/courses/indio-curso-guarda-aberta.webp",
    titleKey: "courseOpenGuardTitle" as const,
    descKey: "courseOpenGuardDesc" as const,
  },
] as const;

export type CourseId = (typeof COURSES)[number]["id"];

export function OtherCoursesSection({
  currentCourse,
}: {
  currentCourse: CourseId;
}) {
  const { translations: t } = useTranslation();
  const otherCourses = COURSES.filter((c) => c.id !== currentCourse);

  return (
    <section
      id="outros-cursos"
      className="py-8 lg:py-16 bg-background border-t border-foreground/10"
    >
      <div className="max-w-6xl mx-4 lg:mx-auto">
        <h2 className="text-3xl text-foreground font-semibold text-center mb-2">
          {t.common.otherCourses.title}
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          {t.common.otherCourses.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherCourses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <Link
                href={course.href}
                className="flex flex-col h-full rounded-xl overflow-hidden border border-foreground/20 bg-background shadow-sm hover:shadow-md hover:border-foreground/30 transition-all"
              >
                <div className="relative aspect-video w-full bg-muted">
                  <Image
                    src={course.src}
                    alt={t.common.nav[course.titleKey]}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {t.common.nav[course.titleKey]}
                  </h3>
                  <p className="text-sm text-muted-foreground flex-1">
                    {t.common.nav[course.descKey]}
                  </p>
                  <span className="text-sm font-medium text-foreground mt-2 inline-flex items-center gap-1">
                    {t.common.buttons.learnMore}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
