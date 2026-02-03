"use client";

import React from "react";

import { InstagramEmbed, ScrollToTopButton } from "@/components";
import { videoTestimonials } from "@/constants/testimonials";
import { useTranslation } from "@/context";

export default function Testimonials() {
  const { translations: t } = useTranslation();
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-linear-to-b from-primary-ja via-primary-ja to-background dark:bg-background pt-42 pb-12 lg:pb-20 text-foreground mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-dark-theme">
              {t.testimonials.title}
            </h1>
            <p className="text-xl text-center text-dark-theme mb-8 lg:mb-16 mx-4 lg:mx-auto">
              {t.testimonials.subtitle}
            </p>
          </div>
        </div>
      </section>
      <section className="py-8 mx-auto px-4 sm:px-6 lg:px-8 bg-background">
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
