"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="container mx-auto max-w-5xl px-6">
        <motion.div
          ref={ref}
          style={{ opacity, y }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-white">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Have a project in mind? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl rounded-xl bg-slate-800 p-8 shadow-sm"
        >
          <div className="mb-6">
            <label htmlFor="name" className="mb-2 block text-sm font-semibold text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
              className="w-full rounded-lg border border-slate-600 px-4 py-3 bg-slate-900 text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all duration-300"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              required
              className="w-full rounded-lg border border-slate-600 px-4 py-3 bg-slate-900 text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all duration-300"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="mb-2 block text-sm font-semibold text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us about your project..."
              required
              className="w-full rounded-lg border border-slate-600 px-4 py-3 bg-slate-900 text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all duration-300"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        <div className="mt-12 text-center">
          <p className="text-slate-400">
            Or email us at{" "}
            <a href="mailto:hello@startup.com" className="font-semibold text-blue-500 hover:text-blue-400 transition-colors duration-300">
              hello@startup.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
