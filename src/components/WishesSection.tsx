"use client";

import { useState } from "react";

interface Wish {
  id: number;
  name: string;
  message: string;
  timestamp: Date;
}

export default function WishesSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; message?: string }>({});
  const [wishes, setWishes] = useState<Wish[]>([]);

  function formatRelativeTime(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHr = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHr / 24);

    if (diffSec < 60) return "Baru saja";
    if (diffMin < 60) return `${diffMin} menit yang lalu`;
    if (diffHr < 24) return `${diffHr} jam yang lalu`;
    return `${diffDay} hari yang lalu`;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: { name?: string; message?: string } = {};

    if (name.trim() === "") {
      newErrors.name = "Nama harus diisi";
    }
    if (message.trim() === "") {
      newErrors.message = "Pesan harus diisi";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const newWish: Wish = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date(),
    };

    setWishes((prev) => [newWish, ...prev]);
    setName("");
    setMessage("");
  }

  return (
    <section id="wishes" className="relative py-16 md:py-24 bg-cream-50 overflow-hidden">
      <div className="max-w-lg mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-10">
          <p className="text-gold-500 tracking-[0.3em] uppercase text-sm mb-4 font-sans">
            WISHES
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-brown-700 mb-4">
            Send Us Your Wishes
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="block w-12 md:w-20 h-px bg-gold-300" />
            <span className="text-gold-400 text-lg">✦</span>
            <span className="block w-12 md:w-20 h-px bg-gold-300" />
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl border border-gold-200 p-8 shadow-sm mb-8"
        >
          {/* Name field */}
          <div className="mb-6">
            <label
              htmlFor="wishes-name"
              className="block text-brown-700 font-sans text-sm font-medium mb-2"
            >
              Nama
            </label>
            <input
              id="wishes-name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
              }}
              placeholder="Masukkan nama Anda"
              className="w-full px-4 py-3 rounded-lg border border-gold-200 bg-cream-50 text-brown-700 font-sans text-sm placeholder:text-brown-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-colors"
            />
            {errors.name && (
              <p className="text-red-500 text-sm font-sans mt-2">{errors.name}</p>
            )}
          </div>

          {/* Message field */}
          <div className="mb-8">
            <label
              htmlFor="wishes-message"
              className="block text-brown-700 font-sans text-sm font-medium mb-2"
            >
              Pesan
            </label>
            <textarea
              id="wishes-message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
              }}
              placeholder="Tulis ucapan Anda"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gold-200 bg-cream-50 text-brown-700 font-sans text-sm placeholder:text-brown-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-colors resize-none"
            />
            {errors.message && (
              <p className="text-red-500 text-sm font-sans mt-2">{errors.message}</p>
            )}
          </div>

          {/* Submit button — min 44px tap target */}
          <button
            type="submit"
            className="w-full py-3 min-h-[44px] rounded-lg bg-gold-500 text-white font-sans text-sm font-medium tracking-wide hover:bg-gold-600 active:bg-gold-700 transition-colors"
          >
            Kirim Ucapan
          </button>
        </form>

        {/* Wishes list */}
        {wishes.length > 0 && (
          <div className="bg-white rounded-xl border border-gold-200 shadow-sm overflow-hidden">
            <div className="max-h-64 overflow-y-auto divide-y divide-gold-100">
              {wishes.map((wish) => (
                <div key={wish.id} className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-brown-700 font-sans text-sm font-semibold">
                      {wish.name}
                    </span>
                    <span className="text-brown-300 font-sans text-xs">
                      {formatRelativeTime(wish.timestamp)}
                    </span>
                  </div>
                  <p className="text-brown-600 font-sans text-sm leading-relaxed">
                    {wish.message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
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
