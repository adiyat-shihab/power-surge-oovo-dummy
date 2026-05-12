import Image from 'next/image';

interface CrewCardProps {
  name: string;
  imageSrc: string;
}

export default function CrewCard({ name, imageSrc }: CrewCardProps) {
  return (
    <div className="relative w-[340px] shrink-0 flex flex-col items-center group pt-[40px]">
      
      {/* Background Red Arch */}
      <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[240px] h-[260px] rounded-t-[120px] bg-[#750000] z-0 overflow-hidden">
         {/* Use the provided arch image */}
         <Image 
           src="/images/crew/Rectangle 25.png" 
           fill 
           alt="Arch Background"
           className="object-cover"
           draggable={false}
         />
      </div>

      {/* Trainer Image */}
      <div className="relative w-[320px] h-[340px] z-10 flex justify-center items-end">
        <Image 
          src={imageSrc} 
          width={320} 
          height={340} 
          alt={name} 
          className="object-contain drop-shadow-xl"
          draggable={false}
        />
      </div>

      {/* Dark Gray Info Card */}
      <div className="relative w-full bg-[#242424] rounded-t-[40px] p-[30px] pt-[40px] z-20 -mt-[40px] flex flex-col">
        
        {/* Social Icons floating on the border */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-[12px]">
          <button className="w-[40px] h-[40px] bg-[#c60000] flex items-center justify-center rounded-[4px] hover:bg-red-700 transition-colors">
            <Image src="/images/crew/Vector.png" width={16} height={16} alt="Social 1" className="object-contain" draggable={false} />
          </button>
          <button className="w-[40px] h-[40px] bg-[#c60000] flex items-center justify-center rounded-[4px] hover:bg-red-700 transition-colors">
            <Image src="/images/crew/Vector (1).png" width={16} height={16} alt="Social 2" className="object-contain" draggable={false} />
          </button>
          <button className="w-[40px] h-[40px] bg-[#c60000] flex items-center justify-center rounded-[4px] hover:bg-red-700 transition-colors">
            <Image src="/images/crew/Vector (2).png" width={16} height={16} alt="Social 3" className="object-contain" draggable={false} />
          </button>
        </div>

        {/* Text Content */}
        <h4 className="text-[#c60000] font-bold text-[20px] mb-[12px] text-left">{name}</h4>
        <p className="text-[#d2d2d2] text-[13px] leading-[1.6] mb-[24px] text-left">
          Lorem ipsum dolor sit amet consectetur. Massa nulla nulla tempus placerat sed amet sem nibh vitae.
        </p>

        {/* Action Button */}
        <button className="w-full bg-[#c60000] text-white py-[12px] font-bold text-[16px] hover:bg-red-700 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}
