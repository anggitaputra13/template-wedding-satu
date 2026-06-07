"use client";

import { motion } from "framer-motion";
import { weddingContent } from "../data/content";

export default function LoveStoryAndEvent() {
  const { event } = weddingContent;

  return (
    <section className="relative py-16 px-6 overflow-hidden">

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* THE BEGINNING OF LOVE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif italic text-white text-2xl md:text-3xl mb-6">
            THE BEGINNING OF LOVE
          </h2>
          <div className="h-[2px] w-full bg-white/40 mb-8" />
        </motion.div>

        {/* Love story paragraphs — staggered animations */}
        <div className="space-y-5 mb-12">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-garet text-white/85 text-sm md:text-base leading-relaxed text-justify"
          >
            Our story began in the simplest way—as classmates and friends. From junior high school, we grew up side by side, sharing laughter and small moments that we didn’t yet know would mean so much.Life took us in different directions during senior high school, but somehow, fate always brought us back together. Whether it was meeting on the street or crossing paths at a friend’s house next door, our story never truly paused—it was just waiting for the right time.Friendship slowly turned into love, and that love stayed.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-garet text-white/85 text-sm md:text-base leading-relaxed text-justify"
          >
            For 12 years, we have walked through life together—through distance, challenges, and countless memories filled with both tears and laughter. We learned, we grew, and we held on to each other through it all.What once was just a dream has now become our reality—standing side by side, working in the place we once wished for, and building a life we are truly grateful for.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="font-garet text-white/85 text-sm md:text-base leading-relaxed text-justify">
            And now, a new chapter begins.With hearts full of love and excitement, we are ready to continue this journey as husband and wife, hand in hand, for all the years to come.
            </p>
          </motion.div>
        </div>

        {/* TANGGAL & LOKASI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="font-serif text-white text-2xl md:text-3xl tracking-wider uppercase">
            Tanggal &amp; Lokasi
          </h2>
          <div className="h-[2px] w-full bg-white/40 mt-4" />
        </motion.div>

        {/* Single event card — centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center"
        >
          <p className="font-serif italic text-white/90 text-lg md:text-xl mb-5">
            {event.type}
          </p>
          <p className="font-garet text-white font-bold text-base md:text-lg mb-1">
            {event.date}
          </p>
          <p className="font-garet italic text-white/80 text-sm md:text-base mb-4">
            Pukul {event.time}
          </p>
          <p className="font-garet text-white/70 text-xs md:text-sm leading-relaxed mb-6">
            Bertempat di {event.location}
          </p>
          <a
            href={event.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-xs md:text-sm hover:bg-white/20 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
}
