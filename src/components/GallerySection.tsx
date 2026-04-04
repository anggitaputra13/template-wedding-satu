import { GALLERY_IMAGES } from "@/lib/constants";

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-cream-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section heading */}
        <p className="text-gold-500 tracking-[0.3em] uppercase text-sm mb-4 font-sans">
          Galeri
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-brown-700 mb-4">
          Our Love in Frame
        </h2>
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="block w-12 md:w-20 h-px bg-gold-300" />
          <span className="text-gold-400 text-lg">✦</span>
          <span className="block w-12 md:w-20 h-px bg-gold-300" />
        </div>

        {/* Inspirational quote */}
        <p className="text-gold-600 italic text-sm sm:text-base mb-10 max-w-xl mx-auto font-serif">
          &ldquo;Setiap momen bersamamu adalah kenangan yang tak ternilai&rdquo;
        </p>

        {/* Responsive photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {GALLERY_IMAGES.map((src, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg overflow-hidden aspect-[3/2]"
            >
              <img
                src={src}
                alt={`Gallery photo ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
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
