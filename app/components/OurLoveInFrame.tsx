"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { GALLERY_IMAGES } from "../data/media";

export default function OurLoveInFrame() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const openPhoto = (index: number) => setSelectedIndex(index);
  const closePhoto = () => setSelectedIndex(null);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null));
  }, []);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null
    );
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
    setTouchStartX(null);
  };

  return (
    <section className="relative py-14 px-6 bg-[#1a0e0a]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <h2 className="font-serif text-white text-2xl md:text-3xl tracking-wider uppercase mb-3">
            Our Love In Frame
          </h2>
          <div className="h-[2px] w-full bg-white/30 mb-6" />
          <p className="font-garet italic text-white/80 text-sm md:text-base leading-relaxed">
            In The Presence of God, before the world,{"\n"}
            and long before time began{"\n"}
            They choose one another, endlessly.
          </p>
        </motion.div>

        {/* Photo grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 gap-2 max-w-xs mx-auto"
        >
          {GALLERY_IMAGES.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="aspect-square overflow-hidden rounded-sm cursor-pointer bg-black"
              onClick={() => openPhoto(i)}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                loading="lazy"
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Fullscreen photo popup */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closePhoto}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close button */}
            <button
              onClick={closePhoto}
              className="absolute top-6 right-6 text-white/70 hover:text-white z-50"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Nav arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-50"
            >
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-50"
            >
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <motion.img
              key={selectedIndex}
              src={GALLERY_IMAGES[selectedIndex]}
              alt=""
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Counter */}
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-garet">
              {selectedIndex + 1} / {GALLERY_IMAGES.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
