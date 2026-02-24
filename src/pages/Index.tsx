import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SubscribeSection from "@/components/SubscribeSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import ArticlesSection from "@/components/ArticlesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <SubscribeSection />
      <ProblemSection />
      <ServicesSection />
      <ArticlesSection />
      <Footer />
    </div>
  );
};

export default Index;
