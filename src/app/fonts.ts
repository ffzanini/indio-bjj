import { Montserrat } from "next/font/google";

export const fontMontserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-Montserrat",
  display: "swap",
  adjustFontFallback: true,
  preload: true,
});
