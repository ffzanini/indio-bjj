import { getSecondsUntilEndOfYear } from './utils'

export async function fetchHolidays() {
  const yearNow = new Date().getFullYear()
  const revalidate = getSecondsUntilEndOfYear()

  const res = await fetch(
    `https://brasilapi.com.br/api/feriados/v1/${yearNow}`,
    {
      next: { revalidate },
    },
  )

  if (!res.ok) {
    throw new Error('Erro ao buscar feriados')
  }

  return res.json()
}
