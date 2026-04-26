"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useAudio } from "../hooks/useAudio";
import CoverOverlay from "../components/CoverOverlay";
import HeroSection from "../components/HeroSection";
import CountdownTimer from "../components/CountdownTimer";
import InvitationText from "../components/InvitationText";
import CoupleSection from "../components/CoupleSection";
import EventDetails from "../components/EventDetails";
import QuoteSection from "../components/QuoteSection";
import WishesSection from "../components/WishesSection";
import ClosingSection from "../components/ClosingSection";
import GallerySection from "../components/GallerySection";
import Footer from "../components/Footer";
import MusicToggle from "../components/MusicToggle";
import AnimatedSection from "../components/AnimatedSection";

import LoveStory from "../components/LoveStory";
import VideoSection from "../components/VideoSection";
import DigitalEnvelope from "../components/DigitalEnvelope";
import SectionDivider from "../components/SectionDivider";

function parseNames(slug: string): { groom: string; bride: string } {
  const parts = slug.split("-");
  if (parts.length >= 2) {
    const groom = parts[0].charAt(0).toUpperCase() + parts[0].slice(1).toLowerCase();
    const bride = parts[1].charAt(0).toUpperCase() + parts[1].slice(1).toLowerCase();
    return { groom, bride };
  }
  return { groom: "Satria", bride: "Heppa" };
}

export default function InvitationPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "Satria-Heppa";
  const { groom, bride } = parseNames(slug);

  const [isOpen, setIsOpen] = useState(false);
  const audio = useAudio();

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = "";
    audio.play();
  };

  return (
    <main className="min-h-screen bg-[#1a0e0a]">
      {!isOpen && <CoverOverlay onOpen={handleOpen} groom={groom} bride={bride} />}

      {isOpen && (
        <>
          <AnimatedSection>
            <HeroSection groom={groom} bride={bride} />
          </AnimatedSection>
          <AnimatedSection>
            <CountdownTimer />
          </AnimatedSection>
          <AnimatedSection>
            <InvitationText />
            <CoupleSection />
          </AnimatedSection>
          <SectionDivider />
          <AnimatedSection>
            <LoveStory />
          </AnimatedSection>
          <SectionDivider />
          <AnimatedSection>
            <VideoSection />
          </AnimatedSection>
          <SectionDivider />
          <AnimatedSection>
            <EventDetails />
          </AnimatedSection>
          <SectionDivider />
          <AnimatedSection>
            <QuoteSection />
          </AnimatedSection>
          <SectionDivider />
          <AnimatedSection>
            <DigitalEnvelope />
          </AnimatedSection>
          <SectionDivider />
          <AnimatedSection>
            <WishesSection />
          </AnimatedSection>
          <SectionDivider />
          <AnimatedSection>
            <ClosingSection />
          </AnimatedSection>
          <SectionDivider />
          <AnimatedSection>
            <GallerySection />
          </AnimatedSection>
          <Footer />
          <MusicToggle isPlaying={audio.isPlaying} onToggle={audio.toggle} />
        </>
      )}
    </main>
  );
}
