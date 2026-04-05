"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const bankAccounts = [
  {
    bank: "BCA",
    number: "1234567890",
    name: "Putu Mas Anggita Putra",
    gradient: "from-[#1a3a6b] to-[#0d2240]",
    logo: "BCA",
  },
  {
    bank: "BRI",
    number: "0987654321",
    name: "Cindy Paramita Dewi",
    gradient: "from-[#003d79] to-[#f47920]",
    logo: "BRI",
  },
];

export default function DigitalEnvelope() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(text);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <section className="py-10 sm:py-12 px-6 bg-[#1a0e0a] text-center">
      <img
        src="/images/ornament.svg"
        alt=""
        className="w-20 sm:w-28 mx-auto mb-5 opacity-70 invert"
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-white tracking-[0.2em] text-sm sm:text-base uppercase mb-3"
      >
        Amplop Digital
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-white/70 text-xs sm:text-sm max-w-sm mx-auto mb-6"
      >
        Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
        Namun jika Anda ingin memberikan tanda kasih, kami menyediakan amplop digital.
      </motion.p>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full text-sm tracking-wider hover:bg-white hover:text-[#1a0e0a] transition-all duration-300 hover:scale-105"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
        {isOpen ? "Tutup" : "Kirim Hadiah"}
      </button>

      {/* Cards section - inline below button */}
      {isOpen && (
        <div className="mt-8 max-w-sm mx-auto space-y-5">
          {bankAccounts.map((acc) => (
            <div
              key={acc.number}
              className={`relative bg-gradient-to-br ${acc.gradient} rounded-2xl p-5 sm:p-6 text-left shadow-xl overflow-hidden`}
            >
              {/* Card chip pattern */}
              <div className="absolute top-4 right-4 opacity-20">
                <svg className="w-10 h-10" viewBox="0 0 40 40" fill="white">
                  <rect x="0" y="0" width="18" height="12" rx="2" />
                  <rect x="0" y="14" width="18" height="12" rx="2" />
                  <rect x="20" y="0" width="18" height="12" rx="2" />
                  <rect x="20" y="14" width="18" height="12" rx="2" />
                </svg>
              </div>

              {/* Decorative circles */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/5" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-white/5" />

              {/* Bank name */}
              <p className="text-white font-bold text-xl sm:text-2xl tracking-wider mb-6">
                {acc.logo}
              </p>

              {/* Card number */}
              <p className="text-white font-mono text-lg sm:text-xl tracking-[0.15em] mb-4">
                {acc.number.replace(/(.{4})/g, "$1 ").trim()}
              </p>

              {/* Account holder */}
              <p className="text-white/70 text-xs uppercase tracking-wider mb-1">
                Account Holder
              </p>
              <p className="text-white text-sm font-medium mb-4">
                {acc.name}
              </p>

              {/* Copy button */}
              <button
                onClick={() => handleCopy(acc.number)}
                className="w-full bg-white/20 hover:bg-white/30 text-white text-xs sm:text-sm py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                {copied === acc.number ? (
                  <span className="text-green-300">Nomor Tersalin ✓</span>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" />
                      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                    </svg>
                    Salin Nomor Rekening
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      )}

      <img
        src="/images/ornament.svg"
        alt=""
        className="w-20 sm:w-28 mx-auto mt-6 opacity-70 rotate-180 invert"
      />
    </section>
  );
}
