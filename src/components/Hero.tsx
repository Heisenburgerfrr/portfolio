"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Button } from "./ui/button";
import { Dot } from "lucide-react";
import StackLoop from "./StackLoop";
import { motion, useInView } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="w-full">
      <section
        ref={ref}
        className="flex flex-col justify-center items-center text-center py-20 sm:py-24 md:py-28 px-4 sm:px-6 mt-4 sm:mt-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center justify-center"
        >
          <Image
            src="/img/profile-pic.jpg"
            className="rounded-full object-cover ring-4 ring-gray-100/90 dark:ring-[#262626] shadow-md w-28 h-28 sm:w-32 sm:h-32 transition-all duration-300"
            alt="Rone Reji - Student & Indie Developer profile photo"
            width={128}
            height={128}
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="font-bold text-3xl sm:text-4xl md:text-[46px] leading-tight sm:leading-snug mt-6 tracking-tight text-gray-900 dark:text-[#ededed]">
            Hi, I&apos;m Rone.
            <br />
            <span className="text-gray-800 dark:text-[#d4d4d4] font-semibold">
              Student &amp; Indie Developer
            </span>
          </h1>
          <div className="text-gray-600 dark:text-[#999999] mt-4 px-2 sm:px-0 text-base sm:text-lg leading-relaxed max-w-xl mx-auto space-y-1">
            <p>A student building independent web &amp; software projects.</p>
            <p>Self-taught, making stuff because why not.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col xs:flex-row sm:flex-row items-center justify-center mt-8 gap-3.5 w-full sm:w-auto px-4"
        >
          <Button
            asChild
            className="!bg-[#18181b] text-white dark:!bg-[#ededed] dark:!text-[#181818] !cursor-pointer py-4.5 px-8 min-h-[52px] text-base hover:!bg-[#27272a] dark:hover:!bg-white w-full xs:w-auto sm:w-auto font-semibold rounded-xl transition-all shadow-sm"
          >
            <a href="#contact">Get in touch</a>
          </Button>
          <div className="border flex items-center justify-center bg-[#E1F9DC] text-[#178D00] dark:bg-[#143416] dark:text-[#4ade80] dark:border-[#1e4d21] px-4 py-2.5 min-h-[52px] rounded-full text-sm font-medium w-full xs:w-auto sm:w-auto transition-colors">
            <Dot className="size-6 shrink-0 animate-pulse text-[#178D00] dark:text-[#4ade80]" />
            <span>Building independent projects</span>
          </div>
        </motion.div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        className="px-4"
      >
        <StackLoop />
      </motion.div>
    </div>
  );
};

export default Hero;
