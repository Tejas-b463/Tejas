import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, MonitorSmartphone, Server, Zap, Database, Briefcase, Settings, Paintbrush, Rocket } from "lucide-react";

export default function MapMyTourCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-300 selection:bg-indigo-500/30 overflow-x-hidden relative font-sans">
      {/* Background decorations */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-indigo-900/10 to-transparent z-0 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[400px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent)]">
        <svg className="absolute inset-0 h-full w-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="case-study-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40V0h40" fill="none" stroke="white" strokeWidth="1"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#case-study-grid)"></rect>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-32 relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors mb-16 px-4 py-2 rounded-full bg-indigo-500/10 hover:bg-indigo-500/20 shadow-sm border border-indigo-500/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Link>

        {/* Header Section */}
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden shadow-xl">
              <Image src="/mapmytour.png" alt="Map My Tour Logo" width={40} height={40} className="object-contain" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Map My Tour</h1>
              <p className="text-indigo-300/80 font-medium mt-1 uppercase tracking-wider text-sm">Frontend Developer</p>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed font-light">
            Architecting scalable UI components and implementing deep end-to-end user journeys for a robust, multi-service travel booking platform.
          </p>
        </header>

        {/* Responsibilities & Contributions */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Briefcase className="w-6 h-6 mr-3 text-indigo-400" />
            Responsibilities & Contributions
          </h2>
          <div className="bg-zinc-900/40 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px]" />
            <ul className="space-y-5 relative z-10">
              {[
                "Developed and maintained a complete frontend system for a modern travel platform, focusing on clean architecture and reusable component design.",
                "Built responsive and adaptive interfaces to deliver a seamless experience across desktop, tablet, and mobile devices.",
                "Implemented end-to-end user flows, from discovery and search to booking and confirmation, ensuring a smooth and intuitive journey.",
                "Collaborated on authentication and user interaction flows, enabling personalized and secure user experiences.",
                "Designed and developed scalable UI components to maintain design consistency and performance across the platform."
              ].map((item, i) => (
                <li key={i} className="flex items-start text-neutral-300 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 mr-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Product & Feature Engineering */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Settings className="w-6 h-6 mr-3 text-blue-400" />
            Product & Feature Engineering
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
               <Database className="w-8 h-8 text-blue-400 mb-4" />
               <p className="text-neutral-300 leading-relaxed text-sm">
                 Worked on complex UI systems involving dynamic data handling, state management, and real-time updates.
               </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
               <Zap className="w-8 h-8 text-purple-400 mb-4" />
               <p className="text-neutral-300 leading-relaxed text-sm">
                 Developed advanced interaction patterns such as search, filtering, selection flows, and conditional rendering.
               </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
               <MonitorSmartphone className="w-8 h-8 text-pink-400 mb-4" />
               <p className="text-neutral-300 leading-relaxed text-sm">
                 Contributed to building a community-driven platform experience, enabling users to explore and interact with content beyond basic transactions.
               </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
               <Server className="w-8 h-8 text-indigo-400 mb-4" />
               <p className="text-neutral-300 leading-relaxed text-sm">
                 Integrated frontend with backend APIs to ensure efficient data flow and seamless functionality.
               </p>
            </div>
          </div>
        </section>

        {/* UI/UX & Performance Optimization */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Paintbrush className="w-6 h-6 mr-3 text-pink-400" />
            UI/UX & Performance Optimization
          </h2>
          <div className="bg-gradient-to-r from-zinc-900/80 to-indigo-900/20 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
            <ul className="space-y-6">
              <li className="flex items-start text-neutral-300">
                 <span className="w-2 h-2 bg-pink-500 rounded-full mr-4 mt-2" />
                 <span>Focused on enhancing user experience and interface quality, improving navigation, layout structure, and overall usability.</span>
              </li>
              <li className="flex items-start text-neutral-300">
                 <span className="w-2 h-2 bg-pink-500 rounded-full mr-4 mt-2" />
                 <span>Reduced friction in critical user journeys by optimizing UI patterns and interaction flows.</span>
              </li>
              <li className="flex flex-col text-neutral-300">
                 <div className="flex items-start">
                   <span className="w-2 h-2 bg-pink-500 rounded-full mr-4 mt-2" />
                   <span>Applied performance optimization techniques such as:</span>
                 </div>
                 <div className="ml-8 mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                   <div className="bg-black/40 border border-white/5 p-4 rounded-xl text-center shadow-inner tracking-wide text-indigo-300 text-sm font-medium">Lazy loading</div>
                   <div className="bg-black/40 border border-white/5 p-4 rounded-xl text-center shadow-inner tracking-wide text-indigo-300 text-sm font-medium">Code splitting</div>
                   <div className="bg-black/40 border border-white/5 p-4 rounded-xl text-center shadow-inner tracking-wide text-indigo-300 text-sm font-medium">Efficient rendering strategies</div>
                 </div>
              </li>
              <li className="flex items-start text-neutral-300">
                 <span className="w-2 h-2 bg-pink-500 rounded-full mr-4 mt-2" />
                 <span>Ensured consistent design language using modern UI practices and reusable styling systems.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Impact */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Rocket className="w-6 h-6 mr-3 text-indigo-400" />
            Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Contributed to building a production-ready, scalable OTA platform interface",
              "Improved overall user experience, responsiveness, and interaction quality",
              "Delivered multiple high-quality features that enhanced usability and engagement",
              "Strengthened frontend architecture for better maintainability and scalability"
            ].map((impact, i) => (
              <div key={i} className="flex p-6 border border-indigo-500/10 bg-indigo-500/5 rounded-2xl items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                <span className="text-neutral-200 text-sm leading-relaxed">{impact}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-xl font-bold text-white mb-6">Technologies Deployed</h2>
          <div className="flex flex-wrap gap-3">
             {['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'React Query', 'RESTful APIs', 'Framer Motion', 'Git/Agile'].map(tech => (
               <div key={tech} className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-lg text-sm font-medium shadow-sm">
                 {tech}
               </div>
             ))}
          </div>
        </section>

      </div>
    </div>
  );
}
