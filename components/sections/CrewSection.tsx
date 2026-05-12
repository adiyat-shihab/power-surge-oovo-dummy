"use client";

import { useRef } from 'react';
import { motion } from 'motion/react';
import CrewCard from '../ui/CrewCard';

const CREW_MEMBERS = [
  {
    name: 'Name 1',
    imageSrc: '/images/crew/Rectangle 45.png',
  },
  {
    name: 'Name 2',
    imageSrc: '/images/crew/Rectangle 45 (1).png',
  },
  {
    name: 'Name 3',
    imageSrc: '/images/crew/Rectangle 45 (2).png',
  },
  {
    name: 'Name 4',
    imageSrc: '/images/crew/Rectangle 45 (3).png',
  },
];

export default function CrewSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full bg-white text-black py-20 flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-[1440px] px-4 md:px-[24px]">
        
        {/* Top Header */}
        <div className="flex items-center gap-[40px] mb-[60px] w-full">
           <h2 className="text-[42px] font-bold leading-[1.2] whitespace-nowrap">Our Crew</h2>
           <div className="flex-1 h-[8px] bg-black"></div>
        </div>

        {/* Carousel Container */}
        <div ref={carouselRef} className="w-full overflow-hidden cursor-grab active:cursor-grabbing">
          <motion.div 
            drag="x"
            dragConstraints={carouselRef}
            className="flex gap-[80px] w-max px-4 pb-[40px]"
          >
            {CREW_MEMBERS.map((member, index) => (
              <CrewCard key={index} name={member.name} imageSrc={member.imageSrc} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
