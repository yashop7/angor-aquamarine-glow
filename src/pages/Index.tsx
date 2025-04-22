
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { TechSection } from '../components/TechSection';
import { HubSection } from '../components/HubSection';
import { FAQSection } from '../components/FAQSection';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-angor-darkTeal">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TechSection />
        <HubSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
