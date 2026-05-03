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
            Kisah cinta Satriadan Heppa bermula di kampus, dari sebuah pertemuan sederhana yang diam-diam menyimpan rasa. Di antara hiruk pikuk aktivitas perkuliahan, Satriakerap melihat Heppa dari kejauhan. Ada ketertarikan yang tumbuh, namun saat itu ia hanya mampu memendamnya karena belum memiliki keberanian untuk menyapa. Hari demi hari berlalu, hingga akhirnya Satriamemberanikan diri untuk memperkenalkan diri—sebuah langkah kecil yang ternyata menjadi awal dari kisah besar mereka.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-garet text-white/85 text-sm md:text-base leading-relaxed text-justify"
          >
            Sejak saat itu, kedekatan mulai terjalin. Dari percakapan sederhana hingga kebersamaan yang semakin hangat, hubungan mereka tumbuh dan semakin dewasa. Mereka belajar untuk saling memahami, mendukung, dan menjadi tempat pulang satu sama lain di tengah berbagai kesibukan dan tantangan hidup.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="font-garet text-white/90 text-sm md:text-base font-semibold mb-1">
              Janji Suci
            </p>
            <p className="font-garet text-white/85 text-sm md:text-base leading-relaxed text-justify">
              Perjalanan mereka pun membawa pada sebuah momen penuh makna, ketika Satriadengan penuh keyakinan menyatakan keseriusannya kepada Heppa. Dengan hati yang mantap, Heppa menerima, mengantarkan mereka menuju hari bahagia yang dipenuhi cinta dan haru. Kini, di hadapan keluarga dan orang-orang terkasih, Satriadan Heppa mengikat janji suci, siap melangkah bersama sebagai pasangan hidup, saling menggenggam dalam setiap perjalanan kehidupan selamanya.
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

        {/* Two column event cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 gap-4 md:gap-8"
        >
          {/* Left card — Resepsi */}
          <div className="text-center">
            <p className="font-serif italic text-white/90 text-base md:text-lg mb-4">
              Wedding Reception
            </p>
            <p className="font-garet text-white font-bold text-sm md:text-lg mb-1 whitespace-nowrap">
              {event.date}
            </p>
            <p className="font-garet italic text-white/80 text-xs md:text-sm mb-3">
              Pukul {event.time}
            </p>
            <p className="font-garet text-white/70 text-[10px] md:text-xs leading-relaxed mb-4">
              Bertempat di {event.location.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())}
            </p>
            <a
              href={event.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-[10px] md:text-xs hover:bg-white/20 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Google Maps
            </a>
          </div>

          {/* Right card — same event */}
          <div className="text-center">
            <p className="font-serif italic text-white/90 text-base md:text-lg mb-4">
              Wedding Reception
            </p>
            <p className="font-garet text-white font-bold text-sm md:text-lg mb-1 whitespace-nowrap">
              {event.date}
            </p>
            <p className="font-garet italic text-white/80 text-xs md:text-sm mb-3">
              Pukul {event.time}
            </p>
            <p className="font-garet text-white/70 text-[10px] md:text-xs leading-relaxed mb-4">
              Bertempat di {event.location.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())}
            </p>
            <a
              href={event.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-[10px] md:text-xs hover:bg-white/20 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
