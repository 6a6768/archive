import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio | Next.js Static Site',
  description: 'A simple statically exported portfolio built with Next.js.',
  openGraph: {
    title: 'Portfolio | Next.js Static Site',
    description: 'A simple statically exported portfolio built with Next.js.',
    url: 'https://example.com',
    siteName: 'Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
