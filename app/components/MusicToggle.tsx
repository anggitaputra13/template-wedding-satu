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
        w-14 h-14 rounded-full
        flex items-center justify-center
        shadow-lg shadow-black/30
        transition-all duration-500 ease-in-out
        backdrop-blur-md
        border
        ${
          isPlaying
            ? "bg-gradient-to-br from-amber-600/80 to-amber-800/80 border-amber-400/50 hover:from-amber-500/90 hover:to-amber-700/90"
            : "bg-white/10 border-white/20 hover:bg-white/20"
        }
      `}
    >
      {/* Ripple ring animation when playing */}
      {isPlaying && (
        <>
          <span className="absolute inset-0 rounded-full border-2 border-amber-400/40 animate-ping" />
          <span className="absolute inset-[-4px] rounded-full border border-amber-400/20 animate-pulse" />
        </>
      )}

      <div className="relative flex items-center justify-center">
        {isPlaying ? (
          /* Music note icon with animated bars */
          <div className="flex items-end gap-[3px]">
            <span
              className="w-[3px] rounded-full bg-white animate-music-bar-1"
              style={{ height: "14px" }}
            />
            <span
              className="w-[3px] rounded-full bg-white animate-music-bar-2"
              style={{ height: "18px" }}
            />
            <span
              className="w-[3px] rounded-full bg-white animate-music-bar-3"
              style={{ height: "10px" }}
            />
            <span
              className="w-[3px] rounded-full bg-white animate-music-bar-4"
              style={{ height: "16px" }}
            />
          </div>
        ) : (
          /* Muted music icon */
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z"
            />
            {/* Slash line for muted */}
            <line x1="3" y1="3" x2="21" y2="21" strokeWidth={2} />
          </svg>
        )}
      </div>
    </button>
  );
}
