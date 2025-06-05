'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Code, FolderOpen, Clock, Mail, Github, ChevronUp } from 'lucide-react';

type Section = {
  id: string;
  label: string;
  icon: JSX.Element;
};

const sections: Section[] = [
  { id: 'profile', label: 'Profile', icon: <User className="w-5 h-5" /> },
  { id: 'skills', label: 'Skills', icon: <Code className="w-5 h-5" /> },
  { id: 'projects', label: 'Projects', icon: <FolderOpen className="w-5 h-5" /> },
  { id: 'timeline', label: 'Timeline', icon: <Clock className="w-5 h-5" /> },
  { id: 'contact', label: 'Contact', icon: <Mail className="w-5 h-5" /> },
  { id: 'github', label: 'Github', icon: <Github className="w-5 h-5" /> }
];

export default function FloatingNavigate() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // close menu after navigating
    }
  };

  // Animation variants for the container
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 10
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 5
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const buttonVariants = {
    closed: {
      rotate: 0
    },
    open: {
      rotate: 180
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Navigation Items - Row on desktop, Column on mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mb-4 flex flex-col md:flex-row md:items-center gap-3 md:gap-3"
          >
            {sections.map((section) => (
              <motion.button
                key={section.id}
                variants={itemVariants}
                onClick={() => scrollToSection(section.id)}
                className="flex items-center gap-3 px-4 py-3 bg-gray-900 text-white text-sm rounded-lg border border-gray-700 hover:border-green-500 min-w-[140px] md:min-w-0 transition-colors duration-200"
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="text-green-400"
                  whileTap={{
                    rotate: 360
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {section.icon}
                </motion.span>
                <span className="font-medium">{section.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-3 rounded-full text-white transition-colors duration-200 ${isOpen
            ? 'bg-indigo-500 hover:bg-indigo-600'
            : 'bg-green-500 hover:bg-green-600'
          }`}
        variants={buttonVariants}
        animate={isOpen ? "open" : "closed"}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        aria-label="Toggle Navigation"
      >
        <ChevronUp className="size-8" />
      </motion.button>
    </div>
  );
}