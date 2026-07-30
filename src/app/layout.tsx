import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const signalMono = localFont({
  variable: '--font-signal',
  display: 'swap',
  src: [
    {
      path: '../../public/fonts/sf-mono/SF-Mono-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sf-mono/SF-Mono-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
});

const title = 'David Erwin — Software Engineer';
const description =
  'I build software where almost right is still wrong. Mastercard systems, CERN research, and independent products.';
const url = 'https://daviderwin.me';
const image = 'https://daviderwin.me/assets/images/chilling.png';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    'David Erwin',
    'Software Engineer',
    'Product Engineer',
    'Data Engineer',
    'AI Engineer',
    'Mastercard',
    'CERN ATLAS',
  ],
  authors: [{ name: 'David Erwin', url }],
  openGraph: {
    title,
    description,
    url,
    siteName: 'David Erwin',
    images: [{ url: image, width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@devDawi',
    images: [image],
  },
  icons: {
    icon: '/assets/images/chilling.ico',
    apple: image,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={signalMono.variable}>{children}</body>
    </html>
  );
}
