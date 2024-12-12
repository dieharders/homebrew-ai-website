import type { Metadata } from 'next';
import cardWide from 'public/social-card-wide.png';
import '@/global/global.css';

export const metadata: Metadata = {
  title: 'Obrew - Free & personal Ai for the masses',
  description: 'Run personalized Generative Ai on your device and own your tech stack. No subscriptions or limits. Find out how to speed up Ai production.',
  applicationName: 'Obrew Studio',
  keywords: ['desktop-app', 'ai', 'localai', 'text-generation', 'inference-engine'],
  twitter: { card: 'summary', images: [{ url: cardWide.src }] },
  themeColor: '#ffec99',
  openGraph: {
    title: 'Obrew - Free & personal Ai for the masses',
    description: 'Run personalized Generative Ai on your device and own your tech stack. No subscriptions or limits. Find out how to speed up Ai production.',
    type: "website",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
