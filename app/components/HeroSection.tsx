"use client";

export default function HeroSection({ groom = "Anggita", bride = "Cindy" }: { groom?: string; bride?: string }) {
  const scrollToEvent = () => {
    const el = document.getElementById("event-details");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between text-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/audio/video.mp4" type="video/mp4" />
      </video>

      {/* Shadow overlays for natural blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0e0a]/80 via-[#1a0e0a]/30 to-[#1a0e0a]/80" />
      <div className="absolute inset-0 bg-black/30" />
      {/* Extra top/bottom fade for seamless section blending */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#1a0e0a] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a0e0a] to-transparent" />

      {/* Floral corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 opacity-30 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 C40 20, 60 60, 50 100 C40 70, 20 50, 0 40Z" fill="white" opacity="0.4"/>
          <path d="M0 0 C30 30, 40 70, 30 110 C25 75, 15 45, 0 25Z" fill="white" opacity="0.3"/>
          <circle cx="35" cy="35" r="6" fill="white" opacity="0.5"/>
          <circle cx="20" cy="55" r="4" fill="white" opacity="0.4"/>
          <circle cx="50" cy="20" r="4" fill="white" opacity="0.4"/>
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 opacity-30 pointer-events-none scale-x-[-1]">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 C40 20, 60 60, 50 100 C40 70, 20 50, 0 40Z" fill="white" opacity="0.4"/>
          <path d="M0 0 C30 30, 40 70, 30 110 C25 75, 15 45, 0 25Z" fill="white" opacity="0.3"/>
          <circle cx="35" cy="35" r="6" fill="white" opacity="0.5"/>
          <circle cx="20" cy="55" r="4" fill="white" opacity="0.4"/>
          <circle cx="50" cy="20" r="4" fill="white" opacity="0.4"/>
        </svg>
      </div>

      {/* Top section: label, names, date */}
      <div className="relative z-10 flex flex-col items-center pt-14 sm:pt-18 md:pt-22 px-6">
        <img
          src="/images/flower.png"
          alt=""
          className="w-60 sm:w-72 md:w-80 lg:w-96 mb-4 brightness-0 invert opacity-90"
        />

        <p className="text-white tracking-[0.25em] text-xs sm:text-sm md:text-base uppercase mb-4 font-serif">
          Pawiwahan / Pernikahan
        </p>

        <h1 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-3 drop-shadow-lg">
          {groom} &amp; {bride}
        </h1>

        <p className="text-white/90 text-base sm:text-lg md:text-xl font-serif">
          17 Agustus 2026
        </p>
      </div>

      {/* Bottom section: Save the date button */}
      <div className="relative z-10 flex flex-col items-center pb-16 sm:pb-20 md:pb-24 px-6">
        <button
          onClick={scrollToEvent}
          className="border-2 border-white bg-white/10 backdrop-blur-sm rounded-full px-10 py-3 sm:px-14 sm:py-4 md:px-16 md:py-4 shadow-lg shadow-white/10 hover:bg-white hover:text-[#1a0e0a] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <p className="text-white tracking-[0.25em] text-xs sm:text-sm md:text-base uppercase font-serif hover:text-[#1a0e0a]">
            Save The Date
          </p>
        </button>

        <img
          src="/images/flower-2.png"
          alt=""
          className="w-60 sm:w-72 md:w-80 lg:w-96 mt-6 brightness-0 invert opacity-90"
        />
      </div>
    </section>
  );
}
