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
            I&apos;m Rone Reji, aka heisenburgerfrr. I&apos;m a student who&apos;s
            really into technology, and I love building websites and software just
            for fun, alongside making content online.
          </p>
          <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
            Some of my work includes a Netflix-style movie streaming site, a
            bunch of short-form content pages, some automation projects, and
            honestly a lot of random useless stuff too. I&apos;m mostly
            self-taught. I believe trying things out and breaking them is the
            best way to actually learn.
          </p>
          <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
            I&apos;m a logical person and I&apos;m into maths and physics. I
            also run multiple faceless content channels, and I edit all my own
            videos in Premiere Pro and After Effects, with Photoshop for
            thumbnails and graphics. I like exploring pretty much everything,
            including open source software. I&apos;m into FOSS and I mess
            around with custom ROMs on the side. When I&apos;m not building
            stuff, I&apos;m probably playing CS2, GTA 5, RDR 2, or EA FC 26.
          </p>
          <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
            Online I go by{" "}
            <Link
              href="https://github.com/Heisenburgerfrr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-900 underline hover:text-black"
            >
              heisenburgerfrr
            </Link>{" "}
            and <span className="font-medium text-gray-900">rshellr</span>.
          </p>
          <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
            You can check out my latest code on{" "}
            <Link
              href="https://github.com/Heisenburgerfrr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rone Reji GitHub profile (@Heisenburgerfrr)"
              className="hover:text-black font-semibold underline"
            >
              GitHub (@Heisenburgerfrr)
            </Link>{" "}
            or follow my updates on{" "}
            <Link
              href="https://x.com/RoneReji"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rone Reji X profile (@RoneReji)"
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
          <div className="py-2.5 px-3 bg-white shadow-xs border border-gray-200/80 rounded-xl w-fit">
            <Image
              src="/img/profile-pic.jpg"
              width={180}
              height={180}
              alt="Rone Reji (@Heisenburgerfrr) profile picture"
              className="rounded-lg bg-white w-full max-w-[160px] sm:max-w-[180px] object-cover"
            />
            <span className="text-xs sm:text-sm block text-center mt-1.5 text-gray-800 font-medium">
              @Heisenburgerfrr
            </span>
          </div>
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
