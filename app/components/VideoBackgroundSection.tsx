"use client";

import { ReactNode } from "react";
import { media } from "../data/media";

export default function VideoBackgroundSection({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      {/* Single video background spanning all children */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={media.videoUs} type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
