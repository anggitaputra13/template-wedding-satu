"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface Wish {
  id: string;
  name: string;
  message: string;
  timestamp: string;
  attendance?: "hadir" | "tidak_hadir";
}

export default function DressCodeAndRsvp() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<"hadir" | "tidak_hadir">("hadir");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [wishes, setWishes] = useState<Wish[]>([]);

  // Fetch wishes from API + merge with localStorage
  const fetchWishes = useCallback(async () => {
    try {
      const res = await fetch("/api/wishes");
      if (res.ok) {
        const apiWishes: Wish[] = await res.json();
        // Merge with localStorage
        const stored = localStorage.getItem("wedding_wishes");
        const localWishes: Wish[] = stored ? JSON.parse(stored) : [];
        // Combine: API wishes + local-only wishes (by id)
        const apiIds = new Set(apiWishes.map((w) => w.id));
        const merged = [...apiWishes, ...localWishes.filter((w) => !apiIds.has(w.id))];
        merged.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
        setWishes(merged);
        // Update localStorage with merged data
        localStorage.setItem("wedding_wishes", JSON.stringify(merged));
      }
    } catch {
      // Fallback to localStorage only
      const stored = localStorage.getItem("wedding_wishes");
      if (stored) setWishes(JSON.parse(stored));
    }
  }, []);

  // Fetch on mount + poll every 5s
  useEffect(() => {
    fetchWishes();
    const interval = setInterval(fetchWishes, 5000);
    return () => clearInterval(interval);
  }, [fetchWishes]);

  const handleSubmit = async () => {
    if (!name.trim() || !message.trim()) {
      setError("Nama dan ucapan harus diisi");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/wishes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), message: message.trim(), attendance }),
      });
      if (res.ok) {
        const newWish: Wish = await res.json();
        // Add to state and localStorage
        setWishes((prev) => {
          const updated = [newWish, ...prev];
          localStorage.setItem("wedding_wishes", JSON.stringify(updated));
          return updated;
        });
        setName("");
        setMessage("");
        setAttendance("hadir");
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError("Gagal mengirim, coba lagi");
      }
    } catch {
      setError("Gagal mengirim, coba lagi");
    } finally {
      setLoading(false);
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

          <div className="flex items-center justify-center gap-4">
            <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="w-20 h-20 md:w-24 md:h-24 rounded-md bg-[#C4920A] shadow-lg" />
            <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }} className="w-20 h-20 md:w-24 md:h-24 rounded-md bg-[#2B6B8A] shadow-lg" />
            <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }} className="w-20 h-20 md:w-24 md:h-24 rounded-md bg-[#5B7A5E] shadow-lg" />
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div>
              <label className="font-garet text-white text-sm font-semibold block mb-2">Nama</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 rounded-lg text-sm font-garet focus:outline-none focus:border-white/50 transition-colors"
              />
            </div>

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

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full border border-white/40 text-white py-3 rounded-full text-sm font-garet tracking-wider hover:bg-white hover:text-[#1a0e0a] transition-all duration-300 disabled:opacity-50"
            >
              {loading ? "Mengirim..." : "Kirim Doa"}
            </button>
          </motion.div>
        </motion.div>

        {/* Wishes list */}
        {wishes.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10"
          >
            <p className="font-garet text-white/60 text-xs mb-4 text-center">
              {wishes.length} Ucapan
            </p>
            <div className="max-h-72 overflow-y-auto space-y-3 pr-1 scrollbar-thin">
              {wishes.map((wish) => (
                <div
                  key={wish.id}
                  className="bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-left"
                >
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-garet text-white text-sm font-semibold">{wish.name}</p>
                    {wish.attendance && (
                      <span
                        className={`font-garet text-[10px] px-2 py-0.5 rounded-full ${
                          wish.attendance === "hadir"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {wish.attendance === "hadir" ? "Hadir" : "Tidak hadir"}
                      </span>
                    )}
                  </div>
                  <p className="font-garet text-white/80 text-sm mb-1">{wish.message}</p>
                  <p className="font-garet text-white/40 text-[10px]">{formatTimestamp(wish.timestamp)}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
