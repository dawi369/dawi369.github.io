import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Providers from '@/components/Providers';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
});

const title = 'David Erwin | a software engineer\'s site';
const description = 'Software Engineer. Portfolio of work.';
const url = 'https://daviderwin.me';
const image = 'https://daviderwin.me/assets/images/chilling.png';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: title,
  description: description,
  keywords: [
    'David Erwin',
    'Portfolio',
    'Blog',
    'Software Developer',
    'Software Engineer',
    'Data Engineer',
    'X',
    'Twitter',
    'Youtube',
  ],
  authors: [{ name: title, url: url }],
  openGraph: {
    title: title,
    description: description,
    url: url,
    siteName: title,
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
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
    <html lang="en" data-project="p1" suppressHydrationWarning>
      <body
        className={`${plusJakarta.variable} font-sans antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
