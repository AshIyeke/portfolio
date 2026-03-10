"use client";
import React from "react";
import { motion } from "motion/react";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandRedux,
  IconTestPipe,
  IconBrandSupabase,
  IconBrandPython,
  IconPuzzle,
} from "@tabler/icons-react";

const techStack = [
  {
    name: "React",
    icon: <IconBrandReact className="h-10 w-10 text-sky-400" />,
  },
  {
    name: "Next.js",
    icon: <IconBrandNextjs className="h-10 w-10 text-black dark:text-white" />,
  },
  {
    name: "Redux",
    icon: <IconBrandRedux className="h-10 w-10 text-purple-500" />,
  },
  {
    name: "React Testing",
    icon: <IconTestPipe className="h-10 w-10 text-rose-500" />,
  },
  {
    name: "Microfrontends",
    icon: <IconPuzzle className="h-10 w-10 text-orange-500" />,
  },
  {
    name: "Supabase",
    icon: <IconBrandSupabase className="h-10 w-10 text-emerald-500" />,
  },
  {
    name: "Python",
    icon: <IconBrandPython className="h-10 w-10 text-blue-500" />,
  },
];

// Duplicate the array for a continuous loop
const doubleStack = [...techStack, ...techStack, ...techStack];

export function TechStack() {
  return (
    <section className="py-10 bg-zinc-50 dark:bg-zinc-900/50 overflow-hidden border-y border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          Our Tech Stack
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <motion.div
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap gap-12 items-center"
        >
          {doubleStack.map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-white dark:bg-zinc-800 px-6 py-4 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm transition-all hover:border-primary/50 cursor-pointer group/item"
            >
              {tech.icon}
              <span className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 group-hover/item:text-primary transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
