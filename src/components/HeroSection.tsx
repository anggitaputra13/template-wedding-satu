import { COUPLE, EVENTS } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-cream-50 via-gold-50 to-cream-100 overflow-hidden"
    >
      {/* Decorative top ornament */}
      <div className="absolute top-0 left-0 right-0 flex justify-center pt-8 opacity-30">
        <svg
          width="200"
          height="60"
          viewBox="0 0 200 60"
          fill="none"
          className="text-gold-400"
        >
          <path
            d="M100 5 C80 5 60 20 40 25 C20 30 5 25 5 25 C5 25 20 35 40 35 C60 35 80 50 100 55 C120 50 140 35 160 35 C180 35 195 25 195 25 C195 25 180 30 160 25 C140 20 120 5 100 5Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 py-16 max-w-3xl mx-auto">
        {/* Small intro text */}
        <p className="text-gold-500 tracking-[0.3em] uppercase text-sm md:text-base mb-6 font-sans">
          The Wedding of
        </p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="block w-12 md:w-20 h-px bg-gold-300" />
          <span className="text-gold-400 text-lg">✦</span>
          <span className="block w-12 md:w-20 h-px bg-gold-300" />
        </div>

        {/* Couple names */}
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-brown-700 leading-tight mb-2">
          {COUPLE.groom.shortName}
        </h1>
        <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-gold-500 my-2">
          &amp;
        </p>
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-brown-700 leading-tight mb-6">
          {COUPLE.bride.shortName}
        </h1>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="block w-16 md:w-24 h-px bg-gold-300" />
          <span className="text-gold-400 text-sm">❋</span>
          <span className="block w-16 md:w-24 h-px bg-gold-300" />
        </div>

        {/* Wedding date */}
        <p className="text-brown-600 text-base md:text-lg tracking-widest uppercase font-sans mb-10">
          {EVENTS.ceremony.date}
        </p>

        {/* Blessing quote */}
        <blockquote className="max-w-xl mx-auto border-t border-b border-gold-200 py-6 px-4">
          <p className="text-brown-600 text-sm md:text-base italic leading-relaxed font-serif">
            &ldquo;Semoga Sang Hyang Widhi Wasa selalu melimpahkan wara
            nugraha-Nya kepada kedua mempelai.&rdquo;
          </p>
          <cite className="block mt-3 text-gold-500 text-xs md:text-sm not-italic tracking-wide font-sans">
            — Rgveda X.85.42
          </cite>
        </blockquote>
      </div>

      {/* Decorative bottom ornament */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8 opacity-30">
        <svg
          width="200"
          height="60"
          viewBox="0 0 200 60"
          fill="none"
          className="text-gold-400 rotate-180"
        >
          <path
            d="M100 5 C80 5 60 20 40 25 C20 30 5 25 5 25 C5 25 20 35 40 35 C60 35 80 50 100 55 C120 50 140 35 160 35 C180 35 195 25 195 25 C195 25 180 30 160 25 C140 20 120 5 100 5Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Subtle decorative corner elements */}
      <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-gold-200 opacity-40 rounded-tl-sm" />
      <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-gold-200 opacity-40 rounded-tr-sm" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-gold-200 opacity-40 rounded-bl-sm" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-gold-200 opacity-40 rounded-br-sm" />
    </section>
  );
}
