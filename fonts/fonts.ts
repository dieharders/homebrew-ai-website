import { Inter, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";
// import { GeistSans, GeistMono } from "geist/font";

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
