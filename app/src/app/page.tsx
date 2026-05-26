import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Pillars } from "@/components/home/Pillars";
import { MissionBand } from "@/components/home/MissionBand";
import { TrustSection } from "@/components/home/TrustSection";
import { HomeCTA } from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "Veritas Capital Partners — Truth. Protection. Wealth.",
  description:
    "A premium wealth strategy and legacy planning platform for families who think in generations. Protect what matters. Build what lasts.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <MissionBand />
      <TrustSection />
      <HomeCTA />
    </>
  );
}
