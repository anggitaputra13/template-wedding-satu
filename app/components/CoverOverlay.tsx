"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const slideshowImages = [
  "/images/walpaper1.jpeg",
  "/images/walpaper2.jpeg",
  "/images/walpaper-3.jpeg",
];

interface CoverOverlayProps {
  onOpen: () => void;
  groom?: string;
  bride?: string;
  guestName?: string;
}

export default function CoverOverlay({
  onOpen,
  groom = "Anggita",
  bride = "Cindy",
  guestName = "Tamu Undangan",
}: CoverOverlayProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key="cover"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-between text-center"
      >
        {/* Slideshow background */}
        {slideshowImages.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${src})`,
              opacity: i === currentSlide ? 1 : 0,
            }}
          />
        ))}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Top section: UNDANGAN, couple names, date */}
        <div className="relative z-10 flex flex-col items-center pt-10 sm:pt-14 md:pt-18 px-6">
          <img
            src="/images/ornament.svg"
            alt=""
            className="w-24 sm:w-32 md:w-40 mb-3 opacity-70 invert"
          />

          <p className="text-white tracking-[0.3em] text-base sm:text-lg md:text-xl uppercase mb-3 font-bold">
            Undangan
          </p>

          <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-white mb-3 drop-shadow-lg">
            {groom} &amp; {bride}
          </h1>

          <p className="text-white/90 text-base sm:text-lg md:text-xl font-medium">
            Minggu, 17 Agustus 2026
          </p>
        </div>

        {/* Bottom section: guest info, button, disclaimer */}
        <div className="relative z-10 flex flex-col items-center pb-10 sm:pb-14 md:pb-16 px-6 w-full">
          <div className="mb-5 space-y-1">
            <p className="text-white text-base sm:text-lg">
              Kpd Bpk/Ibu/Saudara/i
            </p>
            <p className="text-white text-lg sm:text-xl md:text-2xl font-bold">
              {guestName}
            </p>
          </div>

          <button
            onClick={onOpen}
            className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/60 text-white px-8 py-3 rounded-full text-sm sm:text-base tracking-wider hover:bg-white hover:text-black transition-colors duration-300 mb-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Buka Undangan
          </button>

          <p className="text-white/70 text-[8px] sm:text-[9px] font-medium whitespace-nowrap">
            *Mohon maaf apabila ada kesalahan penulisan nama/gelar
          </p>

          <img
            src="/images/ornament.svg"
            alt=""
            className="w-24 sm:w-32 md:w-40 mt-4 opacity-70 rotate-180 invert"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
