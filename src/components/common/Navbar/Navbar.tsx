"use client";
import React, { useState } from "react";
import {
  getNavParentPath,
  HoveredLink,
  Menu,
  MenuItem,
  NavbarLink,
  NavbarLogo,
  ProductItem,
} from "./NavbarComponents";

import { RiAddFill, RiCloseLine } from "react-icons/ri";

import { FaXmark, FaBars } from "react-icons/fa6";

import { usePathname } from "next/navigation";
import { cn } from "@/libs/cn";
import { motion } from "framer-motion";
import { ThemeToggle, LanguageToggle } from "@/components/ui";
import { NavbarSettingsMenu } from "./NavbarSettingsMenu";
import { useTranslation } from "@/context";

export function Header() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-0 lg:top-2" />
    </div>
  );
}

const MOBILE_LINK_CLASS =
  "text-foreground text-xl font-medium hover:text-primary-ja! hover:opacity-90 cursor-pointer";

function Navbar({ className }: Readonly<{ className?: string }>) {
  const { translations: t } = useTranslation();
  const pathname = usePathname();
  const navParent = getNavParentPath(pathname ?? "");
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showAcademia, setShowAcademia] = useState(false);
  const [showCursos, setShowCursos] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className={cn("fixed left-0 right-0 z-9999 bg-background", className)}>
      {/* Menu flutuante desktop (tema + idioma) */}
      <NavbarSettingsMenu />

      {/* Mobile */}
      <div className="flex items-center justify-between pr-4 py-1 lg:hidden">
        <NavbarLogo setActive={() => setActive("")} onNavigate={closeMobile} />
        <div className="flex items-center gap-2">
          <motion.button
            className="xl:hidden z-9999 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <FaXmark className="h-8 w-8" />
            ) : (
              <FaBars className="h-8 w-8" />
            )}
          </motion.button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background text-foreground w-full flex flex-col px-4 py-6 text-left shadow-[0_8px_16px_-2px_rgba(0,0,0,0.12)]">
          <div className="flex flex-col space-y-4">
            <NavbarLink
              setActive={() => setActive("")}
              onClick={closeMobile}
              href="/"
              isActive={navParent === "home"}
              className="text-left"
            >
              {t.common.nav.home.toUpperCase()}
            </NavbarLink>
            <button
              onClick={() => setShowAcademia(!showAcademia)}
              className={cn("w-full text-left", MOBILE_LINK_CLASS)}
            >
              <span
                className={cn(
                  "flex items-center w-screen",
                  navParent === "academy" &&
                    "font-bold text-primary-ja! text-outline-shadow-black",
                )}
              >
                {t.common.nav.academy.toUpperCase()}
                {!showAcademia ? (
                  <RiAddFill size={18} className="ml-auto pr-8" />
                ) : (
                  <RiCloseLine size={18} className="ml-auto pr-8" />
                )}
              </span>
            </button>
            {showAcademia && (
              <div className="flex flex-col pl-4 space-y-4 text-xl font-medium">
                <HoveredLink
                  href="/academy/programs"
                  onClick={() => {
                    closeMobile();
                    setShowAcademia(false);
                  }}
                >
                  {t.common.nav.programs.toUpperCase()}
                </HoveredLink>
                <HoveredLink
                  href="/academy/schedules"
                  onClick={() => {
                    closeMobile();
                    setShowAcademia(false);
                  }}
                >
                  {t.common.nav.schedules.toUpperCase()}
                </HoveredLink>
                <HoveredLink
                  href="/academy/testimonials"
                  onClick={() => {
                    closeMobile();
                    setShowAcademia(false);
                  }}
                >
                  {t.common.nav.testimonials.toUpperCase()}
                </HoveredLink>
              </div>
            )}
            <button
              onClick={() => setShowCursos(!showCursos)}
              className={cn("w-full text-left", MOBILE_LINK_CLASS)}
            >
              <span
                className={cn(
                  "flex items-center w-screen",
                  navParent === "courses" &&
                    "font-bold text-primary-ja! text-outline-shadow-black",
                )}
              >
                {t.common.nav.courses.toUpperCase()}
                {!showCursos ? (
                  <RiAddFill size={18} className="ml-auto pr-8" />
                ) : (
                  <RiCloseLine size={18} className="ml-auto pr-8" />
                )}
              </span>
            </button>
            {showCursos && (
              <div className="flex flex-col pl-4 space-y-4 text-xl font-medium">
                <HoveredLink
                  href="/courses/halfguard"
                  onClick={() => {
                    closeMobile();
                    setShowCursos(false);
                  }}
                >
                  {t.common.nav.courseHalfGuard.toUpperCase()}
                </HoveredLink>
                <HoveredLink
                  href="/courses/openguard"
                  onClick={() => {
                    closeMobile();
                    setShowCursos(false);
                  }}
                >
                  {t.common.nav.courseOpenGuard.toUpperCase()}
                </HoveredLink>
                <HoveredLink
                  href="/courses/drills"
                  onClick={() => {
                    closeMobile();
                    setShowCursos(false);
                  }}
                >
                  {t.common.nav.courseDrills.toUpperCase()}
                </HoveredLink>
                <HoveredLink
                  href="/courses/nogi"
                  onClick={() => {
                    closeMobile();
                    setShowCursos(false);
                  }}
                >
                  {t.common.nav.courseNogi.toUpperCase()}
                </HoveredLink>
              </div>
            )}
            <NavbarLink
              setActive={() => setActive("")}
              onClick={closeMobile}
              href="/contact"
              isActive={navParent === "contact"}
            >
              {t.common.nav.contact.toUpperCase()}
            </NavbarLink>
          </div>

          {/* Delimitador claro entre navegação e toggles — mesma margem no início e no fim */}
          <div
            className="mt-6 pt-6 border-t-2 border-foreground/20 flex items-center gap-2"
            onClick={closeMobile}
          >
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      )}

      {/* Desktop */}
      <div className="hidden lg:flex justify-center fixed inset-x-0 max-w-2xl mx-auto z-50">
        <Menu setActive={setActive}>
          <NavbarLink
            setActive={setActive}
            href="/"
            isActive={navParent === "home"}
          >
            {t.common.nav.home}
          </NavbarLink>
          <MenuItem
            setActive={setActive}
            active={active}
            item={t.common.nav.academy}
            isActive={navParent === "academy"}
          >
            <div className="flex flex-col space-y-4">
              <HoveredLink
                href="/academy/programs"
                onClick={() => setActive("")}
              >
                {t.common.nav.programs}
              </HoveredLink>
              <HoveredLink
                href="/academy/schedules"
                onClick={() => setActive("")}
              >
                {t.common.nav.schedules}
              </HoveredLink>
              <HoveredLink
                href="/academy/testimonials"
                onClick={() => setActive("")}
              >
                {t.common.nav.testimonials}
              </HoveredLink>
            </div>
          </MenuItem>
          <NavbarLogo setActive={setActive} />
          <MenuItem
            setActive={setActive}
            active={active}
            item={t.common.nav.courses}
            isActive={navParent === "courses"}
          >
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title={t.common.nav.courseHalfGuardTitle}
                href="/courses/halfguard"
                src="/images/courses/indio-curso-meia-guarda.webp"
                description={t.common.nav.courseHalfGuardDesc}
                onClick={() => setActive("")}
              />
              <ProductItem
                title={t.common.nav.courseOpenGuardTitle}
                href="/courses/openguard"
                src="/images/courses/indio-curso-guarda-aberta.webp"
                description={t.common.nav.courseOpenGuardDesc}
                onClick={() => setActive("")}
              />
              <ProductItem
                title={t.common.nav.courseDrillsTitle}
                href="/courses/drills"
                src="/images/courses/indio-curso-drills.webp"
                description={t.common.nav.courseDrillsDesc}
                onClick={() => setActive("")}
              />
              <ProductItem
                title={t.common.nav.courseNogiTitle}
                href="/courses/nogi"
                src="/images/courses/indio-curso-nogi.webp"
                description={t.common.nav.courseNogiDesc}
                onClick={() => setActive("")}
              />
            </div>
          </MenuItem>
          <NavbarLink
            setActive={setActive}
            href="/contact"
            isActive={navParent === "contact"}
          >
            {t.common.nav.contact}
          </NavbarLink>
        </Menu>
      </div>
    </div>
  );
}
