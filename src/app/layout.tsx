import type { Metadata } from 'next';
import { Spectral, IBM_Plex_Sans, Share_Tech_Mono } from 'next/font/google';
import './globals.css';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const shareTech = Share_Tech_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-hud',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '6a6768',
  description: "jef palo's portfolio",
  openGraph: {
    title: '6a6768',
    description: "jef palo's portfolio",
    url: 'https://6a6768.github.io/archive/',
    siteName: 'Archive',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spectral.variable} ${plexSans.variable} ${shareTech.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
