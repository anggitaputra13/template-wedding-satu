"use client";

export default function InvitationText() {
  return (
    <div className="pt-8 pb-2 sm:pt-10 sm:pb-2 px-6 bg-gradient-to-b from-[#1a0e0a] to-[#1f1210] text-center">
      <img
        src="/images/ornament.svg"
        alt=""
        className="w-24 sm:w-32 mx-auto mb-4 opacity-70 invert"
      />

      <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-white mb-4">
        Om Swastyastu
      </h2>

      <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
        Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang
        Maha Esa, kami bermaksud mengundang Bapak/Ibu/Saudara/i pada Upacara
        Manusa Yadnya Pawiwahan/ Pernikahan putra dan putri kami.
      </p>
    </div>
  );
}
