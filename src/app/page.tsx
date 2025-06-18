"use client";
import { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
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
    <div>
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
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-3xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Jiu Jitsu de alta qualidade, <br /> transformando vidas
          </motion.p>
          <motion.p className="text-center text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 py-4">
            Aulas para todos os níveis e idades. <br /> Marque uma aula
            experimental e venha fazer parte da família JA Jiu Jitsu
          </motion.p>
          <button
            onClick={handleWhatsAppClick}
            className="px-4 py-2 backdrop-blur-sm border bg-primary-ja-color/10 border-primary-ja-color/20 text-white mx-auto text-center rounded-full relative mt-4"
          >
            <span>
              Agendar uma <b>aula grátis</b> agora
            </span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary-ja-color to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>
      <section className="bg-white py-20">
        <div className="flex flex-col justify-center items-center container">
          <p className="text-4xl lg:text-5xl text-black">VAMOS MARCAR A SUA</p>
          <p className="text-5xl lg:text-6xl text-primary-ja-color font-semibold">
            PRIMEIRA AULA
          </p>
          <div className="m-2 lg:w-[900px] flex flex-col items-center text-center py-6 gap-6">
            <p className="text-xl text-black">
              O Jiu-Jitsu é muito mais do que somente lutar — é descobrir novas
              forças dentro de você. Venha fazer sua primeira aula e experimente
              uma transformação que começa já no primeiro treino. Seu novo
              caminho pode começar hoje.
            </p>
            <p className="text-xl text-black">
              Clique abaixo e marque sua aula experimental!
            </p>
          </div>
          <button
            onClick={handleWhatsAppClick}
            className="px-4 py-2 lg:px-6 lg:py-4 backdrop-blur-sm border bg-black border-primary-ja-color/20 text-white mx-auto text-center rounded-full relative mt-2 hover:-translate-y-1 transition duration-400"
          >
            <span className="text-white font-semibold">Agendar agora</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary-ja-color to-transparent" />
          </button>
        </div>
      </section>
      <section>
        <div className="flex flex-col justify-center items-center pt-20">
          <p className="text-5xl">NOSSOS</p>
          <p className="text-6xl text-primary-ja-color font-semibold">
            PROGRAMAS
          </p>
        </div>

        <div className="relative overflow-hidden w-full h-full pt-10 pb-32">
          <Carousel slides={ProgramsCarousel} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="px-4">
          <h2 className="text-2xl lg:text-3xl text-center text-black">
            Depoimentos dos nossos alunos
          </h2>
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-black mb-6">
            Veja o que falam sobre nós
          </h2>
        </div>
        <motion.div
          key={index}
          custom={1}
          variants={carousel}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (info.offset.x < -100) handleSwipe("left");
            else if (info.offset.x > 100) handleSwipe("right");
          }}
          className="flex flex-col md:flex-row gap-6 items-center"
        >
          <div className="container bg-white p-4 md:p-12">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col justify-center md:w-1/6 mb-4 md:mb-0 md:border-r">
                <h3 className="text-xl text-black font-bold">
                  {testimonials[index].name}
                </h3>
                <p className="text-muted-foreground text-black">
                  {testimonials[index].location}
                </p>
                <div className="flex mt-2">
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
              <div className="md:w-5/6 mr-6 lg:mr-0 lg:pl-6">
                <p className="italic text-lg text-black">
                  {testimonials[index].message}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <div
          className={`flex justify-center mt-4 gap-1 ${
            testimonials.length === 1 ? "hidden" : ""
          }`}
        >
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>
      <ScrollToTopButton />
    </div>
  );
}
