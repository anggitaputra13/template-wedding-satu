"use client";

import { useState } from "react";

export default function RSVPForm() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<"hadir" | "tidak_hadir">("hadir");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (name.trim() === "") {
      setError("Nama harus diisi");
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="rsvp" className="relative py-16 md:py-24 bg-cream-100 overflow-hidden">
        <div className="max-w-lg mx-auto px-6 text-center">
          <p className="text-gold-500 tracking-[0.3em] uppercase text-sm mb-4 font-sans">
            RSVP
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-brown-700 mb-4">
            Konfirmasi Kehadiran
          </h2>
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="block w-12 md:w-20 h-px bg-gold-300" />
            <span className="text-gold-400 text-lg">✦</span>
            <span className="block w-12 md:w-20 h-px bg-gold-300" />
          </div>

          <div className="bg-white rounded-xl border border-gold-200 p-8 shadow-sm">
            <span className="text-gold-400 text-3xl block mb-4">✓</span>
            <p className="text-brown-700 font-sans text-lg">
              Terima kasih! RSVP Anda telah diterima.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-12 md:mt-16">
          <span className="block w-16 md:w-24 h-px bg-gold-200" />
          <span className="text-gold-300 text-sm">❋</span>
          <span className="block w-16 md:w-24 h-px bg-gold-200" />
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="relative py-16 md:py-24 bg-cream-100 overflow-hidden">
      <div className="max-w-lg mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-10">
          <p className="text-gold-500 tracking-[0.3em] uppercase text-sm mb-4 font-sans">
            RSVP
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-brown-700 mb-4">
            Konfirmasi Kehadiran
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
          className="bg-white rounded-xl border border-gold-200 p-8 shadow-sm"
        >
          {/* Name field */}
          <div className="mb-6">
            <label
              htmlFor="rsvp-name"
              className="block text-brown-700 font-sans text-sm font-medium mb-2"
            >
              Nama
            </label>
            <input
              id="rsvp-name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError("");
              }}
              placeholder="Masukkan nama Anda"
              className="w-full px-4 py-3 rounded-lg border border-gold-200 bg-cream-50 text-brown-700 font-sans text-sm placeholder:text-brown-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-colors"
            />
            {error && (
              <p className="text-red-500 text-sm font-sans mt-2">{error}</p>
            )}
          </div>

          {/* Attendance field */}
          <div className="mb-8">
            <label
              htmlFor="rsvp-attendance"
              className="block text-brown-700 font-sans text-sm font-medium mb-2"
            >
              Kehadiran
            </label>
            <select
              id="rsvp-attendance"
              value={attendance}
              onChange={(e) =>
                setAttendance(e.target.value as "hadir" | "tidak_hadir")
              }
              className="w-full px-4 py-3 rounded-lg border border-gold-200 bg-cream-50 text-brown-700 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-colors"
            >
              <option value="hadir">Hadir</option>
              <option value="tidak_hadir">Tidak Hadir</option>
            </select>
          </div>

          {/* Submit button — min 44px tap target */}
          <button
            type="submit"
            className="w-full py-3 min-h-[44px] rounded-lg bg-gold-500 text-white font-sans text-sm font-medium tracking-wide hover:bg-gold-600 active:bg-gold-700 transition-colors"
          >
            Kirim RSVP
          </button>
        </form>
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
