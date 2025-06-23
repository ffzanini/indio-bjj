"use client";
import React, { ComponentProps } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/libs/cn";

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="w-full relative rounded-full border border-transparent bg-dark-theme border-white-theme/20 shadow-input flex justify-center items-center space-x-8 px-1 py-1 "
    >
      {children}
    </nav>
  );
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <button onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="text-white-theme font-medium hover:text-primary-ja cursor-pointer hover:opacity-[0.9]"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.7rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                layoutId="active"
                className="bg-dark-theme backdrop-blur-sm rounded-2xl overflow-hidden border border-white-theme/20 shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4 text-left">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </button>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
  onClick,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
  onClick: () => void;
}) => {
  return (
    <Link href={href} className="flex space-x-2" onClick={onClick}>
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

type HoveredLinkProps = ComponentProps<typeof Link>;

export const HoveredLink = ({
  children,
  ...rest
}: React.PropsWithChildren<HoveredLinkProps>) => {
  return (
    <Link
      {...rest}
      className="text-white-theme font-medium hover:text-primary-ja cursor-pointer hover:opacity-[0.9]"
    >
      {children}
    </Link>
  );
};

export const NavbarLogo = ({
  setActive,
}: {
  setActive: (item: string) => void;
}) => {
  return (
    <button onMouseEnter={() => setActive("")} className="relative text-center">
      <Link
        href="/"
        className="relative z-20 mr-4 flex items-center px-2 py-2 text-sm"
      >
        <Image
          src="/images/logos/ja-indio-logo.webp"
          alt="logo"
          width={160}
          height={30}
        />
      </Link>
    </button>
  );
};

export const NavbarLink = ({
  href,
  children,
  className,
  setActive,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  setActive: (item: string) => void;
} & React.ComponentPropsWithoutRef<"a">) => {
  const baseStyles =
    "text-white-theme font-medium hover:text-primary-ja cursor-pointer hover:opacity-[0.9]";

  return (
    <button
      onMouseEnter={() => setActive(href)}
      className="text-left relative "
    >
      <Link href={href} className={cn(baseStyles, className)} {...props}>
        {children}
      </Link>
    </button>
  );
};
