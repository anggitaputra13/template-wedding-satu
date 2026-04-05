"use client";

import { motion } from "framer-motion";
import { weddingContent } from "../data/content";

export default function QuoteSection() {
  const { quote } = weddingContent;

  return (
    <section className="relative py-16 sm:py-20 px-6 text-center overflow-hidden">
      {/* Blurred background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/walpaper-3.jpeg)",
          filter: "blur(4px) brightness(0.4)",
          transform: "scale(1.1)",
        }}
      />
      <div className="absolute inset-0 bg-[#1a0e0a]/50" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <img
          src="/images/ornament.svg"
          alt=""
          className="w-20 sm:w-28 mx-auto mb-6 opacity-70 invert"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white italic text-sm sm:text-base md:text-lg leading-relaxed mb-6"
        >
          &ldquo;{quote.sanskrit}&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/90 text-sm sm:text-base leading-relaxed mb-6"
        >
          {quote.translation}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-white/70 text-xs sm:text-sm tracking-wider"
        >
          - {quote.source} -
        </motion.p>

        <img
          src="/images/ornament.svg"
          alt=""
          className="w-20 sm:w-28 mx-auto mt-6 opacity-70 rotate-180 invert"
        />
      </div>
    </section>
  );
}
