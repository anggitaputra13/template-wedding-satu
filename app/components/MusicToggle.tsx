"use client";

interface MusicToggleProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function MusicToggle({ isPlaying, onToggle }: MusicToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={isPlaying ? "Mute music" : "Play music"}
      className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        flex items-center justify-center
        transition-all duration-300 ease-in-out
        backdrop-blur-sm
        border border-white/20
        bg-black/30 hover:bg-black/50
      `}
    >
      <div className="relative flex items-center justify-center">
        {isPlaying ? (
          /* Music bars — playing */
          <div className="flex items-end gap-[2px]">
            <span className="w-[2.5px] rounded-full bg-white/80 animate-music-bar-1" style={{ height: "12px" }} />
            <span className="w-[2.5px] rounded-full bg-white/80 animate-music-bar-2" style={{ height: "16px" }} />
            <span className="w-[2.5px] rounded-full bg-white/80 animate-music-bar-3" style={{ height: "9px" }} />
            <span className="w-[2.5px] rounded-full bg-white/80 animate-music-bar-4" style={{ height: "14px" }} />
          </div>
        ) : (
          /* Music note icon — paused */
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-white/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z"
            />
            <line x1="3" y1="3" x2="21" y2="21" strokeWidth={1.5} />
          </svg>
        )}
      </div>
    </button>
  );
}
