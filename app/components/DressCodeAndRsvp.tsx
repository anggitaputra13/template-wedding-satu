"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useWishes } from "../hooks/useWishes";

export default function DressCodeAndRsvp() {
  const { addWish } = useWishes();
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<"hadir" | "tidak_hadir">("hadir");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!name.trim() || !message.trim()) {
      setError("Nama dan ucapan harus diisi");
      return;
    }
    const success = await addWish(name, message, attendance);
    if (success) {
      setName("");
      setMessage("");
      setAttendance("hadir");
      setError("");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="relative py-14 px-6 overflow-hidden">
      {/* Blurred background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/foto3.jpeg)",
          filter: "blur(4px) brightness(0.2)",
          transform: "scale(1.1)",
        }}
      />
      <div className="absolute inset-0 bg-[#1a0e0a]/60" />

      <div className="relative z-10 max-w-lg mx-auto">

        {/* DRESS CODE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="mb-6">
            <h2 className="font-serif italic text-white text-xl md:text-2xl mb-3">
              DRESS CODE
            </h2>
            <div className="h-[2px] w-full bg-white/30" />
          </div>

          <p className="font-garet text-white/80 text-sm md:text-base text-center leading-relaxed mb-8">
            Kami mengundang Bapak/Ibu/Saudara/i untuk mengenakan pakaian dengan warna berikut agar selaras dengan tema acara kami.
          </p>

          {/* Color swatches */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-md bg-[#C4920A] shadow-lg" />
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-md bg-[#2B6B8A] shadow-lg" />
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-md bg-[#5B7A5E] shadow-lg" />
          </div>
        </motion.div>

        {/* KIRIMKAN DOA & HARAPAN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6">
            <h2 className="font-serif text-white text-lg md:text-2xl tracking-wider uppercase mb-3">
              Kirimkan Doa &amp; Harapan
            </h2>
            <div className="h-[2px] w-full bg-white/30" />
          </div>

          <p className="font-garet text-white/80 text-sm md:text-base text-center leading-relaxed mb-8">
            Untuk membantu kami mempersiapkan segalanya dengan lebih baik, silakan konfirmasi kehadiran Anda melalui formulir RSVP berikut:
          </p>

          {/* Form */}
          <div className="space-y-5">
            {/* Nama */}
            <div>
              <label className="font-garet text-white text-sm font-semibold block mb-2">Nama</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 rounded-lg text-sm font-garet focus:outline-none focus:border-white/50 transition-colors"
              />
            </div>

            {/* Kehadiran */}
            <div>
              <label className="font-garet text-white text-sm font-semibold block mb-2">Kehadiran</label>
              <div className="relative">
                <select
                  value={attendance}
                  onChange={(e) => setAttendance(e.target.value as "hadir" | "tidak_hadir")}
                  className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 rounded-lg text-sm font-garet focus:outline-none focus:border-white/50 transition-colors appearance-none"
                >
                  <option value="hadir" className="bg-[#1a0e0a]">Hadir</option>
                  <option value="tidak_hadir" className="bg-[#1a0e0a]">Tidak Hadir</option>
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>

            {/* Ucapan & Doa */}
            <div>
              <label className="font-garet text-white text-sm font-semibold block mb-2">Ucapan &amp; Doa</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 rounded-lg text-sm font-garet focus:outline-none focus:border-white/50 transition-colors resize-none"
              />
            </div>

            {error && <p className="font-garet text-red-400 text-xs">{error}</p>}
            {submitted && <p className="font-garet text-green-400 text-xs">Terima kasih atas doa dan harapannya!</p>}

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              className="w-full border border-white/40 text-white py-3 rounded-full text-sm font-garet tracking-wider hover:bg-white hover:text-[#1a0e0a] transition-all duration-300"
            >
              Kirim Doa
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
