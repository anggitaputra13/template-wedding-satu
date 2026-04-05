"use client";

import { motion } from "framer-motion";
import { weddingContent } from "../data/content";

export default function EventDetails() {
  const { event } = weddingContent;

  return (
    <section id="event-details" className="relative pt-6 pb-10 sm:pt-8 sm:pb-14 px-6 text-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/image-7.jpeg)",
          filter: "blur(3px) brightness(0.3)",
          transform: "scale(1.05)",
        }}
      />
      <div className="absolute inset-0 bg-[#1a0e0a]/60" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/90 text-sm sm:text-base md:text-lg mb-1 max-w-lg mx-auto">
            Kami Bermaksud Mengundang
          </p>
          <p className="text-white/90 text-sm sm:text-base md:text-lg mb-8 max-w-lg mx-auto">
            Bapak / Ibu / Saudara / I Pada:
          </p>
        </motion.div>

        <img
          src="/images/ornament.svg"
          alt=""
          className="w-16 sm:w-20 mx-auto mb-6 opacity-50 invert"
        />

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-xl sm:text-2xl md:text-3xl font-semibold tracking-wider mb-8"
        >
          {event.type}
        </motion.h3>

        {/* Date row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-2"
        >
          <svg className="w-5 h-5 text-white/60 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          <p className="text-white text-base sm:text-lg font-medium">
            {event.date}
          </p>
        </motion.div>

        <div className="h-px w-20 mx-auto bg-white/20 my-4" />

        {/* Time row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-3 mb-2"
        >
          <svg className="w-5 h-5 text-white/60 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          <p className="text-white/90 text-base sm:text-lg">
            {event.time}
          </p>
        </motion.div>

        <div className="h-px w-20 mx-auto bg-white/20 my-4" />

        {/* Location */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-white/80 text-sm sm:text-base uppercase tracking-wider mb-6"
        >
          {event.location}
        </motion.p>

        <img
          src="/images/ornament.svg"
          alt=""
          className="w-16 sm:w-20 mx-auto mb-8 opacity-50 rotate-180 invert"
        />

        {/* Embedded map */}
        <div className="max-w-md mx-auto rounded-2xl overflow-hidden border border-white/15 shadow-lg relative">
          <div className="absolute inset-0 pointer-events-none z-10 mix-blend-multiply bg-[#1a0e0a]/30" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.123!2d115.398!3d-8.283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMTYnNTguOCJTIDExNcKwMjMnNTIuOCJF!5e0!3m2!1sid!2sid!4v1"
            width="100%"
            height="220"
            style={{ border: 0, filter: "saturate(0.3) brightness(0.7)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href={event.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-20 block bg-white/10 backdrop-blur-sm py-3 flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
          >
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-white text-sm tracking-wider">Lihat Peta Lokasi</span>
          </a>
        </div>

        {/* Dresscode */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L8 6h3v6H9l3 4 3-4h-2V6h3L12 2z" />
              <path d="M5 18h14v2H5z" />
            </svg>
            <h4 className="text-white tracking-[0.2em] text-sm sm:text-base uppercase font-semibold">
              Dresscode
            </h4>
          </div>

          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-white/40 shadow-md" />
              <span className="text-white/70 text-[10px] sm:text-xs">Putih</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C4A35A] border-2 border-white/40 shadow-md" />
              <span className="text-white/70 text-[10px] sm:text-xs">Gold</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#8B7355] border-2 border-white/40 shadow-md" />
              <span className="text-white/70 text-[10px] sm:text-xs">Coklat</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#2C1810] border-2 border-white/40 shadow-md" />
              <span className="text-white/70 text-[10px] sm:text-xs">Hitam</span>
            </div>
          </div>

          <p className="text-white/50 text-[10px] sm:text-xs mt-3 italic">
            Kami mengharapkan tamu berpakaian sesuai dresscode di atas
          </p>
        </motion.div>
      </div>
    </section>
  );
}
