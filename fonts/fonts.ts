import { Lilita_One } from "next/font/google";
import localFont from "next/font/local";

// Google fonts (hosted)

export const lilita_one = Lilita_One({
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-lilita-one",
});

// Local fonts (downloaded)

// https://github.com/dtinth/comic-mono-font
export const comic_mono = localFont({
  src: [
    {
      path: "comic-mono/webfonts/comic-mono-latin-400-normal.woff2",
      weight: "400",
    },
    {
      path: "comic-mono/webfonts/comic-mono-latin-700-normal.woff2",
      weight: "700",
    },
  ],
  display: "swap",
  variable: "--font-comic-mono",
});
