import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ActivitiesSection } from '@/components/ActivitiesSection';
import { MissionVisionSection } from '@/components/MissionVisionSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <section id="activities">
          <ActivitiesSection />
        </section>
        <MissionVisionSection />
        <section id="projects">
          <ProjectsSection />
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
