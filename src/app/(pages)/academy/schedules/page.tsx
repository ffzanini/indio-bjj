'use client'
import { useState } from 'react'
import useSWR from 'swr'
import { RiCalendarLine, RiTimerLine } from 'react-icons/ri'

import {
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Wrapper,
} from '@/components'
import { weeklyClasses } from '@/constants/schedules'

import { fetchHolidays } from '@/lib/brasilapi'
import { getWeekDay } from '@/lib/utils'

interface Holiday {
  date: string
  name: string
  type: string
  level: string
}

export default function Schedule() {
  const { data: holidays = [] } = useSWR('holidays', fetchHolidays)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Holiday',
  ]

  const selectedDayName = selectedDate
    ? dayNames[selectedDate.getDay()]
    : 'Monday'

  const selectedHoliday = selectedDate
    ? holidays.find((h: Holiday) => {
        const [year, month, day] = h.date.split('-').map(Number)
        const holidayDate = new Date(year, month - 1, day)
        return (
          holidayDate.getDate() === selectedDate.getDate() &&
          holidayDate.getMonth() === selectedDate.getMonth() &&
          holidayDate.getFullYear() === selectedDate.getFullYear()
        )
      })
    : undefined

  const classesForDay = selectedHoliday
    ? weeklyClasses.Holiday
    : weeklyClasses[selectedDayName] || []

  const modifiersStyles = {
    holiday: {
      color: 'white',
      backgroundColor: '#cc3333',
      fontWeight: 'bold',
    },
  }

  const modifiers = {
    holiday: holidays.map((h: Holiday) => {
      const [year, month, day] = h.date.split('-').map(Number)
      const holidayDate = new Date(year, month - 1, day)
      return holidayDate
    }),
  }

  return (
    <Wrapper>
      <section className="bg-gradient-to-b from-primary-ja-color via-primary-ja-color-opacity to-dark-theme-background pt-40 pb-12 lg:pb-20 text-white">
        <div className="container">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-black">
            Calendário de Aulas
          </h2>
          <p className="lg:text-xl text-center text-black mb-6 lg:mb-12 max-w-5xl mx-4 lg:mx-auto">
            Navegue pelo nosso cronograma semanal completo e planeje sua semana.
            Selecione um dia para ver todas as aulas disponíveis. Feriados
            brasileiros estão destacados em vermelho como eventos especiais.
            Dúvidas ou mais informações sobre a academia, feriados regionais e
            municipais entrar em contato com a secretaria da academia
          </p>

          <div className="grid gap-2 lg:gap-8 lg:grid-cols-5">
            <Card className="rounded-2xl col-span-full lg:col-span-2 border-black shadow-md bg-white/90 backdrop-blur-sm m-2 lg:m-0">
              <CardHeader className="rounded-t-2xl border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                <CardTitle className="flex items-center gap-2 text-black">
                  <RiCalendarLine className="h-5 w-5" fill="#111" />
                  Selecione um dia
                </CardTitle>
                <CardDescription className="text-black">
                  Escolha um dia para ver as aulas disponíveis. Feriados
                  destacados em vermelho.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center p-16 lg:p-20">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border shadow-sm pointer-events-auto max-w-fit scale-[1.3] sm:scale-[1.3]"
                  modifiers={modifiers}
                  modifiersStyles={modifiersStyles}
                />
              </CardContent>
            </Card>

            <div className="col-span-full lg:col-span-3 pb-12 lg:pb-0">
              <Card
                className={
                  selectedHoliday
                    ? 'rounded-2xl border-2 border-primary-ja-color bg-white/90 backdrop-blur-sm shadow-lg m-2 lg:m-0'
                    : 'rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg border-black m-2 lg:m-0'
                }
              >
                <CardHeader
                  className={
                    selectedHoliday
                      ? 'rounded-t-2xl border-b border-gray-100 bg-gradient-to-r from-primary-ja-color to-white'
                      : 'rounded-t-2xl border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white'
                  }
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-black">
                      {selectedHoliday ? (
                        <span className="flex items-center gap-2">
                          <RiCalendarLine className="h-5 w-5" fill="#111" />
                          <span className="text-black">
                            {selectedHoliday.name}
                          </span>
                        </span>
                      ) : (
                        <span>Aulas para {getWeekDay(selectedDayName)}</span>
                      )}
                    </CardTitle>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary-ja-color border border-black text-black">
                      {classesForDay.length}{' '}
                      {selectedHoliday ? 'Evento Especial' : 'Aulas'}{' '}
                      Disponíveis
                    </span>
                  </div>
                  <CardDescription>
                    {selectedHoliday ? (
                      <div className="flex items-center text-black text-lg font-semibold">
                        {selectedHoliday.name} - Cronograma Especial de Feriado
                      </div>
                    ) : (
                      <span className="text-black">
                        Mostrando todas as aulas agendadas para{' '}
                        {getWeekDay(selectedDayName)}
                      </span>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  {classesForDay.length > 0 ? (
                    <div className="space-y-4">
                      {classesForDay.map((classSession) => (
                        <div
                          key={classSession.id}
                          className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg ${
                            selectedHoliday
                              ? 'bg-gray-150 hover:bg-gray-200 border border-black'
                              : 'bg-gray-150 hover:bg-gray-200 border border-black'
                          } transition-all shadow-sm hover:shadow`}
                        >
                          <div className="mb-2 sm:mb-0">
                            <h3
                              className={`font-semibold ${selectedHoliday ? 'text-black' : 'text-black'}`}
                            >
                              {classSession.subject}
                            </h3>
                            <p className="text-sm text-black">
                              Instrutor(es):{' '}
                              <b className="text-black text-sm">
                                {classSession.instructor}
                              </b>
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <RiTimerLine className="h-5 w-5" fill="#111" />
                            <p
                              className={`${
                                selectedHoliday
                                  ? 'text-gray-800 border-gray-300'
                                  : 'text-slate-700'
                              } flex items-center gap-1`}
                            >
                              {classSession.startTime} - {classSession.endTime}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-10 text-center">
                      <div className="bg-primary-ja-color p-4 rounded-full mb-4">
                        <RiCalendarLine className="h-10 w-10" fill="#111" />
                      </div>
                      <p className="text-black font-medium mb-3">
                        {selectedHoliday
                          ? `Não há eventos especiais agendados para ${selectedHoliday.name}.`
                          : 'Não há aulas agendadas para este dia.'}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}
