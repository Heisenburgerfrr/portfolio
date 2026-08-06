"use client";

import React, { useRef } from "react";
import { Star, Code2, Cpu, Tv, ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const timelineItems = [
  {
    title: "Cinepeak",
    category: "Featured Project",
    icon: Tv,
    description: "Streaming Aggregator & Bot-blocking Middleware",
    tags: ["Next.js", "TMDB API", "Middleware"],
    link: "/project/cinepeak",
    statusColor: "bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800/50",
  },
  {
    title: "Longly",
    category: "Featured Project",
    icon: Code2,
    description: "Satirical Link Expander & Bijective Mnemonic Encoder",
    tags: ["React", "Algorithms", "TypeScript"],
    link: "/project/longly",
    statusColor: "bg-purple-50 text-purple-600 border-purple-100 dark:bg-purple-950/40 dark:text-purple-400 dark:border-purple-800/50",
  },
  {
    title: "Indie Pipelines",
    category: "Ongoing Build",
    icon: Cpu,
    description: "Short-form Content & Workflow Automation Tools",
    tags: ["Python", "Automation", "Node.js"],
    link: "/#projects",
    statusColor: "bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-[#143416] dark:text-[#4ade80] dark:border-[#1e4d21]",
  },
];

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="timeline" ref={ref} className="px-4 sm:px-8 md:px-12">
      <hr className="mt-20 border-gray-100 dark:border-[#262626] transition-colors" />

      <div className="mt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="text-center mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-[#ededed]">
              Build Timeline
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-[#999999] mt-1.5">
              Independent projects and software pipelines shipped in the open.
            </p>
          </div>

          <div className="space-y-4">
            {timelineItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative p-5 rounded-2xl border border-gray-200/80 dark:border-[#2b2b2b] bg-white/60 dark:bg-[#1f1f1f] hover:bg-gray-50/80 dark:hover:bg-[#242424] hover:border-gray-300 dark:hover:border-[#383838] transition-colors duration-300 shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start sm:items-center gap-4">
                      <div className="p-3 rounded-xl bg-gray-100/80 dark:bg-[#2a2a2a] text-gray-800 dark:text-[#ededed] group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300 shrink-0">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="text-xl sm:text-[22px] font-bold tracking-tight text-gray-900 dark:text-[#ededed] group-hover:text-black dark:group-hover:text-white">
                            {item.title}
                          </h3>
                          <span
                            className={`text-xs sm:text-sm px-2.5 py-0.5 rounded-full font-medium border ${item.statusColor}`}
                          >
                            {item.category}
                          </span>
                        </div>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-[#a1a1aa] mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-center">
                      <div className="flex items-center gap-1.5 flex-wrap hidden md:flex">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs sm:text-sm px-2.5 py-0.5 rounded-md bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-[#a1a1aa] font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={item.link}
                        className="p-2 rounded-lg text-gray-400 dark:text-[#a1a1aa] hover:text-black dark:hover:text-white hover:bg-gray-200/60 dark:hover:bg-[#2a2a2a] transition-colors"
                        aria-label={`View ${item.title}`}
                      >
                        <ArrowUpRight className="size-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-5 sm:p-6 rounded-2xl border border-blue-100 dark:border-blue-900/40 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-[#1b1b1e] dark:to-[#162032] transition-colors">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-blue-500 dark:bg-blue-600 text-white shrink-0 mt-0.5">
                <Star className="size-4" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-[#ededed] text-base sm:text-lg">
                  Indie Developer Philosophy
                </h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-[#a1a1aa] mt-1 leading-relaxed">
                  I learn by breaking things first and figuring them out after.
                  Building a streaming platform from scratch, automating a
                  content pipeline, messing with a custom ROM just to see what
                  happens — I&apos;d rather dive in than read the docs. No
                  roadmap, no big plan, just curiosity and a lot of trial and
                  error, shipped in the open.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <hr className="mt-14 border-gray-100 dark:border-[#262626] transition-colors" />
    </section>
  );
};

export default Timeline;
