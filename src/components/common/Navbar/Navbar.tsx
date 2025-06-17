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

import {
  RiCloseFill,
  RiMenuFill,
  RiAddFill,
  RiCloseLine,
} from "react-icons/ri";

import { cn } from "@/libs/cn";

export function Header() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-[0px] lg:top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showAcademia, setShowAcademia] = useState(false);
  const [showCursos, setShowCursos] = useState(false);

  return (
    <div className={cn("fixed left-0 right-0 z-50 bg-black", className)}>
      {/* Mobile */}
      <div className="flex items-center justify-between pr-4 py-1 lg:hidden">
        <NavbarLogo setActive={() => setActive("")} />
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-black dark:text-white z-50"
        >
          {mobileOpen ? <RiCloseFill size={36} /> : <RiMenuFill size={36} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-black text-white w-full flex flex-col pl-4 py-6 space-y-4 text-left">
          <NavbarLink
            setActive={() => setActive("")}
            onClick={() => setMobileOpen(false)}
            href="/"
          >
            Início
          </NavbarLink>
          <button
            onClick={() => setShowAcademia(!showAcademia)}
            className="w-full text-left"
          >
            <span className="flex items-center w-screen text-white">
              Academia
              {!showAcademia ? (
                <RiAddFill size={18} className="ml-auto pr-8" />
              ) : (
                <RiCloseLine size={18} className="ml-auto pr-8" />
              )}
            </span>
          </button>
          {showAcademia && (
            <div className="flex flex-col pl-4 space-y-2 text-sm">
              <HoveredLink
                href="/academy/programs"
                onClick={() => {
                  setMobileOpen(false);
                  setShowAcademia(false);
                }}
              >
                Programas
              </HoveredLink>
              <HoveredLink
                href="/academy/schedules"
                onClick={() => {
                  setMobileOpen(false);
                  setShowAcademia(false);
                }}
              >
                Horários
              </HoveredLink>
            </div>
          )}
          <button
            onClick={() => setShowCursos(!showCursos)}
            className="w-full text-left"
          >
            <span className="flex items-center w-screen text-white">
              Cursos
              {!showCursos ? (
                <RiAddFill size={18} className="ml-auto pr-8" />
              ) : (
                <RiCloseLine size={18} className="ml-auto pr-8" />
              )}
            </span>
          </button>
          {showCursos && (
            <div className="flex flex-col pl-4 space-y-2 text-sm">
              <HoveredLink
                href="/courses/halfguard"
                onClick={() => {
                  setMobileOpen(false);
                  setShowCursos(false);
                }}
              >
                Curso Meia Guarda
              </HoveredLink>
              <HoveredLink
                href="/courses/openguard"
                onClick={() => {
                  setMobileOpen(false);
                  setShowCursos(false);
                }}
              >
                Curso Guarda Aberta
              </HoveredLink>
            </div>
          )}
          <NavbarLink
            setActive={() => setActive("")}
            onClick={() => setMobileOpen(false)}
            href="/contact"
          >
            Contato
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
            </div>
          </MenuItem>
          <NavbarLogo setActive={setActive} />
          <MenuItem setActive={setActive} active={active} item="Cursos">
            <div
              className="text-sm grid grid-cols-2 gap-10 p-4"
              onClick={() => setActive("")}
            >
              <ProductItem
                title="Meia Guarda"
                href="/courses/halfguard"
                src="/images/courses/indio-curso-meia-guarda.webp"
                description="A especialidade da casa, treine a sua meia guarda como nunca antes."
              />
              <ProductItem
                title="Guarda Aberta"
                href="/courses/openguard"
                src="/images/courses/indio-curso-guarda-aberta.webp"
                description="Aqui você encontra tudo o que você precisa para sua guarda aberta."
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
