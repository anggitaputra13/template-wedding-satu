"use client";

import { useState, useCallback } from "react";

interface CoverOverlayProps {
  onOpen: () => void;
}

export default function CoverOverlay({ onOpen }: CoverOverlayProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  const handleClick = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      setIsVisible(false);
      onOpen();
    }, 500);
  }, [onOpen]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-brown-900/90 to-brown-800/80 px-6 text-center transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Decorative top flourish */}
      <div className="mb-4 text-gold-300/60 text-2xl tracking-widest">✦ ✦ ✦</div>

      {/* "The Wedding of" */}
      <p className="text-sm tracking-[0.25em] uppercase text-cream-300 font-sans mb-2">
        The Wedding of
      </p>

      {/* Couple names */}
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gold-300 leading-tight mb-4">
        Gung Gus &amp; Sonia
      </h1>

      {/* Decorative divider */}
      <div className="flex items-center gap-3 mb-8">
        <span className="block h-px w-12 bg-gold-400/50" />
        <span className="text-gold-400 text-lg">❧</span>
        <span className="block h-px w-12 bg-gold-400/50" />
      </div>

      {/* Guest greeting */}
      <p className="text-cream-200 text-sm mb-1">Kepada Bpk/Ibu/Saudara/i</p>
      <p className="text-cream-100 text-lg font-serif mb-8">Tamu Undangan</p>

      {/* Buka Undangan button — min 44px tap target */}
      <button
        onClick={handleClick}
        className="border border-gold-400 text-gold-300 hover:bg-gold-400/20 px-8 py-3 min-h-[44px] rounded-sm text-sm tracking-widest uppercase transition-colors duration-300 mb-6"
      >
        Buka Undangan
      </button>

      {/* Disclaimer */}
      <p className="text-cream-300/60 text-xs max-w-xs">
        *Mohon maaf apabila ada kesalahan penulisan nama/gelar
      </p>
    </div>
  );
}
