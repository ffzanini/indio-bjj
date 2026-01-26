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

import { fetchHolidays } from "@/libs/brasilapi";
import { getWeekDay } from "@/libs/date";
interface Holiday {
  date: string;
  name: string;
  type: string;
  level: string;
}

export default function Schedule() {
  const { data: holidays = [] } = useSWR("holidays", fetchHolidays);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(),
  );
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Holiday",
  ];

  const selectedDayName = selectedDate
    ? dayNames[selectedDate.getDay()]
    : dayNames[new Date().getDay()];

  const selectedHoliday = selectedDate
    ? holidays.find((h: Holiday) => {
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

  const modifiers = {
    holiday: holidays.map((h: Holiday) => {
      const [year, month, day] = h.date.split("-").map(Number);
      const holidayDate = new Date(year, month - 1, day);
      return holidayDate;
    }),
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-primary-ja via-primary-ja-opacity to-dark-theme text-white">
      <main className="pt-42 pb-12 lg:pb-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-dark-theme">
            Calendário de Aulas
          </h1>
          <p className="lg:text-xl text-center text-dark-theme mb-8 lg:mb-16 mx-4 lg:mx-auto">
            Navegue pelo nosso cronograma semanal completo e organize sua semana
            com tranquilidade. Selecione um dia para visualizar todas as aulas
            disponíveis. Feriados nacionais brasileiros estão destacados em
            vermelho como eventos especiais. Para dúvidas ou informações sobre a
            academia, feriados regionais ou municipais, entre em contato com a
            secretaria.
          </p>

          <div className="grid gap-2 lg:gap-8 lg:grid-cols-5">
            <Card className="rounded-2xl col-span-full lg:col-span-2 border-black shadow-md bg-white-theme/95 backdrop-blur-sm m-2 lg:m-0">
              <CardHeader className="rounded-t-2xl border-b border-gray-100 bg-linear-to-r from-white-theme to-white-theme/90">
                <CardTitle className="flex items-center gap-2 text-black">
                  <LuCalendar className="h-5 w-5 text-dark-theme" />
                  Selecione um dia
                </CardTitle>
                <CardDescription className="text-dark-theme">
                  Escolha um dia para ver as aulas disponíveis. Feriados
                  destacados em vermelho.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center pt-6">
                <div className="bg-white 2xl:p-11 p-0 rounded-xl overflow-x-auto overflow-hidden">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border shadow-sm pointer-events-auto max-w-fit scale-100 2xl:scale-[1.3] overflow-hidden"
                    modifiers={modifiers}
                  />
                </div>
              </CardContent>
            </Card>

            <div className="col-span-full lg:col-span-3 pb-12 lg:pb-0">
              <Card
                className={
                  selectedHoliday
                    ? "rounded-2xl border-2 border-primary-ja bg-white/90 backdrop-blur-sm shadow-lg m-2 lg:m-0"
                    : "rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg border-black m-2 lg:m-0"
                }
              >
                <CardHeader
                  className={
                    selectedHoliday
                      ? "rounded-t-2xl border-b border-gray-100 bg-linear-to-r from-primary-ja to-white"
                      : "rounded-t-2xl border-b border-gray-100 bg-linear-to-r from-gray-50 to-white"
                  }
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-dark-theme">
                      {useHolidaySchedule ? (
                        <span className="flex items-center gap-2">
                          <LuCalendar className="h-5 w-5 text-dark-theme" />
                          <span className="text-dark-theme">
                            {selectedHoliday.name}
                          </span>
                        </span>
                      ) : (
                        <span>Aulas para {getWeekDay(selectedDayName)}</span>
                      )}
                    </CardTitle>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary-ja border border-dark-theme text-dark-theme">
                      {classesForDay.length}{" "}
                      {selectedHoliday ? "Evento Especial" : "Aulas"}{" "}
                      Disponíveis
                    </span>
                  </div>
                  <CardDescription>
                    {selectedHoliday ? (
                      <span className="flex items-center text-dark-theme text-lg font-semibold">
                        {selectedHoliday.name} - Cronograma Especial de Feriado
                      </span>
                    ) : (
                      <span className="text-dark-theme">
                        Mostrando todas as aulas agendadas para{" "}
                        {getWeekDay(selectedDayName)}
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
                              className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-gray-150 hover:bg-primary-ja/30 border border-black transition-all shadow-sm hover:shadow`}
                            >
                              <div className="mb-2 sm:mb-0">
                                <h3 className={`font-semibold text-dark-theme`}>
                                  {classSession.subject}
                                </h3>
                                <p className="text-sm text-dark-theme">
                                  Instrutor(es):{" "}
                                  <b className="text-dark-theme text-sm">
                                    {classSession.instructor}
                                  </b>
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <LuTimer className="h-5 w-5 text-dark-theme" />
                                <p
                                  className={`${
                                    selectedHoliday
                                      ? "text-gray-800 border-gray-300"
                                      : "text-dark-theme"
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
                        <LuCalendar className="h-10 w-10" fill="#111" />
                      </div>
                      <p className="text-dark-theme font-medium mb-3">
                        {selectedHoliday
                          ? `Não há aulas agendadas para ${getWeekDay(
                              selectedDayName,
                            )} (${selectedHoliday.name}).`
                          : "Não há aulas agendadas para este dia."}
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
