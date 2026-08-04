import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight, Compass } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Rone",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 py-16 my-auto">
      <div className="max-w-md mx-auto w-full">
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-gray-100/90 text-gray-800 border border-gray-200/80 mb-5 shadow-xs">
          <Compass className="size-7 text-gray-700" />
        </div>

        <div className="block">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-xs font-semibold tracking-wide uppercase mb-3">
            404 Error
          </span>
        </div>

        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight">
          Page Not Found
        </h1>

        <p className="text-gray-600 text-sm sm:text-base mt-2.5 leading-relaxed max-w-sm mx-auto">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col xs:flex-row sm:flex-row items-center justify-center gap-3 mt-7 w-full">
          <Button
            asChild
            className="!bg-black text-white !cursor-pointer py-4 px-6 min-h-[48px] hover:!bg-black/90 text-sm font-semibold rounded-xl w-full xs:w-auto sm:w-auto transition-transform active:scale-98"
          >
            <Link href="/">
              <div className="flex items-center justify-center gap-2">
                <ArrowLeft className="size-4" />
                <span>Return Home</span>
              </div>
            </Link>
          </Button>

          <Button
            asChild
            className="!bg-gray-100 hover:!bg-gray-200 text-black !cursor-pointer py-4 px-6 min-h-[48px] text-sm font-semibold rounded-xl w-full xs:w-auto sm:w-auto transition-colors"
          >
            <Link href="/projects">
              <div className="flex items-center justify-center gap-2">
                <span>View Projects</span>
                <ChevronRight className="size-4" />
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
