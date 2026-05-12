import Image from 'next/image';

export default function AboutUsSection() {
  return (
    <section className="w-full bg-[#242424] text-white py-20 flex justify-center">
      <div className="w-full max-w-[1440px] px-4 md:px-[24px]">
        {/* Top Header */}
        <div className="flex items-center gap-[40px] mb-20 w-full">
           <div className="flex-1 h-[8px] bg-white"></div>
           <h2 className="text-[42px] font-bold leading-[1.2] whitespace-nowrap">About US</h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-[72px]">
          {/* Left Column - Image */}
          <div className="w-full lg:w-1/2 shrink-0 relative flex justify-center">
             <div className="w-full max-w-[700px] border-[14px] border-white relative aspect-[0.76]">
                <Image 
                  src="/images/about_us/rectangle-19-4.png"
                  fill
                  alt="PowerSurge Gym Team"
                  className="object-cover"
                />
             </div>
          </div>

          {/* Right Column - Text & CTA */}
          <div className="w-full lg:w-1/2 flex flex-col gap-[40px]">
             <h3 className="text-[68px] font-normal leading-[1.2] tracking-[0.11em] uppercase">
                SUPPORTING YOUR<br/>FITNESS JOURNEY
             </h3>
             <p className="text-[26px] font-normal leading-[1.2] tracking-[0.02em]">
                PowerSurge Gym is built for those who refuse to settle for average and are driven to push beyond their limits. We provide a high-performance environment with expert guidance and top-tier equipment to help you transform. At PowerSurge, it’s not just about fitness—it’s about becoming the strongest version of yourself.
             </p>
             
             {/* CTA Buttons */}
             <div className="flex items-center gap-[16px]">
                <button className="bg-gym-red text-white font-bold text-[19.42px] py-[13px] px-[24px] hover:bg-gym-red-hover transition-colors">
                   About Us
                </button>
                <button className="bg-gym-red p-[13px] flex items-center justify-center hover:bg-gym-red-hover transition-colors">
                   <Image src="/images/about_us/vector-15.svg" width={16} height={16} alt="Arrow Up Right" />
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
