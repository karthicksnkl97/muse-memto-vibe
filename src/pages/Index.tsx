import { FloatingElements } from "@/components/FloatingElements";
import { HeroSection } from "@/components/HeroSection";
import { PrizesSection } from "@/components/PrizesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WeeklyThemesSection } from "@/components/WeeklyThemesSection";
import { LiveLeaderboardSection } from "@/components/LiveLeaderboardSection";
import { PartnersSection } from "@/components/PartnersSection";
import { LatestMemesSection } from "@/components/LatestMemesSection";
import { WinnersSection } from "@/components/WinnersSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <FloatingElements />
      <HeroSection />
      <PrizesSection />
      <HowItWorksSection />
      <WeeklyThemesSection />
      <LiveLeaderboardSection />
      <PartnersSection />
      <LatestMemesSection />
      <WinnersSection />
      <FinalCTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
