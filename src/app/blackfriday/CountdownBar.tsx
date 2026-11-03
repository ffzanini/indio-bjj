"use client";

import { useEffect, useState } from "react";

const REVEAL_AT = new Date("2026-11-18T20:00:00-03:00").getTime();

type Remaining = {
  done: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const remaining = (now: number): Remaining => {
  const diff = Math.max(0, REVEAL_AT - now);
  const totalSeconds = Math.floor(diff / 1000);
  return {
    done: diff === 0,
    days: Math.floor(totalSeconds / 86_400),
    hours: Math.floor((totalSeconds % 86_400) / 3_600),
    minutes: Math.floor((totalSeconds % 3_600) / 60),
    seconds: totalSeconds % 60,
  };
};

const pad = (value: number) => String(value).padStart(2, "0");

export function CountdownBar() {
  const [time, setTime] = useState<Remaining | null>(null);

  useEffect(() => {
    const update = () => setTime(remaining(Date.now()));
    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-center border-b border-primary-ja/50 bg-black/95 px-4 backdrop-blur">
      <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-[11px] font-semibold tracking-[0.16em] text-white/80 uppercase sm:text-sm sm:tracking-[0.22em]">
        <span>A oferta será revelada em</span>
        <span className="text-primary-ja tabular-nums">
          {time === null
            ? "--d --h --m --s"
            : time.done
              ? "Grupo VIP no WhatsApp"
              : `${time.days}d ${pad(time.hours)}h ${pad(time.minutes)}m ${pad(time.seconds)}s`}
        </span>
      </p>
    </header>
  );
}
