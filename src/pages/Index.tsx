import { useState } from "react";
import { Hero } from "@/components/offer/Hero";
import { ProjectSection } from "@/components/offer/ProjectSection";
import { WhySection } from "@/components/offer/WhySection";
import { OfferBlock } from "@/components/offer/OfferBlock";
import { QualitySection } from "@/components/offer/QualitySection";
import { NerdBanner } from "@/components/offer/NerdBanner";
import { OfferSummary } from "@/components/offer/OfferSummary";
import { Countdown } from "@/components/offer/Countdown";
import { CTAButton } from "@/components/offer/CTAButton";
import { OfferExpired } from "@/components/offer/OfferExpired";

const Index = () => {
  const [expired, setExpired] = useState(false);

  if (expired) return <OfferExpired />;

  return (
    <main className="min-h-screen pb-16">
      {/* Story flow — read in order */}
      <Hero />
      <ProjectSection />
      <WhySection />
      <OfferBlock />
      <QualitySection />
      <NerdBanner />
      <OfferSummary />
      <Countdown onExpired={() => setExpired(true)} />
      <CTAButton />
    </main>
  );
};

export default Index;
