"use client";
import * as React from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { ptBR } from "date-fns/locale";

export function Calendar(props: React.ComponentProps<typeof DayPicker>) {
  const defaultClassNames = getDefaultClassNames();

  const baseDay =
    "h-10 w-10 p-0 flex items-center justify-center font-medium text-black rounded-md transition-all duration-200";

  return (
    <DayPicker
      showOutsideDays
      locale={ptBR}
      classNames={{
        ...defaultClassNames,
        root: `${defaultClassNames.root} p-4 sm:p-6 rounded-xl shadow bg-white text-black`,
        months: "grid",
        month: "space-y-4",

        // ✅ Layout mobile-friendly
        caption:
          "flex flex-wrap items-center justify-between gap-x-2 gap-y-2 mb-4 px-2",
        caption_label:
          "w-full text-center text-lg font-semibold text-gray-800 order-1 sm:order-none",

        nav: "flex items-center justify-between gap-2 order-0 sm:order-none",
        nav_button:
          "h-10 w-10 min-w-[2.5rem] flex items-center justify-center rounded-md hover:bg-black/80 transition",

        weekdays: "grid grid-cols-7",
        weekday:
          "text-center text-xs md:text-sm font-bold uppercase text-gray-500 py-2",

        week: "grid grid-cols-7",
        day_button: `${baseDay} hover:bg-primary-ja/80`,
        today: `${baseDay} bg-primary-ja/80`,
        selected: `${baseDay} bg-primary-ja text-white hover:bg-primary-ja/90`,
        range_middle: `${baseDay} bg-primary-ja/60 text-white`,
        disabled: "text-gray-300 opacity-50",
        outside: "text-gray-400 opacity-50",
        hidden: "invisible",
      }}
      modifiersClassNames={{
        holiday: `${baseDay} bg-red-600 text-white hover:bg-red-700`,
      }}
      {...props}
    />
  );
}
