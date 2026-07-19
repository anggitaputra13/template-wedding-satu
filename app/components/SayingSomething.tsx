"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useWishes } from "../hooks/useWishes";
import { useLanguage } from "../contexts/LanguageContext";

export default function SayingSomething() {
  const { t } = useLanguage();
  const { wishes, addWish, totalCount } = useWishes();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!name.trim() || !message.trim()) {
      setError(t("Nama dan pesan harus diisi", "Name and message are required"));
      return;
    }
    const success = await addWish(name, message, "hadir");
    if (success) {
      setName("");
      setMessage("");
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
    <section className="relative py-14 px-6">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Header */}
          <div className="mb-6">
            <h2 className="font-serif text-white text-xl md:text-2xl tracking-wider uppercase mb-3 text-center">
              {t("Katakan Sesuatu", "Say Something")}
            </h2>
            <div className="h-[2px] w-full bg-white/30" />
          </div>

          <p className="font-garet text-white/80 text-sm md:text-base text-center leading-relaxed mb-8">
            {t("Berikan ucapan, doa, dan harapan terbaik Anda untuk kedua mempelai.", "Share your wishes, prayers, and best hopes for the bride and groom.")}
          </p>

          {/* Form */}
          <div className="space-y-4 mb-8">
            <input
              type="text"
              placeholder={t("Nama", "Name")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 rounded-lg text-sm sm:text-base focus:outline-none focus:border-white/50 transition-colors font-garet"
            />
            <textarea
              placeholder={t("Tulis ucapan & doa...", "Write your wishes & prayers...")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 rounded-lg text-sm sm:text-base focus:outline-none focus:border-white/50 transition-colors resize-none font-garet"
            />

            {error && (
              <p className="text-red-400 text-xs sm:text-sm text-center">{error}</p>
            )}

            <button
              onClick={handleSubmit}
              className="w-full border-2 border-white text-white py-3 rounded-full text-sm sm:text-base tracking-wider hover:bg-white hover:text-[#1a0e0a] transition-all duration-300 hover:scale-[1.02] font-garet"
            >
              {t("Kirim Ucapan", "Send Wishes")}
            </button>
          </div>

          {/* Messages list */}
          {totalCount > 0 && (
            <div>
              <p className="font-garet text-white/60 text-xs sm:text-sm mb-4 text-center">
                {totalCount} {t("Ucapan & Doa", "Wishes & Prayers")}
              </p>
              <div className="max-h-72 overflow-y-auto space-y-3 pr-1 scrollbar-thin">
                {wishes.map((wish) => (
                  <motion.div
                    key={wish.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-left backdrop-blur-sm"
                  >
                    <p className="text-white text-sm font-semibold mb-1">
                      {wish.name}
                    </p>
                    <p className="text-white/90 text-sm mb-2">{wish.message}</p>
                    <p className="text-white/40 text-[10px] sm:text-xs">
                      {formatTimestamp(wish.timestamp)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
