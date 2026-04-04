"use client";

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function MusicPlayer({ isPlaying, onToggle }: MusicPlayerProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={isPlaying ? "Pause music" : "Play music"}
      className="fixed bottom-4 right-4 z-40 flex items-center justify-center w-12 h-12 min-w-[44px] min-h-[44px] rounded-full bg-gold-600 text-cream-50 shadow-lg hover:bg-gold-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2"
    >
      <span
        className={`spin-disc inline-flex items-center justify-center text-lg ${
          !isPlaying ? "paused" : ""
        }`}
      >
        ♫
      </span>
    </button>
  );
}
