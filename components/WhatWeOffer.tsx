"use client";
import React from "react";
import { motion } from "motion/react";
import { 
  IconDeviceLaptop, 
  IconPalette, 
  IconCloudComputing, 
  IconDeviceMobile, 
  IconChartBar, 
  IconBrain,
  IconArrowRight
} from "@tabler/icons-react";
import { cn } from "@/app/lib/utils";
import { NavbarButton } from "@/components/ui/resizable-navbar";

const services = [
  {
    title: "Web Development",
    description: "Building fast, secure, and scalable web applications tailored to your business needs using modern frameworks.",
    icon: <IconDeviceLaptop className="h-8 w-8 text-indigo-500" />,
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and visually stunning user interfaces that provide exceptional user experiences.",
    icon: <IconPalette className="h-8 w-8 text-indigo-500" />,
  },
  {
    title: "Cloud Infrastructure",
    description: "Architecting reliable and automated cloud solutions on AWS, Azure, or GCP for maximum uptime.",
    icon: <IconCloudComputing className="h-8 w-8 text-indigo-500" />,
  },
  {
    title: "Mobile Apps",
    description: "Developing cross-platform mobile applications that feel native and perform smoothly on all devices.",
    icon: <IconDeviceMobile className="h-8 w-8 text-indigo-500" />,
  },
  {
    title: "Digital Strategy",
    description: "Leveraging data-driven insights to optimize your digital presence and drive business growth.",
    icon: <IconChartBar className="h-8 w-8 text-indigo-500" />,
  },
  {
    title: "AI Solutions",
    description: "Integrating smart AI and machine learning features to automate workflows and enhance product value.",
    icon: <IconBrain className="h-8 w-8 text-indigo-500" />,
  },
];

export function WhatWeOffer() {
  return (
    <section className="py-24 px-4 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50"
          >
            What We Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            Empowering your business with cutting-edge technology and 
            user-centric design solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <NavbarButton 
            href="/services" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg h-auto rounded-full shadow-lg shadow-indigo-500/20 group/btn flex items-center gap-2 mx-auto w-fit"
          >
            View All Services
            <IconArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
          </NavbarButton>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
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
        "transition-all duration-300 group"
      )}
    >
      <div className="mb-4 inline-flex items-center justify-center p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
        {service.title}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
}
