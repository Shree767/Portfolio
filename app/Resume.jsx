"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFramer,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3 />, name: "CSS" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiFramer />, name: "Framer Motion" },
      { icon: <FaFigma />, name: "Figma" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
    ],
  },
  {
    title: "Tools",
    skills: [{ icon: <FaGitAlt />, name: "Git" }],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px",
  });

  return (
    <section
      ref={ref}
      id="skills"
      className=""
    >
      <motion.div
        initial={{ opacity: 0, y: 120 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 120 }}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 16,
        }}
        className="w-full px-24 xl:px-48"
      >
        {/* TITLE */}
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
          My Stack
        </motion.h2>

        {/* GROUPS */}
        <div className="space-y-16">
          {skillGroups.map((group, gIndex) => (
            <div key={gIndex}>
              <motion.h3
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 14,
                  delay: 0.2 + gIndex * 0.1,
                }}
                className="text-white/40 uppercase tracking-wide text-sm mb-10"
              >
                {group.title}
              </motion.h3>

              <div className="grid grid-cols-4 gap-x-12 gap-y-10">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    animate={
                      isInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 40 }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 90,
                      damping: 18,
                      delay: 0.3 + gIndex * 0.15 + i * 0.05,
                    }}
                    className="flex items-center gap-4 text-white/70 hover:text-accent transition-colors"
                  >
                    <div className="text-4xl">{skill.icon}</div>
                    <span className="text-sm tracking-wide">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}