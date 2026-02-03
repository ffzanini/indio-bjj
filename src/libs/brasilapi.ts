import { getPelotasHolidays } from "./pelotasHolidays";

export interface HolidayItem {
  date: string;
  name: string;
  type: string;
}

export async function fetchHolidays(): Promise<HolidayItem[]> {
  const yearNow = new Date().getFullYear();

  const res = await fetch(
    `https://brasilapi.com.br/api/feriados/v1/${yearNow}`,
    {
      next: { revalidate: false },
    },
  );

  if (!res.ok) {
    throw new Error("Erro ao buscar feriados");
  }

  const national: HolidayItem[] = (await res.json()).map(
    (h: { date: string; name: string; type?: string }) => ({
      date: h.date,
      name: h.name,
      type: "national",
    }),
  );

  const pelotas = getPelotasHolidays(yearNow).map((h) => ({
    date: h.date,
    name: h.name,
    type: h.type,
  }));

  const byDate = new Map<string, HolidayItem>();
  national.forEach((h) => byDate.set(h.date, h));
  pelotas.forEach((h) => byDate.set(h.date, h));

  return Array.from(byDate.values()).sort((a, b) =>
    a.date.localeCompare(b.date),
  );
}
