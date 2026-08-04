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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="px-4 sm:px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-8 sm:mt-12 py-2"
      >
        <div className="text-center mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Shipped Projects.
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-1.5">
            A selection of independent web applications and tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.slice(0, 4).map((data, index) => (
            <motion.div
              key={data.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="border border-gray-200/80 rounded-2xl flex flex-col justify-between bg-white/60 hover:shadow-md transition-all duration-300"
            >
              <div className="p-4 sm:p-5 flex flex-col h-full justify-between space-y-4">
                <div>
                  <div className="bg-gray-50/85 border border-gray-100 rounded-xl overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={`/img/${data.img}`}
                        alt={`Screenshot of ${data.name}`}
                        width={900}
                        height={900}
                        className="rounded-xl w-full h-auto object-cover shadow-xs"
                      />
                    </motion.div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mt-4 tracking-tight text-gray-900">
                    {data.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 mt-2 leading-relaxed">
                    {data.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <Button
                    asChild
                    className="!cursor-pointer !bg-gray-100 hover:!bg-gray-200 px-4 py-3 text-xs sm:text-sm font-medium rounded-xl w-full text-black transition-colors"
                  >
                    <Link href={`/project/${data.slug}`}>
                      <div className="flex items-center justify-center gap-2">
                        <span>View Project</span>
                        <ChevronRight className="size-4" />
                      </div>
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-10 sm:mt-12">
          <Button
            asChild
            className="!cursor-pointer !bg-black hover:!bg-black/90 px-6 py-3.5 text-xs sm:text-sm font-medium rounded-xl text-white w-full sm:w-auto transition-transform hover:scale-[1.02]"
          >
            <Link href="/projects">
              <div className="flex items-center justify-center gap-2">
                <span>View All Projects</span>
                <ChevronRight className="size-4" />
              </div>
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default Project;
