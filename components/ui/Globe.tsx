'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Globe from 'globe.gl';

interface GlobeComponentProps {
  className?: string;
}

interface CityPoint {
  lat: number;
  lng: number;
  name: string;
  color: string;
  size: number;
}

const GlobeComponent: React.FC<GlobeComponentProps> = ({ className }) => {
  const globeEl = useRef<HTMLDivElement>(null);
  const globeInstance = useRef<ReturnType<typeof Globe> | null>(null);

  useEffect(() => {
    if (!globeEl.current) return;

    const globe = Globe()(globeEl.current)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
      .backgroundColor('rgba(0,0,0,0)')
      .width(450)
      .height(450);

    const indianCities: CityPoint[] = [
      { lat: 28.7041, lng: 77.1025, name: 'New Delhi', color: '#ff4444', size: 0.8 },
      { lat: 12.9716, lng: 77.5946, name: 'Bangalore', color: '#ff4444', size: 0.6 },
      { lat: 18.5204, lng: 73.8567, name: 'Pune', color: '#ff4444', size: 0.5 },
      { lat: 17.3850, lng: 78.4867, name: 'Hyderabad', color: '#ff4444', size: 0.6 },
    ];

    const internationalCities: CityPoint[] = [
      { lat: 40.7128, lng: -74.0060, name: 'New York', color: 'white', size: 0.5 },
      { lat: 51.5074, lng: -0.1278, name: 'London', color: 'white', size: 0.5 },
      { lat: 35.6762, lng: 139.6503, name: 'Tokyo', color: 'white', size: 0.5 },
      { lat: -33.8688, lng: 151.2093, name: 'Sydney', color: 'white', size: 0.5 },
      { lat: 25.2048, lng: 55.2708, name: 'Dubai', color: 'white', size: 0.4 },
      { lat: 1.3521, lng: 103.8198, name: 'Singapore', color: 'white', size: 0.4 },
      { lat: 48.8566, lng: 2.3522, name: 'Paris', color: 'white', size: 0.5 },
      { lat: 52.5200, lng: 13.4050, name: 'Berlin', color: 'white', size: 0.5 },
      { lat: 37.7749, lng: -122.4194, name: 'San Francisco', color: 'white', size: 0.5 },
      { lat: 55.7558, lng: 37.6176, name: 'Moscow', color: 'white', size: 0.5 },
      { lat: -23.5505, lng: -46.6333, name: 'São Paulo', color: 'white', size: 0.5 },
      { lat: 34.0522, lng: -118.2437, name: 'Los Angeles', color: 'white', size: 0.5 },
      { lat: 31.2304, lng: 121.4737, name: 'Shanghai', color: 'white', size: 0.5 },
      { lat: -26.2041, lng: 28.0473, name: 'Johannesburg', color: 'white', size: 0.5 },
      { lat: 41.9028, lng: 12.4964, name: 'Rome', color: 'white', size: 0.5 },
      { lat: 19.4326, lng: -99.1332, name: 'Mexico City', color: 'white', size: 0.5 },
      { lat: 39.9042, lng: 116.4074, name: 'Beijing', color: 'white', size: 0.5 },
      { lat: 43.6532, lng: -79.3832, name: 'Toronto', color: 'white', size: 0.5 }
    ];

    const allCities = [...indianCities, ...internationalCities];

    globe
      .pointsData(allCities)
      .pointColor((d: CityPoint) => d.color)
      .pointAltitude(0.01)
      .pointRadius((d: CityPoint) => d.size)
      .pointResolution(12);

    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 1;
    globe.controls().enableZoom = false;

    globeInstance.current = globe;

    return () => {
      if (globeInstance.current && globeInstance.current._destructor) {
        globeInstance.current._destructor();
      }
    };
  }, []);

  return (
    <motion.div
      ref={globeEl}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  );
};

export default GlobeComponent;
