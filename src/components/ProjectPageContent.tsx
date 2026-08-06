"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";

type Project = {
  name: string;
  slug: string;
  show: string;
  desc: string;
  lang: string[];
  img: string;
  img2?: string;
  img3?: string;
  link: string;
  git: string;
};

export function ProjectPageContent({ project }: { project: Project }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const closeLightbox = useCallback(() => setLightboxSrc(null), []);

  useEffect(() => {
    if (lightboxSrc !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxSrc]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    if (lightboxSrc) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [lightboxSrc, closeLightbox]);

  return (
    <div className="py-6 sm:py-8 px-4 sm:px-6 md:px-8">
      <div ref={ref} className="mt-20 sm:mt-24 md:mt-28 text-wrap">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <div>
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight text-gray-900 dark:text-[#ededed]">
              {project.name}
            </h1>
            <p className="text-gray-600 dark:text-[#999999] text-sm sm:text-base md:text-lg mt-2 leading-relaxed">
              {project.show}
            </p>
          </div>

          <div className="mt-6 sm:mt-8 rounded-2xl border border-gray-200/80 dark:border-[#2b2b2b] p-4 sm:p-6 bg-gray-50/50 dark:bg-[#1a1a1a]">
            <h2 className="font-bold text-base sm:text-lg text-gray-900 dark:text-[#ededed]">
              Description
            </h2>
            <p className="text-sm text-gray-700 dark:text-[#a1a1aa] mt-2 leading-relaxed">
              {project.desc}
            </p>

            <hr className="my-6 border-gray-200 dark:border-[#2b2b2b]" />

            <div>
              <h2 className="font-bold text-base sm:text-lg text-gray-900 dark:text-[#ededed]">
                Technologies
              </h2>
              <ul className="flex flex-wrap gap-2 mt-3">
                {project.lang.map((tech) => (
                  <li key={tech}>
                    <span className="py-1 px-2.5 bg-[#E1F9DC] text-[#178D00] dark:bg-[#143416] dark:text-[#4ade80] dark:border dark:border-[#1e4d21] text-xs sm:text-sm font-medium rounded-full inline-block">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6 sm:mt-8">
            <Button
              asChild
              className="!py-4 hover:!bg-[#27272a] dark:hover:!bg-white !bg-[#18181b] dark:!bg-[#ededed] text-white dark:text-[#181818] !cursor-pointer w-full sm:w-auto min-h-[50px] text-base font-semibold rounded-xl transition-all shadow-sm"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={
                  project.link.startsWith("http://") ||
                  project.link.startsWith("https://")
                    ? project.link
                    : `https://${project.link}`
                }
              >
                <div className="flex items-center justify-center gap-2">
                  <span>View Project</span>
                  <ExternalLink className="size-5" />
                </div>
              </a>
            </Button>

            <Button
              asChild
              className="!py-4 hover:!bg-[#27272a] dark:hover:!bg-white !bg-[#18181b] dark:!bg-[#ededed] text-white dark:text-[#181818] !cursor-pointer w-full sm:w-auto min-h-[50px] text-base font-semibold rounded-xl transition-all shadow-sm"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={
                  project.git.startsWith("http://") ||
                  project.git.startsWith("https://")
                    ? project.git
                    : `https://${project.git}`
                }
              >
                <div className="flex items-center justify-center gap-2">
                  <span>GitHub Repository</span>
                  <FiGithub className="size-5" />
                </div>
              </a>
            </Button>
          </div>

          <div className="mt-8 sm:mt-12 space-y-6">
            <div
              role="button"
              tabIndex={0}
              onClick={() => setLightboxSrc(`/img/${project.img}`)}
              onKeyDown={(e) =>
                e.key === "Enter" && setLightboxSrc(`/img/${project.img}`)
              }
              className="bg-gray-50/85 dark:bg-[#141414] border border-gray-200/80 dark:border-[#2b2b2b] p-2 sm:p-4 rounded-2xl cursor-pointer hover:shadow-md dark:hover:border-[#383838] transition-all"
              aria-label="View image larger"
            >
              <Image
                src={`/img/${project.img}`}
                alt={`Screenshot of ${project.name} project`}
                width={900}
                height={900}
                className="rounded-xl w-full h-auto object-cover shadow-xs"
              />
            </div>

            {(project.img2 ?? project.img3) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.img2 && (
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setLightboxSrc(`/img/${project.img2}`)}
                    onKeyDown={(e) =>
                      e.key === "Enter" &&
                      setLightboxSrc(`/img/${project.img2}`)
                    }
                    className="bg-gray-50/85 dark:bg-[#141414] border border-gray-200/80 dark:border-[#2b2b2b] p-2 sm:p-3 rounded-2xl cursor-pointer hover:shadow-md dark:hover:border-[#383838] transition-all"
                    aria-label="View image larger"
                  >
                    <Image
                      src={`/img/${project.img2}`}
                      alt={`Screenshot 2 of ${project.name} project`}
                      width={400}
                      height={400}
                      className="rounded-xl w-full h-auto object-cover shadow-xs"
                    />
                  </div>
                )}
                {project.img3 && (
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setLightboxSrc(`/img/${project.img3}`)}
                    onKeyDown={(e) =>
                      e.key === "Enter" &&
                      setLightboxSrc(`/img/${project.img3}`)
                    }
                    className="bg-gray-50/85 dark:bg-[#141414] border border-gray-200/80 dark:border-[#2b2b2b] p-2 sm:p-3 rounded-2xl cursor-pointer hover:shadow-md dark:hover:border-[#383838] transition-all"
                    aria-label="View image larger"
                  >
                    <Image
                      src={`/img/${project.img3}`}
                      alt={`Screenshot 3 of ${project.name} project`}
                      width={400}
                      height={400}
                      className="rounded-xl w-full h-auto object-cover shadow-xs"
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          <AnimatePresence>
            {lightboxSrc ? (
              <motion.div
                key="lightbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
                onClick={closeLightbox}
                role="dialog"
                aria-modal="true"
                aria-label="Image preview"
              >
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 rounded-full bg-black/60 dark:bg-zinc-800/80 p-2.5 text-white hover:bg-black/80 dark:hover:bg-zinc-700 focus:outline-none cursor-pointer"
                  aria-label="Close image preview"
                >
                  <X className="size-5" />
                </button>
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative max-h-[90vh] max-w-[90vw]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={lightboxSrc}
                    alt={`Enlarged screenshot of ${project.name}`}
                    width={1200}
                    height={1200}
                    className="rounded-xl max-h-[90vh] w-auto h-auto object-contain shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
