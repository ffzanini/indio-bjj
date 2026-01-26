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

export default function Contact() {
  return (
    <main>
      <section className="bg-linear-to-b from-primary-ja via-primary-ja to-dark-theme-background pt-42 pb-12 lg:pb-20 text-white-theme mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse gap-12 items-center">
          <div className="text-center lg:text-left max-w-7xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-dark-theme">
              Entre em contato com a JA Índio Jiu Jitsu
            </h1>
            <p className="text-xl text-center text-dark-theme mb-8 lg:mb-16 mx-4 lg:mx-auto">
              Estamos aqui para ajudar você a fazer parte da nossa família ou
              tirar qualquer dúvida que tenha sobre nossa escola e programas.
              Nossa equipe está pronta para atendê-lo.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl py-8 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8 lg:pb-16 m-3 lg:m-0">
          <Card className="overflow-hidden border border-primary-ja/5 shadow-lg hover:shadow-xl hover:shadow-primary-ja transition-all duration-300">
            <div className="h-2 bg-primary-ja"></div>
            <CardContent className="pt-8 pb-6 px-6">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-ja rounded-full">
                  <RiMapPinLine className="w-8 h-8" fill="#111" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Nossa Academia
              </h3>
              <p className="text-white-theme text-center mb-1">
                Rua Doutor Amarante 779
              </p>
              <p className="text-white-theme text-center ">
                Pelotas, Rio Grande do Sul, Brasil
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border border-primary-ja/5 shadow-lg hover:shadow-xl hover:shadow-primary-ja transition-all duration-300">
            <div className="h-2 bg-primary-ja"></div>
            <CardContent className="pt-8 pb-6 px-6">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-ja rounded-full">
                  <RiPhoneLine className="w-8 h-8" fill="#111" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Ligue ou mande mensagem
              </h3>
              <p className="text-white-theme text-center mb-1">
                (53) 99188-6599
              </p>

              <p className="text-white-theme text-center">
                Seg-Sex: 11:00-20:00
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border border-primary-ja/5 shadow-lg hover:shadow-xl hover:shadow-primary-ja transition-all duration-300">
            <div className="h-2 bg-primary-ja"></div>
            <CardContent className="pt-8 pb-6 px-6">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-ja rounded-full">
                  <RiMailLine className="w-8 h-8" fill="#111" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Outras dúvidas e seminários
              </h3>
              <p className="text-white-theme text-center mb-1">
                fabianoindio@hotmail.com
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl pb-8 lg:pb-16 m-3 lg:m-auto">
          <Card className="overflow-hidden border-none shadow-lg shadow-primary-ja">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <RiTimerLine className="w-6 h-6 text-white-theme" />
                <h3 className="text-xl font-semibold">
                  Horários de funcionamento
                </h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-white-theme">
                    Segunda - Sexta
                  </span>
                  <span className="text-white-theme">10:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-white-theme">Sábado</span>
                  <span className="text-white-theme">11:00 - 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-white-theme">Domingo</span>
                  <span className="text-white-theme">Fechado</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200 mt-2">
                  <span className="font-medium text-white-theme">Feriados</span>
                  <span className="text-white-theme">Horário especial</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-none shadow-lg shadow-primary-ja">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                Conecte-se com a gente
              </h3>
              <p className="text-white-theme mb-4">
                Nos siga nas redes sociais para ficar por dentro das novidades,
                eventos especiais, seminários e inspiração para o seu Jiu Jitsu!
              </p>
              <div className="flex gap-4">
                <motion.a
                  target="_blank"
                  href="https://www.instagram.com/jajiujitsu_pelotas/"
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  }}
                  className="p-2 flex justify-center items-center hover:brightness-250 transition-all duration-300 bg-primary-ja rounded-full"
                >
                  <RiInstagramLine size={32} fill="#111" />
                </motion.a>

                <motion.a
                  target="_blank"
                  href="https://www.facebook.com/indiojajj"
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  }}
                  className="p-2 flex justify-center items-center hover:brightness-250 transition-all duration-300 bg-primary-ja rounded-full"
                >
                  <RiFacebookLine size={32} fill="#111" />
                </motion.a>
                <motion.a
                  target="_blank"
                  href="https://www.google.com/maps/place/INDIO+JA+JIU+JITSU+PELOTAS/@-31.757383,-52.34483,17z/data=!3m1!4b1!4m6!3m5!1s0x9511b59fd5b2f1c3:0x7004aef90f93ea88!8m2!3d-31.757383!4d-52.34483!16s%2Fg%2F11f_1lkp_z?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  }}
                  className="p-2 flex justify-center items-center hover:brightness-250 transition-all duration-300 bg-primary-ja rounded-full"
                >
                  <RiGoogleLine size={32} fill="#111" />
                </motion.a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="py-8 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white-theme p-2 rounded-xl shadow-lg m-3 lg:m-0 ">
          <div className="bg-gray-200 w-full h-[350px] rounded-lg flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.480321474868!2d-52.344829999999995!3d-31.757382999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9511b59fd5b2f1c3%3A0x7004aef90f93ea88!2sINDIO%20JA%20JIU%20JITSU%20PELOTAS!5e0!3m2!1spt-BR!2sbr!4v1746025282459!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              loading="lazy"
              className="bg-gray-200 w-full h-[350px] rounded-lg flex items-center justify-center"
              title="GoogleMaps"
            />
          </div>
        </div>
      </section>
      <ScrollToTopButton />
    </main>
  );
}
