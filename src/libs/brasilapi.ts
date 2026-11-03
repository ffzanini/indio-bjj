import { getPelotasHolidays } from "./pelotasHolidays";

export interface HolidayItem {
  date: string;
  name: string;
  type: string;
}

export async function fetchHolidays(): Promise<HolidayItem[]> {
  const yearNow = new Date().getFullYear();
  const pelotas: HolidayItem[] = getPelotasHolidays(yearNow).map((holiday) => ({
    date: holiday.date,
    name: holiday.name,
    type: holiday.type,
  }));

  try {
    const res = await fetch(
      `https://brasilapi.com.br/api/feriados/v1/${yearNow}`,
      { next: { revalidate: 86400 } },
    );

    if (!res.ok) return pelotas;

    const national: HolidayItem[] = (await res.json()).map(
      (holiday: { date: string; name: string }) => ({
        date: holiday.date,
        name: holiday.name,
        type: "national",
      }),
    );

    const byDate = new Map<string, HolidayItem>();
    national.forEach((holiday) => byDate.set(holiday.date, holiday));
    pelotas.forEach((holiday) => byDate.set(holiday.date, holiday));

    return Array.from(byDate.values()).sort((a, b) =>
      a.date.localeCompare(b.date),
    );
  } catch {
    return pelotas;
  }
}
