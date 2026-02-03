"use client";

import { useTranslation } from "@/context";
import { useEffect, useState } from "react";
import BR from "country-flag-icons/react/3x2/BR";
import US from "country-flag-icons/react/3x2/US";

export function LanguageToggle() {
  const { location, setLocation } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Alternar idioma"
        className="p-2 rounded-full text-foreground hover:opacity-80 transition-opacity cursor-pointer min-w-10 min-h-10 flex items-center justify-center"
      >
        <span className="w-6 h-4 rounded-sm bg-muted-foreground/20 block" />
      </button>
    );
  }

  const isPt = location === "pt";

  return (
    <button
      type="button"
      aria-label={isPt ? "Mudar para inglês" : "Change to Portuguese"}
      onClick={() => setLocation(isPt ? "en" : "pt")}
      className="p-2 rounded-full text-foreground hover:opacity-80 transition-opacity cursor-pointer flex items-center justify-center"
    >
      {isPt ? (
        <US title="English" className="w-8 h-6 rounded-sm object-cover" />
      ) : (
        <BR title="Português" className="w-8 h-6 rounded-sm object-cover" />
      )}
    </button>
  );
}
