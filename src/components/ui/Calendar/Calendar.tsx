"use client";
import * as React from "react";
import { ptBR } from "date-fns/locale";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import { DayPicker } from "react-day-picker";

import { buttonVariants } from "@/libs/cva";
import { cn } from "@/libs/cn";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function CustomNav({
  onPreviousClick,
  onNextClick,
  ...rest
}: {
  onPreviousClick?: React.MouseEventHandler<HTMLButtonElement>;
  onNextClick?: React.MouseEventHandler<HTMLButtonElement>;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...rest} className="space-x-1 flex items-center absolute right-1">
      <button
        type="button"
        onClick={onPreviousClick}
        className="h-7 w-7 p-0 opacity-50 hover:opacity-100"
      >
        <RiArrowLeftLine className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={onNextClick}
        className="h-7 w-7 p-0 opacity-50 hover:opacity-100"
      >
        <RiArrowRightLine className="h-4 w-4" />
      </button>
    </div>
  );
}
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      locale={ptBR}
      className={cn("p-3 bg-white text-black", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 text-black"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "grid grid-cols-7",
        head_cell:
          "text-black font-semibold h-9 flex items-center justify-center font-normal text-[1rem]",
        row: "grid grid-cols-7 w-full",
        cell: "h-9 w-9 text-center text-sm p-0 relative",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal text-black hover:bg-primary-ja-color-opacity aria-selected:bg-primary-ja-color aria-selected:text-black aria-selected:font-semibold"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-green-500 text-white hover:bg-green-600 focus:bg-green-600",
        day_today: "bg-primary-ja-color-opacity text-black",
        day_outside:
          "text-gray-400 opacity-50 aria-selected:bg-green-300 aria-selected:text-white",
        day_disabled: "text-gray-300 opacity-50",
        day_range_middle: "bg-green-300 text-white",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        Nav: CustomNav,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
