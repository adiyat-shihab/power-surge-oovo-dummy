import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import GridGallerySection from "@/components/sections/GridGallerySection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import CrewSection from "@/components/sections/CrewSection";
import FaqSection from "@/components/sections/FaqSection";
import SupplementsSection from "@/components/sections/SupplementsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <GridGallerySection />
      <AboutUsSection />
      <CrewSection />
      <FaqSection />
      <SupplementsSection />
      <TestimonialsSection />
      <PricingSection />
    </main>
  );
}
