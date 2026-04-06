"use client";
import { type ReactNode, useState } from "react";
import useSWR from "swr";
import { AnimatePresence, motion } from "framer-motion";
import { LuCalendar, LuMinus, LuPlus, LuTimer } from "react-icons/lu";
import Link from "next/link";

import {
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ScrollToTopButton,
} from "@/components";
import { weeklyClasses } from "@/constants/schedules";

import { fetchHolidays, type HolidayItem } from "@/libs/brasilapi";
import { useTranslation } from "@/context";

export default function Schedule() {
  const { translations: t } = useTranslation();
  const scheduleSubjects = t.schedules.scheduleSubjects as Record<
    string,
    string
  >;
  const sessionDetails = t.schedules.sessionDetails as Record<string, string>;
  const formationLevels = t.schedules.formationLevels as {
    title: string;
    subtitle: string;
    items: { title: string; description: string; navigation: string }[];
  };
  const { data: holidays = [] } = useSWR("holidays", fetchHolidays, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 86400000,
  });

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(),
  );
  const [isFormationOpen, setIsFormationOpen] = useState(false);

  const handleSelectDate = (date: Date | undefined) => {
    if (date !== undefined) setSelectedDate(date);
  };

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Holiday",
  ] as const;

  const selectedDayName = selectedDate
    ? dayNames[selectedDate.getDay()]
    : dayNames[new Date().getDay()];
  const getDayLabel = (day: string) =>
    t.schedules.days[day as keyof typeof t.schedules.days] || day;

  const selectedHoliday = selectedDate
    ? holidays.find((h: HolidayItem) => {
        const [year, month, day] = h.date.split("-").map(Number);
        const holidayDate = new Date(year, month - 1, day);
        return (
          holidayDate.getDate() === selectedDate.getDate() &&
          holidayDate.getMonth() === selectedDate.getMonth() &&
          holidayDate.getFullYear() === selectedDate.getFullYear()
        );
      })
    : undefined;

  const weekDayIndex = selectedDate?.getDay();
  const isSunday = weekDayIndex === 0;

  const isHoliday = Boolean(selectedHoliday);
  const hasHolidayClasses = weeklyClasses.Holiday?.length > 0;

  const useHolidaySchedule = isHoliday && hasHolidayClasses && !isSunday;

  const classesForDay = useHolidaySchedule
    ? weeklyClasses.Holiday
    : weeklyClasses[selectedDayName] || [];
  const sortedClassesForDay = [...classesForDay].sort((a, b) =>
    a.startTime.localeCompare(b.startTime),
  );

  const currentYear = new Date().getFullYear();
  const modifiers = {
    holiday: holidays.map((h: HolidayItem) => {
      const [year, month, day] = h.date.split("-").map(Number);
      const holidayDate = new Date(year, month - 1, day);
      return holidayDate;
    }),
  };
  const formationItems: ReactNode = (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
      {formationLevels.items.map((item) => (
        <Link
          key={item.title}
          href={item.navigation}
          prefetch={false}
          className="block rounded-xl border border-foreground/15 bg-background/60 p-4 transition-all hover:bg-primary-ja/30 hover:border-foreground/25 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-ja focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
          <p className="text-sm text-foreground/80">{item.description}</p>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-linear-to-b from-primary-ja via-primary-ja-opacity to-background dark:bg-background text-foreground">
      <main className="pt-42 pb-12 lg:pb-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-dark-theme">
            {t.schedules.title}
          </h1>
          <p className="lg:text-xl text-center text-dark-theme mb-2 lg:mb-8 mx-4 lg:mx-auto">
            {t.schedules.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4 lg:mb-6">
            <a
              href="#horarios"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-full text-sm font-semibold bg-white/95 text-dark-theme shadow-md ring-1 ring-black/10 hover:bg-white hover:shadow-lg transition-all dark:bg-card dark:text-foreground dark:ring-border/40 dark:hover:bg-card/90"
            >
              {t.schedules.scheduleAnchors.viewSchedule}
            </a>
            <a
              href="#formacao"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-full text-sm font-semibold bg-white/95 text-dark-theme shadow-md ring-1 ring-black/10 hover:bg-white hover:shadow-lg transition-all dark:bg-card dark:text-foreground dark:ring-border/40 dark:hover:bg-card/90"
            >
              {t.schedules.scheduleAnchors.formationHelp}
            </a>
          </div>
          <div id="horarios" className="grid gap-2 lg:gap-8 lg:grid-cols-5">
            <Card className="rounded-2xl col-span-full lg:col-span-2 border-foreground/10 dark:border-white/5 shadow-none bg-card/95 backdrop-blur-sm m-2 lg:m-0">
              <CardHeader className="rounded-t-2xl border-b border-foreground/10 bg-linear-to-r from-card to-card/90">
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <LuCalendar className="h-5 w-5 text-foreground" />
                  {t.schedules.selectDay}
                </CardTitle>
                <CardDescription className="text-foreground">
                  {t.schedules.selectDayDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center pt-6">
                <div className="bg-card 2xl:p-11 p-0 rounded-xl overflow-x-auto overflow-hidden">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleSelectDate}
                    className="rounded-md border-0 shadow-none pointer-events-auto max-w-fit scale-100 2xl:scale-[1.3] overflow-hidden"
                    modifiers={modifiers}
                    startMonth={new Date(currentYear, 0)}
                    endMonth={new Date(currentYear, 11)}
                    defaultMonth={new Date()}
                  />
                </div>
              </CardContent>
            </Card>

            <div className="col-span-full lg:col-span-3 ">
              <Card
                className={
                  selectedHoliday
                    ? "rounded-2xl border-2 border-primary-ja bg-card/90 backdrop-blur-sm shadow-none m-2 lg:m-0"
                    : "rounded-2xl bg-card/90 backdrop-blur-sm shadow-none border-foreground/10 dark:border-white/5 m-2 lg:m-0"
                }
              >
                <CardHeader
                  className={
                    selectedHoliday
                      ? "rounded-t-2xl border-b border-foreground/10 bg-linear-to-r from-primary-ja to-card dark:from-card dark:to-card"
                      : "rounded-t-2xl border-b border-foreground/10 bg-linear-to-r from-foreground/5 to-card"
                  }
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-foreground">
                      {useHolidaySchedule && selectedHoliday ? (
                        <span className="flex items-center gap-2">
                          <LuCalendar className="h-5 w-5 text-foreground" />
                          <span className="text-foreground">
                            {selectedHoliday.name}
                          </span>
                        </span>
                      ) : (
                        <span>
                          {t.schedules.classesFor}{" "}
                          {getDayLabel(selectedDayName)}
                        </span>
                      )}
                    </CardTitle>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary-ja border border-dark-theme text-dark-theme">
                      {classesForDay.length}{" "}
                      {selectedHoliday
                        ? t.common.labels.specialEvent
                        : t.common.labels.availableClasses}{" "}
                    </span>
                  </div>
                  <CardDescription>
                    {selectedHoliday ? (
                      <>
                        <span className="flex items-center text-foreground text-lg font-semibold">
                          {selectedHoliday.name} -{" "}
                          {t.schedules.specialHolidaySchedule}
                        </span>
                        <br />
                        <span
                          className="inline-block mt-1.5 text-xs font-medium px-2.5 py-1 rounded-full capitalize bg-open-guard-theme/15 text-open-guard-theme border border-open-guard-theme/40 dark:bg-open-guard-theme/20 dark:border-open-guard-theme/50"
                          aria-label={`Tipo: ${selectedHoliday.type}`}
                        >
                          {selectedHoliday.type === "national"
                            ? t.schedules.nationalHoliday
                            : selectedHoliday.type === "municipal"
                              ? t.schedules.municipalHoliday
                              : t.schedules.regionalHoliday}
                        </span>
                      </>
                    ) : (
                      <span className="text-foreground">
                        {t.schedules.showingClasses}{" "}
                        {getDayLabel(selectedDayName)}
                      </span>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  {classesForDay.length > 0 ? (
                    <div className="space-y-4">
                      {sortedClassesForDay.map((classSession) => (
                        <div key={classSession.id}>
                          <Link href={classSession.navigation}>
                            <div
                              className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-foreground/5 hover:bg-primary-ja/30 border border-foreground/20 transition-all shadow-sm hover:shadow`}
                            >
                              <div className="mb-2 sm:mb-0">
                                <h3 className={`font-semibold text-foreground`}>
                                  {scheduleSubjects[classSession.subject] ||
                                    classSession.subject}
                                </h3>
                                {classSession.detailKey &&
                                  sessionDetails[classSession.detailKey] && (
                                    <p className="text-xs text-foreground/80 mt-1">
                                      {sessionDetails[classSession.detailKey]}
                                    </p>
                                  )}
                                <p className="text-sm text-foreground">
                                  {classSession.instructor === "Fabiano Índio"
                                    ? t.schedules.professor
                                    : classSession.instructor ===
                                        "Monique Valadão"
                                      ? t.schedules.professora
                                      : t.schedules.instructor}
                                  <b className="text-foreground text-sm">
                                    {classSession.instructor}
                                  </b>
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <LuTimer className="h-5 w-5 text-foreground" />
                                <p
                                  className={`${
                                    selectedHoliday
                                      ? "text-foreground border-foreground/20"
                                      : "text-foreground"
                                  } flex items-center gap-1 text-xl`}
                                >
                                  {classSession.startTime} -{" "}
                                  {classSession.endTime}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-10 text-center">
                      <div className="bg-primary-ja p-4 rounded-full mb-4">
                        <LuCalendar className="h-10 w-10 text-foreground" />
                      </div>
                      <p className="text-foreground font-medium mb-3">
                        {selectedHoliday
                          ? t.schedules.noClassesHoliday
                              .replace("{{day}}", getDayLabel(selectedDayName))
                              .replace("{{holidayName}}", selectedHoliday.name)
                          : t.schedules.noClassesDay}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
          <div id="formacao" className="pt-6 lg:pt-8 pb-12 lg:pb-0">
            <section className="hidden lg:block mx-2 lg:mx-0 mb-8 lg:mb-10 rounded-2xl border border-foreground/10 bg-card/90 backdrop-blur-sm p-5 lg:p-7">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                {formationLevels.title}
              </h2>
              <p className="text-foreground/80 mb-5">
                {formationLevels.subtitle}
              </p>
              {formationItems}
            </section>

            <section className="block lg:hidden mx-2 lg:mx-0 mb-8 rounded-2xl border border-foreground/10 bg-card/90 backdrop-blur-sm p-3">
              <button
                type="button"
                aria-expanded={isFormationOpen}
                onClick={() => setIsFormationOpen((prev) => !prev)}
                className="w-full cursor-pointer select-none rounded-xl px-2 py-2"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="text-left">
                    <h2 className="text-2xl font-bold text-foreground leading-tight">
                      {formationLevels.title}
                    </h2>
                    <p className="text-sm text-foreground/80 mt-1">
                      {t.schedules.scheduleAnchors.formationSummary}
                    </p>
                  </div>
                  <span className="inline-flex items-center justify-center p-2 rounded-full border border-foreground/20 text-foreground/80">
                    {isFormationOpen ? (
                      <LuMinus className="h-7 w-7" strokeWidth={2.25} />
                    ) : (
                      <LuPlus className="h-7 w-7" strokeWidth={2.25} />
                    )}
                  </span>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isFormationOpen && (
                  <motion.div
                    key="formation-mobile-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 px-2 pb-2">
                      <p className="text-foreground/80 mb-4">
                        {formationLevels.subtitle}
                      </p>
                      {formationItems}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>
          </div>
        </div>
      </main>

      <ScrollToTopButton />
    </div>
  );
}
