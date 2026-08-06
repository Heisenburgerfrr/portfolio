import { Mail } from "lucide-react";
import React from "react";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "me@rone.cc.cd";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-8 md:px-12 pb-12 sm:pb-16">
      <hr className="mt-16 sm:mt-20 border-gray-100 dark:border-zinc-800/80 transition-colors" />

      <div className="mt-6 text-center">
        <span className="text-gray-500 dark:text-zinc-400 text-xs sm:text-sm tracking-normal">
          © 2025 Rone Reji. All rights reserved.
        </span>

        <div className="flex items-center justify-center gap-5 sm:gap-6 mt-3">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/RoneReji"
            aria-label="Rone Reji X profile (@RoneReji)"
            title="Rone Reji X profile (@RoneReji)"
            className="text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <FaXTwitter className="size-4 sm:size-5" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Heisenburgerfrr"
            aria-label="Rone Reji GitHub profile (@Heisenburgerfrr)"
            title="Rone Reji GitHub profile (@Heisenburgerfrr)"
            className="text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <FiGithub className="size-4 sm:size-5" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/heisenburgerfrr/"
            aria-label="Rone Reji Instagram profile (@heisenburgerfrr)"
            title="Rone Reji Instagram profile (@heisenburgerfrr)"
            className="text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <FaInstagram className="size-4 sm:size-5" />
          </a>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`mailto:${contactEmail}`}
            aria-label="Send email to Rone Reji"
            title="Send email to Rone Reji"
            className="text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <Mail className="size-4 sm:size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
