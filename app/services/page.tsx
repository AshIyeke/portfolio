"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  IconDeviceLaptop, 
  IconPalette, 
  IconCloudComputing, 
  IconDeviceMobile, 
  IconChartBar, 
  IconBrain,
  IconRocket,
  IconShieldCheck,
  IconUsers
} from "@tabler/icons-react";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";

const allServices = [
  {
    title: "Web Development",
    description: "Building fast, secure, and scalable web applications tailored to your business needs using modern frameworks like React, Next.js, and Node.js.",
    icon: <IconDeviceLaptop className="h-8 w-8 text-indigo-500" />,
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and visually stunning user interfaces that provide exceptional user experiences through rigorous research and testing.",
    icon: <IconPalette className="h-8 w-8 text-indigo-500" />,
  },
  {
    title: "Cloud Infrastructure",
    description: "Architecting reliable and automated cloud solutions on AWS, Azure, or GCP for maximum uptime, scalability, and security.",
    icon: <IconCloudComputing className="h-8 w-8 text-indigo-500" />,
  },
  {
    title: "Mobile Apps",
    description: "Developing high-performance cross-platform mobile applications that feel native and perform smoothly on both iOS and Android.",
    icon: <IconDeviceMobile className="h-8 w-8 text-indigo-500" />,
  },
  {
    title: "Digital Strategy",
    description: "Leveraging data-driven insights and market trends to optimize your digital presence and drive sustainable business growth.",
    icon: <IconChartBar className="h-8 w-8 text-indigo-500" />,
  },
  {
    title: "AI Solutions",
    description: "Integrating smart AI and machine learning features to automate complex workflows and enhance your product's core value.",
    icon: <IconBrain className="h-8 w-8 text-indigo-500" />,
  },
];

const approaches = [
  {
    title: "Agile Methodology",
    desc: "We work in short sprints, ensuring constant progress and the flexibility to adapt to changing requirements.",
    icon: <IconRocket className="h-6 w-6 text-indigo-600" />,
  },
  {
    title: "Security First",
    desc: "Data protection and system integrity are integrated into every layer of our development process from day one.",
    icon: <IconShieldCheck className="h-6 w-6 text-indigo-600" />,
  },
  {
    title: "User-Centric",
    desc: "Every feature we build is designed with the end-user in mind, focusing on accessibility and ease of use.",
    icon: <IconUsers className="h-6 w-6 text-indigo-600" />,
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-neutral-950">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-7xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
            Our <span className="text-indigo-600">Specializations</span>
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            We offer a wide range of digital services designed to help your business thrive in a rapidly evolving technological landscape.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, idx) => (
            <ServiceCard 
              key={idx}
              index={idx}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-neutral-50 dark:bg-neutral-900/50 py-24 px-4 border-y border-neutral-100 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100">
                How we deliver <br />
                <span className="text-indigo-600">exceptional results</span>
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Our process is built on transparency, collaboration, and a commitment to quality. We don't just build software; we build solutions that solve real problems.
              </p>
              
              <div className="space-y-6">
                {approaches.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 dark:text-neutral-100 text-xl">{item.title}</h4>
                      <p className="text-neutral-600 dark:text-neutral-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                alt="Our Team working"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-indigo-600/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reusable CTA Section */}
      <CTASection 
        title="Have a project in mind?"
        description="Let's turn your vision into reality with our expert development and design services."
        buttonText="Book a Free Consultation"
        className="pt-32"
      />
    </div>
  );
}
