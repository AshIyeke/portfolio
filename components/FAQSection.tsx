"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection: React.FC = () => {
  return (
    <section className="px-4 py-24 bg-muted/30 dark:bg-neutral-900/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Everything you need to know about our process and services.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: "What is your typical project timeline?",
                a: "Project timelines vary depending on scope. A standard web application usually takes 8-12 weeks from discovery to launch."
              },
              {
                q: "Do you offer post-launch support?",
                a: "Yes, we provide flexible maintenance and support packages to ensure your application stays secure and up-to-date."
              },
              {
                q: "Which technologies do you specialize in?",
                a: "We specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and various cloud platforms like AWS and Supabase."
              },
              {
                q: "Can you help with existing projects?",
                a: "Absolutely. We can perform code audits, implement new features, or help with the digital transformation of legacy systems."
              }
            ].map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6 text-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
