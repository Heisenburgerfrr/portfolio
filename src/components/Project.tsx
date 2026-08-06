"use client";

import React, { useRef } from "react";
import { projects } from "../../_data/data";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const Project = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="projects" ref={ref} className="px-4 sm:px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-8 sm:mt-12 py-2"
      >
        <div className="text-center mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-[#ededed]">
            Shipped Projects.
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-[#999999] mt-1.5">
            A selection of independent web applications and tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.slice(0, 4).map((data) => (
            <div
              key={data.slug}
              className="border border-gray-200/80 dark:border-[#2b2b2b] rounded-2xl flex flex-col justify-between bg-white/60 dark:bg-[#1f1f1f] hover:bg-white dark:hover:bg-[#242424] hover:shadow-md hover:border-gray-300/80 dark:hover:border-[#383838] transition-all duration-300"
            >
              <div className="p-5 flex flex-col h-full justify-between space-y-4">
                <div>
                  <div className="bg-gray-50/85 dark:bg-[#141414] border border-gray-100 dark:border-[#2b2b2b] rounded-xl overflow-hidden group">
                    <Image
                      src={`/img/${data.img}`}
                      alt={`Screenshot of ${data.name}`}
                      width={900}
                      height={900}
                      className="rounded-xl w-full h-auto object-cover shadow-xs transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  <h3 className="text-xl sm:text-[22px] font-bold mt-4 tracking-tight text-gray-900 dark:text-[#ededed]">
                    {data.name}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 dark:text-[#a1a1aa] line-clamp-3 mt-2 leading-relaxed">
                    {data.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <Button
                    asChild
                    className="!cursor-pointer !bg-gray-100 hover:!bg-gray-200 dark:!bg-[#282828] dark:hover:!bg-[#323232] dark:border dark:border-[#383838] px-4.5 py-3.5 min-h-[46px] text-sm sm:text-base font-semibold rounded-xl text-black dark:text-[#ededed] transition-colors"
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

        <div className="flex justify-center mt-10 sm:mt-12">
          <Button
            asChild
            className="!cursor-pointer !bg-[#18181b] text-white dark:!bg-[#ededed] dark:!text-[#181818] hover:!bg-[#27272a] dark:hover:!bg-white px-7 py-4 min-h-[50px] text-sm sm:text-base font-semibold rounded-xl w-full sm:w-auto shadow-sm transition-all"
          >
            <Link href="/projects">
              <div className="flex items-center justify-center gap-2">
                <span>View All Projects</span>
                <ChevronRight className="size-4 sm:size-5" />
              </div>
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default Project;
