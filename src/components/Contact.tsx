"use client";

import React, { useState, useRef } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { motion, useInView } from "framer-motion";

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "me@rone.cc.cd";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setLoading(false);

      if (res.ok) {
        toast.success("Message sent! Thank you for reaching out.");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      setLoading(false);
      toast.error("Failed to send message. Please check your connection.");
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="px-4 sm:px-8 md:px-12 mt-20 sm:mt-24 md:mt-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-[#ededed]">
          Get in touch
        </h2>

        <p className="mt-3 text-base sm:text-lg text-gray-700 dark:text-[#a1a1aa] leading-relaxed max-w-xl">
          Whether it&apos;s a project collaboration, feedback, or just to say
          hi, I&apos;m always excited to connect with people who love building
          interesting things. Drop a message or reach out directly at{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="underline font-semibold text-gray-900 dark:text-[#ededed] hover:text-black dark:hover:text-white"
          >
            {contactEmail}
          </a>
          !
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="py-2 mt-8"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              aria-label="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-200 dark:border-[#2b2b2b] py-4 px-6 rounded-xl bg-gray-50 dark:bg-[#1f1f1f] text-gray-900 dark:text-[#ededed] placeholder:text-gray-400 dark:placeholder:text-[#666666] focus:bg-white dark:focus:bg-[#141414] focus:outline-black dark:focus:outline-white/40 text-base transition-colors flex-1"
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              aria-label="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-200 dark:border-[#2b2b2b] py-4 px-6 rounded-xl bg-gray-50 dark:bg-[#1f1f1f] text-gray-900 dark:text-[#ededed] placeholder:text-gray-400 dark:placeholder:text-[#666666] focus:bg-white dark:focus:bg-[#141414] focus:outline-black dark:focus:outline-white/40 text-base transition-colors flex-1"
              required
            />
          </div>

          <div>
            <textarea
              placeholder="Hi Rone, love your work on..."
              aria-label="Your Message"
              id="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none h-40 border border-gray-200 dark:border-[#2b2b2b] py-4 px-6 rounded-xl bg-gray-50 dark:bg-[#1f1f1f] text-gray-900 dark:text-[#ededed] placeholder:text-gray-400 dark:placeholder:text-[#666666] focus:bg-white dark:focus:bg-[#141414] focus:outline-black dark:focus:outline-white/40 text-base transition-colors"
              required
            ></textarea>
          </div>

          <div className="pt-2">
            <Button
              className="w-full border border-transparent text-center py-5 min-h-[56px] cursor-pointer bg-[#18181b] text-white dark:bg-[#ededed] dark:text-[#181818] text-base sm:text-lg font-semibold hover:!bg-[#27272a] dark:hover:!bg-white rounded-xl transition-all shadow-sm"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
