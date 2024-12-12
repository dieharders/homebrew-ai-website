import { Lilita_One, Inter, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";

// Google fonts (hosted)

export const lilita_one = Lilita_One({
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-lilita-one",
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
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

export const geist_sans = localFont({
  src: [
    {
      path: "GeistSans/Geist-Regular.otf",
      weight: "400",
    },
    {
      path: "GeistSans/Geist-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-geist-sans",
});

export const geist_mono = localFont({
  src: [
    {
      path: "GeistMono/GeistMono-Regular.otf",
      weight: "400",
    },
    {
      path: "GeistMono/GeistMono-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-geist-mono",
});
