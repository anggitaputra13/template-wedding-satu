"use client";

import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="py-10 sm:py-14 px-6 bg-[#1a0e0a] text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-script text-3xl sm:text-4xl md:text-5xl text-white mb-3"
      >
        Our Story
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-white/60 text-xs sm:text-sm mb-8"
      >
        Cerita perjalanan kami
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-lg mx-auto rounded-2xl overflow-hidden border border-white/15 shadow-lg"
      >
        <div className="aspect-video">
          <iframe
            src="https://www.youtube.com/embed/KpGDQPWfgvo"
            title="Our Story"
            width="100%"
            height="100%"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
