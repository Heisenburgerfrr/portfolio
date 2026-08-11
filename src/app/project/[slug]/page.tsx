import { projects } from "../../../../_data/data";
import { notFound } from "next/navigation";
import { ProjectPageContent } from "@/components/ProjectPageContent";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/utils";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const baseUrl = getSiteUrl();
  const projectImage = `${baseUrl}/img/${project.img || "profile-pic.jpg"}`;

  return {
    title: `${project.name} | Rone Reji`,
    description: `${project.name} built by Rone Reji — ${project.desc}`,
    keywords: [
      project.name,
      "Rone Reji",
      "Rone",
      "heisenburgerfrr",
      "rshellr",
      "quavity",
      "Indie Developer",
      ...(project.lang || []),
    ],
    alternates: {
      canonical: `${baseUrl}/project/${project.slug}`,
    },
    openGraph: {
      siteName: "Rone Reji",
      title: `${project.name} | Rone Reji`,
      description: project.desc,
      type: "article",
      url: `${baseUrl}/project/${project.slug}`,
      images: [
        {
          url: projectImage,
          width: 1200,
          height: 630,
          alt: `${project.name} by Rone Reji`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Rone Reji`,
      description: project.desc,
      creator: "@RoneReji",
      images: [projectImage],
    },
  };
}

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  const baseUrl = getSiteUrl();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${baseUrl}/projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: `${baseUrl}/project/${project.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ProjectPageContent
        project={{
          ...project,
          img2: project.img2,
          img3: project.img3,
        }}
      />
    </>
  );
};

export default ProjectPage;
