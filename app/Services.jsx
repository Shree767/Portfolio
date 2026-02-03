"use client";

import { motion } from "framer-motion";

const services = [
  {
    label: "Web",
    title: "Frontend Development",
    meta: "React • Next.js • Tailwind",
  },
  {
    label: "Design",
    title: "UI / UX Design",
    meta: "Figma • Design systems",
  },
  {
    label: "Mobile",
    title: "Android Development",
    meta: "Android Studio • Kotlin",
  },
];

export default function Services() {
  return (
    <div className="w-full px-24 xl:px-48">
      {/* SECTION HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ type: "spring", stiffness: 60, damping: 14 }}
        className="text-3xl uppercase tracking-tight text-accent mb-16"
      >
        Services
      </motion.h2>

      {/* SERVICES LIST */}
      <div className="flex flex-col gap-20">
        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 16,
              delay: index * 0.08,
            }}
            className="max-w-4xl"
          >
            <span className="text-white/40 uppercase tracking-wide text-sm">
              {item.label}
            </span>

            <h3 className="text-3xl xl:text-4xl font-semibold mt-1">
              {item.title}
            </h3>

            <p className="text-white/50 mt-1">
              {item.meta}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}