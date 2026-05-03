"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bankAccounts = [
  {
    bank: "BCA",
    number: "1234567890",
    name: "Ketut Satria Putra",
    gradient: "from-[#1a3a6b] to-[#0d2240]",
  },
  {
    bank: "BRI",
    number: "0987654321",
    name: "Kadek Dwi Heppayani",
    gradient: "from-[#003d79] to-[#f47920]",
  },
];

export default function WeddingGift() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(text);
      setTimeout(() => setCopied(null), 2000);
    });
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
          <div className="mb-6">
            <h2 className="font-serif text-white text-xl md:text-2xl tracking-wider uppercase mb-3">
              Wedding Gift
            </h2>
            <div className="h-[2px] w-full bg-white/30" />
          </div>

          <p className="font-garet text-white/80 text-sm md:text-base text-center leading-relaxed mb-8">
            Tanpa mengurangi rasa hormat kami, apabila Bapak/Ibu/Saudara/i ingin memberikan tanda kasih, kami dengan senang hati menerimanya melalui transfer ke rekening berikut:
          </p>

          <div className="text-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="font-garet inline-flex items-center gap-2 border border-white/40 text-white px-8 py-3 rounded-full text-sm tracking-wider hover:bg-white hover:text-[#1a0e0a] transition-all duration-300"
            >
              {isOpen ? "Tutup" : "Kirim Hadiah"}
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="mt-8 space-y-5">
                  {bankAccounts.map((acc) => (
                    <div
                      key={acc.number}
                      className={`relative bg-gradient-to-br ${acc.gradient} rounded-2xl p-5 text-left shadow-xl overflow-hidden`}
                    >
                      <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/5" />
                      <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-white/5" />

                      <p className="text-white font-bold text-xl tracking-wider mb-4">
                        {acc.bank}
                      </p>
                      <p className="text-white font-mono text-lg tracking-[0.15em] mb-3">
                        {acc.number.replace(/(.{4})/g, "$1 ").trim()}
                      </p>
                      <p className="text-white/70 text-xs uppercase tracking-wider mb-0.5">
                        Account Holder
                      </p>
                      <p className="text-white text-sm font-medium mb-4">
                        {acc.name}
                      </p>
                      <button
                        onClick={() => handleCopy(acc.number)}
                        className="w-full bg-white/20 hover:bg-white/30 text-white text-xs py-2 rounded-lg flex items-center justify-center gap-2 transition-colors font-garet"
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
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
