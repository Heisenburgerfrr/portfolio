"use client";

import React, { useRef } from "react";
import { projects } from "../../../_data/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { getSiteUrl } from "@/lib/utils";

const siteUrl = getSiteUrl();

export default function AllProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${siteUrl}/projects`,
      },
    ],
  };

  return (
    <main
      id="all-projects"
      ref={ref}
      className="min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-6 sm:mt-10 py-2"
      >
        <div className="text-center mx-auto mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Shipped Projects by Rone Reji.
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1.5">
            A complete archive of independent builds, aggregators, and tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((data) => (
            <div
              key={data.slug}
              className="border border-gray-200/80 rounded-2xl flex flex-col justify-between bg-white/60 hover:shadow-md hover:border-gray-300/80 transition-all duration-300"
            >
              <div className="p-5 flex flex-col h-full justify-between space-y-4">
                <div>
                  <div className="bg-gray-50/85 border border-gray-100 rounded-xl overflow-hidden group">
                    <Image
                      src={`/img/${data.img}`}
                      alt={`Screenshot of ${data.name} built by Rone Reji`}
                      width={900}
                      height={900}
                      className="rounded-xl w-full h-auto object-cover shadow-xs transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  <h2 className="text-xl sm:text-[22px] font-bold mt-4 tracking-tight text-gray-900">
                    {data.name}
                  </h2>

                  <p className="text-sm sm:text-base text-gray-600 line-clamp-3 mt-2 leading-relaxed">
                    {data.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <Button
                    asChild
                    className="!cursor-pointer !bg-gray-100 hover:!bg-gray-200 px-4.5 py-3.5 min-h-[46px] text-sm sm:text-base font-semibold rounded-xl w-full text-black transition-colors"
                  >
                    <Link href={`/project/${data.slug}`}>
                      <div className="flex items-center justify-center gap-2">
                        <span>View Project</span>
                        <ChevronRight className="size-4 sm:size-5" />
                      </div>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
