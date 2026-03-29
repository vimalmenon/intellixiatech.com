"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <section id="about" className="py-24 bg-slate-900">
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
            About Us
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            We are a passionate team of innovators and problem-solvers dedicated
            to delivering exceptional digital solutions.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Our Mission",
              description:
                "To empower businesses with cutting-edge technology and innovative strategies.",
            },
            {
              title: "Our Values",
              description:
                "Integrity, innovation, and customer success drive everything we do.",
            },
            {
              title: "Our Vision",
              description:
                "To be the leading partner for digital transformation worldwide.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="rounded-xl bg-slate-800 p-8 hover:bg-blue-900/30 transition-colors duration-300"
            >
              <h3 className="mb-4 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
