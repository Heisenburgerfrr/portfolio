"use client";

import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const techStack = [
  { name: "React", src: "/tech/react.svg" },
  { name: "Next.js", src: "/tech/nextjs.svg" },
  { name: "Tailwind", src: "/tech/tailwind.svg" },
  { name: "TypeScript", src: "/tech/typescript.svg" },
  { name: "Node.js", src: "/tech/nodejs.svg" },
  { name: "JavaScript", src: "/tech/javascript.svg" },
  { name: "Premiere Pro", src: "/tech/premiere.svg" },
  { name: "After Effects", src: "/tech/after_effects.svg" },
  { name: "Photoshop", src: "/tech/photoshop.svg" },
  { name: "Python", src: "/tech/python.svg" },
];

const StackLoop = () => {
  return (
    <div className="overflow-hidden py-2 w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] mx-auto">
      <Marquee delay={0} speed={30} gradient={false}>
        <div className="flex items-center gap-4 sm:gap-6 mx-2 sm:mx-3">
          {techStack.map((tech) => (
            <div key={tech.name} className="shrink-0">
              <Image
                src={tech.src}
                alt={`${tech.name} logo`}
                width={36}
                height={36}
                className="object-contain w-8 h-8 sm:w-9 sm:h-9 opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default StackLoop;
