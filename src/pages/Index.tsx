import { useState } from "react";
import { Hero } from "@/components/offer/Hero";
import { ProjectAndWhy } from "@/components/offer/ProjectAndWhy";
import { OfferBlock } from "@/components/offer/OfferBlock";
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
      <Hero />
      <div className="space-y-10 md:space-y-14">
        <ProjectAndWhy />
        <OfferBlock />
        <NerdBanner />
        <OfferSummary />
        <Countdown onExpired={() => setExpired(true)} />
        <CTAButton />
      </div>
    </main>
  );
};

export default Index;
