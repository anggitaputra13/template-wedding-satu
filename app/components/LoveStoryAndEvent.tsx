"use client";

import { motion } from "framer-motion";
import { weddingContent } from "../data/content";
import { useLanguage } from "../contexts/LanguageContext";

export default function LoveStoryAndEvent() {
  const { t } = useLanguage();
  const { event, event2 } = weddingContent;

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
            {t("AWAL MULA CINTA", "THE BEGINNING OF LOVE")}
          </h2>
          <div className="h-[2px] w-full bg-white/40 mb-8" />
        </motion.div>

        {/* Love story paragraphs */}
        <div className="space-y-5 mb-12">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-garet text-white/85 text-sm md:text-base leading-relaxed text-justify"
          >
            {t(
              "Cerita kami dimulai dengan cara yang paling sederhana\u2014sebagai teman sekelas. Dari SMP, kami tumbuh bersama, berbagi tawa dan momen-momen kecil yang belum kami sadari akan sangat berarti. Hidup membawa kami ke arah yang berbeda saat SMA, tapi entah bagaimana, takdir selalu mempertemukan kami kembali. Baik itu bertemu di jalan atau berpapasan di rumah teman sebelah, cerita kami tidak pernah benar-benar berhenti\u2014hanya menunggu waktu yang tepat. Persahabatan perlahan berubah menjadi cinta, dan cinta itu bertahan.",
              "Our story began in the simplest way\u2014as classmates and friends. From junior high school, we grew up side by side, sharing laughter and small moments that we didn't yet know would mean so much. Life took us in different directions during senior high school, but somehow, fate always brought us back together. Whether it was meeting on the street or crossing paths at a friend's house next door, our story never truly paused\u2014it was just waiting for the right time. Friendship slowly turned into love, and that love stayed."
            )}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-garet text-white/85 text-sm md:text-base leading-relaxed text-justify"
          >
            {t(
              "Selama 12 tahun, kami telah menjalani hidup bersama\u2014melewati jarak, tantangan, dan kenangan tak terhitung yang dipenuhi air mata dan tawa. Kami belajar, kami tumbuh, dan kami saling bertahan melewati semuanya. Apa yang dulu hanya mimpi kini telah menjadi kenyataan\u2014berdiri berdampingan, bekerja di tempat yang pernah kami impikan, dan membangun kehidupan yang benar-benar kami syukuri.",
              "For 12 years, we have walked through life together\u2014through distance, challenges, and countless memories filled with both tears and laughter. We learned, we grew, and we held on to each other through it all. What once was just a dream has now become our reality\u2014standing side by side, working in the place we once wished for, and building a life we are truly grateful for."
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="font-garet text-white/85 text-sm md:text-base leading-relaxed text-justify">
              {t(
                "Dan sekarang, babak baru dimulai. Dengan hati penuh cinta dan kebahagiaan, kami siap melanjutkan perjalanan ini sebagai suami dan istri, bergandengan tangan, untuk semua tahun yang akan datang.",
                "And now, a new chapter begins. With hearts full of love and excitement, we are ready to continue this journey as husband and wife, hand in hand, for all the years to come."
              )}
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
            {t("Tanggal & Lokasi", "Date & Location")}
          </h2>
          <div className="h-[2px] w-full bg-white/40 mt-4" />
        </motion.div>

        {/* Event cards — 2 acara */}
        <div className="flex flex-col gap-6">
          {/* Acara 1: Upacara Pernikahan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center bg-white/5 border border-white/10 rounded-2xl px-6 py-7"
          >
            <p className="font-serif italic text-white/90 text-lg md:text-xl mb-5">
              {t(event2.type, "Wedding Ceremony")}
            </p>
            <p className="font-garet text-white font-bold text-base md:text-lg mb-1">
              {t(event2.date, "Monday, August 17, 2026")}
            </p>
            <p className="font-garet italic text-white/80 text-sm md:text-base mb-4">
              {t("Pukul", "At")} {event2.time}
            </p>
            <p className="font-garet text-white/70 text-xs md:text-sm leading-relaxed mb-6">
              {t("Bertempat di", "Venue:")} {event2.location}
            </p>
            <a
              href={event2.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-xs md:text-sm hover:bg-white/20 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {t("Google Maps", "Google Maps")}
            </a>
          </motion.div>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-white/15" />
            <span className="text-white/30 text-sm">&amp;</span>
            <div className="flex-1 h-px bg-white/15" />
          </div>

          {/* Acara 2: Resepsi Pernikahan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center bg-white/5 border border-white/10 rounded-2xl px-6 py-7"
          >
            <p className="font-serif italic text-white/90 text-lg md:text-xl mb-5">
              {t(event.type, "Wedding Reception")}
            </p>
            <p className="font-garet text-white font-bold text-base md:text-lg mb-1">
              {t(event.date, "Friday, August 28, 2026")}
            </p>
            <p className="font-garet italic text-white/80 text-sm md:text-base mb-4">
              {t("Pukul", "At")} {event.time}
            </p>
            <p className="font-garet text-white/70 text-xs md:text-sm leading-relaxed mb-6">
              {t("Bertempat di", "Venue:")} {event.location}
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
              {t("Google Maps", "Google Maps")}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
