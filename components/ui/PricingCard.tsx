import Image from 'next/image';

interface PricingFeature {
  name: string;
}

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  features: PricingFeature[];
  isFeatured?: boolean;
}

export default function PricingCard({ 
  title, 
  description, 
  price, 
  features, 
  isFeatured = false 
}: PricingCardProps) {
  return (
    <div 
      className={`flex flex-col bg-[#242424] text-white transition-transform duration-300 ${
        isFeatured ? 'scale-105 shadow-2xl z-10 py-[40px]' : 'scale-100 py-[32px]'
      } px-[24px] w-full max-w-[400px] h-full`}
    >
      {/* Header Info */}
      <div className="flex flex-col gap-[16px] mb-[32px]">
        <h3 className="text-[26px] font-bold font-inter uppercase tracking-wide">
          {title}
        </h3>
        <p className="text-[16px] font-normal font-inter text-[#d2d2d2] leading-[1.4]">
          {description}
        </p>
        <div className="flex items-baseline gap-[8px] mt-[8px]">
          <span className="text-[68px] font-bold font-inter leading-none">${price}</span>
          <span className="text-[26px] font-normal font-inter">/month</span>
        </div>
      </div>

      {/* Features List */}
      <div className="flex-1 bg-[#2D2D2D] p-[24px] flex flex-col gap-[20px] mb-[32px]">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-[16px]">
            <div className="w-[24px] h-[24px] shrink-0 flex items-center justify-center rounded-full border-[1.5px] border-white">
               {/* Checkmark using the provided vector SVG or a simple SVG path */}
               <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </div>
            <span className="text-[16px] font-normal font-inter leading-[1.4]">
              {feature.name}
            </span>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <div className="flex items-center gap-[12px] w-full mt-auto">
        <button className="flex-1 bg-gym-red text-white font-bold text-[19.42px] py-[13px] hover:bg-gym-red-hover transition-colors">
          Start Now
        </button>
        <button className="bg-gym-red p-[13px] flex items-center justify-center shrink-0 hover:bg-gym-red-hover transition-colors h-[51px] w-[51px]">
          <Image src="/images/pricing/vector-52.svg" width={16} height={16} alt="Arrow Right" />
        </button>
      </div>

    </div>
  );
}
