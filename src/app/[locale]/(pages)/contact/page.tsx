import { TranslationsPatch } from "@/components/utils/TranslationsPatch";
import { DEFAULT_KEYWORDS_STRING } from "@/constants/seo";
import { metadataFromUi, readLocale } from "@/libs/locale-page";
import { loadLocaleContact } from "@/locales/load-locale";
import ContactContent from "./ContactContent";

type Props = { params: Promise<{ locale: string }> };

export function generateMetadata({ params }: Props) {
  return metadataFromUi(params, "/contact", "contact", {
    keywords: DEFAULT_KEYWORDS_STRING,
  });
}

export default async function Page({ params }: Readonly<Props>) {
  const locale = await readLocale(params);
  const contact = await loadLocaleContact(locale);

  return (
    <TranslationsPatch patch={{ contact }}>
      <ContactContent />
    </TranslationsPatch>
  );
}
