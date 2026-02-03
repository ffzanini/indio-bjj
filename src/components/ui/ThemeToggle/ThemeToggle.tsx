"use client";

import { useTheme } from "next-themes";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Alternar tema"
        className="p-2 rounded-full text-foreground hover:opacity-80 transition-opacity cursor-pointer"
      >
        <span className="w-6 h-6 block" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-full text-foreground hover:opacity-80 transition-opacity cursor-pointer"
    >
      {isDark ? (
        <RiSunLine className="w-6 h-6" />
      ) : (
        <RiMoonLine className="w-6 h-6" />
      )}
    </button>
  );
}
