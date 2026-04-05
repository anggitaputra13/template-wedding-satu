"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const stories = [
  {
    title: "Awal Bertemu",
    description:
      "Kami pertama kali bertemu di sebuah acara adat. Awalnya hanya sebatas teman, tapi ada sesuatu yang membuat kami terus terhubung.",
    image: "/images/image-1.jpeg",
    rotate: "-3deg",
  },
  {
    title: "Menjalin Hubungan",
    description:
      "Kami menjalani masa-masa yang mengesankan, saling bercerita dan mengisi satu sama lain dalam setiap langkah kehidupan.",
    image: "/images/image-3.jpeg",
    rotate: "2deg",
  },
  {
    title: "Berkomitmen",
    description:
      "Hubungan kami makin dewasa. Kami mulai saling terbuka membicarakan masa depan, membangun mimpi, dan saling mendukung.",
    image: "/images/image-5.jpeg",
    rotate: "-2deg",
  },
  {
    title: "Menikah",
    description:
      "Kini kami siap memulai babak baru sebagai pasangan suami istri. Semoga cinta ini selalu tumbuh dan membawa berkah.",
    image: "/images/image-7.jpeg",
    rotate: "3deg",
  },
];

// Triple the array for seamless looping
const loopedStories = [...stories, ...stories, ...stories];

export default function LoveStory() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(270);

  // Measure card width on mount
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const firstCard = el.querySelector("[data-card]") as HTMLElement;
    if (firstCard) {
      setCardWidth(firstCard.offsetWidth + 20); // width + gap
    }
  }, []);

  // Start scrolled to the middle set
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const middleOffset = stories.length * cardWidth;
    el.scrollLeft = middleOffset;
  }, [cardWidth]);

  // Infinite loop: when scroll reaches edges, jump to middle
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const totalWidth = stories.length * cardWidth;
    if (el.scrollLeft <= cardWidth * 0.5) {
      el.scrollLeft += totalWidth;
    } else if (el.scrollLeft >= totalWidth * 2 + cardWidth * 0.5) {
      el.scrollLeft -= totalWidth;
    }
  }, [cardWidth]);

  const scrollLeftFn = () => {
    scrollRef.current?.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };
  const scrollRightFn = () => {
    scrollRef.current?.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-b from-[#1f1210] to-[#1a0e0a] text-center overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-script text-3xl sm:text-4xl md:text-5xl text-white mb-3 px-6"
      >
        Love Story
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-white/60 text-xs sm:text-sm mb-6 px-6"
      >
        Perjalanan cinta kami
      </motion.p>

      {/* Clothesline */}
      <div className="relative px-6 mb-2">
        <div className="h-px bg-white/30 mx-auto max-w-lg" />
      </div>

      {/* Horizontal scroll */}
      <div className="relative">
        <button
          onClick={scrollLeftFn}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors"
          aria-label="Scroll left"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={scrollRightFn}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors"
          aria-label="Scroll right"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory px-8 sm:px-12 pb-4 pt-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {loopedStories.map((story, i) => (
            <div
              key={`${story.title}-${i}`}
              data-card
              className="snap-center flex-shrink-0 relative"
              style={{ transform: `rotate(${story.rotate})` }}
            >
              {/* Clip */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
                <div className="w-3 h-6 bg-gradient-to-b from-amber-600 to-amber-800 rounded-t-sm">
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-amber-700 rounded-b-sm" />
                </div>
              </div>

              {/* Polaroid */}
              <div className="bg-white rounded-sm shadow-xl shadow-black/30 w-[220px] sm:w-[250px] hover:scale-105 hover:rotate-0 transition-all duration-500">
                <div className="p-2 pb-0">
                  <div className="aspect-[3/4] overflow-hidden rounded-sm">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="py-4 px-3 text-center">
                  <h3 className="font-script text-xl sm:text-2xl text-[#1a0e0a] mb-1">
                    {story.title}
                  </h3>
                  <p className="text-[#1a0e0a]/60 text-[10px] sm:text-xs leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
