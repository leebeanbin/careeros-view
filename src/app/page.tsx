import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { LogoBar } from "@/components/LogoBar";
import { NewSpeciesSection } from "@/components/NewSpeciesSection";
import { IntakeSection } from "@/components/features/IntakeSection";
import { PlanSection } from "@/components/features/PlanSection";
import { BuildSection } from "@/components/features/BuildSection";
import { DiffsSection } from "@/components/features/DiffsSection";
import { MonitorSection } from "@/components/features/MonitorSection";
import { ChangelogSection } from "@/components/ChangelogSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ backgroundColor: "rgb(8, 9, 10)", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ paddingTop: "73px" }}>
        <HeroSection />
        <LogoBar />
        <NewSpeciesSection />
        <IntakeSection />
        <PlanSection />
        <BuildSection />
        <DiffsSection />
        <MonitorSection />
        <ChangelogSection />
        <TestimonialsSection />
        <CtaSection />
        <Footer />
      </div>
    </main>
  );
}
