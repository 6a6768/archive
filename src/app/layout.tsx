import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '6a6768',
  description: 'jef palo\'s portfolio',
  openGraph: {
    title: '6a6768',
    description: 'jef palo\'s portfolio',
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
