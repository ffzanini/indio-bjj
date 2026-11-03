import { TranslationsPatch } from "@/components/utils/TranslationsPatch";
import { DEFAULT_KEYWORDS_STRING } from "@/constants/seo";
import { fetchHolidays } from "@/libs/brasilapi";
import { metadataFromUi, readLocale } from "@/libs/locale-page";
import { loadLocaleSchedules } from "@/locales/load-locale";
import SchedulesContent from "./SchedulesContent";

type Props = { params: Promise<{ locale: string }> };

export function generateMetadata({ params }: Props) {
  return metadataFromUi(params, "/academy/schedules", "schedules", {
    keywords: DEFAULT_KEYWORDS_STRING,
  });
}

export default async function Page({ params }: Readonly<Props>) {
  const locale = await readLocale(params);
  const [schedules, holidays] = await Promise.all([
    loadLocaleSchedules(locale),
    fetchHolidays(),
  ]);

  return (
    <TranslationsPatch patch={{ schedules }}>
      <SchedulesContent holidays={holidays} />
    </TranslationsPatch>
  );
}
