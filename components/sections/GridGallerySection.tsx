import Image from 'next/image';

export default function GridGallerySection() {
  return (
    <section className="w-full bg-[var(--background-dark)] flex justify-center">
      {/* Container maintains the aspect ratio of the visible area with NO white space */}
      <div 
        className="relative w-full overflow-hidden" 
        style={{ aspectRatio: '1656 / 823' }}
      >
        {/* Inner group holds the full 2192px width, shifted left by 268px */}
        <div 
          className="absolute top-0 h-full"
          style={{ 
            width: '132.36715%', // (2192 / 1656) * 100
            left: '-16.18357%',  // (-268 / 1656) * 100
          }}
        >
          <div className="absolute top-0 left-0 w-[34.1697%] h-full">
            <Image 
              src="/images/grid/rectangle-10-3.svg" 
              fill 
              alt="Grid Image 1" 
              className="object-cover" 
            />
          </div>
          <div className="absolute top-0 left-[21.9434%] w-[34.1697%] h-full">
            <Image 
              src="/images/grid/rectangle-16-4.svg" 
              fill 
              alt="Grid Image 2" 
              className="object-cover" 
            />
          </div>
          <div className="absolute top-0 left-[43.8868%] w-[34.1697%] h-full">
            <Image 
              src="/images/grid/rectangle-12-5.svg" 
              fill 
              alt="Grid Image 3" 
              className="object-cover" 
            />
          </div>
          <div className="absolute top-0 left-[65.8302%] w-[34.1697%] h-full">
            <Image 
              src="/images/grid/rectangle-14-6.svg" 
              fill 
              alt="Grid Image 4" 
              className="object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
