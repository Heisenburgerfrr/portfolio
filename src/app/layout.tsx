import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rone.eu.cc";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rone | Student & Indie Developer",
  description:
    "A student building independent web and software projects — streaming aggregators, automation tools, and short-form content pipelines — mostly self-taught, learning by shipping.",
  keywords: [
    "Rone",
    "Student",
    "Indie Developer",
    "Web Development",
    "Software Engineer",
    "Cinepeak",
    "Longly",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Rone" }],
  creator: "Rone",
  publisher: "Rone",
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Rone Portfolio",
    title: "Rone | Student & Indie Developer",
    description:
      "A student building independent web and software projects — streaming aggregators, automation tools, and short-form content pipelines — mostly self-taught, learning by shipping.",
    images: [
      {
        url: `${siteUrl}/img/profile-pic.jpg`,
        width: 1200,
        height: 630,
        alt: "Rone | Student & Indie Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rone | Student & Indie Developer",
    description:
      "A student building independent web and software projects — streaming aggregators, automation tools, and short-form content pipelines — mostly self-taught, learning by shipping.",
    creator: "@RoneReji",
    images: [`${siteUrl}/img/profile-pic.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Rone",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rone",
    url: siteUrl,
    image: `${siteUrl}/img/profile-pic.jpg`,
    jobTitle: "Student & Indie Developer",
    email: "mailto:me@rone.cc.cd",
    sameAs: [
      "https://github.com/Heisenburgerfrr",
      "https://x.com/RoneReji",
      "https://www.instagram.com/heisenburgerfrr/",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} antialiased bg-gray-50/30 text-gray-900 selection:bg-black selection:text-white`}
      >
        <div className="font-sans min-h-screen max-w-3xl mx-auto border-x border-gray-200/60 bg-white shadow-xs">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
