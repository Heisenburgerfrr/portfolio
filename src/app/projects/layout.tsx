import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/utils";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Projects | Rone Reji - Indie Developer",
  description:
    "Explore all shipped projects by Rone Reji — streaming aggregators, algorithmic tools, automation software, and modern web applications.",
  keywords: [
    "Rone Reji Projects",
    "Rone Projects",
    "heisenburgerfrr",
    "rshellr",
    "quavity",
    "Cinepeak",
    "Longly",
    "Indie Developer Projects",
  ],
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
  openGraph: {
    title: "Projects | Rone Reji - Indie Developer",
    description:
      "Explore all shipped projects by Rone Reji — streaming aggregators, algorithmic tools, automation software, and modern web applications.",
    type: "website",
    url: `${siteUrl}/projects`,
    images: [
      {
        url: `${siteUrl}/img/profile-pic.jpg`,
        width: 1200,
        height: 630,
        alt: "Rone Reji Projects Archive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Rone Reji - Indie Developer",
    description:
      "Explore all shipped projects by Rone Reji — streaming aggregators, algorithmic tools, automation software, and modern web applications.",
    creator: "@RoneReji",
    images: [`${siteUrl}/img/profile-pic.jpg`],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
