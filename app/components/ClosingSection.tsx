"use client";

import { motion } from "framer-motion";

export default function ClosingSection() {
  return (
    <section className="py-8 sm:py-10 px-6 bg-[#1a0e0a] text-center">
      <img
        src="/images/ornament.svg"
        alt=""
        className="w-24 sm:w-32 mx-auto mb-5 opacity-70 invert"
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6"
      >
        Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila
        Bapak/Ibu/Saudara/Saudari berkenan hadir untuk memberikan do&apos;a
        restu kepada ikatan pernikahan kami.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-script text-2xl sm:text-3xl md:text-4xl text-white"
      >
        Om Shanti Shanti Shanti Om
      </motion.p>

      <img
        src="/images/ornament.svg"
        alt=""
        className="w-24 sm:w-32 mx-auto mt-6 opacity-70 rotate-180 invert"
      />
    </section>
  );
}
