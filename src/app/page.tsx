import ClientWrapper from "@/components/ClientWrapper";
import FadeInSection from "@/components/FadeInSection";
import HeroSection from "@/components/HeroSection";
import CoupleSection from "@/components/CoupleSection";
import EventsSection from "@/components/EventsSection";
import CountdownTimer from "@/components/CountdownTimer";
import TimelineSection from "@/components/TimelineSection";
import RSVPForm from "@/components/RSVPForm";
import WishesSection from "@/components/WishesSection";
import GiftSection from "@/components/GiftSection";
import GallerySection from "@/components/GallerySection";
import ClosingSection from "@/components/ClosingSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <ClientWrapper>
      <HeroSection />
      <FadeInSection>
        <CoupleSection />
      </FadeInSection>
      <FadeInSection>
        <EventsSection />
      </FadeInSection>
      <FadeInSection>
        <CountdownTimer />
      </FadeInSection>
      <FadeInSection>
        <TimelineSection />
      </FadeInSection>
      <FadeInSection>
        <RSVPForm />
      </FadeInSection>
      <FadeInSection>
        <WishesSection />
      </FadeInSection>
      <FadeInSection>
        <GiftSection />
      </FadeInSection>
      <FadeInSection>
        <GallerySection />
      </FadeInSection>
      <FadeInSection>
        <ClosingSection />
      </FadeInSection>
      <Footer />
    </ClientWrapper>
  );
}
