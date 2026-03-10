"use client";

import React from 'react';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa6';

/**
 * Custom Flower/Star Icon for the About Us heading
 */
const FlowerIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-8 h-8 text-emerald-400"
    fill="currentColor"
  >
    <path d="M12,2L13.5,6.5L18,5L16.5,9.5L21,11L16.5,12.5L21,14L16.5,15.5L18,20L13.5,18.5L12,23L10.5,18.5L6,20L7.5,15.5L3,14L7.5,12.5L3,11L7.5,9.5L6,5L10.5,6.5L12,2Z" />
  </svg>
);

export const OurStory = () => {
  return (
    <div className="py-24 px-4 sm:px-8 lg:px-16 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column: Vision Statement */}
          <div className="flex flex-col">
            <FaQuoteLeft className="w-12 h-12 text-muted-foreground/20 mb-6 -ml-2" />
            <h2 className="text-3xl sm:text-4xl leading-snug font-normal text-foreground mb-12 italic">
              Our team of experts works tirelessly to bring your vision to life, 
              ensuring every project we undertake not only meets but exceeds 
              expectations. We are dedicated to transforming your ideas into 
              impactful digital experiences.
            </h2>

            {/* Abstract Decorative Image */}
            <div className="mt-auto relative overflow-hidden rounded-[2rem] aspect-[16/9]">
              <Image
                src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop"
                alt="Abstract Architectural Curve"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: About Us Box */}
          <div className="bg-muted/30 p-12 rounded-[3rem] border border-border flex flex-col justify-between">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <FlowerIcon />
                <span className="text-sm font-bold uppercase tracking-widest text-primary">About Us</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                Crafting Digital <br /> Solutions with <br /> Passion & Precision
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are more than just a tech company; we are your strategic partners 
                in digital transformation. Our approach combines creative storytelling 
                with robust engineering.
              </p>
            </div>
            
            <div className="pt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">99%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
