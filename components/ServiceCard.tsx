"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/app/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  className?: string;
}

export function ServiceCard({ title, description, icon, index, className }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -5 }}
      className={cn(
        "p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800",
        "bg-white dark:bg-zinc-900/50 hover:shadow-xl hover:shadow-indigo-500/10",
        "transition-all duration-300 group",
        className
      )}
    >
      <div className="mb-4 inline-flex items-center justify-center p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
        {title}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
