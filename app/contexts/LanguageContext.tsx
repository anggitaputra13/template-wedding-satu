"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "id" | "en";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (id: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "id",
  toggleLang: () => {},
  t: (id) => id,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("id");

  const toggleLang = () => setLang((prev) => (prev === "id" ? "en" : "id"));

  const t = (id: string, en: string) => (lang === "id" ? id : en);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
