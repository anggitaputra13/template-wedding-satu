"use client";

import { motion } from "framer-motion";
import { weddingContent } from "../data/content";
import { CoupleInfo } from "../types";

function CoupleCard({ person, delay = 0 }: { person: CoupleInfo; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center text-center px-4 py-6"
    >
      {/* Square photo with rounded corners */}
      <div className="relative w-56 h-64 sm:w-64 sm:h-72 md:w-72 md:h-80 rounded-2xl overflow-hidden border-4 border-white/30 mb-5 shadow-lg shadow-white/10">
        <img
          src={person.photo}
          alt={person.name}
          className="w-full h-full object-cover"
        />
        {/* IG overlay inside photo */}
        {person.instagram && (
          <a
            href={`https://instagram.com/${person.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm py-2 flex items-center justify-center gap-1.5 text-white/90 hover:text-white text-xs sm:text-sm transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            @{person.instagram}
          </a>
        )}
      </div>

      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className="text-white text-sm sm:text-base md:text-lg tracking-wider font-bold mb-2"
      >
        {person.fullName}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
        className="text-white/90 text-xs sm:text-sm tracking-wider uppercase font-bold mb-2"
      >
        {person.parentLabel}
      </motion.p>

      <p className="text-white/80 text-sm sm:text-base mb-1">
        {person.parents}
      </p>

      <p className="text-white/60 text-xs sm:text-sm">
        {person.address}
      </p>
    </motion.div>
  );
}

export default function CoupleSection() {
  return (
    <section className="pt-2 pb-4 sm:pt-2 sm:pb-6 px-6 bg-[#1f1210]">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
          <CoupleCard person={weddingContent.groom} delay={0} />

          <div className="flex items-center justify-center md:hidden">
            <span className="font-script text-4xl text-white">&amp;</span>
          </div>

          <CoupleCard person={weddingContent.bride} delay={0.2} />
        </div>
      </div>

      {/* Section divider */}
      <div className="mt-8 sm:mt-10 flex flex-col items-center gap-2">
        <div className="h-[3px] w-full max-w-sm bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full" />
        <div className="flex items-center gap-3">
          <div className="h-[2px] w-16 bg-white/30 rounded-full" />
          <svg className="w-5 h-5 text-white/50" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 2l1.5 3.5L13 7l-3.5 1.5L8 12 6.5 8.5 3 7l3.5-1.5z" />
          </svg>
          <div className="h-[2px] w-16 bg-white/30 rounded-full" />
        </div>
      </div>
    </section>
  );
}
