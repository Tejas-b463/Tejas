"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate emailjs or other backend service for demo purposes
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="relative overflow-hidden w-full bg-black py-4 px-4 md:px-8">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-24 relative z-10">

        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col"
        >
          <div className="w-14 h-14 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center relative shadow-[0_0_30px_rgba(59,130,246,0.15)] mb-8">
            <div className="absolute inset-0 bg-blue-500/10 rounded-xl blur-xl"></div>
            <Mail className="w-6 h-6 text-blue-500 relative z-10" strokeWidth={1.5} />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">Contact us</h2>
          <p className="text-neutral-400 max-w-md text-base md:text-lg mb-12 leading-relaxed">
            We are always looking for ways to improve our products and services. Contact us and let us know how we can help you.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mb-12 text-sm font-medium text-neutral-300">
            <span className="hover:text-white transition-colors cursor-pointer">tejasbanait007@gmail.com</span>
            <span className="text-neutral-700">•</span>
            <span className="hover:text-white transition-colors cursor-pointer">+91 8830805616</span>
          </div>

          {/* Map Area */}
          <div className="relative w-full max-w-lg mt-auto opacity-90 transition-opacity duration-500">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
              alt="World Map"
              width={600}
              height={300}
              className="w-full h-auto object-contain opacity-40"
              style={{ filter: 'invert(1) brightness(0.45) sepia(1) hue-rotate(180deg) saturate(2)' }}
              unoptimized
            />

            {/* Glowing Map Marker on India */}
            <div className="absolute top-[47%] left-[70.5%] flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="mb-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-[10px] text-neutral-200 shadow-2xl whitespace-nowrap relative backdrop-blur-sm"
              >
                We are here
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-900 border-b border-r border-neutral-700 rotate-45" />
              </motion.div>

              {/* Pulse effect */}
              <div className="relative flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full relative z-10 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <div className="w-8 h-8 rounded-full bg-blue-500/20 absolute animate-pulse z-0" />
                <div className="w-16 h-16 rounded-full bg-blue-500/10 absolute animate-pulse z-0 delay-150" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column (Form) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-xl mx-auto md:mx-0 relative"
        >
          {/* Subtle gradient glow behind card */}
          <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-3xl z-0 transform scale-95" />

          <div className="p-8 md:p-10 rounded-3xl bg-neutral-950/40 backdrop-blur-xl border border-neutral-800/60 relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-10 h-full">

            {/* Grid pattern background */}
            <div className="absolute inset-0 z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent)]">
              <svg className="absolute inset-0 h-full w-full opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0 40V0h40" fill="none" stroke="white" strokeWidth="1"></path>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
              </svg>
            </div>

            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
              <div className="flex flex-col gap-2.5">
                <label htmlFor="fullname" className="text-sm font-medium text-neutral-300">Full name</label>
                <input
                  id="fullname"
                  required
                  type="text"
                  placeholder="Tejas Banait"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:border-neutral-700 focus:bg-neutral-800/80 transition-all placeholder-neutral-600 text-sm shadow-inner"
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor="email" className="text-sm font-medium text-neutral-300">Email Address</label>
                <input
                  id="email"
                  required
                  type="email"
                  placeholder="support@product.com"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:border-neutral-700 focus:bg-neutral-800/80 transition-all placeholder-neutral-600 text-sm shadow-inner"
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor="company" className="text-sm font-medium text-neutral-300">Company</label>
                <input
                  id="company"
                  type="text"
                  placeholder="Product Company"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:border-neutral-700 focus:bg-neutral-800/80 transition-all placeholder-neutral-600 text-sm shadow-inner"
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor="message" className="text-sm font-medium text-neutral-300">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Type your message here"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:border-neutral-700 focus:bg-neutral-800/80 transition-all placeholder-neutral-600 text-sm resize-none shadow-inner"
                ></textarea>
              </div>

              <div className="mt-2 text-left">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="min-w-[120px] bg-neutral-800/80 hover:bg-neutral-700 border border-neutral-700 text-white rounded-xl px-6 py-3.5 text-sm font-semibold shadow-sm transition-colors disabled:opacity-70 disabled:cursor-not-allowed inline-flex items-center justify-center tracking-tight"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : "Submit"}
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
