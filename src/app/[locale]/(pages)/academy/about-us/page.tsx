import { TranslationsPatch } from "@/components/utils/TranslationsPatch";
import { DEFAULT_KEYWORDS_STRING } from "@/constants/seo";
import { metadataFromUi, readLocale } from "@/libs/locale-page";
import { loadLocaleAbout } from "@/locales/load-locale";
import AboutContent from "./AboutContent";

type Props = { params: Promise<{ locale: string }> };

export function generateMetadata({ params }: Props) {
  return metadataFromUi(params, "/academy/about-us", "about", {
    keywords: DEFAULT_KEYWORDS_STRING,
    noindex: true,
  });
}

export default async function Page({ params }: Readonly<Props>) {
  const locale = await readLocale(params);
  const about = await loadLocaleAbout(locale);

  return (
    <TranslationsPatch patch={{ about }}>
      <AboutContent />
    </TranslationsPatch>
  );
}
