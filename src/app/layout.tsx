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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://myportfoliome.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Adebanjo Stephen | Software Engineer",
  description:
    "Self-taught software engineer and entrepreneur, specializing in Frontend, Backend, and Full-stack development with Next.js, JavaScript, and TypeScript.",
  keywords: [
    "Self-taught",
    "Software Engineer",
    "Web Development",
    "Entrepreneur",
    "Backend",
    "Full-stack",
    "Frontend developer",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tech innovation",
    "Community building",
    "Adebanjo Stephen",
  ],
  authors: [{ name: "Adebanjo Stephen" }],
  creator: "Adebanjo Stephen",
  publisher: "Adebanjo Stephen",
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
    siteName: "Adebanjo Stephen Portfolio",
    title: "Adebanjo Stephen | Software Engineer",
    description:
      "Self-taught software engineer and entrepreneur, specializing in Frontend, Backend, and Full-stack development with Next.js, JavaScript, and TypeScript.",
    images: [
      {
        url: `${siteUrl}/img/profile-pic.jpg`,
        width: 1200,
        height: 630,
        alt: "Adebanjo Stephen | Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adebanjo Stephen | Software Engineer",
    description:
      "Self-taught software engineer and entrepreneur, specializing in Frontend, Backend, and Full-stack development with Next.js, JavaScript, and TypeScript.",
    creator: "@AdebanjoSt63916",
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
    title: "Adebanjo Stephen Olumide",
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
    name: "Adebanjo Stephen",
    url: siteUrl,
    image: `${siteUrl}/img/profile-pic.jpg`,
    jobTitle: "Software Engineer",
    sameAs: [
      "https://github.com/SteeveSticks",
      "https://x.com/AdebanjoSt63916",
      "https://www.linkedin.com/in/stephen-adebanjo-82a6ba359/",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        <div className="font-sans border-b border-l border-r max-w-3xl mx-auto">
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
