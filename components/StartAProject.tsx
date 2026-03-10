"use client";

import React from "react";
import { motion } from "framer-motion";

export const StartAProject = () => {
  return (
    <section className="py-24 bg-background px-4">
      {/* Start a Project Card */}
      <div className="max-w-xl mx-auto">
        <motion.div
          initial="initial"
          whileHover="hover"
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-sm"
        >
          {/* Default Border Layer */}
          <div className="absolute inset-0 rounded-2xl border border-border" />
          
          {/* Gradient Border Layer (Fades in on hover) */}
          <motion.div
            variants={{
              initial: { opacity: 0 },
              hover: { opacity: 1 },
            }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 p-[2px] rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
          />

          {/* Content Container */}
          <div className="relative m-[1px] bg-background rounded-[15px] p-8 md:p-12 text-center space-y-8 group">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Ready to <br />
              <span className="text-primary group-hover:text-blue-600 transition-colors duration-300">
                start a project?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Let&apos;s work together to create something amazing. Tell us about your
              idea, and let&apos;s bring it to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Get in Touch
              </a>
              <a
                href="/book"
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Book a Call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
