"use client";
import { Programs } from "@/app/data/programs";
import { Card, CardContent, ScrollToTopButton, ZoomImage } from "@/components";
import Link from "next/link";

interface ProgramsDetailViewProps {
  program: Programs;
}

export default function ProgramsDetailView({
  program,
}: Readonly<ProgramsDetailViewProps>) {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5553991886599?text=Olá!%20Tenho%20interesse%20em%20agendar%20uma%20aula%20experimental!",
      "_blank"
    );
  };

  return (
    <main>
      <section className="bg-gradient-to-b from-primary-ja via-primary-ja to-dark-theme-background pt-42 pb-12 lg:pb-20 text-white-theme mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-dark-theme">
              {program.title}
            </h1>
            <p className="text-xl text-center text-dark-theme mb-8 lg:mb-16 mx-4 lg:mx-auto">
              Conheça mais sobre nosso treino!
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 py-8 mx-auto px-4 sm:px-6 lg:px-8 xl:px-24">
        <div className="flex flex-col">
          <div className="text-white-theme text-2xl tracking-wide">
            {program.description}
          </div>
          <br />
          <div className="text-white-theme text-2xl">
            Professor(es): <b className="text-2xl">{program.professors}</b>
          </div>
        </div>
        <ZoomImage
          className="aspect-video w-full rounded-2xl object-cover"
          src={program.image}
          alt={program.title}
          width={1280}
          height={800}
        />
      </section>
      <section className="flex items-center justify-center py-8">
        <div
          className={`bg-white-theme rounded-xl shadow-lg p-6 border-l-4 border-primary-ja text-3xl font-bold mb-4`}
        >
          <p className="italic text-xl text-dark-theme">{program.quote}</p>
        </div>
      </section>
      {program.benefits.length >= 1 && (
        <section className="py-8">
          <div className="flex flex-col items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-8 text-white-theme">
                Benefícios de se juntar ao programa {program.title}
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {program.benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="rounded-2xl border-primary-ja shadow-md bg-white-theme/90 backdrop-blur-sm m-3 lg:m-0"
                >
                  <CardContent className="flex rounded-2xl justify-center bg-gradient-to-r from-white-theme to-dark-theme/3 p-14 ">
                    <p className="text-xl font-bold text-dark-theme text-center">
                      {benefit}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white-theme py-20">
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl lg:text-5xl text-dark-theme">
            COMEÇAR NA{" "}
            <b className="text-3xl lg:text-5xl text-dark-theme">JA</b> É FÁCIL
          </p>
          <p className="text-4xl lg:text-6xl text-primary-ja font-semibold tracking-wider text-outline-shadow-black pb-6 text-center">
            AGENDE UMA AULA EXPERIMENTAL
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="px-4 py-2 lg:px-6 lg:py-4 backdrop-blur-sm border bg-dark-theme border-primary-ja/20 text-white-theme mx-auto text-center rounded-full relative mt-2 hover:-translate-y-1 transition duration-400 cursor-pointer"
          >
            <span className="text-white-theme text-xl lg:text-2xl font-semibold">
              Agendar agora
            </span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary-ja to-transparent" />
          </button>
        </div>
      </section>
      <section className="bg-primary-ja py-14">
        <div className="flex flex-col justify-center items-center">
          <Link href="/academy/programs">
            <button className="p-4 lg:p-6 text-white-theme mx-auto text-center rounded-full relative mt-2 hover:-translate-y-1 transition duration-400 cursor-pointer">
              <span className="text-dark-theme text-2xl lg:text-3xl font-semibold">
                Ainda com dúvidas? Clique aqui para ver mais dos nossos
                programas de treino
              </span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary-ja to-transparent" />
            </button>
          </Link>
        </div>
      </section>
      <ScrollToTopButton />
    </main>
  );
}
