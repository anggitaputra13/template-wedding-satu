import { COUPLE } from "@/lib/constants";

export default function CoupleSection() {
  return (
    <section
      id="couple"
      className="relative py-16 md:py-24 bg-cream-50 overflow-hidden"
    >
      {/* Section heading */}
      <div className="text-center mb-12 md:mb-16 px-6">
        <p className="text-gold-500 tracking-[0.3em] uppercase text-sm mb-4 font-sans">
          Mempelai
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-brown-700 mb-4">
          Meet the Couple
        </h2>
        <div className="flex items-center justify-center gap-3">
          <span className="block w-12 md:w-20 h-px bg-gold-300" />
          <span className="text-gold-400 text-lg">✦</span>
          <span className="block w-12 md:w-20 h-px bg-gold-300" />
        </div>
      </div>

      {/* Profiles container */}
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-6">
        {/* Groom profile */}
        <div className="flex-1 flex flex-col items-center text-center max-w-sm">
          {/* Circular photo placeholder */}
          <div className="w-32 h-32 rounded-full bg-gray-200 border-4 border-gold-200 mb-6 flex items-center justify-center">
            <span className="text-gold-400 text-3xl">♂</span>
          </div>
          <h3 className="font-serif text-xl md:text-2xl text-brown-700 leading-snug mb-3">
            {COUPLE.groom.name}
          </h3>
          <p className="text-brown-500 text-sm font-sans mb-1">
            {COUPLE.groom.birthOrder}
          </p>
          <p className="text-brown-600 text-sm font-sans font-medium mb-3">
            {COUPLE.groom.parents}
          </p>
          <p className="text-brown-400 text-xs font-sans leading-relaxed">
            {COUPLE.groom.address}
          </p>
        </div>

        {/* "&" separator */}
        <div className="flex items-center justify-center py-4 md:py-0 md:self-center">
          <span className="font-serif text-5xl md:text-6xl text-gold-400 select-none">
            &amp;
          </span>
        </div>

        {/* Bride profile */}
        <div className="flex-1 flex flex-col items-center text-center max-w-sm">
          {/* Circular photo placeholder */}
          <div className="w-32 h-32 rounded-full bg-gray-200 border-4 border-gold-200 mb-6 flex items-center justify-center">
            <span className="text-gold-400 text-3xl">♀</span>
          </div>
          <h3 className="font-serif text-xl md:text-2xl text-brown-700 leading-snug mb-3">
            {COUPLE.bride.name}
          </h3>
          <p className="text-brown-500 text-sm font-sans mb-1">
            {COUPLE.bride.birthOrder}
          </p>
          <p className="text-brown-600 text-sm font-sans font-medium mb-3">
            {COUPLE.bride.parents}
          </p>
          <p className="text-brown-400 text-xs font-sans leading-relaxed">
            {COUPLE.bride.address}
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
