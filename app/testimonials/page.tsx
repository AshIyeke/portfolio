"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconQuote, IconStarFilled } from "@tabler/icons-react";
import { CTASection } from "@/components/CTASection";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO at TechFlow",
    content: "The level of expertise and dedication shown by the team was exceptional. They didn't just build a website; they created a powerful business tool that has significantly increased our conversion rates.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Founder of GreenPulse",
    content: "Working with them was a game-changer for our startup. Their agile approach and deep understanding of cloud infrastructure helped us scale our platform without a hitch during a period of rapid growth.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director at Vibe",
    content: "The design team has an incredible eye for detail. They took our vague ideas and transformed them into a cohesive, stunning brand identity that resonates perfectly with our target audience.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5
  },
  {
    name: "David Smith",
    role: "Product Manager at Apex",
    content: "Their full-stack capabilities are impressive. From the initial architecture design to the final mobile app deployment, every step was handled with professionalism and technical brilliance.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 4
  },
  {
    name: "Jessica Wu",
    role: "CTO at Nexus Innovations",
    content: "We were looking for a partner who could handle complex AI integrations. They exceeded our expectations, delivering a solution that was both powerful and intuitive for our end users.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5
  },
  {
    name: "Robert Taylor",
    role: "Operations Manager at SwiftLog",
    content: "The maintenance and support we receive are top-notch. It's rare to find a team that is so proactive in identifying and solving potential issues before they even affect our operations.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5
  }
];

export default function TestimonialsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100">
              Trusted by <span className="text-indigo-600">Industry Leaders</span>
            </h1>
            <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Hear from the businesses and individuals we've partnered with to create exceptional digital experiences.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-6 right-8 opacity-10">
                <IconQuote size={48} className="text-indigo-600" />
              </div>

              <div className="space-y-6">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <IconStarFilled key={i} size={18} className="text-yellow-500" />
                  ))}
                </div>
                
                <p className="text-neutral-700 dark:text-neutral-300 text-lg italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-indigo-600/20"
                />
                <div>
                  <h4 className="font-bold text-neutral-900 dark:text-neutral-100">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reusable CTA Section */}
        <CTASection 
          title="Ready to become our next success story?"
          description="Let's discuss how we can help your business reach its full potential through innovative digital solutions."
          buttonText="Start Your Project"
          className="mt-24"
        />
      </div>
    </div>
  );
}
