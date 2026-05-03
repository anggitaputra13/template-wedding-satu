"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { media } from "../data/media";

export default function VideoBackgroundSection({ children }: { children: ReactNode }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Lazy load: only start video when section is near viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Start loading 200px before it enters viewport
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Play video when visible
  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="relative">
      {/* Video background — lazy loaded */}
      <div className="absolute inset-0 overflow-hidden">
        {isVisible && (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            style={{ width: "100%" }}
          >
            <source src={media.videoUs} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
