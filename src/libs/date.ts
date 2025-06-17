export function getSecondsUntilEndOfYear(): number {
  const now = new Date();
  const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59);
  const diffInSeconds = Math.floor(
    (endOfYear.getTime() - now.getTime()) / 1000
  );
  return diffInSeconds;
}

export const getWeekDay = (week: string) => {
  switch (week) {
    case "Monday":
      return "Segunda-feira";
    case "Tuesday":
      return "Terça-feira";
    case "Wednesday":
      return "Quarta-feira";
    case "Thursday":
      return "Quinta-feira";
    case "Friday":
      return "Sexta-feira";
    case "Saturday":
      return "Sábado";
    case "Sunday":
      return "Domingo";
    case "Holiday":
      return "Feriado";
    default:
      return "Monday";
  }
};
