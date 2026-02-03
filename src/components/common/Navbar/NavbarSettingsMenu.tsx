"use client";

import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { cn } from "@/libs/cn";

export function NavbarSettingsMenu({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "hidden lg:flex fixed top-2 right-4 z-9998 items-center gap-1 rounded-full border border-foreground/20 bg-background shadow-input px-2 py-1",
        className
      )}
      role="group"
      aria-label="Configurações"
    >
      <ThemeToggle />
      <LanguageToggle />
    </div>
  );
}
