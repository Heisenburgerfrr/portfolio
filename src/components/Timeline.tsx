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
    statusColor: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    title: "Longly",
    category: "Featured Project",
    icon: Code2,
    description: "Satirical Link Expander & Bijective Mnemonic Encoder",
    tags: ["React", "Algorithms", "TypeScript"],
    link: "/project/longly",
    statusColor: "bg-purple-50 text-purple-600 border-purple-100",
  },
  {
    title: "Indie Pipelines",
    category: "Ongoing Build",
    icon: Cpu,
    description: "Short-form Content & Workflow Automation Tools",
    tags: ["Python", "Automation", "Node.js"],
    link: "/#projects",
    statusColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
];

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="timeline" ref={ref} className="px-4 sm:px-8 md:px-12">
      <hr className="mt-20 border-gray-100" />

      <div className="mt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="text-center mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Build Timeline
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-1.5">
              Independent projects and software pipelines shipped in the open.
            </p>
          </div>

          <div className="space-y-4">
            {timelineItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative p-5 rounded-2xl border border-gray-200/80 bg-white/60 hover:bg-gray-50/80 hover:border-gray-300 transition-colors duration-300 shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start sm:items-center gap-4">
                      <div className="p-3 rounded-xl bg-gray-100/80 text-gray-800 group-hover:bg-black group-hover:text-white transition-colors duration-300 shrink-0">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="text-xl sm:text-[22px] font-bold tracking-tight text-gray-900 group-hover:text-black">
                            {item.title}
                          </h3>
                          <span
                            className={`text-xs sm:text-sm px-2.5 py-0.5 rounded-full font-medium border ${item.statusColor}`}
                          >
                            {item.category}
                          </span>
                        </div>
                        <p className="text-sm sm:text-base text-gray-600 mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-center">
                      <div className="flex items-center gap-1.5 flex-wrap hidden md:flex">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs sm:text-sm px-2.5 py-0.5 rounded-md bg-gray-100 text-gray-600 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={item.link}
                        className="p-2 rounded-lg text-gray-400 hover:text-black hover:bg-gray-200/60 transition-colors"
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

          <div className="mt-8 p-5 sm:p-6 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/50 to-indigo-50/30">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-blue-500 text-white shrink-0 mt-0.5">
                <Star className="size-4" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-base sm:text-lg">
                  Indie Developer Philosophy
                </h4>
                <p className="text-sm sm:text-base text-gray-600 mt-1 leading-relaxed">
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

      <hr className="mt-14 border-gray-100" />
    </section>
  );
};

export default Timeline;
