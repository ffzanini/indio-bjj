"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { toast, Toaster } from "react-hot-toast";

import { trackEvent } from "@/libs/facebookPixel";

import { isValidEmail, isValidName, isValidPhone, maskPhone } from "./validation";

const BUTTON_LABEL = "Confirmar presença na Ultra Black Friday";

const fieldClass = (invalid: boolean) =>
  `bf-field rounded-xl border bg-[#161618] px-4 py-3.5 text-base text-white-theme outline-none placeholder:text-white/30 ${
    invalid
      ? "border-red-400 focus:border-red-400"
      : "border-white/15 focus:border-primary-ja"
  }`;

type FieldName = "email" | "name" | "phone";

const validators: Record<FieldName, (value: string) => string> = {
  email: (value) => (isValidEmail(value) ? "" : "Informe um e-mail válido."),
  name: (value) => (isValidName(value) ? "" : "Informe seu nome."),
  phone: (value) =>
    isValidPhone(value) ? "" : "Informe um telefone com DDD. Ex.: (53) 99999-9999.",
};

export function LeadForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<FieldName, string>>({
    email: "",
    name: "",
    phone: "",
  });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const values: Record<FieldName, string> = { email, name, phone };

  useEffect(() => {
    if (!done) return;
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [done]);

  const showError = (field: FieldName, value = values[field]) => {
    const message = validators[field](value);
    setErrors((current) => ({ ...current, [field]: message }));
    return message;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending || done) return;

    trackEvent("ButtonClick", { page: "blackfriday", button: "blackfriday_submit" });

    const form = new FormData(event.currentTarget);
    const nextEmail = String(form.get("email") ?? "").trim();
    const nextName = String(form.get("name") ?? "").trim();
    const nextPhone = maskPhone(String(form.get("phone") ?? ""));
    setEmail(nextEmail);
    setName(nextName);
    setPhone(nextPhone);

    const nextErrors = {
      email: validators.email(nextEmail),
      name: validators.name(nextName),
      phone: validators.phone(nextPhone),
    };
    setErrors(nextErrors);
    if (nextErrors.email || nextErrors.name || nextErrors.phone) {
      const firstInvalid = (["email", "name", "phone"] as const).find(
        (field) => nextErrors[field],
      );
      const field = firstInvalid
        ? event.currentTarget.elements.namedItem(firstInvalid)
        : null;
      if (field instanceof HTMLElement) field.focus();
      return;
    }

    setSending(true);
    const submit = (async () => {
      const response = await fetch("/api/blackfriday", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: nextEmail,
          name: nextName,
          phone: nextPhone,
        }),
      });
      const payload = (await response.json().catch(() => null)) as
        | { ok?: boolean }
        | null;
      if (!response.ok || !payload?.ok) {
        throw new Error(
          response.status === 429
            ? "Muitas tentativas. Espere um minuto e tente de novo."
            : "Não foi possível entrar na lista. Confira e-mail, nome e telefone.",
        );
      }
    })();

    try {
      await toast.promise(submit, {
        loading: "Entrando na lista...",
        success: "Você está na lista.",
        error: (error: Error) => error.message,
      });
      trackEvent("Lead", {
        page: "blackfriday",
        content_name: "Ultra Black Friday",
        content_category: "lead",
      });
      setDone(true);
    } catch {
      setSending(false);
    }
  };

  return (
    <>
      <Toaster
        position="top-center"
        containerStyle={{ top: 72 }}
        toastOptions={{
          style: {
            background: "#161618",
            color: "#f2f3f4",
            border: "1px solid #d1ff00",
          },
        }}
      />
      {done ? (
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Parabéns, você garantiu sua vaga!!
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            A condição sai no dia{" "}
            <span className="text-primary-ja">18/11, às 20h</span>, no grupo VIP,
            não perca!
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Enquanto nossa equipe está trabalhando pra garantir a todos essa
            oferta, acesse nosso site abaixo e conheça mais sobre meu trabalho e
            a nossa academia JA Índio Jiu Jitsu!
          </p>
          <Link
            href="/pt"
            onClick={() =>
              trackEvent("ButtonClick", {
                page: "blackfriday",
                button: "blackfriday_academy",
              })
            }
            className="mt-8 inline-flex cursor-pointer rounded-full bg-primary-ja px-6 py-4 text-base font-bold text-black transition hover:brightness-110 md:text-lg"
          >
            Conhecer a academia
          </Link>
        </div>
      ) : (
        <>
          <h2 className="text-3xl font-bold md:text-5xl">
            A condição secreta sai no grupo VIP.
          </h2>
          <p className="mx-auto mt-5 mb-8 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Dia 18/11, às 20h. Quem estiver na lista recebe a condição do combo
            com acesso vitalício. Fora dessa hora, essa oferta não se repete.
            <br />
            Use seu melhor e-mail e telefone.
          </p>
          <form onSubmit={onSubmit} className="flex flex-col gap-5 text-left" noValidate>
          <label className="flex flex-col gap-2 text-left text-sm font-medium text-white-theme">
            E-mail
            <input
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              maxLength={320}
              value={email}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              onChange={(event) => {
                setEmail(event.target.value);
                if (errors.email) showError("email", event.target.value);
              }}
              onBlur={() => showError("email")}
              className={fieldClass(Boolean(errors.email))}
            />
            {errors.email ? (
              <span id="email-error" className="text-sm font-normal text-red-400">
                {errors.email}
              </span>
            ) : null}
          </label>
          <label className="flex flex-col gap-2 text-left text-sm font-medium text-white-theme">
            Nome
            <input
              name="name"
              autoComplete="name"
              maxLength={100}
              value={name}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              onChange={(event) => {
                setName(event.target.value);
                if (errors.name) showError("name", event.target.value);
              }}
              onBlur={() => showError("name")}
              className={fieldClass(Boolean(errors.name))}
            />
            {errors.name ? (
              <span id="name-error" className="text-sm font-normal text-red-400">
                {errors.name}
              </span>
            ) : null}
          </label>
          <label className="flex flex-col gap-2 text-left text-sm font-medium text-white-theme">
            Telefone
            <input
              name="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder="(53) 99999-9999"
              value={phone}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              onChange={(event) => {
                const masked = maskPhone(event.target.value);
                setPhone(masked);
                if (errors.phone) showError("phone", masked);
              }}
              onBlur={() => showError("phone")}
              className={fieldClass(Boolean(errors.phone))}
            />
            {errors.phone ? (
              <span id="phone-error" className="text-sm font-normal text-red-400">
                {errors.phone}
              </span>
            ) : null}
          </label>
          <button
            type="submit"
            disabled={sending}
            className="mt-2 cursor-pointer rounded-full bg-primary-ja px-6 py-4 text-base font-bold text-black transition hover:brightness-110 disabled:cursor-wait disabled:opacity-70 md:text-lg"
          >
            {BUTTON_LABEL}
          </button>
          </form>
        </>
      )}
    </>
  );
}
