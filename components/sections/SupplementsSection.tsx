import Image from 'next/image';

const SUPPLEMENT_IMAGES = [
  '/images/review/rectangle-32-52.png',
  '/images/review/rectangle-38-53.png',
  '/images/review/rectangle-37-54.png',
  '/images/review/rectangle-36-55.png',
  '/images/review/rectangle-35-56.png',
  '/images/review/rectangle-34-57.png',
  '/images/review/rectangle-33-58.png',
];

export default function SupplementsSection() {
  return (
    <section className="w-full bg-white text-black py-[100px] flex justify-center overflow-hidden">
      <div className="w-full max-w-[1440px] px-4 md:px-[24px] flex flex-col items-center">
        
        {/* Header Section */}
        <h2 className="text-[42px] font-bold font-inter text-center mb-[60px]">
          Supplements
        </h2>

        {/* Carousel Container */}
        <div className="w-full overflow-x-auto pb-[20px] hide-scrollbar">
          <div className="flex gap-[20px] w-max mx-auto">
            {SUPPLEMENT_IMAGES.map((src, index) => (
              <div key={index} className="w-[300px] shrink-0 border-[9px] border-black">
                <Image 
                  src={src} 
                  width={300} 
                  height={300} 
                  layout="responsive"
                  alt={`Supplement ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
