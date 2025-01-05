import cardWide from 'public/social-card-wide.png';
import type { Metadata, Viewport } from 'next';
import { comic_shanns } from 'fonts/fonts';
import '@/global/global.css';

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  themeColor: '#ffec99',
}

export const metadata: Metadata = {
  title: 'Obrew - Free & personal Ai for the masses',
  description: 'Run personalized Generative Ai on your device and own your tech stack. No subscriptions or limits. Find out how to speed up Ai production.',
  applicationName: 'Obrew Studio',
  metadataBase: new URL(`https://www.openbrewai.com`),
  alternates: {
    canonical: './',
  },
  keywords: ['desktop-app', 'ai', 'localai', 'text-generation', 'inference-engine'],
  twitter: { card: 'summary', images: [{ url: cardWide.src }] },
  openGraph: {
    title: 'Obrew - Free & personal Ai for the masses',
    description: 'Run personalized Generative Ai on your device and own your tech stack. No subscriptions or limits. Find out how to speed up Ai production.',
    url: 'https://www.openbrewai.com',
    siteName: 'Obrew',
    type: "website",
    locale: 'en_US',
    images: [
      {
        url: cardWide.src,
        alt: "Obrew logo and title",
        width: cardWide.width,
        height: cardWide.height,
      },
    ],
  },
}

export default function RootLayout({
  // `children` will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // This makes the font available globally via its' css var
    <html lang="en" className={`${comic_shanns.variable}`}>
      <body>{children}</body>
    </html>
  )
}
