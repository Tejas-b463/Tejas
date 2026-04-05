"use client";

import React, { useState } from "react";
import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from "framer-motion";
import NextImage from "next/image";
import Title from "./Title";

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Map My Tour",
    logo: "/mapmytour.png",
    link: "/experience/map-my-tour",
    description: "Developed scalable UI components and implemented end-to-end user journeys from search to booking for a multi-service travel platform.",
    achievements: [
      "Developed and maintained a complete frontend system focusing on clean architecture and reusable UI components",
      "Built responsive and adaptive interfaces across desktop, tablet, and mobile devices",
      "Implemented seamless end-to-end user flows, from discovery and search to booking and confirmation",
      "Engineered complex UI systems involving dynamic data handling, React Query state management, and real-time updates",
      "Applied critical performance optimizations including lazy loading, code-splitting, and efficient rendering strategies",
      "Collaborated on authentication and integrated backend REST APIs ensuring efficient data flow",
      "Contributed to building a production-ready, scalable OTA platform interface"
    ],
    structuredSections: [
      {
        title: "Responsibilities & Contributions",
        bullets: [
          "Developed and maintained a complete frontend system for a modern travel platform, focusing on clean architecture and reusable component design",
          "Built responsive and adaptive interfaces to deliver a seamless experience across desktop, tablet, and mobile devices",
          "Implemented end-to-end user flows, from discovery and search to booking and confirmation, ensuring a smooth and intuitive journey",
          "Collaborated on authentication and user interaction flows, enabling personalized and secure user experiences",
          "Designed and developed scalable UI components to maintain design consistency and performance across the platform"
        ]
      },
      {
        title: "Product & Feature Engineering",
        bullets: [
          "Worked on complex UI systems involving dynamic data handling, state management, and real-time updates",
          "Developed advanced interaction patterns such as search, filtering, selection flows, and conditional rendering",
          "Contributed to building a community-driven platform experience, enabling users to explore and interact with content beyond basic transactions",
          "Integrated frontend with backend APIs to ensure efficient data flow and seamless functionality"
        ]
      },
      {
        title: "UI/UX & Performance Optimization",
        bullets: [
          "Focused on enhancing user experience and interface quality, improving navigation, layout structure, and overall usability",
          "Reduced friction in critical user journeys by optimizing UI patterns and interaction flows",
          "Applied performance optimization techniques such as Lazy loading, Code splitting, and Efficient rendering strategies",
          "Ensured consistent design language using modern UI practices and reusable styling systems"
        ]
      },
      {
        title: "Impact",
        bullets: [
          "Contributed to building a production-ready, scalable OTA platform interface",
          "Improved overall user experience, responsiveness, and interaction quality",
          "Delivered multiple high-quality features that enhanced usability and engagement",
          "Strengthened frontend architecture for better maintainability and scalability"
        ]
      }
    ],
    extendedDetails: [
      "At Map My Tour, I drove the frontend technical direction to build an immersive and responsive travel booking platform from the ground up using Next.js and TypeScript. The primary objective was bridging the gap between high-fidelity Figma designs and a flawless, interactive web experience.",
      "By strictly managing component states and collaborating extensively with backend engineering teams, I ensured smooth RESTful API data flows across the entire lifecycle of a user's travel search, selection, and checkout journey."
    ],
    metrics: "Improved app responsiveness",
    techStack: ["Next.js", "Typescript", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 2,
    role: "Frontend Developer Trainee",
    company: "Seven Mentor Pune",
    logo: "/sevenmentor.jpg",
    description: "Trained intensively in modern frontend technologies, focusing on creating responsive and interactive web interfaces from scratch.",
    achievements: [
      "Developed multiple responsive web projects",
      "Collaborated in agile team environments",
      "Mastered core React concepts and state management"
    ],
    metrics: "Built 5+ UI applications",
    techStack: ["React", "JavaScript", "HTML/CSS", "Bootstrap", "Tailwind CSS"]
  },
  {
    id: 3,
    role: "MERN Stack Developer",
    company: "Personal Projects",
    logo: "/personalproject.png",
    description: "Architected and deployed full-stack applications integrating seamless frontend user experiences with robust backend APIs.",
    achievements: [
      "Built a complete e-commerce platform",
      "Implemented secure JWT authentication",
      "Integrated complex third-party payment gateways"
    ],
    metrics: "Improved performance by 30%",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Redux"]
  }
];

