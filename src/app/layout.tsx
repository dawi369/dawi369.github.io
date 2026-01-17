import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import ThemeScript from '@/components/theme/ThemeScript';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const title = 'David Erwin | A personal website';
const description = 'software and stuff, probably, idk';
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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'David Erwin',
              url: 'https://daviderwin.me',
              sameAs: [
                'https://x.com/devDawi',
                'https://github.com/dawi369',
                'https://www.linkedin.com/in/david-erwin-cz68/',
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <div className="flex-1 pt-12">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
