"use client";

import { LocaleLink } from "@/components/utils/LocaleLink";
import { useTranslation } from "@/context";

export default function NotFound() {
  const { translations: t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center text-foreground">
      <h1 className="text-3xl font-semibold">{t.ui.notFound.title}</h1>
      <p className="max-w-md text-base text-muted-foreground">
        {t.ui.notFound.description}
      </p>
      <LocaleLink href="/" className="text-foreground underline">
        {t.ui.notFound.home}
      </LocaleLink>
    </main>
  );
}
