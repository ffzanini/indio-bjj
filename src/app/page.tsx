"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { RiStarFill } from "react-icons/ri";

import { ScrollToTopButton, ImagesSlider, Carousel } from "@/components/ui";
import { parallaxImages, ProgramsCarousel } from "@/constants/home";
import { testimonials } from "@/constants/testimonials";
import { carousel } from "@/constants/animations";

export default function PricipalPage() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "left") next();
    else
      setIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const resetAutoplay = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(next, 5000);
  };

  useLayoutEffect(() => {
    resetAutoplay();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index]);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5553991886599?text=Olá!%20Tenho%20interesse%20em%20agendar%20uma%20aula%20experimental!",
      "_blank"
    );
  };

  return (
    <main className="min-h-screen">
      <ImagesSlider className="h-screen" images={parallaxImages}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center px-4"
        >
          <motion.h1 className="font-bold text-3xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Jiu Jitsu de alta qualidade, <br /> transformando vidas
          </motion.h1>
          <motion.p className="text-center text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 py-4">
            Aulas para todos os níveis e idades. <br /> Marque uma aula
            experimental e venha fazer parte da família JA Índio Jiu Jitsu
          </motion.p>
          <button
            onClick={handleWhatsAppClick}
            className="cursor-pointer px-4 py-2 backdrop-blur-sm border bg-primary-ja/10 border-primary-ja/20 text-white mx-auto text-center rounded-full relative mt-4"
          >
            <span>
              Agendar uma <b>aula grátis</b> agora
            </span>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary-ja to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>

      <section className="bg-white-theme py-8 px-2 xl:px-0">
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl xl:text-5xl text-dark-theme">
            VAMOS MARCAR A SUA
          </p>
          <p className="text-4xl xl:text-6xl text-primary-ja font-semibold tracking-wider text-outline-shadow-black">
            PRIMEIRA AULA
          </p>
          <div className="max-w-7xl flex flex-col items-center text-center py-3">
            <p className="text-lg text-dark-theme py-6">
              O Jiu-Jitsu é muito mais do que somente lutar — é descobrir novas
              forças dentro de você. Venha fazer sua primeira aula e experimente
              uma transformação que começa já no primeiro treino. Seu novo
              caminho pode começar hoje.
            </p>
            <p className="text-xl font-semibold text-dark-theme">
              Clique abaixo e marque sua aula experimental!
            </p>
          </div>
          <button
            onClick={handleWhatsAppClick}
            className="cursor-pointer w-full lg:w-auto px-4 py-2 xl:px-6 xl:py-4 backdrop-blur-sm border bg-dark-theme border-primary-ja/50 text-white-theme mx-auto text-center rounded-full relative mt-2 hover:-translate-y-1 transition duration-300"
          >
            <span className="text-white font-semibold">Agendar agora</span>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary-ja to-transparent" />
          </button>
        </div>
      </section>
      <section className="py-8">
        <div className="flex flex-col justify-center items-center">
          <p className="text-4xl xl:text-5xl">NOSSOS</p>
          <p className="text-5xl xl:text-6xl text-primary-ja font-semibold tracking-widest mb-12">
            PROGRAMAS
          </p>
        </div>

        <div className="relative overflow-hidden w-full h-full pb-14">
          <Carousel slides={ProgramsCarousel} />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center py-8 bg-white-theme px-4 xl:px-0">
        <h2 className="text-xl xl:text-3xl font-semibold text-center text-dark-theme">
          Depoimentos dos nossos alunos
        </h2>
        <h2 className="text-2xl xl:text-4xl font-bold text-center text-primary-ja tracking-wide text-outline-shadow-black p-1">
          Veja o que falam sobre nós
        </h2>
        <motion.div
          custom={1}
          variants={carousel}
          animate="center"
          transition={{ duration: 0.4 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (info.offset.x < -100) handleSwipe("left");
            else if (info.offset.x > 100) handleSwipe("right");
          }}
          className="max-w-7xl flex flex-col md:flex-row items-center justify-center"
        >
          <div className="bg-white-theme py-8">
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col justify-center w-full xl:w-1/7 xl:border-r border-dark-theme/20">
                <h3 className="text-lg text-dark-theme font-bold">
                  {testimonials[index].name}
                </h3>
                <p className="text-base text-dark-theme">
                  {testimonials[index].location}
                </p>
                <div className="flex my-2">
                  {[...Array(5)].map((_, i) => (
                    <RiStarFill
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonials[index].rating
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className=" xl:w-6/7 xl:pl-6">
                <p className="italic text-lg text-dark-theme">
                  {testimonials[index].message}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <div
          className={`flex justify-center gap-1 ${
            testimonials.length === 1 ? "hidden" : ""
          }`}
        >
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-dark-theme" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>
      <ScrollToTopButton />
    </main>
  );
}
