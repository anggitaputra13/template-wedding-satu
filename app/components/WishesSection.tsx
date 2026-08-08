"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useWishes } from "../hooks/useWishes";

export default function WishesSection() {
  const { wishes, addWish, totalCount } = useWishes();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [attendance, setAttendance] = useState<"hadir" | "tidak_hadir">("hadir");
  const [error, setError] = useState("");
  const [showAll, setShowAll] = useState(false);

  // 3 ucapan terbaru (dari belakang), atau semua jika showAll
  const recentWishes = [...wishes].reverse();
  const displayedWishes = showAll ? recentWishes : recentWishes.slice(0, 3);
  const hasMore = wishes.length > 3;

  const handleSubmit = async () => {
    if (!name.trim() || !message.trim()) {
      setError("Nama dan pesan harus diisi");
      return;
    }
    const success = await addWish(name, message, attendance);
    if (success) {
      setName("");
      setMessage("");
      setAttendance("hadir");
      setError("");
    }
  };

  const formatTimestamp = (ts: string) => {
    try {
      return new Date(ts).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return ts;
    }
  };

  return (
    <>
      {/* Give A Wish section */}
      <section className="pt-10 pb-8 sm:pt-14 sm:pb-10 px-6 bg-gradient-to-b from-[#241815] to-[#1f1210] text-center">
        {/* Love icon + divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-white/30" />
          <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white/70" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-white/30" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white tracking-[0.2em] text-sm sm:text-base uppercase mb-8"
        >
          Kirim Pesan
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md mx-auto space-y-4"
        >
          <input
            type="text"
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 rounded-lg text-sm sm:text-base focus:outline-none focus:border-white/50 transition-colors"
          />
          <textarea
            placeholder="Pesan"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 rounded-lg text-sm sm:text-base focus:outline-none focus:border-white/50 transition-colors resize-none"
          />

          {/* Attendance RSVP */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setAttendance("hadir")}
              className={`flex-1 py-3 rounded-lg text-sm tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                attendance === "hadir"
                  ? "bg-white text-[#1a0e0a] font-semibold"
                  : "bg-white/10 border border-white/20 text-white/70 hover:bg-white/20"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7" />
              </svg>
              Hadir
            </button>
            <button
              type="button"
              onClick={() => setAttendance("tidak_hadir")}
              className={`flex-1 py-3 rounded-lg text-sm tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                attendance === "tidak_hadir"
                  ? "bg-white text-[#1a0e0a] font-semibold"
                  : "bg-white/10 border border-white/20 text-white/70 hover:bg-white/20"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
              Tidak Hadir
            </button>
          </div>

          {error && (
            <p className="text-red-400 text-xs sm:text-sm">{error}</p>
          )}
          <button
            onClick={handleSubmit}
            className="w-full border-2 border-white text-white py-3 rounded-full text-sm sm:text-base tracking-wider hover:bg-white hover:text-[#1a0e0a] transition-all duration-300 hover:scale-[1.02]"
          >
            Kirim
          </button>
        </motion.div>
      </section>

      {/* Friends Wishes section */}
      <section className="pt-8 pb-8 sm:pt-10 sm:pb-10 px-6 bg-[#150d0a] text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white tracking-[0.2em] text-sm sm:text-base uppercase mb-2"
        >
          Ucapan &amp; Doa
        </motion.h3>
        <p className="text-white/60 text-xs sm:text-sm mb-6">
          {totalCount} Ucapan
        </p>

        {/* Wishes list */}
        <div
          className={`max-w-md mx-auto space-y-3 pr-1 transition-all duration-300 ${
            showAll
              ? "max-h-[480px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
              : "overflow-hidden"
          }`}
        >
          {displayedWishes.map((wish) => (
            <div
              key={wish.id}
              className="bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-left backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-1">
                <p className="text-white text-sm font-semibold">{wish.name}</p>
                {wish.attendance && (
                  <span
                    className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full ${
                      wish.attendance === "hadir"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {wish.attendance === "hadir" ? "Hadir" : "Tidak hadir"}
                  </span>
                )}
              </div>
              <p className="text-white/90 text-sm mb-2">{wish.message}</p>
              <p className="text-white/40 text-[10px] sm:text-xs">
                {formatTimestamp(wish.timestamp)}
              </p>
            </div>
          ))}
        </div>

        {/* Show more / collapse button */}
        {hasMore && (
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="mt-5 inline-flex items-center gap-2 text-white/60 hover:text-white text-xs sm:text-sm tracking-wider transition-colors"
          >
            {showAll ? (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M5 15l7-7 7 7" />
                </svg>
                Sembunyikan
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
                Tampilkan Semua ({totalCount} Ucapan)
              </>
            )}
          </button>
        )}
      </section>
    </>
  );
}
