import { EVENTS } from "@/lib/constants";

export default function EventsSection() {
  const events = [EVENTS.ceremony, EVENTS.reception];

  return (
    <section
      id="events"
      className="relative py-16 md:py-24 bg-cream-100 overflow-hidden"
    >
      {/* Section heading */}
      <div className="text-center mb-12 md:mb-16 px-6">
        <p className="text-gold-500 tracking-[0.3em] uppercase text-sm mb-4 font-sans">
          Acara
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-brown-700 mb-4">
          When &amp; Where
        </h2>
        <div className="flex items-center justify-center gap-3">
          <span className="block w-12 md:w-20 h-px bg-gold-300" />
          <span className="text-gold-400 text-lg">✦</span>
          <span className="block w-12 md:w-20 h-px bg-gold-300" />
        </div>
      </div>

      {/* Event cards */}
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event) => (
          <div
            key={event.title}
            className="bg-white rounded-xl border border-gold-200 p-8 text-center shadow-sm"
          >
            {/* Icon accent */}
            <div className="flex items-center justify-center mb-5">
              <span className="text-gold-400 text-2xl">✦</span>
            </div>

            <h3 className="font-serif text-xl md:text-2xl text-brown-700 mb-4">
              {event.title}
            </h3>

            <div className="w-10 h-px bg-gold-300 mx-auto mb-5" />

            <p className="text-brown-600 font-sans text-sm mb-1">
              {event.date}
            </p>
            <p className="text-brown-500 font-sans text-sm mb-4">
              {event.time}
            </p>

            <p className="text-brown-700 font-sans font-medium text-sm mb-1">
              {event.location}
            </p>
            <p className="text-brown-400 font-sans text-xs leading-relaxed">
              {event.address}
            </p>
          </div>
        ))}
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
