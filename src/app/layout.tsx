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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rone.cc.cd";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rone Reji | Student & Indie Developer",
  description:
    "Rone Reji is a student & indie developer building independent web and software projects — streaming aggregators, automation tools, and content pipelines.",
  keywords: [
    "Rone",
    "Rone Reji",
    "heisenburgerfrr",
    "rshellr",
    "quavity",
    "Student",
    "Indie Developer",
    "Web Development",
    "Software Engineer",
    "Cinepeak",
    "Longly",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Rone Reji" }],
  creator: "Rone Reji",
  publisher: "Rone Reji",
  alternates: {
    canonical: siteUrl,
  },
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
    siteName: "Rone Reji Portfolio",
    title: "Rone Reji | Student & Indie Developer",
    description:
      "Rone Reji is a student & indie developer building independent web and software projects — streaming aggregators, automation tools, and content pipelines.",
    images: [
      {
        url: `${siteUrl}/img/profile-pic.jpg`,
        width: 1200,
        height: 630,
        alt: "Rone Reji - Student & Indie Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rone Reji | Student & Indie Developer",
    description:
      "Rone Reji is a student & indie developer building independent web and software projects — streaming aggregators, automation tools, and content pipelines.",
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
    title: "Rone Reji",
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
    name: "Rone Reji",
    alternateName: ["Rone", "heisenburgerfrr", "rshellr", "quavity"],
    url: siteUrl,
    image: `${siteUrl}/img/profile-pic.jpg`,
    jobTitle: "Student & Indie Developer",
    description:
      "Student and indie developer building independent web and software projects.",
    email: "mailto:me@rone.cc.cd",
    sameAs: [
      "https://github.com/Heisenburgerfrr",
      "https://x.com/RoneReji",
      "https://www.instagram.com/heisenburgerfrr/",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rone Reji Portfolio",
    alternateName: "Rone Reji",
    url: siteUrl,
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
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
