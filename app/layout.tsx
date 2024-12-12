import type { Metadata } from 'next';
import '@/global/global.css';

export const metadata: Metadata = {
  title: 'Obrew - Free & personal Ai for the masses',
  description: 'Run personalized Generative Ai on your device and own your tech stack. No subscriptions or limits. Find out how to speed up Ai production.',
  openGraph: {
    title: 'Obrew - Free & personal Ai for the masses',
    description: 'Run personalized Generative Ai on your device and own your tech stack. No subscriptions or limits. Find out how to speed up Ai production.',
    images: [
      {
        url: 'https://openbrewai.com/public/logo-obrew.svg',
        width: 400,
        height: 400,
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