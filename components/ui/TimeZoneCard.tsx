'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamic import to avoid SSR issues
const Globe = dynamic(() => import('./Globe'), {
  ssr: false,
  loading: () => (
    <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-gray-800 rounded-full animate-pulse" />
  )
});

const TimeZone: React.FC = () => {
  return (
    <div className="bg-[#111113] rounded-2xl p-6 sm:p-8 text-white shadow-xl max-w-4xl mx-auto relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -bottom-20 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl z-0" />

      <div className="grid grid-cols-1 md:grid-cols-2 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-3 mb-10 md:mb-20 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Time Zone</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
           I&apos;m currently based in India and available for remote opportunities across different time zones.
          </p>
        </div>

        {/* Globe */}
        <motion.div
          className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] mx-auto"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Globe className="w-full h-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default TimeZone;
