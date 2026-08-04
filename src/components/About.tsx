"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "./ui/button";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="py-14 sm:py-18 md:py-20 mt-4 sm:mt-8 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-2xl mx-auto text-wrap prose">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-bold text-2xl sm:text-3xl text-gray-900 mb-3.5 tracking-tight">
            About
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            I&apos;m Rone, a student and indie developer passionate about
            building independent web and software applications.
          </p>
          <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
            My work spans streaming aggregators, automation tools, and
            short-form content pipelines. I&apos;m mostly self-taught, believing
            that the best way to master software development is by shipping
            projects to production.
          </p>
          <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
            Whether it&apos;s crafting custom algorithms, designing bot-blocking
            middleware, or experimenting with novel web tools, I&apos;m always
            building. You can check out my latest code on{" "}
            <Link
              href="https://github.com/Heisenburgerfrr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black font-semibold underline"
            >
              GitHub
            </Link>{" "}
            or follow my updates on{" "}
            <Link
              href="https://x.com/RoneReji"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black font-semibold underline"
            >
              X (@RoneReji)
            </Link>
            .
          </p>
        </motion.div>
      </div>

      <Link
        href="https://github.com/Heisenburgerfrr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center mt-8 px-4"
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="py-2.5 px-3 bg-white shadow-xs border border-gray-200/80 rounded-xl w-fit"
          >
            <Image
              src="/img/profile-pic.jpg"
              width={180}
              height={180}
              alt="Rone profile picture"
              className="rounded-lg bg-white w-full max-w-[160px] sm:max-w-[180px] object-cover"
            />
            <span className="text-xs sm:text-sm block text-center mt-1.5 text-gray-800 font-medium">
              @Heisenburgerfrr
            </span>
          </motion.div>
        </motion.div>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        className="flex justify-center mt-6 px-4"
      >
        <Button
          asChild
          className="!bg-black/90 text-white !cursor-pointer py-3.5 px-7 min-h-[46px] hover:!bg-black/82 text-sm sm:text-base font-semibold rounded-xl w-full sm:w-auto"
        >
          <a href="#contact" aria-label="Get in touch for collaboration">
            Let&apos;s connect!
          </a>
        </Button>
      </motion.div>
    </div>
  );
};

export default About;
