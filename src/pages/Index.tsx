import { FloatingElements } from "@/components/FloatingElements";
import { HeroSection } from "@/components/HeroSection";
import { PrizesSection } from "@/components/PrizesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WeeklyThemesSection } from "@/components/WeeklyThemesSection";
import { PartnersSection } from "@/components/PartnersSection";
import { WinnersSection } from "@/components/WinnersSection";

const Index = () => {
  return (
    <div className="relative">
      <FloatingElements />
      <HeroSection />
      <PrizesSection />
      <HowItWorksSection />
      <WeeklyThemesSection />
      <PartnersSection />
      <WinnersSection />
    </div>
  );
};

export default Index;
