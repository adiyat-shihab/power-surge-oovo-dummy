import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
