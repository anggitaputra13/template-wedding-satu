"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const galleryImages = Array.from({ length: 13 }, (_, i) => `/images/image-${i + 1}.jpeg`);

export default function GallerySection() {
  const [current, setCurrent] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  // Auto-swipe every 3 seconds when not in fullscreen
  useEffect(() => {
    if (fullscreen) return;
    const interval = setInterval(goNext, 3000);
    return () => clearInterval(interval);
  }, [fullscreen, goNext]);

  return (
    <>
      <section className="py-8 sm:py-10 px-6 bg-gradient-to-b from-[#1a0e0a] to-[#1f1210] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-script text-3xl sm:text-4xl md:text-5xl text-white mb-8"
        >
          Gallery
        </motion.h2>

        {/* Slider */}
        <div className="max-w-lg mx-auto relative">
          <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-white/15 shadow-lg">
            <img
              src={galleryImages[current]}
              alt={`Gallery photo ${current + 1}`}
              className="w-full h-full object-cover transition-opacity duration-500 cursor-pointer"
              onClick={() => setFullscreen(true)}
            />
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors"
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-1.5 mt-4">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-white w-6" : "bg-white/30"
                }`}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>

          <p className="text-white/50 text-xs mt-3">
            {current + 1} / {galleryImages.length}
          </p>
        </div>
      </section>

      {/* Fullscreen popup */}
      {fullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setFullscreen(false)}
        >
          <button
            onClick={() => setFullscreen(false)}
            className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl z-20"
            aria-label="Close"
          >
            ✕
          </button>

          <p className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm z-20">
            {current + 1} / {galleryImages.length}
          </p>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-colors"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <img
            src={galleryImages[current]}
            alt={`Gallery photo ${current + 1}`}
            className="max-w-[85vw] max-h-[80vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-colors"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
