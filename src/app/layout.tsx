import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeScript from "@/components/theme/ThemeScript";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Erwin",
  description:
    "The personal website and blog of David Erwin, a software engineer.",
  keywords: [
    "David Erwin",
    "Portfolio",
    "Blog",
    "Software Developer",
    "Next.js",
    "Data Engineering",
    "X",
    "Twitter",
    "Youtube",
  ],
  authors: [{ name: "David Erwin", url: "https://daviderwin.me" }],
  openGraph: {
    title: "David Erwin",
    description:
      "The personal website and blog of David Erwin, a software engineer.",
    url: "https://daviderwin.me",
    siteName: "David Erwin",
    images: [
      {
        url: "https://daviderwin.me/assets/images/chilling.png", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Erwin",
    description:
      "The personal website and blog of David Erwin, a software engineer.",
    creator: "@devDawi",
    images: ["https://daviderwin.me/assets/images/chilling.png"], // Must be an absolute URL
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
              "@context": "https://schema.org",
              "@type": "Person",
              name: "David Erwin",
              url: "https://daviderwin.me",
              sameAs: [
                "https://x.com/devDawi",
                "https://github.com/dawi369",
                "https://www.linkedin.com/in/david-erwin-cz68/",
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
