import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const title = 'David Erwin | a personal site';
const description = 'Software Engineer. Gallery of work.';
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <div className="md:grid md:grid-cols-[15%_1fr_15%] min-h-screen">
          {/* Left Margin */}
          <div className="hidden md:block" />

          {/* Content */}
          <main className="px-4 md:px-8">{children}</main>

          {/* Right Margin */}
          <div className="hidden md:block" />
        </div>
      </body>
    </html>
  );
}
