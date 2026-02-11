"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";

const projects = [
  {
    title: "Fitness Guide Web App",
    category: "Frontend",
    description:
      "A responsive fitness guide built with React and Tailwind, focusing on clean UI and accessibility.",
    stack: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/Shree767/fitness-guide-web",
    live: "https://fitness-guide-web.onrender.com",
  },
{
  title: "Fitness Guide Web App",
  category: "Web",
  description:
    "A modern gym website where users can explore workout programs, calculate BMI, and purchase membership plans online.",
  stack: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
  github: "",
  live: "",
},
{
  title: "Fashion E-commerce Website",
  category: "Web",
  description:
    "A responsive online fashion store with product listings, filtering, shopping cart functionality, and secure checkout flow.",
  stack: ["React", "Next.js", "Tailwind CSS", "Stripe API"],
  github: "",
  live: "",
},
  {
    title: "VISION – Android Safety App",
    category: "Android",
    description:
      "A safety-focused Android application built in Android Studio featuring SOS triggers, location sharing via SMS, flashlight and siren activation, and runtime permission handling.",
    stack: ["Android Studio", "Kotlin", "Location Services", "SMS API"],
    github: "",
    live: "",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px",
  });

  return (
    <section
      ref={ref}
      id="projects"
      
    >
      <motion.div
        initial={{ opacity: 0, y: 120 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 120 }}
        transition={{ type: "spring", stiffness: 70, damping: 16 }}
        className=""
      >
        {/* SECTION TITLE */}
        <motion.h2
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 18,
            delay: 0.1,
          }}
          className="text-3xl uppercase tracking-tight text-accent mb-20"
        >
          Projects
        </motion.h2>

        {/* PROJECT LIST */}
        <div className="flex flex-col gap-16 max-w-4xl">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 40 }
              }
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 18,
                delay: 0.2 + index * 0.1,
              }}
              className="flex flex-col gap-4"
            >
              <span className="text-white/40 uppercase tracking-wide text-sm">
                {project.category}
              </span>

              <h3 className="text-3xl xl:text-4xl font-semibold">
                {project.title}
              </h3>

              <p className="text-white/60 leading-relaxed">
                {project.description}
              </p>

              <ul className="flex gap-2 flex-wrap text-accent text-sm">
                {project.stack.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>

              <div className="flex gap-4 mt-4">
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    className="w-[44px] h-[44px] rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition"
                  >
                    <BsArrowUpRight className="text-white" />
                  </Link>
                )}

                <Link
                  href={project.github}
                  target="_blank"
                  className="w-[44px] h-[44px] rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition"
                >
                  <BsGithub className="text-white" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
