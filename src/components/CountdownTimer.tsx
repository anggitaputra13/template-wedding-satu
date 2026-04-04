"use client";

import { useState, useEffect } from "react";
import { WEDDING_DATE } from "@/lib/constants";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeRemaining(): TimeRemaining {
  const now = new Date().getTime();
  const target = WEDDING_DATE.getTime();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);
    setTime(calculateTimeRemaining());

    const interval = setInterval(() => {
      setTime(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const units: { label: string; value: number }[] = [
    { label: "Hari", value: time.days },
    { label: "Jam", value: time.hours },
    { label: "Menit", value: time.minutes },
    { label: "Detik", value: time.seconds },
  ];

  return (
    <section
      id="countdown"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-cream-100 text-center"
    >
      <div className="max-w-3xl mx-auto">
        {/* Quote above timer */}
        <p className="font-serif italic text-gold-600 text-lg sm:text-xl mb-2">
          &ldquo;Cinta sejati tidak pernah mengenal akhir&rdquo;
        </p>
        <div className="w-16 h-px bg-gold-400 mx-auto mb-10" />

        {/* Countdown boxes */}
        <div className="grid grid-cols-4 gap-3 sm:gap-6 mb-10">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="bg-white/80 backdrop-blur rounded-lg shadow-md py-5 sm:py-8 px-2"
            >
              <span className="block text-3xl sm:text-5xl font-serif font-bold text-brown-700">
                {mounted ? unit.value : "-"}
              </span>
              <span className="block mt-2 text-xs sm:text-sm uppercase tracking-wider text-gold-600">
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        {/* Quote below timer */}
        <div className="w-16 h-px bg-gold-400 mx-auto mb-2" />
        <p className="font-serif italic text-gold-600 text-base sm:text-lg">
          &ldquo;Dua hati, satu cinta, selamanya bersama&rdquo;
        </p>
      </div>
    </section>
  );
}
