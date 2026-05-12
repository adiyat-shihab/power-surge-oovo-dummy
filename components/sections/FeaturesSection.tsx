import Image from "next/image";
import FeatureCard from "../ui/FeatureCard";

export default function FeaturesSection() {
  const descriptionText =
    "Lorem ipsum dolor sit amet consectetur. Aliquam ac non pretium molestie mollis commodo ullamcorper pulvinar consectetur.";

  return (
    <section className="w-full bg-white py-[120px]">
      <div className="w-full  mx-auto px-6 md:px-16 lg:px-[120px]">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-16 md:gap-8">
          <FeatureCard
            title="Transform your body"
            description={descriptionText}
            icon={
              <div className="relative w-17.5 h-[70px]">
                <Image
                  src="/images/feature/vector-9.svg"
                  alt="Dumbbell icon"
                  fill
                  className="object-contain"
                />
              </div>
            }
          />

          <FeatureCard
            title="Transform your body"
            description={descriptionText}
            icon={
              <div className="relative w-[70px] h-[70px]">
                <Image
                  src="/images/feature/vector-16.svg"
                  alt="Flexing arm icon"
                  fill
                  className="object-contain"
                />
              </div>
            }
          />

          <FeatureCard
            title="Transform your body"
            description={descriptionText}
            icon={
              <div className="relative w-[70px] h-[70px]">
                <Image
                  src="/images/feature/vector-23.svg"
                  alt="Money icon base"
                  fill
                  className="object-contain absolute inset-0 z-0"
                />
                <Image
                  src="/images/feature/vector-24.svg"
                  alt="Money icon detail"
                  fill
                  className="object-contain absolute inset-0 z-10"
                />
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
