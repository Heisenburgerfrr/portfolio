import { Mail } from "lucide-react";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-12 pb-20">
      <hr className="mt-23" />

      <div className="mt-6 text-center">
        <span className="text-gray-600 text-[16px] tracking-normal">
          © 2025 Adebanjo Stephen. All rights reserved.
        </span>

        <div className="flex items-center justify-center gap-6 mt-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/AdebanjoSt63916"
            aria-label="X (Twitter) profile"
          >
            <FaXTwitter className="size-5 text-gray-700 hover:text-gray-600 cursor-pointer" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/SteeveSticks"
            aria-label="GitHub profile"
          >
            <FiGithub className="size-5 text-gray-700 hover:text-gray-600 cursor-pointer" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/stephen-adebanjo-82a6ba359/"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin className="size-5 text-gray-700 hover:text-gray-600 cursor-pointer" />
          </a>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:stephenadebanjo86@gmail.com"
            aria-label="Send email"
          >
            <Mail className="size-5 text-gray-700 hover:text-gray-600 cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
