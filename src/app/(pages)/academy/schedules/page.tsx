"use client";
import { useState } from "react";
import useSWR from "swr";
import { LuCalendar, LuTimer } from "react-icons/lu";
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
  const { data: holidays = [] } = useSWR("holidays", fetchHolidays, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 86400000,
  });

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(),
  );

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

  const currentYear = new Date().getFullYear();
  const modifiers = {
    holiday: holidays.map((h: HolidayItem) => {
      const [year, month, day] = h.date.split("-").map(Number);
      const holidayDate = new Date(year, month - 1, day);
      return holidayDate;
    }),
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-primary-ja via-primary-ja-opacity to-background dark:bg-background text-foreground">
      <main className="pt-42 pb-12 lg:pb-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-dark-theme">
            {t.schedules.title}
          </h1>
          <p className="lg:text-xl text-center text-dark-theme mb-12 lg:mb-20 mx-4 lg:mx-auto">
            {t.schedules.description}
          </p>

          <div className="grid gap-2 lg:gap-8 lg:grid-cols-5 pt-8">
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

            <div className="col-span-full lg:col-span-3 pb-12 lg:pb-0">
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
                      {classesForDay.map((classSession) => (
                        <div key={classSession.id}>
                          <Link href={classSession.navigation}>
                            <div
                              className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-foreground/5 hover:bg-primary-ja/30 border border-foreground/20 transition-all shadow-sm hover:shadow`}
                            >
                              <div className="mb-2 sm:mb-0">
                                <h3 className={`font-semibold text-foreground`}>
                                  {(
                                    t.schedules.scheduleSubjects as Record<
                                      string,
                                      string
                                    >
                                  )[classSession.subject] ||
                                    classSession.subject}
                                </h3>
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
        </div>
      </main>

      <ScrollToTopButton />
    </div>
  );
}
