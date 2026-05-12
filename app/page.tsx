import Image from "next/image";
import Footer from "./components/footer";
import PricingSection from "./components/pricing";
import ReviewSection from "./components/review";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
       <main>
        <ReviewSection></ReviewSection>
        <PricingSection></PricingSection>
        <Footer></Footer>
       </main>
    </div>
  );
}
