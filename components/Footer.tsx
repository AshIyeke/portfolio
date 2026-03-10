"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconBrandGithub, IconBrandTwitter, IconBrandLinkedin, IconBrandInstagram } from "@tabler/icons-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand & Newsletter Section */}
        <div className="md:col-span-2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Portfolio</h2>
            <p className="text-muted-foreground max-w-sm">
              Building digital experiences that matter. From concept to code, we bring your vision to life with modern technology and design.
            </p>
          </div>

          {/* Integrated Newsletter (Stay in the loop) */}
          <div className="max-w-md">
            <motion.div
              initial="initial"
              whileHover="hover"
              className="relative rounded-xl overflow-hidden shadow-sm border border-border group"
            >
              <motion.div
                variants={{
                  initial: { opacity: 0 },
                  hover: { opacity: 1 },
                }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 p-[1px] rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"
              />
              <div className="relative m-[1px] bg-background rounded-[11px] p-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-foreground">Stay in the loop</h3>
                  <p className="text-muted-foreground text-xs">
                    Latest updates and project insights.
                  </p>
                </div>
                
                <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex-1 h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />
                  <button
                    type="submit"
                    className="h-10 px-4 rounded-md bg-foreground text-background text-xs font-medium hover:bg-foreground/90 transition-all active:scale-95 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Company</h4>
          <ul className="space-y-4">
            <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</a></li>
            <li><a href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Services</a></li>
            <li><a href="/projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">Projects</a></li>
            <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full border border-border hover:bg-accent transition-all hover:scale-110"><IconBrandTwitter size={20} /></a>
            <a href="#" className="p-2 rounded-full border border-border hover:bg-accent transition-all hover:scale-110"><IconBrandGithub size={20} /></a>
            <a href="#" className="p-2 rounded-full border border-border hover:bg-accent transition-all hover:scale-110"><IconBrandLinkedin size={20} /></a>
            <a href="#" className="p-2 rounded-full border border-border hover:bg-accent transition-all hover:scale-110"><IconBrandInstagram size={20} /></a>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground italic">hello@portfolio.com</p>
            <p className="text-sm text-muted-foreground">+1 (555) 000-0000</p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Portfolio Inc. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};
