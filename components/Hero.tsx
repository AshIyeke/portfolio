"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { motion } from "motion/react";
import { NavbarButton } from "@/components/ui/resizable-navbar";

export function Hero() {
  return (
    <BackgroundBeamsWithCollision className="min-h-[80vh] md:min-h-screen !items-start pt-32 md:pt-40 pb-10 md:pb-0">
      <div className="relative z-20 flex flex-col items-center px-4 text-center w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-7xl font-bold text-black dark:text-white max-w-4xl leading-tight"
        >
          Building Digital Experiences That{" "}
          <span className="text-indigo-500 dark:text-indigo-400">Scale</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl"
        >
          We help startups and enterprises build beautiful, functional, and
          high-performance web applications using the latest technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <NavbarButton
            href="/contact"
            variant="primary"
            className="px-8 py-3 text-base h-auto"
          >
            Start a Project
          </NavbarButton>
          <NavbarButton
            href="/projects"
            variant="blur"
            className="px-8 py-3 text-base h-auto"
          >
            View Work
          </NavbarButton>
        </motion.div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
