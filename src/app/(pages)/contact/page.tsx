"use client";

import {
  RiMapPinLine,
  RiPhoneLine,
  RiMailLine,
  RiTimerLine,
  RiInstagramLine,
  RiFacebookLine,
  RiGoogleLine,
} from "react-icons/ri";

import { Card, CardContent, ScrollToTopButton } from "@/components";
import { motion } from "framer-motion";
import { useTranslation } from "@/context";

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

const contactCardClass =
  "overflow-hidden rounded-xl border border-foreground/10 bg-card shadow-sm hover:shadow-md hover:border-primary-ja/30 transition-all duration-300 flex flex-col";

export default function Contact() {
  const { translations: t } = useTranslation();
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-linear-to-b from-primary-ja via-primary-ja to-background dark:bg-background pt-42 pb-12 lg:pb-20 text-foreground mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-dark-theme">
            {t.contact.title}
          </h1>
          <p className="text-lg lg:text-xl text-dark-theme/90">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      <section className="max-w-6xl py-8 mx-auto px-4 sm:px-6 lg:px-8 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={cardVariants}
          >
            <Card className={contactCardClass + " w-full min-h-[220px]"}>
              <CardContent className="p-6 lg:p-8 flex flex-col items-center text-center flex-1">
                <div className="p-3 rounded-full border-2 border-foreground/25 bg-foreground/5 text-foreground mb-4">
                  <RiMapPinLine className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {t.contact.ourAcademy}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.contact.addressLine1}
                  <br />
                  {t.contact.addressLine2}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={cardVariants}
          >
            <Card className={contactCardClass + " w-full min-h-[220px]"}>
              <CardContent className="p-6 lg:p-8 flex flex-col items-center text-center flex-1">
                <div className="p-3 rounded-full border-2 border-foreground/25 bg-foreground/5 text-foreground mb-4">
                  <RiPhoneLine className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {t.contact.callOrMessage}
                </h3>
                <a
                  href="tel:+5553991886599"
                  className="text-sm text-muted-foreground hover:text-primary-ja transition-colors"
                >
                  {t.contact.phone}
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  {t.contact.phoneHours}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={cardVariants}
          >
            <Card className={contactCardClass + " w-full min-h-[220px]"}>
              <CardContent className="p-6 lg:p-8 flex flex-col items-center text-center flex-1">
                <div className="p-3 rounded-full border-2 border-foreground/25 bg-foreground/5 text-foreground mb-4">
                  <RiMailLine className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {t.contact.otherDoubts}
                </h3>
                <a
                  href={`mailto:${t.contact.email}`}
                  className="text-sm text-muted-foreground hover:text-primary-ja transition-colors break-all"
                >
                  {t.contact.email}
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 pb-12 lg:pb-16 lg:grid-rows-1">
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={cardVariants}
            className="min-h-[280px] lg:min-h-0 lg:h-full"
          >
            <Card className={contactCardClass + " h-full"}>
              <CardContent className="p-6 lg:p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-full border-2 border-foreground/25 bg-foreground/5 text-foreground">
                    <RiTimerLine className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {t.contact.openingHours}
                  </h3>
                </div>
                <dl className="space-y-0 text-sm">
                  <div className="flex justify-between items-baseline gap-4 py-2.5 border-b border-foreground/10">
                    <dt className="font-medium text-foreground">
                      {t.contact.weekdays}
                    </dt>
                    <dd className="text-muted-foreground tabular-nums">
                      {t.contact.weekdaysHours}
                    </dd>
                  </div>
                  <div className="flex justify-between items-baseline gap-4 py-2.5 border-b border-foreground/10">
                    <dt className="font-medium text-foreground">
                      {t.contact.saturday}
                    </dt>
                    <dd className="text-muted-foreground tabular-nums">
                      {t.contact.saturdayHours}
                    </dd>
                  </div>
                  <div className="flex justify-between items-baseline gap-4 py-2.5 border-b border-foreground/10">
                    <dt className="font-medium text-foreground">
                      {t.contact.sunday}
                    </dt>
                    <dd className="text-muted-foreground tabular-nums">
                      {t.contact.sundayHours}
                    </dd>
                  </div>
                  <div className="flex justify-between items-baseline gap-4 py-2.5">
                    <dt className="font-medium text-foreground">
                      {t.contact.holidays}
                    </dt>
                    <dd className="text-muted-foreground tabular-nums">
                      {t.contact.holidaysHours}
                    </dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={cardVariants}
            className="min-h-[280px] lg:min-h-0 lg:h-full"
          >
            <Card className={contactCardClass + " h-full"}>
              <CardContent className="p-6 lg:p-8 flex flex-col h-full">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t.contact.connectWithUs}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 flex-1">
                  {t.contact.connectDescription}
                </p>
                <div className="flex gap-3 flex-wrap">
                  <motion.a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/jajiujitsu_pelotas/"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 flex justify-center items-center rounded-full border-2 border-foreground/25 bg-foreground/5 text-foreground hover:border-primary-ja hover:bg-primary-ja hover:text-dark-theme transition-colors"
                    aria-label="Instagram"
                  >
                    <RiInstagramLine size={24} />
                  </motion.a>
                  <motion.a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/indiojajj"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 flex justify-center items-center rounded-full border-2 border-foreground/25 bg-foreground/5 text-foreground hover:border-primary-ja hover:bg-primary-ja hover:text-dark-theme transition-colors"
                    aria-label="Facebook"
                  >
                    <RiFacebookLine size={24} />
                  </motion.a>
                  <motion.a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/place/INDIO+JA+JIU+JITSU+PELOTAS/@-31.757383,-52.34483,17z"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 flex justify-center items-center rounded-full border-2 border-foreground/25 bg-foreground/5 text-foreground hover:border-primary-ja hover:bg-primary-ja hover:text-dark-theme transition-colors"
                    aria-label="Google Maps"
                  >
                    <RiGoogleLine size={24} />
                  </motion.a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-xl overflow-hidden border border-foreground/10 shadow-lg h-[320px] lg:h-[400px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.480321474868!2d-52.344829999999995!3d-31.757382999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9511b59fd5b2f1c3%3A0x7004aef90f93ea88!2sINDIO%20JA%20JIU%20JITSU%20PELOTAS!5e0!3m2!1spt-BR!2sbr!4v1746025282459!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            loading="lazy"
            className="w-full h-full border-0"
            title="Localização da academia no Google Maps"
          />
        </motion.div>
      </section>
      <ScrollToTopButton />
    </main>
  );
}
