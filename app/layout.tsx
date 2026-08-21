import cardWide from "public/social-card-wide.png";
import type { Metadata, Viewport } from "next";
import { comic_mono, lilita_one } from "fonts/fonts";
import "@/global/global.css";

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  themeColor: "#ffec99",
};

export const metadata: Metadata = {
  title: "OpenBrew.ai — AI-native multimedia apps for everyone",
  // Leads with the app names so the suite is what surfaces in search results,
  // and stays under ~160 chars so Google doesn't truncate it.
  description:
    "The AI-native app suite built to get your work done without burning credits.",
  applicationName: "OpenBrew.ai",
  metadataBase: new URL(`https://www.openbrew.ai`),
  alternates: {
    // Relative so each route self-references instead of every page pointing
    // at the homepage. Resolved against `metadataBase` + the current path.
    canonical: "./",
  },
  // Brand terms for the app suite so the homepage ties each app name back to openbrew.ai
  keywords: [
    "desktop-app",
    "ai",
    "inference-engine",
    "OpenBrew",
    "Obrew",
    "FileBuff",
    "MotionBuff",
    "PaperBuff",
    "ScreenBuff",
    "ai video generator",
    "ai document search",
    "screen recording",
  ],
  // `summary_large_image` so the wide card renders at full width — `summary`
  // was cropping it into a small square thumbnail.
  twitter: { card: "summary_large_image", images: [{ url: cardWide.src }] },
  openGraph: {
    title: "OpenBrew.ai — AI-native apps for all",
    description:
      "The AI-native app suite built to get your work done without burning credits.",
    url: "https://www.openbrew.ai",
    siteName: "OpenBrew.ai",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: cardWide.src,
        alt: "Obrew logo and title",
        width: cardWide.width,
        height: cardWide.height,
      },
    ],
  },
};

export default function RootLayout({
  // `children` will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // This makes the font available globally via its' css var
    // `data-scroll-behavior` tells Next the `scroll-behavior: smooth` in
    // global.css is intentional, so it suppresses the animation on cross-page
    // navigations while same-page `#anchor` jumps stay smooth.
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${comic_mono.variable} ${lilita_one.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
