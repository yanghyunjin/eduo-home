import CtaSection from "./sections/CtaSection";
import EcosystemSection from "./sections/EcosystemSection";
import EducatorStorySection from "./sections/EducatorStorySection";
import FlexibleSection from "./sections/FlexibleSection";
import HeroSection from "./sections/HeroSection";
import HomeFooter from "./sections/HomeFooter";
import LogoMarqueeSection from "./sections/LogoMarqueeSection";
import MobileFirstSection from "./sections/MobileFirstSection";
import OperationsSection from "./sections/OperationsSection";
import RoleCardsSection from "./sections/RoleCardsSection";
import ValuesSection from "./sections/ValuesSection";

const HomePage = () => {
  return (
    <main className="bg-white font-sans text-[#0f0f12]">
      <HeroSection />
      <LogoMarqueeSection />
      <RoleCardsSection />
      <EcosystemSection />
      <OperationsSection />
      <MobileFirstSection />
      <FlexibleSection />
      <EducatorStorySection />
      <ValuesSection />
      <CtaSection />
      <HomeFooter />
    </main>
  );
};

export default HomePage;
