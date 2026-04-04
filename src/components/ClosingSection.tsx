export default function ClosingSection() {
  return (
    <section
      id="closing"
      className="bg-cream-50 py-16 md:py-24 px-6 text-center overflow-hidden"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <p className="text-gold-500 text-sm uppercase tracking-[0.3em] font-sans">
          Terima Kasih
        </p>

        <h2 className="text-3xl md:text-4xl font-serif text-brown-700">
          Gung Gus &amp; Sonia
        </h2>

        <div className="flex items-center justify-center gap-3">
          <span className="block w-12 md:w-20 h-px bg-gold-300" />
          <span className="text-gold-400 text-lg">✦</span>
          <span className="block w-12 md:w-20 h-px bg-gold-300" />
        </div>

        <p className="text-brown-600 leading-relaxed text-sm md:text-base">
          Terima kasih atas doa dan restu yang telah diberikan. Kehadiran dan
          ucapan Bapak/Ibu/Saudara/i merupakan kebahagiaan bagi kami.
        </p>

        <p className="text-brown-500 text-sm italic font-serif">
          &ldquo;Semoga Allah SWT senantiasa melimpahkan rahmat dan
          keberkahan-Nya kepada kita semua.&rdquo;
        </p>

        {/* Bottom decorative divider */}
        <div className="flex items-center justify-center gap-3 pt-4">
          <span className="block w-16 md:w-24 h-px bg-gold-200" />
          <span className="text-gold-300 text-sm">❋</span>
          <span className="block w-16 md:w-24 h-px bg-gold-200" />
        </div>
      </div>
    </section>
  );
}
