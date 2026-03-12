"use client";
import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";

/**
 * TypeScript Interfaces
 */
interface ContactMethodCardProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  value: string;
  href?: string;
  iconBg: string;
  iconColor: string;
  index: number;
}

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

/**
 * Inline SVG Icon Components
 * (Replacing external library for environment compatibility while maintaining design)
 */
const IconDocument: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
    />
  </svg>
);

const IconMail: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
    />
  </svg>
);

const IconPhone: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
    />
  </svg>
);

const IconLocation: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
    />
  </svg>
);

const ContactMethodCard: React.FC<ContactMethodCardProps> = ({
  icon: Icon,
  title,
  value,
  href,
  iconBg,
  iconColor,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
    whileHover={{ y: -5 }}
    className="group bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
  >
    <div
      className={`w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
    >
      <Icon className={`w-5 h-5 ${iconColor}`} />
    </div>
    <h3 className="font-semibold text-gray-900 dark:text-neutral-100 mb-1">
      {title}
    </h3>
    {href ? (
      <a
        href={href}
        className="text-sm text-gray-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 underline transition-colors"
      >
        {value}
      </a>
    ) : (
      <p className="text-sm text-gray-500 dark:text-neutral-400 leading-relaxed">
        {value}
      </p>
    )}
  </motion.div>
);

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="min-h-screen bg-[#f8faff] dark:bg-neutral-950 flex items-center justify-center p-4 sm:p-8 lg:p-12 relative overflow-hidden font-sans">
      {/* Background Decorative Gradients */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-100/30 dark:bg-green-900/10 blur-[120px] rounded-full"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-100/30 dark:bg-purple-900/10 blur-[120px] rounded-full"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-neutral-900 rounded-[2.5rem] shadow-2xl shadow-blue-900/5 dark:shadow-black/50 w-full max-w-6xl p-8 lg:p-16 z-10 border border-gray-50 dark:border-neutral-800 relative overflow-hidden"
      >
        {/* Decorative Background pattern using standard img for environment support */}
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none select-none">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop"
            alt=""
            className="w-[300px] h-[300px] rounded-bl-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Info and Grid */}
          <div className="flex flex-col relative z-20">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-neutral-100 mb-6 tracking-tight"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-600 dark:text-neutral-400 text-lg leading-relaxed mb-12 max-w-md"
            >
              We'll show you self-help options first. Additional help is
              available if you need it, including live chat with our specialist.
            </motion.p>

            {/* Support Visual */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12 rounded-2xl overflow-hidden shadow-inner bg-gray-50 dark:bg-neutral-800 hidden md:block relative h-32 w-full"
            >
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop"
                alt="Our Support Team"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ContactMethodCard
                index={0}
                icon={IconDocument}
                title="Documentation"
                value="ukhrakib.com/docs"
                href="#"
                iconBg="bg-blue-50 dark:bg-blue-900/20"
                iconColor="text-blue-500"
              />
              <ContactMethodCard
                index={1}
                icon={IconMail}
                title="Our Email"
                value="hello@mail.com"
                href="mailto:hello@mail.com"
                iconBg="bg-purple-50 dark:bg-purple-900/20"
                iconColor="text-purple-500"
              />
              <ContactMethodCard
                index={2}
                icon={IconPhone}
                title="Phone"
                value="+61 749 530 742"
                href="tel:+61749530742"
                iconBg="bg-blue-50 dark:bg-blue-900/20"
                iconColor="text-blue-400"
              />
              <ContactMethodCard
                index={3}
                icon={IconLocation}
                title="Visit Us"
                value="285 Penn Ave 9th Floor, CA"
                iconBg="bg-orange-50 dark:bg-orange-900/20"
                iconColor="text-orange-400"
              />
            </div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white dark:bg-neutral-900 relative z-20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-gray-700 dark:text-neutral-300"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="James Benjamin"
                  className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-gray-300 dark:placeholder:text-neutral-600 text-gray-700 dark:text-neutral-200"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 dark:text-neutral-300"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="enter your email address"
                  className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-gray-300 dark:placeholder:text-neutral-600 text-gray-700 dark:text-neutral-200"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 dark:text-neutral-300"
                >
                  About your inquiry
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Enter your message"
                  className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-gray-300 dark:placeholder:text-neutral-600 text-gray-700 dark:text-neutral-200 resize-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 px-6 bg-[#5c6aff] hover:bg-[#4a58e6] text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 active:scale-[0.98] focus:ring-4 focus:ring-blue-500/30 outline-none"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default function ContactPage() {
  return <ContactSection />;
}
