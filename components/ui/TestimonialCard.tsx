import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  text: string;
  imageSrc: string;
  isOffset?: boolean;
}

export default function TestimonialCard({ name, text, imageSrc, isOffset = false }: TestimonialCardProps) {
  return (
    <div 
      className={`relative flex bg-[#EFEFEF] w-full max-w-[560px] min-h-[160px] shadow-2xl overflow-hidden transition-transform ${isOffset ? 'md:-ml-[40px] z-10' : 'z-0'}`}
    >
      {/* Red Strip */}
      <div className="w-[28px] shrink-0 bg-[#c60000] h-full"></div>
      
      {/* Content */}
      <div className="flex flex-1 items-center p-6 gap-6 relative">
        <div className="w-[90px] h-[90px] rounded-full overflow-hidden shrink-0 border-[4px] border-[#D9D9D9]">
          <Image 
            src={imageSrc} 
            width={90} 
            height={90} 
            alt={name} 
            className="object-cover w-full h-full" 
          />
        </div>
        
        <div className="flex flex-col flex-1 z-10">
          <h4 className="text-[22px] font-bold font-inter text-black uppercase mb-[8px]">{name}</h4>
          <p className="text-[14px] text-[#515151] leading-[1.4]">{text}</p>
        </div>

        {/* Quote Icon */}
        <div className="absolute top-[16px] right-[16px] opacity-40 z-0">
          <Image 
            src="/images/review/vector-21.svg" 
            width={48} 
            height={48} 
            alt="Quote" 
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
