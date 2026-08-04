import { Mail } from "lucide-react";
import React from "react";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "me@rone.eu.cc";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-8 md:px-12 pb-12 sm:pb-16">
      <hr className="mt-16 sm:mt-20 border-gray-100" />

      <div className="mt-6 text-center">
        <span className="text-gray-500 text-xs sm:text-sm tracking-normal">
          © 2025 Rone. All rights reserved.
        </span>

        <div className="flex items-center justify-center gap-5 sm:gap-6 mt-3">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/RoneReji"
            aria-label="X profile"
            className="text-gray-600 hover:text-black transition-colors"
          >
            <FaXTwitter className="size-4 sm:size-5" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Heisenburgerfrr"
            aria-label="GitHub profile"
            className="text-gray-600 hover:text-black transition-colors"
          >
            <FiGithub className="size-4 sm:size-5" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/heisenburgerfrr/"
            aria-label="Instagram profile"
            className="text-gray-600 hover:text-black transition-colors"
          >
            <FaInstagram className="size-4 sm:size-5" />
          </a>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`mailto:${contactEmail}`}
            aria-label="Send email"
            className="text-gray-600 hover:text-black transition-colors"
          >
            <Mail className="size-4 sm:size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
