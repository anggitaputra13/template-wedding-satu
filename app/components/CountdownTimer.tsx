"use client";

import { useState, useEffect } from "react";
import { calculateCountdown } from "../utils/countdown";

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

export default function CountdownTimer() {
  const [countdown, setCountdown] = useState<ReturnType<typeof calculateCountdown>>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCountdown(calculateCountdown());
    const interval = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { value: countdown.days, label: "Hari" },
    { value: countdown.hours, label: "Jam" },
    { value: countdown.minutes, label: "Menit" },
    { value: countdown.seconds, label: "Detik" },
  ];

  return (
    <section className="py-12 sm:py-16 px-6 bg-[#1a0e0a]">
      <p className="text-center text-white text-sm sm:text-base md:text-lg font-serif mb-8">
        Jumat, 28 Agustus 2026
      </p>
      <div className="flex justify-center gap-3 sm:gap-4 md:gap-6">
        {units.map((unit, i) => (
          <div
            key={unit.label}
            className="flex flex-col items-center"
          >
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 min-w-[68px] sm:min-w-[80px] md:min-w-[100px] shadow-lg shadow-white/5">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white block text-center">
                {mounted ? pad(unit.value) : "--"}
              </span>
            </div>
            <span className="text-[10px] sm:text-xs text-white/70 mt-2 uppercase tracking-widest font-serif">
              {unit.label}
            </span>
            {i < units.length - 1 && (
              <span className="absolute hidden">:</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
