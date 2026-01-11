import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio | Next.js Static Site',
  description: 'A portfolio built with Next.js.',
  openGraph: {
    title: 'Portfolio | Next.js Static Site',
    description: 'A portfolio built with Next.js.',
    url: 'https://example.com',
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
