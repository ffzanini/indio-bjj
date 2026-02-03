"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { ScrollToTopButton } from "@/components";
import { programItems } from "@/constants/programs";
import { useTranslation } from "@/context";

export default function ProgramsPage() {
  const { translations: t } = useTranslation();
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-linear-to-b from-primary-ja via-primary-ja to-background dark:bg-background pt-42 pb-12 lg:pb-20 text-foreground mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-dark-theme">
              {t.programs.title}
            </h1>
            <p className="text-xl text-center text-dark-theme mb-8 lg:mb-16 mx-4 lg:mx-auto">
              {t.programs.subtitle}
            </p>
          </div>
        </div>
      </section>
      <section className="py-8 mx-auto px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programItems.map((item) => {
              const programTranslate = t.programs.programs.find(
                (translate) => translate.id === item.id,
              );
              const title = programTranslate?.title ?? item.title;
              const description =
                programTranslate?.description ?? item.description;
              return (
                <motion.div
                  key={item.id}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Link
                    href={item.navigation}
                    prefetch={false}
                    className="flex flex-col h-full rounded-xl overflow-hidden border border-foreground/20 bg-background shadow-sm hover:shadow-md hover:border-foreground/30 transition-all"
                  >
                    <div className="relative aspect-video w-full bg-muted">
                      <Image
                        src={item.header}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-1 text-left">
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {title}
                      </h3>
                      <p className="text-sm text-muted-foreground flex-1">
                        {description}
                      </p>
                      <span className="text-sm font-medium text-foreground mt-2 inline-flex items-center gap-1">
                        {t.common.buttons.learnMore}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <ScrollToTopButton />
    </main>
  );
}
