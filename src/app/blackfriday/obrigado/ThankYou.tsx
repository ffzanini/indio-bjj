"use client";

import { useEffect, useRef, useState } from "react";

const WHATSAPP_GROUP = "https://chat.whatsapp.com/ItrUmqhQP1e1hV6qdVNSh8";
const REDIRECT_SECONDS = 10;
const LEAD_NAME_KEY = "ultra-black-lead-name";

const readLeadName = () => {
  const raw = sessionStorage.getItem(LEAD_NAME_KEY) ?? "";
  const token = raw.trim().split(/\s+/)[0]?.slice(0, 40) ?? "";
  if (!/^[\p{L}\p{M}'’-]+$/u.test(token)) return "";
  return token;
};

export function ThankYou() {
  const [name, setName] = useState("");
  const [seconds, setSeconds] = useState(REDIRECT_SECONDS);
  const left = useRef(false);
  const goRef = useRef(() => {
    if (left.current) return;
    left.current = true;
    window.location.assign(WHATSAPP_GROUP);
  });

  useEffect(() => {
    setName(readLeadName());
    const started = Date.now();
    const id = window.setInterval(() => {
      const elapsed = Math.floor((Date.now() - started) / 1000);
      const remaining = Math.max(0, REDIRECT_SECONDS - elapsed);
      setSeconds(remaining);
      if (remaining === 0) {
        window.clearInterval(id);
        goRef.current();
      }
    }, 250);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="mx-auto flex w-full flex-col items-center text-center">
      <p className="flex w-fit max-w-full items-center gap-2.5 rounded-full border border-primary-ja/50 px-4 py-2 text-[0.68rem] leading-tight font-semibold tracking-[0.08em] text-primary-ja uppercase sm:text-sm sm:tracking-[0.12em]">
        <span className="size-1.5 shrink-0 rounded-full bg-primary-ja" />
        <span>18 de Novembro · 20h · Grupo VIP no WhatsApp</span>
      </p>
      <h1 className="mt-5 text-balance text-3xl leading-tight font-bold md:text-5xl">
        {name ? `${name}, inscrição confirmada.` : "Inscrição confirmada."}
      </h1>
      <a
        href={WHATSAPP_GROUP}
        onClick={(event) => {
          event.preventDefault();
          goRef.current();
        }}
        className="mt-6 inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-primary-ja px-6 py-4 text-base font-bold text-black transition hover:brightness-110 sm:w-fit md:text-lg"
      >
        Entrar no grupo agora
      </a>
      <p className="mt-4 max-w-2xl text-balance text-sm leading-relaxed text-white/70 md:text-base">
        Você será redirecionado para o grupo em{" "}
        <span className="font-semibold text-primary-ja tabular-nums">{seconds}s</span>.
        Se preferir, clique no botão para entrar agora.
      </p>
      <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-white/80 md:text-lg">
        Agora entra no grupo — é lá que eu divulgo a oferta no dia e solto os
        avisos de última hora.
      </p>
    </div>
  );
}
