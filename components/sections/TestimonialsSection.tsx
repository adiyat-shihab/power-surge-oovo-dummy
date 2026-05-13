import Image from 'next/image';
import TestimonialCard from '../ui/TestimonialCard';

const TESTIMONIALS = [
  {
    name: 'Mishu Sabbir',
    text: 'Lorem ipsum dolor sit amet consectetur. Massa ut cras augue lectus. At tellus cras diam erat id euismod risus.',
    imageSrc: '/images/review/ellipse-4-26.svg',
  },
  {
    name: 'Benjamin Beer',
    text: 'Lorem ipsum dolor sit amet consectetur. Massa ut cras augue lectus. At tellus cras diam erat id euismod risus.',
    imageSrc: '/images/review/ellipse-4-36.svg',
  },
  {
    name: 'Josh Fahey',
    text: 'Lorem ipsum dolor sit amet consectetur. Massa ut cras augue lectus. At tellus cras diam erat id euismod risus.',
    imageSrc: '/images/review/ellipse-4-46.svg',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#242424] text-white flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row">
        
        {/* Left Column - Content */}
        <div className="w-full lg:w-1/2 p-8 lg:p-[80px] lg:pr-[40px] flex flex-col justify-center">
          <h2 className="text-[48px] lg:text-[68px] font-bold font-inter leading-[1.1] uppercase mb-[24px]">
            What Our<br />Customer<br />Says
          </h2>
          <p className="text-[20px] lg:text-[26px] font-normal font-inter leading-[1.2] text-[#d2d2d2] mb-[40px] max-w-[480px]">
            Lorem ipsum dolor sit amet consectetur. Nulla enim morbi mi etiam cursus. Nullam neque eu elementum leo.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-[16px] mb-[60px]">
            <button className="bg-gym-red text-white font-bold text-[19.42px] py-[13px] px-[24px] hover:bg-gym-red-hover transition-colors">
              About Us
            </button>
            <button className="bg-gym-red p-[13px] flex items-center justify-center hover:bg-gym-red-hover transition-colors">
              <Image src="/images/review/vector-14.svg" width={16} height={16} alt="Arrow Right" />
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-[8px]">
            <h3 className="text-[42px] font-medium font-inter tracking-[0.04em] leading-none">
              12K+
            </h3>
            <p className="text-[26px] font-normal font-inter text-[#d2d2d2] leading-none">
              Happy<br />Members
            </p>
          </div>
        </div>

        {/* Right Column - Cards */}
        <div className="w-full lg:w-1/2 p-8 lg:p-[80px] relative flex justify-center lg:justify-start items-center">
          
          {/* Vertical Divider Line */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[7px] bg-[#B9B9B9]"></div>
          
          <div className="flex flex-col gap-[40px] w-full max-w-[560px] lg:pl-[60px] z-10">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                text={testimonial.text}
                imageSrc={testimonial.imageSrc}
                isOffset={index === 1} // The middle card is offset to the left
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
