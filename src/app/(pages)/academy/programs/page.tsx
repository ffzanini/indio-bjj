'use client'

import React from 'react'
import Link from 'next/link'

import {
  BentoGrid,
  BentoGridItem,
  ScrollToTopButton,
  Wrapper,
} from '@/components'
import { programItems } from '@/constants/programs'

export default function AboutUs() {
  return (
    <Wrapper>
      <section className="bg-gradient-to-b from-primary-ja-color via-primary-ja-color to-dark-theme-background pt-40 pb-12 lg:pb-20 text-white">
        <div className="container">
          <div className="flex flex-col-reverse gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-1 text-black">
                Programas JA Jiu Jitsu
              </h1>
              <p className="text-2xl text-black text-center mb-14">
                Seja um membro do nosso time
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-8 lg:pb-16 ">
        <BentoGrid className="mx-4 lg:mx-auto">
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
    </Wrapper>
  )
}
