"use client";

import React from "react";
import Link from "next/link";

import { BentoGrid, BentoGridItem, ScrollToTopButton } from "@/components";
import { programItems } from "@/constants/programs";

export default function AboutUs() {
  return (
    <main>
      <section className="bg-linear-to-b from-primary-ja via-primary-ja to-dark-theme-background pt-42 pb-12 lg:pb-20 text-white-theme mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-dark-theme">
              Programas JA Índio Jiu Jitsu
            </h1>
            <p className="text-xl text-center text-dark-theme mb-8 lg:mb-16 mx-4 lg:mx-auto">
              Seja um membro do nosso time
            </p>
          </div>
        </div>
      </section>
      <section className="py-8 mx-auto px-4 sm:px-6 lg:px-8">
        <BentoGrid className="lg:mx-auto">
          {programItems.map((item, i) => (
            <Link key={i} href={item.navigation}>
              <BentoGridItem
                title={item.title}
                description={item.description}
                header={item.header}
                Icon={item.icon}
              />
            </Link>
          ))}
        </BentoGrid>
      </section>
      <ScrollToTopButton />
    </main>
  );
}
