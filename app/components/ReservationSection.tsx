"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type AttendanceStatus = "hadir" | "tidak_hadir" | null;

export default function ReservationSection() {
  const [name, setName] = useState("");
  const [jumlahTamu, setJumlahTamu] = useState("1");
  const [attendance, setAttendance] = useState<AttendanceStatus>(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) {
      setError("Nama harus diisi");
      return;
    }
    if (!attendance) {
      setError("Pilih konfirmasi kehadiran");
      return;
    }
    setError("");
    setSubmitted(true);
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
              Konfirmasi Kehadiran
            </h2>
            <div className="h-[2px] w-full bg-white/30" />
          </div>

          <p className="font-garet text-white/80 text-sm md:text-base text-center leading-relaxed mb-8">
            Mohon konfirmasi kehadiran Anda agar kami dapat mempersiapkan acara dengan lebih baik.
          </p>

          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              {/* Nama */}
              <input
                type="text"
                placeholder="Nama Lengkap"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 rounded-lg text-sm sm:text-base focus:outline-none focus:border-white/50 transition-colors font-garet"
              />

              {/* Jumlah Tamu */}
              <div className="flex items-center gap-3">
                <label className="font-garet text-white/70 text-sm whitespace-nowrap">
                  Jumlah Tamu:
                </label>
                <select
                  value={jumlahTamu}
                  onChange={(e) => setJumlahTamu(e.target.value)}
                  className="flex-1 bg-white/10 border border-white/20 text-white px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-white/50 transition-colors font-garet appearance-none"
                >
                  <option value="1" className="bg-[#1a0e0a]">1 Orang</option>
                  <option value="2" className="bg-[#1a0e0a]">2 Orang</option>
                  <option value="3" className="bg-[#1a0e0a]">3 Orang</option>
                  <option value="4" className="bg-[#1a0e0a]">4 Orang</option>
                  <option value="5" className="bg-[#1a0e0a]">5 Orang</option>
                </select>
              </div>

              {/* Attendance buttons */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setAttendance("hadir")}
                  className={`flex-1 py-3 rounded-lg text-sm tracking-wider transition-all duration-300 flex items-center justify-center gap-2 font-garet ${
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
                  className={`flex-1 py-3 rounded-lg text-sm tracking-wider transition-all duration-300 flex items-center justify-center gap-2 font-garet ${
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
                <p className="text-red-400 text-xs sm:text-sm text-center">{error}</p>
              )}

              {/* Submit */}
              <button
                onClick={handleSubmit}
                className="w-full border-2 border-white text-white py-3 rounded-full text-sm sm:text-base tracking-wider hover:bg-white hover:text-[#1a0e0a] transition-all duration-300 hover:scale-[1.02] font-garet"
              >
                Konfirmasi
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                {attendance === "hadir" ? (
                  <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )}
              </div>
              <p className="font-garet text-white text-base md:text-lg mb-2">
                Terima Kasih, {name}!
              </p>
              <p className="font-garet text-white/70 text-sm">
                {attendance === "hadir"
                  ? `Konfirmasi kehadiran Anda (${jumlahTamu} orang) telah kami terima. Sampai jumpa di hari bahagia kami!`
                  : "Kami mengerti. Terima kasih atas doa dan restu Anda."}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
