"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll } from "framer-motion";
import { RiArrowUpLine } from "react-icons/ri";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollY.set(0);
  }, [pathname, scrollY]);

  return (
    <motion.button
      className="cursor-pointer  fixed opacity-80 bottom-12 right-4 p-2 bg-primary-ja rounded-full"
      whileHover={{ scale: 1.1 }}
      style={{ display: isVisible ? "block" : "none" }}
      onClick={goTop}
    >
      <RiArrowUpLine width={24} height={24} className="text-dark-theme" />
    </motion.button>
  );
}
