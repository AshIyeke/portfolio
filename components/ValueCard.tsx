"use client";

import React from "react";
import { motion } from "framer-motion";

interface ValueCardProps {
  title: string;
  desc: string;
  index: number;
}

export const ValueCard = ({ title, desc, index }: ValueCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Decorative background blur */}
      <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
      
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary via-purple-500 to-blue-500 transition-all duration-500 group-hover:w-full" />
        
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-muted transition-colors duration-300 group-hover:bg-primary/10">
          <span className="text-xl font-bold text-primary">0{index + 1}</span>
        </div>

        <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};
