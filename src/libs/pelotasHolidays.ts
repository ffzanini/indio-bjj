export type PelotasHolidayType = "municipal" | "regional";

export interface PelotasHoliday {
  date: string;
  name: string;
  type: PelotasHolidayType;
}

const PELOTAS_HOLIDAYS_BY_MONTH_DAY: Array<{
  month: number;
  day: number;
  name: string;
  type: PelotasHolidayType;
}> = [
  { month: 2, day: 2, name: "Nossa Senhora dos Navegantes", type: "municipal" },
  { month: 7, day: 7, name: "Aniversário de Pelotas", type: "municipal" },
  {
    month: 9,
    day: 20,
    name: "Revolução Farroupilha (Dia do Gaúcho)",
    type: "regional",
  },
];

export function getPelotasHolidays(year: number): PelotasHoliday[] {
  return PELOTAS_HOLIDAYS_BY_MONTH_DAY.map(({ month, day, name, type }) => ({
    date: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
    name: type === "municipal" ? `${name}` : `${name}`,
    type,
  }));
}
