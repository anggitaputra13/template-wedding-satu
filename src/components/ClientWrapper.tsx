"use client";

import { useState, useRef, useCallback, ReactNode } from "react";
import CoverOverlay from "./CoverOverlay";
import MusicPlayer from "./MusicPlayer";

interface ClientWrapperProps {
  children: ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpen = useCallback(() => {
    setIsOverlayVisible(false);
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        // Silently handle autoplay restrictions
      });
      setIsMusicPlaying(true);
    }
  }, []);

  const handleToggleMusic = useCallback(() => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play().catch(() => {});
      setIsMusicPlaying(true);
    } else {
      audioRef.current.pause();
      setIsMusicPlaying(false);
    }
  }, []);

  return (
    <>
      <CoverOverlay onOpen={handleOpen} />
      {children}
      <MusicPlayer isPlaying={isMusicPlaying} onToggle={handleToggleMusic} />
      <audio ref={audioRef} src="/audio/wedding-music.mp3" loop />
    </>
  );
}
