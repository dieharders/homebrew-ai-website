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

// https://github.com/shannpersand/comic-shanns
export const comic_shanns = localFont({
  src: [
    {
      path: "ComicShanns/comic_shanns.otf",
      weight: "400",
    },
  ],
  display: "swap",
  variable: "--font-comic-shanns",
});