function ExperienceCard({ item, index, onExplore }: { item: typeof experiences[0]; index: number; onExplore: (e: React.MouseEvent, item: typeof experiences[0]) => void }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{
        y: -5,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      onMouseMove={handleMouseMove}
      className="group relative flex h-full flex-col rounded-3xl border border-white/10 bg-zinc-900/40 overflow-hidden backdrop-blur-md"
    >
      {/* Spotlight Hover Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(99, 102, 241, 0.12),
              transparent 80%
            )
          `,
        }}
      />

      {/* Subtle Gradient Border on Hover */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] group-hover:shadow-[inset_0_0_0_1px_rgba(139,92,246,0.3)] pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full p-6 md:p-8">
        <div className="mb-6">
          <h3 className="text-xl font-bold tracking-tight text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">{item.role}</h3>
          <div className="flex items-center gap-2.5">
            {item.logo && (
              <NextImage src={item.logo} alt={`${item.company} logo`} width={24} height={24} className="rounded bg-white/10 object-cover" />
            )}
            <h4 className="text-sm font-medium text-indigo-300/80 uppercase tracking-wider">{item.company}</h4>
          </div>
        </div>

        <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3 min-h-[60px]">
          {item.description}
        </p>

        <ul className="space-y-3 mb-6 flex-grow min-h-[120px]">
          {item.achievements.slice(0, 3).map((achievement, i) => (
            <li key={i} className="flex items-start text-sm text-neutral-300">
              <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0 opacity-60"></span>
              <span className="opacity-90 line-clamp-2">{achievement}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <div className="mb-6 inline-block w-full">
            <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 shadow-inner">
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-1">Impact</span>
              <span className="text-sm font-medium text-white">{item.metrics}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {item.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs font-medium bg-zinc-800/80 text-neutral-300 rounded-md border border-white/5 transition-colors group-hover:bg-zinc-800 group-hover:border-indigo-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <button 
            onClick={(e) => onExplore(e, item)}
            className="mt-2 w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-indigo-300 text-sm font-medium transition-colors flex items-center justify-center gap-2 group/btn"
          >
            Explore More
            <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const [openDialog, setOpenDialog] = useState<typeof experiences[0] | null>(null);

  const handleExploreClick = (e: React.MouseEvent, exp: typeof experiences[0]) => {
    e.preventDefault();
    setOpenDialog(exp);
  };

  return (
    <section id="experience" className="relative w-full py-24 px-4 md:px-8">
      {/* Background Enhancements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="absolute inset-0 h-full w-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="experience-grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M0 32V0h32" fill="none" stroke="white" strokeWidth="1"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#experience-grid-pattern)"></rect>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-10 md:mb-16">
          <Title text="Experience 💼" className="flex flex-col items-center justify-center -rotate-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} item={exp} index={index} onExplore={handleExploreClick} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openDialog && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[200] bg-[#0a0a0a] flex flex-col h-[100dvh] w-full overflow-y-auto"
          >
            <div className="sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-white/10 p-4 flex justify-between items-center z-10 shrink-0">
              <h2 className="text-xl font-bold text-white flex items-center gap-3">
                {openDialog.logo && <NextImage src={openDialog.logo} width={32} height={32} className="rounded-md bg-white/10" alt="logo" />}
                {openDialog.company}
              </h2>
              <button 
                onClick={() => setOpenDialog(null)}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6 flex-1">
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">{openDialog.role}</h3>
              <p className="text-neutral-300 leading-relaxed mb-6">{openDialog.description}</p>

              {openDialog.extendedDetails && (
                <div className="mb-8 space-y-4">
                  {openDialog.extendedDetails.map((para, i) => (
                    <p key={i} className="text-neutral-400 leading-relaxed text-sm font-light">
                      {para}
                    </p>
                  ))}
                </div>
              )}
              
              {openDialog.structuredSections ? (
                <div className="mb-8">
                  {openDialog.structuredSections.map((section, idx) => (
                    <div key={idx} className="mb-8 last:mb-0">
                      <h4 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">{section.title}</h4>
                      <ul className="space-y-4">
                        {section.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start text-neutral-300">
                            <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <h4 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">Key Contributions</h4>
                  <ul className="space-y-4 mb-8">
                    {openDialog.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start text-neutral-300">
                        <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <h4 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2 mt-8">Tech Stack Used</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {openDialog.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 text-sm bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
