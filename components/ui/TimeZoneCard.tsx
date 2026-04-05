'use client';

import { motion } from 'framer-motion';
import { Globe3D, GlobeMarker } from './3d-globe';

const sampleMarkers: GlobeMarker[] = [
  {
    lat: 40.7128,
    lng: -74.006,
    src: "https://assets.aceternity.com/avatars/1.webp",
    label: "New York",
  },
  {
    lat: 51.5074,
    lng: -0.1278,
    src: "https://assets.aceternity.com/avatars/2.webp",
    label: "London",
  },
  {
    lat: 35.6762,
    lng: 139.6503,
    src: "https://assets.aceternity.com/avatars/3.webp",
    label: "Tokyo",
  },
  {
    lat: -33.8688,
    lng: 151.2093,
    src: "https://assets.aceternity.com/avatars/4.webp",
    label: "Sydney",
  },
  {
    lat: 48.8566,
    lng: 2.3522,
    src: "https://assets.aceternity.com/avatars/5.webp",
    label: "Paris",
  },
  {
    lat: 28.6139,
    lng: 77.209,
    src: "https://assets.aceternity.com/avatars/6.webp",
    label: "New Delhi",
  },
  {
    lat: 55.7558,
    lng: 37.6173,
    src: "https://assets.aceternity.com/avatars/7.webp",
    label: "Moscow",
  },
  {
    lat: -22.9068,
    lng: -43.1729,
    src: "https://assets.aceternity.com/avatars/8.webp",
    label: "Rio de Janeiro",
  },
  {
    lat: 31.2304,
    lng: 121.4737,
    src: "https://assets.aceternity.com/avatars/9.webp",
    label: "Shanghai",
  },
  {
    lat: 25.2048,
    lng: 55.2708,
    src: "https://assets.aceternity.com/avatars/10.webp",
    label: "Dubai",
  },
  {
    lat: -34.6037,
    lng: -58.3816,
    src: "https://assets.aceternity.com/avatars/11.webp",
    label: "Buenos Aires",
  },
  {
    lat: 1.3521,
    lng: 103.8198,
    src: "https://assets.aceternity.com/avatars/12.webp",
    label: "Singapore",
  },
  {
    lat: 37.5665,
    lng: 126.978,
    src: "https://assets.aceternity.com/avatars/13.webp",
    label: "Seoul",
  },
];

const TimeZone: React.FC = () => {
  return (
    <div className="bg-[#111113] rounded-2xl p-6 sm:p-8 text-white shadow-xl h-full min-h-[350px] relative overflow-hidden flex flex-col justify-start">
      {/* Background Glow */}
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl z-0" />

      {/* Text Content */}
      <div className="relative z-20 space-y-3 max-w-[65%] mb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">Time Zone</h2>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
         I&apos;m currently based in India and available for remote opportunities across different time zones.
        </p>
      </div>

      {/* Globe */}
      <motion.div
        className="absolute -right-[160px] -bottom-[160px] sm:-right-[200px] sm:-bottom-[200px] w-[450px] h-[450px] sm:w-[550px] sm:h-[550px] z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Globe3D
          className="h-full w-full"
          markers={sampleMarkers}
          config={{
            atmosphereColor: "#4da6ff",
            atmosphereIntensity: 20,
            bumpScale: 5,
            autoRotateSpeed: 0.3,
          }}
        />
      </motion.div>
    </div>
  );
};

export default TimeZone;
