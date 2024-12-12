import { Lilita_One } from "next/font/google";
import localFont from "next/font/local";

// Google fonts (hosted)

// Does not support css var
export const lilita_one = Lilita_One({
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
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
  variable: "--font-comic-shanns",
});
