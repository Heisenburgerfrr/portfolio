"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Navbar = () => {
  return (
    <header className="py-4">
      <nav className="w-[calc(100%-2rem)] max-w-[586px] mx-auto bg-black/80 backdrop-blur-md flex items-center justify-between py-2 px-3 sm:px-4 rounded-full border border-white/10 shadow-lg fixed left-0 right-0 z-50 transition-all duration-300">
        <div className="shrink-0">
          <Link href="/" aria-label="Home page">
            <Image
              src="/img/brandLogo.png"
              alt="Rone Logo"
              width={28}
              height={28}
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
            />
          </Link>
        </div>

        <div>
          <ul className="flex items-center gap-1 sm:gap-2">
            <li>
              <Button
                variant="link"
                size="sm"
                asChild
                className="text-white/90 hover:text-white px-2 text-xs sm:text-sm"
              >
                <Link href="/">Home</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                size="sm"
                asChild
                className="text-white/90 hover:text-white px-2 text-xs sm:text-sm"
              >
                <Link href="/#projects">Projects</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                size="sm"
                asChild
                className="text-white/90 hover:text-white px-2 text-xs sm:text-sm"
              >
                <Link href="/#experience">Builds</Link>
              </Button>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Heisenburgerfrr"
                aria-label="GitHub Profile"
                className="p-1 text-white/80 hover:text-white transition-colors"
              >
                <FiGithub className="size-4 sm:size-5" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>GitHub</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://x.com/RoneReji"
                aria-label="X Profile"
                className="p-1 text-white/80 hover:text-white transition-colors"
              >
                <FaXTwitter className="size-4 sm:size-5" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>X</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/heisenburgerfrr/"
                aria-label="Instagram Profile"
                className="p-1 text-white/80 hover:text-white transition-colors hidden xs:block sm:block"
              >
                <FaInstagram className="size-4 sm:size-5" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>Instagram</TooltipContent>
          </Tooltip>

          <div className="border-l border-white/20 pl-1.5 sm:pl-2 ml-0.5">
            <Button
              size="sm"
              asChild
              className="h-8 px-2.5 sm:px-3.5 text-xs sm:text-sm font-medium bg-white text-black hover:bg-white/90 rounded-full"
            >
              <Link href="/#contact">Contact</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
