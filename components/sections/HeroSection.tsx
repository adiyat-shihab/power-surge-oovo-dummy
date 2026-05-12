import Image from "next/image";
import Navbar from "../layout/Navbar";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100vh] flex flex-col items-center bg-gym-dark overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/background-2.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] flex flex-col h-[100vh]">
        <Navbar />
        {/* Hero Content */}
        <div className="flex-grow flex flex-col justify-center mt-12 pb-24">
          <div className="flex flex-col gap-[80px]">
            <div className="flex flex-col gap-[64px]">
              <div className="flex flex-col gap-[40px]">
                <h1 className="text-[68px] leading-[1.2] font-bold uppercase text-white font-helvetica">
                  Level Up Your
                  <br />
                  Fitness Game
                </h1>
                <p className="text-[28px] leading-[1.4] text-[#BABABA] capitalize font-roboto  tracking-[0.04em] max-w-[700px]">
                  Transform your body, sharpen your mind and become your best
                  self.
                </p>
              </div>
              <button className="bg-[#c60000] cursor-pointer hover:bg-[#c0000b] text-white text-[19.42px] font-bold py-[13px] px-[24px] w-fit transition-colors">
                Join Now
              </button>
            </div>

            {/* Rating */}
            <div className="flex flex-col gap-2">
              <p className="text-[26px] font-medium text-white tracking-[0.04em]">
                12K+
              </p>
              <div className="flex gap-2">
                <Image
                  src="/images/hero/star-1-57.svg"
                  alt="star"
                  width={24}
                  height={24}
                />
                <Image
                  src="/images/hero/star-2-58.svg"
                  alt="star"
                  width={24}
                  height={24}
                />
                <Image
                  src="/images/hero/star-3-59.svg"
                  alt="star"
                  width={24}
                  height={24}
                />
                <Image
                  src="/images/hero/star-4-60.svg"
                  alt="star"
                  width={24}
                  height={24}
                />
                <Image
                  src="/images/hero/star-5-61.svg"
                  alt="star"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Indicators - Absolute to the container */}
        <div className="absolute bottom-[200px] left-[55%] flex gap-8 z-30">
          <Image
            src="/images/hero/ellipse-1-43.svg"
            alt="dot"
            width={12}
            height={12}
          />
          <Image
            src="/images/hero/ellipse-2-44.svg"
            alt="dot"
            width={12}
            height={12}
          />
          <Image
            src="/images/hero/ellipse-3-45.svg"
            alt="dot"
            width={12}
            height={12}
          />
        </div>

        {/* Bottom Bar Stats */}
        <div className="w-full flex justify-between items-end mt-auto z-30 pb-12">
          <div className="flex flex-col gap-2 flex-1 items-center border-b-[3px] border-r-[3px] border-white/25 pb-8 relative left-0">
            <h3 className="text-[42px] leading-[1.4] font-medium uppercase text-white tracking-[0.04em]">
              10+
            </h3>
            <p className="text-[26px] leading-[1.4] font-medium capitalize text-[#D2D2D2] tracking-[0.04em]">
              Year Of Experience
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-1 items-center border-b-[5px] border-r-[5px] border-white/25 pb-8">
            <h3 className="text-[42px] leading-[1.4] font-medium uppercase text-white tracking-[0.04em]">
              99%
            </h3>
            <p className="text-[26px] leading-[1.4] font-medium capitalize text-[#D2D2D2] tracking-[0.04em]">
              People Got Result
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-1 items-center border-b-[5px] border-white/25 pb-8 relative right-0">
            <h3 className="text-[42px] leading-[1.4] font-medium uppercase text-white tracking-[0.04em]">
              500+
            </h3>
            <p className="text-[26px] leading-[1.4] font-medium capitalize text-[#D2D2D2] tracking-[0.04em]">
              Clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
