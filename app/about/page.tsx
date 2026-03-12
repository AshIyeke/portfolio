"use client";

import React from "react";
import { motion } from "framer-motion";
import { TechStack } from "@/components/TechStack";
import { ValueCard } from "@/components/ValueCard";
import { TeamCard } from "@/components/TeamCard";
import { OurStory } from "@/components/OurStory";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              We build the <span className="text-primary">future</span> of digital experiences.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our mission is to empower businesses by creating innovative, scalable, and user-centric digital products that make a lasting impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Component */}
      <OurStory />

      {/* Tech Stack Integration */}
      <TechStack />

      {/* Our Values */}
      <section className="px-4 py-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              The principles that guide our work and define our commitment to excellence and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Innovation", desc: "We stay ahead of the curve, exploring new technologies to provide the best solutions." },
              { title: "Quality", desc: "We never compromise on the quality of our code or the precision of our designs." },
              { title: "Empathy", desc: "We build for users, keeping their needs and experiences at the heart of everything we do." },
              { title: "Customer Satisfaction", desc: "Your success is our priority. We work closely with you to ensure every project exceeds expectations." },
              { title: "Reliable Support", desc: "We&apos;re here for you long after launch, providing consistent maintenance and rapid assistance." },
              { title: "Security First", desc: "We implement industry-leading security practices to protect your data and ensure peace of mind." },
            ].map((value, idx) => (
              <ValueCard 
                key={idx}
                index={idx}
                title={value.title}
                desc={value.desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">The Minds Behind</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Meet our team of visionary thinkers, developers, and designers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                name: "James Benjamin", 
                role: "CEO", 
                description: "Visionary strategist and sharp insights.", 
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
              },
              { 
                name: "Sarah Chen", 
                role: "Design Lead", 
                description: "Crafting pixel-perfect experiences.", 
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop" 
              },
              { 
                name: "Alex Rivera", 
                role: "CTO", 
                description: "Architect of complex, scalable solutions.", 
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop" 
              },
            ].map((member, idx) => (
              <TeamCard 
                key={idx}
                name={member.name}
                role={member.role}
                description={member.description}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 py-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A transparent, collaborative process designed to bring your vision to life efficiently and effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We dive deep into your goals, audience, and challenges to build a solid strategic foundation.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                step: "02",
                title: "Design",
                desc: "Our designers craft intuitive interfaces and engaging experiences tailored to your brand.",
                color: "from-purple-500 to-pink-500"
              },
              {
                step: "03",
                title: "Development",
                desc: "We bring designs to life using clean, scalable code and the latest web technologies.",
                color: "from-orange-500 to-red-500"
              },
              {
                step: "04",
                title: "Launch",
                desc: "After rigorous testing, we deploy your project and provide ongoing support for growth.",
                color: "from-emerald-500 to-teal-500"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="space-y-6">
                  <div className={`text-5xl font-black bg-clip-text text-transparent bg-gradient-to-br ${item.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}>
                    {item.step}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-[2px] bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
