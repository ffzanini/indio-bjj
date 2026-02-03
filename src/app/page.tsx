"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RiStarFill } from "react-icons/ri";

import { ScrollToTopButton, ImagesSlider, Carousel } from "@/components/ui";
import { parallaxImages, ProgramsCarousel } from "@/constants/home";
import { testimonials } from "@/constants/testimonials";
import { carousel } from "@/constants/animations";
import { useTranslation } from "@/context";

export default function PricipalPage() {
  const { translations: t, location } = useTranslation();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSwipe = (swipeDirection: "left" | "right") => {
    if (swipeDirection === "left") {
      setDirection(1);
      next();
    } else {
      setDirection(-1);
      setIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length,
      );
    }
  };

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const resetAutoplay = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(next, 8000);
  };

  useLayoutEffect(() => {
    resetAutoplay();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index]);

  const handleWhatsAppClick = () => {
    const text =
      location === "pt"
        ? "Olá!%20Tenho%20interesse%20em%20agendar%20uma%20aula%20experimental!"
        : "Hello!%20I'm%20interested%20in%20scheduling%20a%20trial%20class!";
    window.open(`https://wa.me/5553991886599?text=${text}`, "_blank");
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
          <motion.h1 className="font-bold text-3xl md:text-6xl text-center bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 py-4">
            {t.home.hero.titleLine1} <br /> {t.home.hero.titleLine2}
          </motion.h1>
          <motion.p className="text-center text-2xl py-4 text-white-theme">
            {t.home.hero.subtitleLine1} <br /> {t.home.hero.subtitleLine2}
          </motion.p>
          <button
            onClick={handleWhatsAppClick}
            className="cursor-pointer px-4 py-2 backdrop-blur-sm border bg-primary-ja/10 border-primary-ja/20 text-white-theme mx-auto text-center rounded-full relative mt-4"
          >
            <span>
              {t.home.hero.cta} <b>{t.home.hero.ctaBold}</b>{" "}
              {t.home.hero.ctaSuffix}
            </span>
            <div className="absolute inset-x-0 h-px -bottom-px bg-linear-to-r w-3/4 mx-auto from-transparent via-primary-ja to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>

      <section className="bg-white-theme py-8 px-2 xl:px-0">
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl xl:text-5xl text-dark-theme">
            {t.home.firstClass.title1}
          </p>
          <p className="text-4xl xl:text-6xl text-primary-ja font-semibold tracking-wider text-outline-shadow-black">
            {t.home.firstClass.title2}
          </p>
          <div className="max-w-5xl flex flex-col items-center text-center py-3">
            <p className="text-lg text-dark-theme py-6">
              {t.home.firstClass.description}
            </p>
            <p className="text-xl font-semibold text-dark-theme">
              {t.home.firstClass.cta}
            </p>
          </div>
          <button
            onClick={handleWhatsAppClick}
            className="cursor-pointer w-full lg:w-auto px-4 py-2 xl:px-6 xl:py-4 backdrop-blur-sm border bg-dark-theme border-primary-ja/50 text-white-theme mx-auto text-center rounded-full relative mt-2 hover:-translate-y-1 transition duration-300"
          >
            <span className="font-semibold">
              {t.common.buttons.scheduleNow}
            </span>
            <div className="absolute inset-x-0 h-px -bottom-px bg-linear-to-r w-3/4 mx-auto from-transparent via-primary-ja to-transparent" />
          </button>
        </div>
      </section>
      <section className="py-8 bg-dark-theme">
        <div className="flex flex-col justify-center items-center">
          <p className="text-4xl xl:text-5xl text-white-theme">
            {t.home.programs.title1}
          </p>
          <p className="text-5xl xl:text-6xl text-primary-ja font-semibold tracking-widest mb-12">
            {t.home.programs.title2}
          </p>
        </div>

        <div className="relative overflow-hidden w-full h-full pb-14">
          <Carousel
            slides={ProgramsCarousel.map((slide, i) => ({
              ...slide,
              title: t.home.carousel[i].title,
              subtitle: t.home.carousel[i].subtitle,
            }))}
          />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center py-8 bg-white-theme px-4 xl:px-0">
        <h2 className="text-xl xl:text-3xl font-semibold text-center text-dark-theme">
          {t.home.testimonials.title1}
        </h2>
        <h2 className="text-2xl xl:text-4xl font-bold text-center text-primary-ja tracking-wide text-outline-shadow-black p-1">
          {t.home.testimonials.title2}
        </h2>
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_, info) => {
            if (info.offset.x < -100) handleSwipe("left");
            else if (info.offset.x > 100) handleSwipe("right");
          }}
          className="max-w-7xl flex flex-col md:flex-row items-center justify-center overflow-hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              custom={direction}
              variants={carousel}
              initial="enterTestimonial"
              animate="center"
              exit="exitTestimonial"
              transition={{
                type: "tween",
                duration: 0.55,
                ease: "easeOut",
              }}
              className="w-full"
            >
              <div className="bg-white-theme py-8 min-h-80 flex flex-col justify-center">
                <div className="flex flex-col lg:flex-row lg:items-center">
                  <div className="flex flex-col justify-center w-full xl:w-1/7 xl:border-r border-dark-theme/20 shrink-0">
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
                  <div className="xl:w-6/7 xl:pl-6 min-w-0">
                    <p className="italic text-lg text-dark-theme">
                      {testimonials[index].message}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
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
