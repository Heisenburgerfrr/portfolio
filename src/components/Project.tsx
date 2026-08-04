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
    <section id="projects" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-10 py-2 px-1 grid font-bold md:text-3xl text-3xl"
      >
        <div className="text-center prose mx-auto">
          <h2 className="text-[40px] max-md:text-[30px] font-bold">
            Shipped Projects.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 px-3 sm:px-4 md:px-6">
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
              className="border rounded-2xl flex flex-col justify-between"
            >
              <div className="p-5 space-y-2 flex flex-col h-full justify-between">
                <div>
                  <div className="bg-gray-50/85 border rounded-2xl overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={`/img/${data.img}`}
                        alt={`Screenshot of ${data.name}`}
                        width={900}
                        height={900}
                        className="rounded-2xl w-full h-auto shadow-md"
                      />
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold mt-6 tracking-[0.10px]">
                    {data.name}
                  </h3>

                  <p className="text-base text-wrap prose font-light text-gray-700 line-clamp-2 mt-4 flex-grow">
                    {data.desc}
                  </p>
                </div>

                <div className="mt-5">
                  <motion.div
                    whileHover={{ width: "100%" }}
                    initial={{ width: "fit-content" }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button
                      asChild
                      className="!cursor-pointer !bg-gray-100 hover:!bg-gray-200 !px-6 !py-6 text-[15px] font-medium rounded-xl w-full text-black"
                    >
                      <Link href={`/project/${data.slug}`}>
                        <div className="flex items-center gap-2">
                          <span>View Project</span>
                          <ChevronRight className="size-5" />
                        </div>
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              asChild
              className="!cursor-pointer !bg-[#000000] hover:!bg-[#000000]/90 !px-8 !py-6 text-[15px] font-medium rounded-xl text-white"
            >
              <Link href="/projects">
                <div className="flex items-center gap-2">
                  <span>View All Projects</span>
                  <ChevronRight className="size-5" />
                </div>
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Project;
