"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { weddingContent } from "../data/content";
import { calculateCountdown } from "../utils/countdown";

import { SLIDESHOW_IMAGES } from "../data/media";

export default function HeroSection({
  groom = "Satria",
  bride = "Heppa",
}: {
  groom?: string;
  bride?: string;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [viewportHeight, setViewportHeight] = useState<string>('100vh');
  const touchStartX = useRef<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDESHOW_IMAGES.length) % SLIDESHOW_IMAGES.length);
  }, []);

  const resetAutoAdvance = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 3000);
  }, []);


  // Auto-advance slideshow every 3 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 3000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Set mounted flag, viewport height, and start countdown timer
  useEffect(() => {
    setMounted(true);
    // Use window.innerHeight for accurate mobile viewport
    const updateHeight = () => setViewportHeight(`${window.innerHeight}px`);
    updateHeight();
    window.addEventListener('resize', updateHeight);
    setCountdown(calculateCountdown());
    const timer = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);
    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();   // swipe left → next
      } else {
        prevSlide();   // swipe right → prev
      }
      resetAutoAdvance();
    }
    touchStartX.current = null;
  }, [nextSlide, prevSlide, resetAutoAdvance]);

  return (
    <section
      className="relative w-full overflow-hidden bg-[#1a0e0a]"
      style={{ height: viewportHeight }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slideshow background images */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentSlide}
          src={SLIDESHOW_IMAGES[currentSlide]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-110"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        />
      </AnimatePresence>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Text content layout — absolute to guarantee it stays within the section */}
      <div className="absolute inset-0 z-10 flex flex-col px-5 py-[8dvh] overflow-hidden">
        {/* Top area: Header + Couple names — centered horizontally */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center text-center"
        >
          <p className="font-garet uppercase tracking-[0.3em] text-white text-[10px] md:text-xs leading-none">
            WE ARE GETTING MARRIED
          </p>
          <h1 className="font-brittany text-white whitespace-nowrap mt-[1dvh] text-center" style={{ fontSize: 'clamp(3rem, 10vw, 6rem)' }}>
            {groom} &amp; {bride}
          </h1>
        </motion.div>

        {/* Middle area: Sanskrit quote + source */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center px-4"
          style={{ marginTop: '5dvh' }}
        >
          <p className="font-garet italic text-white text-base md:text-lg leading-relaxed whitespace-pre-line">
            {weddingContent.quote.sanskrit}
          </p>
          <p className="font-garet text-white text-xs md:text-sm mt-1 opacity-80">
            ({weddingContent.quote.source})
          </p>
        </motion.div>

        {/* Spacer */}
        <div className="flex-1 min-h-0" />

        {/* Bottom area: Countdown (left) | divider | Save The Date (right) — evenly split */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-stretch py-7"
        >
          {/* Countdown 2×2 grid — takes half */}
          <div className="flex-1 grid grid-cols-2 gap-x-5 gap-y-3 font-garet text-white">
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl md:text-4xl font-bold">
                {mounted ? countdown.days : "0"}
              </span>
              <span className="text-sm md:text-base lowercase">hari</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl md:text-4xl font-bold">
                {mounted ? countdown.hours : "0"}
              </span>
              <span className="text-sm md:text-base lowercase">jam</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl md:text-4xl font-bold">
                {mounted ? countdown.minutes : "0"}
              </span>
              <span className="text-sm md:text-base lowercase">menit</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl md:text-4xl font-bold">
                {mounted ? countdown.seconds : "0"}
              </span>
              <span className="text-sm md:text-base lowercase">detik</span>
            </div>
          </div>

          {/* Vertical divider line */}
          <div className="w-[3px] bg-white/70 mx-4 my-[-2rem] self-stretch" />

          {/* Save The Date — takes half, centered */}
          <div className="flex-1 flex items-center justify-center">
            <p className="font-brittany text-white text-2xl md:text-3xl leading-tight">
              Save The Date
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
