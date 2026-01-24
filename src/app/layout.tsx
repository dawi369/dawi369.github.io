import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import ThemeScript from '@/components/theme/ThemeScript';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import { Sidebar } from '@/components/Sidebar';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const sfMono = localFont({
  src: [
    {
      path: '../../public/fonts/sf-mono/SF-Mono-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sf-mono/SF-Mono-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/sf-mono/SF-Mono-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sf-mono/SF-Mono-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sf-mono/SF-Mono-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sf-mono',
  display: 'swap',
});

const title = 'David Erwin';
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
        className={`${sfMono.variable} antialiased min-h-screen flex flex-col font-mono text-gray-900 bg-white`}
      >
        {/* The Gallery Layout */}
        <div className="flex-1 grid grid-cols-[15%_1fr_15%] w-full h-screen overflow-hidden">
          {/* Left Gutter (Testing Border) */}
          <div className="border-r border-dashed border-red-500/20 h-full hidden md:block" />

          {/* Center Stage */}
          <div className="flex flex-row h-full overflow-hidden relative">
            {/* Sidebar Navigation (IDE Style) */}
            <aside className="w-64 shrink-0 h-full border-r border-gray-100 overflow-y-auto bg-gray-50/50">
              <Sidebar />
            </aside>

            {/* Main Content (The Art) */}
            <main className="flex-1 h-full overflow-y-auto p-8 md:p-12 relative">
              {children}
            </main>
          </div>

          {/* Right Gutter (Testing Border) */}
          <div className="border-l border-dashed border-red-500/20 h-full hidden md:block" />
        </div>
      </body>
    </html>
  );
}
