"use client";
import * as React from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { ptBR } from "date-fns/locale";
import "react-day-picker/style.css"; // Import necessário para navLayout="around"

export function Calendar(props: React.ComponentProps<typeof DayPicker>) {
  const defaultClassNames = getDefaultClassNames();

  const baseDay =
    "h-10 w-10 p-0 flex items-center justify-center font-medium rounded-md transition-all duration-200 cursor-pointer";

  return (
    <DayPicker
      showOutsideDays
      locale={ptBR}
      navLayout="around"
      fixedWeeks={true}
      classNames={{
        ...defaultClassNames,
        months: "grid",
        month: "space-y-1",

        caption: "relative mb-4 flex items-center justify-center",
        caption_label: "text-lg font-semibold text-foreground mt-2 capitalize",
        nav: "absolute inset-0 flex items-center justify-between px-3",
        nav_button: "h-10 w-10 rounded-md hover:bg-foreground/10 transition",

        weekdays: "grid grid-cols-7",
        weekday:
          "text-center text-xs md:text-sm font-bold uppercase text-muted-foreground py-2",

        week: "grid grid-cols-7",
        day: "text-sm",
        day_button: `${baseDay} hover:bg-primary-ja/80`,
        today: `${baseDay} bg-primary-ja/75`,
        selected: `${baseDay} bg-primary-ja hover:bg-primary-ja/90 text-dark-theme`,
        range_middle: `${baseDay} bg-primary-ja/60`,
        disabled: "text-muted-foreground opacity-50",
        outside: "text-muted-foreground opacity-50",
        hidden: "invisible",
      }}
      modifiersClassNames={{
        holiday: `${baseDay} bg-red-600 text-white hover:bg-red-700`,
      }}
      {...props}
    />
  );
}
