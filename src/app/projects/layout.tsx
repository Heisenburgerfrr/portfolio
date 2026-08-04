import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rone.eu.cc";

export const metadata: Metadata = {
  title: "Projects | Rone",
  description:
    "Explore my portfolio of completed projects built with Next.js, React, TypeScript, and modern web technologies. From AI-powered applications to collaborative tools.",
  openGraph: {
    title: "Projects | Rone",
    description:
      "Explore my portfolio of completed projects built with Next.js, React, TypeScript, and modern web technologies.",
    type: "website",
    url: `${siteUrl}/projects`,
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
