"use client";

import React from "react";

import { InstagramEmbed, ScrollToTopButton } from "@/components";
import { videoTestimonials } from "@/constants/testimonials";

export default function Testimonials() {
  return (
    <main>
      <section className="bg-linear-to-b from-primary-ja via-primary-ja to-dark-theme-background pt-42 pb-12 lg:pb-20 text-white-theme mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-dark-theme">
              Depoimentos de alunos da JA Índio Jiu Jitsu
            </h1>
            <p className="text-xl text-center text-dark-theme mb-8 lg:mb-16 mx-4 lg:mx-auto">
              Veja o que nossos alunos tem a dizer!
            </p>
          </div>
        </div>
      </section>
      <section className="py-8 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
          {videoTestimonials.map((item, i) => (
            <InstagramEmbed key={i} url={item.link} />
          ))}
        </div>
      </section>
      <ScrollToTopButton />
    </main>
  );
}
