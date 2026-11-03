"use client";

import { useEffect } from "react";

import { LocaleLink } from "@/components/utils/LocaleLink";
import { useTranslation } from "@/context";
import { withLocalePath } from "@/libs/i18n";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: Readonly<ErrorProps>) {
  const { translations: t, location } = useTranslation();

  useEffect(() => {
    console.error(error);
    const message = error.message ?? "";
    const staleBundle =
      error.name === "ChunkLoadError" ||
      message.includes("Loading chunk") ||
      message.includes("Failed to fetch dynamically imported module") ||
      message.includes("Importing a module script failed");
    if (!staleBundle) return;

    const key = "chunk-reload";
    const path = window.location.pathname;
    if (sessionStorage.getItem(key) === path) return;
    sessionStorage.setItem(key, path);
    window.location.reload();
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 py-16 text-center text-foreground">
      <h1 className="text-3xl font-semibold">{t.ui.error.title}</h1>
      <p className="max-w-md text-base text-muted-foreground">
        {t.ui.error.description}
      </p>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-lg border border-foreground/20 px-5 py-2 text-sm transition-colors hover:border-primary-ja"
        >
          {t.ui.error.retry}
        </button>
        <LocaleLink
          href={withLocalePath(location, "/")}
          className="rounded-lg border border-foreground/20 px-5 py-2 text-sm transition-colors hover:border-primary-ja"
        >
          {t.ui.error.home}
        </LocaleLink>
      </div>
    </main>
  );
}
