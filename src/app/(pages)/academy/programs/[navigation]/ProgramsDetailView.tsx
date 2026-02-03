"use client";
import { programs, Programs } from "@/app/data/programs";
import { Card, CardContent, ScrollToTopButton, ZoomImage } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/context";

interface ProgramsDetailViewProps {
  program: Programs;
}

function getNextPrograms(currentProgram: Programs, count: number): Programs[] {
  const index = programs.findIndex((p) => p.id === currentProgram.id);
  if (index === -1) return [];
  const result: Programs[] = [];
  for (let i = 1; i <= count; i++) {
    const nextIndex = (index + i) % programs.length;
    result.push(programs[nextIndex]);
  }
  return result;
}

export default function ProgramsDetailView({
  program,
}: Readonly<ProgramsDetailViewProps>) {
  const { translations: t, location } = useTranslation();

  const programTranslate = t.programsDetail.programs.find(
    (translate) => translate.id === program.id,
  );

  const nextPrograms = getNextPrograms(program, 3);

  const handleWhatsAppClick = () => {
    const text =
      location === "pt"
        ? "Olá!%20Tenho%20interesse%20em%20agendar%20uma%20aula%20experimental!"
        : "Hello!%20I'm%20interested%20in%20scheduling%20a%20trial%20class!";
    window.open(`https://wa.me/5553991886599?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="bg-linear-to-b from-primary-ja via-primary-ja to-background dark:bg-background pt-42 pb-12 lg:pb-20 text-foreground mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-dark-theme">
              {programTranslate?.title ?? program.title}
            </h1>
            <p className="text-xl text-center text-dark-theme mb-8 lg:mb-16 mx-4 lg:mx-auto">
              {t.programsDetail.learnMore}
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 py-8 mx-auto px-4 sm:px-6 lg:px-8 xl:px-24 bg-background">
        <div className="flex flex-col">
          <div className="text-foreground text-2xl tracking-wide">
            {programTranslate?.description ?? program.description}
          </div>
          <br />
          <div className="text-foreground text-2xl">
            {t.programsDetail.professors} <b className="text-2xl">{program.professors}</b>
          </div>
        </div>
        <ZoomImage
          className="aspect-video w-full rounded-2xl object-cover"
          src={program.image}
          alt={programTranslate?.title ?? program.title}
          width={1280}
          height={800}
        />
      </section>
      <section className="flex items-center justify-center py-8 bg-background">
        <div
          className={`bg-card rounded-xl shadow-lg p-6 border-l-4 border-primary-ja text-3xl font-bold mb-4`}
        >
          <p className="italic text-xl text-foreground">
            {programTranslate?.quote ?? program.quote}
          </p>
        </div>
      </section>
      {program.benefits.length >= 1 && (
        <section className="py-8 bg-background">
          <div className="flex flex-col items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-8 text-foreground">
                {t.programsDetail.benefitsTitle}{" "}
                {programTranslate?.title ?? program.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {(programTranslate?.benefits ?? program.benefits).map(
                (benefit, index) => (
                  <Card
                    key={index}
                    className="rounded-2xl border-primary-ja shadow-md bg-card backdrop-blur-sm m-3 lg:m-0"
                  >
                    <CardContent className="flex rounded-2xl justify-center bg-linear-to-r from-card to-foreground/5 p-14 ">
                      <p className="text-xl font-bold text-foreground text-center">
                        {benefit}
                      </p>
                    </CardContent>
                  </Card>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white-theme py-20">
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl lg:text-5xl text-dark-theme">
            {t.programsDetail.startEasy}{" "}
            <b className="text-3xl lg:text-5xl text-dark-theme">{t.programsDetail.startEasyBold}</b> {t.programsDetail.startEasySuffix}
          </p>
          <p className="text-4xl lg:text-6xl text-primary-ja font-semibold tracking-wider text-outline-shadow-black pb-6 text-center">
            {t.programsDetail.scheduleTrial}
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="px-4 py-2 lg:px-6 lg:py-4 backdrop-blur-sm border bg-dark-theme border-primary-ja/20 text-background mx-auto text-center rounded-full relative mt-2 hover:-translate-y-1 transition duration-400 cursor-pointer"
          >
            <span className="text-white-theme text-xl lg:text-2xl font-semibold">
              {t.programsDetail.scheduleNow}
            </span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-linear-to-r w-3/4 mx-auto from-transparent via-primary-ja to-transparent" />
          </button>
        </div>
      </section>
      <section className="py-12 bg-background">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-24">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground">
              {t.programsDetail.seeAllPrograms}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {nextPrograms.map((next) => {
              const nextTranslate = t.programsDetail.programs.find(
                (translate) => translate.id === next.id,
              );
              const nextTitle = nextTranslate?.title ?? next.title;
              return (
                <Link
                  key={next.id}
                  href={`/academy/programs/${next.navigation}`}
                  className="group block"
                >
                  <Card className="rounded-2xl border-primary-ja shadow-md bg-card overflow-hidden h-full transition duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={next.image}
                        alt={nextTitle}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                    <CardContent className="p-4">
                      <p className="text-lg font-bold text-foreground group-hover:text-primary-ja group-hover:text-outline-shadow-black transition-colors">
                        {nextTitle}
                      </p>
                    <span className="text-primary-ja text-md font-medium mt-2 inline-block text-outline-shadow-black">
                      {t.programsDetail.learnMoreLink}
                    </span>
                  </CardContent>
                </Card>
              </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-primary-ja py-14">
        <div className="flex flex-col justify-center items-center">
          <Link href="/academy/programs">
            <button className="p-4 lg:p-6 text-foreground mx-auto text-center rounded-full relative mt-2 hover:-translate-y-1 transition duration-400 cursor-pointer">
              <span className="text-dark-theme text-2xl lg:text-3xl font-semibold">
                {t.programsDetail.backToPrograms}
              </span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-linear-to-r w-3/4 mx-auto from-transparent via-primary-ja to-transparent" />
            </button>
          </Link>
        </div>
      </section>
      <ScrollToTopButton />
    </main>
  );
}
