import { TranslationsPatch } from "@/components/utils/TranslationsPatch";
import { metadataFromUi, readLocale } from "@/libs/locale-page";
import { loadLocaleHome } from "@/locales/load-locale";
import HomeContent from "./HomeContent";

type Props = { params: Promise<{ locale: string }> };

export function generateMetadata({ params }: Props) {
  return metadataFromUi(params, "/", "home", { absoluteTitle: true });
}

export default async function Page({ params }: Readonly<Props>) {
  const locale = await readLocale(params);
  const home = await loadLocaleHome(locale);

  return (
    <TranslationsPatch patch={{ home }}>
      <HomeContent />
    </TranslationsPatch>
  );
}
