"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

export function CTASection({
  title = "Ready to start your next project?",
  description = "Let's turn your vision into reality with our expert development and design services.",
  buttonText = "Start Your Project",
  buttonHref = "/contact",
  className = "",
}: CTASectionProps) {
  return (
    <section className={`max-w-6xl mx-auto px-4 py-20 text-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative group overflow-hidden rounded-[2.5rem] bg-neutral-900 dark:bg-zinc-900 p-8 md:p-16 border border-white/5 shadow-2xl"
      >
        {/* Animated background gradients */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] group-hover:bg-indigo-500/30 transition-colors duration-700 pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] group-hover:bg-purple-500/30 transition-colors duration-700 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
          >
            {title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-4"
          >
            <a
              href={buttonHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-100 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] group/btn"
            >
              <span>{buttonText}</span>
              <IconArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '32px 32px' }} 
        />
      </motion.div>
    </section>
  );
}
