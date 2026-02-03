"use client";
import { motion } from "framer-motion";

import { socialsAcademia, socialsIndio } from "@/constants/socials";
import Link from "next/link";
import { ZoomImage } from "@/components/ui";
import { useTranslation } from "@/context";

export function Footer() {
  const { translations: t } = useTranslation();
  const yearNow = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="bg-dark-theme px-4 sm:px-6 lg:px-8 xl:px-18"
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 justify-between items-center">
        <div className="flex flex-col items-center">
          <Link
            href="/"
            prefetch={false}
            className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-2 text-sm font-normal text-white-theme"
          >
            <ZoomImage
              src="/images/logos/ja-indio-logo.webp"
              alt="logo"
              width={240}
              height={30}
              style={{ height: "auto" }}
            />
          </Link>
          <p className="text-xl font-semibold lg:pb-4 text-white-theme">
            {t.common.footer.motto}
          </p>
          <div className="justify-start items-start pt-6 lg:pt-0">
            <div className="flex flex-col gap-4">
              <p className="text-xl text-white-theme">
                {t.common.footer.address}
              </p>
              <div>
                <p className="text-lg gap-2 text-white-theme">
                  <b className="text-lg">{t.common.footer.phone}</b> (53) 99188-6599
                </p>
                <p className="text-lg gap-2 text-white-theme">
                  <b className="text-lg">{t.common.footer.email}</b>fabianoindio@hotmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 lg:pt-0 flex flex-col md:gap-10 text-white-theme text-center">
          <div>
            <h3 className="text-lg font-semibold mb-2">{t.common.footer.academySocials}</h3>
            <div className="flex justify-center  gap-4 text-2xl">
              {socialsAcademia.map(({ href, icon: Icon, name }) => (
                <motion.a
                  aria-label={name}
                  target="_blank"
                  key={href}
                  href={href}
                  className="p-2 flex justify-center items-center transition-all duration-300"
                >
                  <Icon size={32} className="hover:text-primary-ja" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="pt-6 lg:pt-0">
            <h3 className="text-lg font-semibold mb-2">
              {t.common.footer.indioSocials}
            </h3>
            <div className="flex justify-center  gap-4 text-2xl">
              {socialsIndio.map(({ href, icon: Icon, name }) => (
                <motion.a
                  aria-label={name}
                  target="_blank"
                  key={href}
                  href={href}
                  className="p-2 flex justify-center items-center transition-all duration-300"
                >
                  <Icon size={32} className="hover:text-primary-ja" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden xl:flex">
          <div className="flex flex-col mb-1 justify-center items-center">
            <p className="text-xl font-semibold text-white-theme">
              {t.common.footer.doubts}
            </p>
            <p className="text-white-theme">
              {t.common.footer.officialSiteBefore}
              <a
                className="font-semibold hover:text-primary-ja"
                href="https://www.jajiujitsu.com.br/"
                target="_blank"
              >
                {t.common.footer.officialSite}
              </a>
              {t.common.footer.officialSiteAfter}
            </p>
          </div>
        </div>
      </div>
      <div className="pt-6 mt-8 gap-4 lg:pt-2 flex flex-col justify-center items-center border-t border-white-theme/20">
        <p className="pt-4 text-center text-white-theme">
          {t.common.footer.copyright.replace("{{year}}", String(yearNow))}
        </p>
        <p className="flex flex-col text-base gap-1 justify-center text-center pb-4 text-white-theme">
          <span className="text-md">
            {t.common.footer.developedBy}
            <Link
              href="https://www.ffzanini.dev/"
              target="_blank"
              prefetch={false}
              className="text-md hover:text-primary-ja"
            >
              Felipe Frantz Zanini
            </Link>
          </span>
        </p>
      </div>
    </motion.footer>
  );
}
