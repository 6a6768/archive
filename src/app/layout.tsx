import type { Metadata } from 'next';
import { Spectral, IBM_Plex_Sans } from 'next/font/google';
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
    <html lang="en" className={`${spectral.variable} ${plexSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
