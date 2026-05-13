"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

interface AccordionItemProps {
  number: string;
  question: string;
  answer: string;
  imageSrc?: string;
  defaultOpen?: boolean;
}

export default function AccordionItem({ 
  number, 
  question, 
  answer, 
  imageSrc, 
  defaultOpen = false 
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full border-b-2 border-[#555555]">
      {/* Header (Always Visible) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-[40px] text-left hover:opacity-80 transition-opacity"
      >
        <div className="flex items-center gap-[40px] md:gap-[80px]">
          <span className="text-[26px] font-normal font-helvetica text-white w-[40px]">
            {number}
          </span>
          <span className="text-[26px] font-bold font-inter text-white">
            {question}
          </span>
        </div>
        
        {/* Arrow Icon */}
        <motion.div 
          animate={{ rotate: isOpen ? 90 : 0 }} 
          transition={{ duration: 0.3 }}
          className="shrink-0 ml-4"
        >
          <Image 
            src="/images/faq/vector-12.svg" 
            width={24} 
            height={24} 
            alt="Toggle" 
            className="object-contain"
          />
        </motion.div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pl-[80px] md:pl-[120px] pb-[40px] pr-4 max-w-[900px]">
              
              <p className="text-[#9e9e9e] text-[16px] font-medium leading-[1.6] mb-[40px]">
                {answer}
              </p>

              {imageSrc && (
                <div className="w-full max-w-[600px] border-[8px] border-white mb-[40px]">
                  <Image 
                    src={imageSrc} 
                    width={600} 
                    height={400} 
                    layout="responsive"
                    alt={question}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              {/* Start Now Button */}
              <div className="flex items-center gap-[16px]">
                <button className="bg-gym-red text-white font-bold text-[19.42px] py-[13px] px-[24px] hover:bg-gym-red-hover transition-colors">
                  Start Now
                </button>
                <button className="bg-gym-red p-[13px] flex items-center justify-center hover:bg-gym-red-hover transition-colors">
                  <Image src="/images/faq/vector-45.svg" width={16} height={16} alt="Arrow Up Right" />
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
