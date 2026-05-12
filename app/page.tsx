import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import GridGallerySection from "@/components/sections/GridGallerySection";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <GridGallerySection />
    </main>
  );
}
