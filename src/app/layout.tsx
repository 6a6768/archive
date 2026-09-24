import type { Metadata } from 'next';
import { Spectral } from 'next/font/google';
import './globals.css';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
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
    <html lang="en" className={spectral.variable}>
      <body>{children}</body>
    </html>
  );
}
