import { TIMELINE_MILESTONES } from "@/lib/constants";

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="relative py-16 md:py-24 bg-cream-50 overflow-hidden"
    >
      {/* Section heading */}
      <div className="text-center mb-12 md:mb-16 px-6">
        <p className="text-gold-500 tracking-[0.3em] uppercase text-sm mb-4 font-sans">
          Kisah Cinta
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-brown-700 mb-4">
          How It All Began
        </h2>
        <div className="flex items-center justify-center gap-3">
          <span className="block w-12 md:w-20 h-px bg-gold-300" />
          <span className="text-gold-400 text-lg">✦</span>
          <span className="block w-12 md:w-20 h-px bg-gold-300" />
        </div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto px-6">
        {/* Center vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gold-300 md:-translate-x-px" />

        {TIMELINE_MILESTONES.map((milestone, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative flex items-start mb-12 last:mb-0 md:mb-16 ${
                isLeft
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
            >
              {/* Content card */}
              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  isLeft ? "md:pr-4 md:text-right" : "md:pl-4 md:text-left"
                }`}
              >
                <h3 className="font-serif text-xl md:text-2xl text-brown-700 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-brown-500 text-sm md:text-base font-sans leading-relaxed">
                  {milestone.description}
                </p>
              </div>

              {/* Timeline dot — centered on the line */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold-400 border-4 border-cream-100 z-10 mt-1" />

              {/* Spacer for the opposite side on desktop */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </div>
          );
        })}
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
