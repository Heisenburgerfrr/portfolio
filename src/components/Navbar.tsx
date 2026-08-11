"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const emptySubscribe = () => () => {};

const Navbar = () => {
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header className="py-4">
      <nav className="w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-[586px] mx-auto bg-black/85 dark:bg-zinc-900/90 backdrop-blur-md flex items-center justify-between py-2 px-3 sm:px-4 rounded-full border border-white/10 dark:border-zinc-800 shadow-xl fixed left-0 right-0 z-50 transition-all duration-300">
        <div className="shrink-0 flex items-center pl-0.5 sm:pl-1">
          <Link href="/" aria-label="Home page" className="flex items-center">
            <Image
              src="/img/brandLogo.png"
              alt="Rone Logo"
              width={60}
              height={16}
              className="w-auto max-w-[50px] sm:max-w-[60px] h-[14px] sm:h-[15px] object-contain brightness-0 invert"
              priority
            />
          </Link>
        </div>

        <div>
          <ul className="flex items-center gap-1 sm:gap-1.5">
            <li>
              <Button
                variant="link"
                size="sm"
                asChild
                className="text-white/90 hover:text-white dark:text-zinc-200 dark:hover:text-white px-1.5 sm:px-2 text-xs sm:text-sm font-medium"
              >
                <Link href="/">Home</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                size="sm"
                asChild
                className="text-white/90 hover:text-white dark:text-zinc-200 dark:hover:text-white px-1.5 sm:px-2 text-xs sm:text-sm font-medium"
              >
                <Link href="/#projects">Projects</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                size="sm"
                asChild
                className="text-white/90 hover:text-white dark:text-zinc-200 dark:hover:text-white px-1.5 sm:px-2 text-xs sm:text-sm font-medium"
              >
                <Link href="/#timeline">Timeline</Link>
              </Button>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          <div className="hidden sm:flex items-center gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Heisenburgerfrr"
                  aria-label="Rone Reji GitHub Profile (@Heisenburgerfrr)"
                  title="Rone Reji GitHub Profile (@Heisenburgerfrr)"
                  className="p-1.5 text-white/80 hover:text-white dark:text-zinc-300 dark:hover:text-white transition-colors"
                >
                  <FiGithub className="size-4 sm:size-4.5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>GitHub (@Heisenburgerfrr)</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://x.com/RoneReji"
                  aria-label="Rone Reji X Profile (@RoneReji)"
                  title="Rone Reji X Profile (@RoneReji)"
                  className="p-1.5 text-white/80 hover:text-white dark:text-zinc-300 dark:hover:text-white transition-colors"
                >
                  <FaXTwitter className="size-4 sm:size-4.5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>X (@RoneReji)</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/heisenburgerfrr/"
                  aria-label="Rone Reji Instagram Profile (@heisenburgerfrr)"
                  title="Rone Reji Instagram Profile (@heisenburgerfrr)"
                  className="p-1.5 text-white/80 hover:text-white dark:text-zinc-300 dark:hover:text-white transition-colors"
                >
                  <FaInstagram className="size-4 sm:size-4.5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>Instagram (@heisenburgerfrr)</TooltipContent>
            </Tooltip>
          </div>

          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                aria-label="Toggle theme mode"
                className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 dark:hover:bg-zinc-800 transition-all focus:outline-none cursor-pointer flex items-center justify-center"
              >
                {mounted ? (
                  resolvedTheme === "dark" ? (
                    <Sun className="size-4 sm:size-4.5 text-amber-300 transition-transform hover:rotate-45 duration-300" />
                  ) : (
                    <Moon className="size-4 sm:size-4.5 text-zinc-300 transition-transform hover:-rotate-12 duration-300" />
                  )
                ) : (
                  <div className="size-4 sm:size-4.5" />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              {mounted && resolvedTheme === "dark"
                ? "Switch to Light Theme"
                : "Switch to Dark Theme"}
            </TooltipContent>
          </Tooltip>

          <div className="sm:border-l sm:border-white/20 dark:sm:border-zinc-700 sm:pl-1.5 sm:ml-0.5">
            <Button
              size="sm"
              asChild
              className="h-7.5 sm:h-8 px-2.5 sm:px-3.5 text-xs sm:text-sm font-medium bg-white text-black hover:bg-white/90 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white rounded-full shadow-xs transition-colors"
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
