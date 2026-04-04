"use client";

import { useState } from "react";
import { BANK_INFO } from "@/lib/constants";

export default function GiftSection() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(BANK_INFO.accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API not available — fail silently
    }
  }

  return (
    <section
      id="gift"
      className="relative py-16 md:py-24 bg-cream-100 overflow-hidden"
    >
      {/* Section heading */}
      <div className="text-center mb-12 md:mb-16 px-6">
        <p className="text-gold-500 tracking-[0.3em] uppercase text-sm mb-4 font-sans">
          Hadiah
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-brown-700 mb-4">
          Hadiah Pernikahan
        </h2>
        <div className="flex items-center justify-center gap-3">
          <span className="block w-12 md:w-20 h-px bg-gold-300" />
          <span className="text-gold-400 text-lg">✦</span>
          <span className="block w-12 md:w-20 h-px bg-gold-300" />
        </div>
      </div>

      {/* Bank info card */}
      <div className="max-w-md mx-auto px-6">
        <div className="bg-white rounded-xl border border-gold-200 p-8 text-center shadow-sm">
          {/* Icon accent */}
          <div className="flex items-center justify-center mb-5">
            <span className="text-gold-400 text-2xl">✦</span>
          </div>

          <p className="text-brown-700 font-sans font-medium text-sm mb-1">
            {BANK_INFO.bankName}
          </p>

          <div className="w-10 h-px bg-gold-300 mx-auto my-4" />

          {/* Account number + copy button */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <p className="text-brown-700 font-sans text-lg font-semibold tracking-wide">
              {BANK_INFO.accountNumber}
            </p>
            <button
              type="button"
              onClick={handleCopy}
              aria-label="Copy account number"
              className="inline-flex items-center gap-1 px-4 py-2 min-h-[44px] rounded-lg border border-gold-300 bg-cream-50 text-gold-600 font-sans text-xs font-medium hover:bg-gold-100 active:bg-gold-200 transition-colors"
            >
              {copied ? "Tersalin!" : "Copy"}
            </button>
          </div>

          <p className="text-brown-500 font-sans text-sm">
            a.n. {BANK_INFO.accountHolder}
          </p>
        </div>
      </div>

      {/* Bottom decorative divider */}
      <div className="flex items-center justify-center gap-3 mt-12 md:mt-16">
        <span className="block w-16 md:w-24 h-px bg-gold-200" />
        <span className="text-gold-300 text-sm">❋</span>
        <span className="block w-16 md:w-24 h-px bg-gold-200" />
      </div>
    </section>
  );
}
