"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useAudio } from "../../../hooks/useAudio";
import CoverOverlay from "../../../components/CoverOverlay";
import HeroSection from "../../../components/HeroSection";
import CoupleSection from "../../../components/CoupleSection";
import LoveStoryAndEvent from "../../../components/LoveStoryAndEvent";
import VideoBackgroundSection from "../../../components/VideoBackgroundSection";
import WeddingGift from "../../../components/WeddingGift";
import ReservationSection from "../../../components/ReservationSection";
import SayingSomething from "../../../components/SayingSomething";
import OurLoveInFrame from "../../../components/OurLoveInFrame";
import ClosingMessage from "../../../components/ClosingMessage";
import Footer from "../../../components/Footer";
import MusicToggle from "../../../components/MusicToggle";

function parseNames(slug: string): { groom: string; bride: string } {
  const parts = slug.split("-");
  if (parts.length >= 2) {
    const groom = parts[0].charAt(0).toUpperCase() + parts[0].slice(1).toLowerCase();
    const bride = parts[1].charAt(0).toUpperCase() + parts[1].slice(1).toLowerCase();
    return { groom, bride };
  }
  return { groom: "Satria", bride: "Heppa" };
}

function parseGuestName(guest: string): string {
  // Decode URI component first (handles %26 etc.)
  const decoded = decodeURIComponent(guest);
  // Replace & with " & " for proper formatting (e.g., "dedek&ani" -> "Dedek & Ani")
  const parts = decoded.split("&");
  const formatted = parts
    .map((p) => p.trim())
    .filter((p) => p.length > 0)
    .map((p) =>
      p
        .split(/[-\s]+/)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(" ")
    )
    .join(" & ");
  return formatted || "Tamu Undangan";
}

export default function InvitationPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "satria-heppa";
  const guest = typeof params.guest === "string" ? params.guest : "";
  const { groom, bride } = parseNames(slug);
  const guestName = parseGuestName(guest);

  const [isOpen, setIsOpen] = useState(false);
  const audio = useAudio();

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = "";
    audio.play();
  };

  return (
    <main className="min-h-screen bg-[#1a0e0a]">
      {!isOpen && (
        <CoverOverlay onOpen={handleOpen} groom={groom} bride={bride} guestName={guestName} />
      )}

      {isOpen && (
        <>
          <HeroSection groom={groom} bride={bride} />
          <CoupleSection />
          <VideoBackgroundSection>
            <LoveStoryAndEvent />
            <WeddingGift />
            <ReservationSection />
            <SayingSomething />
          </VideoBackgroundSection>
          <OurLoveInFrame />
          <VideoBackgroundSection>
            <ClosingMessage groom={groom} bride={bride} />
          </VideoBackgroundSection>
          <Footer />
          <MusicToggle isPlaying={audio.isPlaying} onToggle={audio.toggle} />
        </>
      )}
    </main>
  );
}
