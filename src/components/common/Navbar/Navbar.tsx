"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  NavbarLink,
  NavbarLogo,
  ProductItem,
} from "./NavbarComponents";

import { RiAddFill, RiCloseLine } from "react-icons/ri";

import { FaXmark, FaBars } from "react-icons/fa6";

import { cn } from "@/libs/cn";
import { motion } from "framer-motion";

export function Header() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-0 lg:top-2" />
    </div>
  );
}

function Navbar({ className }: Readonly<{ className?: string }>) {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showAcademia, setShowAcademia] = useState(false);
  const [showCursos, setShowCursos] = useState(false);

  return (
    <div className={cn("fixed left-0 right-0 z-9999 bg-dark-theme", className)}>
      {/* Mobile */}
      <div className="flex items-center justify-between pr-4 py-1 lg:hidden">
        <NavbarLogo setActive={() => setActive("")} />
        <motion.button
          className="xl:hidden z-9999"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <FaXmark className="h-8 w-8" />
          ) : (
            <FaBars className="h-8 w-8" />
          )}
        </motion.button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-dark-theme text-white w-full flex flex-col pl-4 py-6 space-y-4 text-left">
          <NavbarLink
            setActive={() => setActive("")}
            onClick={() => setMobileOpen(false)}
            href="/"
            className="text-left"
          >
            INÍCIO
          </NavbarLink>
          <button
            onClick={() => setShowAcademia(!showAcademia)}
            className="w-full text-left"
          >
            <span className="flex items-center w-screen text-white">
              ACADEMIA
              {!showAcademia ? (
                <RiAddFill size={18} className="ml-auto pr-8" />
              ) : (
                <RiCloseLine size={18} className="ml-auto pr-8" />
              )}
            </span>
          </button>
          {showAcademia && (
            <div className="flex flex-col pl-4 space-y-4 text-base">
              <HoveredLink
                href="/academy/programs"
                onClick={() => {
                  setMobileOpen(false);
                  setShowAcademia(false);
                }}
              >
                PROGRAMAS
              </HoveredLink>
              <HoveredLink
                href="/academy/schedules"
                onClick={() => {
                  setMobileOpen(false);
                  setShowAcademia(false);
                }}
              >
                HORÁRIOS
              </HoveredLink>
              <HoveredLink
                href="/academy/testimonials"
                onClick={() => {
                  setMobileOpen(false);
                  setShowAcademia(false);
                }}
              >
                DEPOIMENTOS
              </HoveredLink>
            </div>
          )}
          <button
            onClick={() => setShowCursos(!showCursos)}
            className="w-full text-left"
          >
            <span className="flex items-center w-screen text-white">
              CURSOS
              {!showCursos ? (
                <RiAddFill size={18} className="ml-auto pr-8" />
              ) : (
                <RiCloseLine size={18} className="ml-auto pr-8" />
              )}
            </span>
          </button>
          {showCursos && (
            <div className="flex flex-col pl-4 space-y-4 text-base">
              <HoveredLink
                href="/courses/halfguard"
                onClick={() => {
                  setMobileOpen(false);
                  setShowCursos(false);
                }}
              >
                CURSO MEIA GUARDA
              </HoveredLink>
              <HoveredLink
                href="/courses/openguard"
                onClick={() => {
                  setMobileOpen(false);
                  setShowCursos(false);
                }}
              >
                CURSO GUARDA ABERTA
              </HoveredLink>
              <HoveredLink
                href="/courses/drills"
                onClick={() => {
                  setMobileOpen(false);
                  setShowCursos(false);
                }}
              >
                CURSO SEQUÊNCIAS DRILLS
              </HoveredLink>
              <HoveredLink
                href="/courses/nogi"
                onClick={() => {
                  setMobileOpen(false);
                  setShowCursos(false);
                }}
              >
                CURSO FINALIZAÇÕES NOGI
              </HoveredLink>
            </div>
          )}
          <NavbarLink
            setActive={() => setActive("")}
            onClick={() => setMobileOpen(false)}
            href="/contact"
          >
            CONTATO
          </NavbarLink>
        </div>
      )}

      {/* Desktop */}
      <div className="hidden lg:flex justify-center fixed inset-x-0 max-w-2xl mx-auto z-50">
        <Menu setActive={setActive}>
          <NavbarLink setActive={setActive} href="/">
            Início
          </NavbarLink>
          <MenuItem setActive={setActive} active={active} item="Academia">
            <div className="flex flex-col space-y-4">
              <HoveredLink
                href="/academy/programs"
                onClick={() => setActive("")}
              >
                Programas
              </HoveredLink>
              <HoveredLink
                href="/academy/schedules"
                onClick={() => setActive("")}
              >
                Horários
              </HoveredLink>
              <HoveredLink
                href="/academy/testimonials"
                onClick={() => setActive("")}
              >
                Depoimentos
              </HoveredLink>
            </div>
          </MenuItem>
          <NavbarLogo setActive={setActive} />
          <MenuItem setActive={setActive} active={active} item="Cursos">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Meia Guarda"
                href="/courses/halfguard"
                src="/images/courses/indio-curso-meia-guarda.webp"
                description="A especialidade da casa, treine a sua meia guarda como nunca antes."
                onClick={() => setActive("")}
              />
              <ProductItem
                title="Guarda Aberta"
                href="/courses/openguard"
                src="/images/courses/indio-curso-guarda-aberta.webp"
                description="Aqui você encontra tudo o que você precisa para sua guarda aberta."
                onClick={() => setActive("")}
              />
              <ProductItem
                title="Sequências Drills"
                href="/courses/drills"
                src="/images/courses/indio-curso-drills.webp"
                description="Treine as sequências de drills que com certeza irão ajudar na sua evolução."
                onClick={() => setActive("")}
              />
              <ProductItem
                title="Finalizações NOGI"
                href="/courses/nogi"
                src="/images/courses/indio-curso-nogi.webp"
                description="Aqui você encontra todas as finalizações NOGI que um dia irá precisar."
                onClick={() => setActive("")}
              />
            </div>
          </MenuItem>
          <NavbarLink setActive={setActive} href="/contact">
            Contato
          </NavbarLink>
        </Menu>
      </div>
    </div>
  );
}
