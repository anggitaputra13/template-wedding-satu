"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="fixed top-4 right-4 z-[60] flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/30 text-white px-3 py-1.5 rounded-full text-xs tracking-wider hover:bg-white/20 transition-colors"
      aria-label="Toggle language"
    >
      <span className={lang === "id" ? "font-bold" : "opacity-60"}>ID</span>
      <span className="text-white/40">|</span>
      <span className={lang === "en" ? "font-bold" : "opacity-60"}>EN</span>
    </button>
  );
}
