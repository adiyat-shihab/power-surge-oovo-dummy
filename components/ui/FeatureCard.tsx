import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center gap-6.5 w-full ">
      <div className="w-45 h-45 rounded-full bg-[#EBEAEA] flex justify-center items-center">
        {icon}
      </div>
      <div className="flex flex-col items-center gap-2 text-center px-4">
        <h3 className=" leading-relaxed font-bold uppercase text-[#242424] text-3xl font-helvetica tracking-wide">
          {title}
        </h3>
        <p className="text-[16px] leading-relaxed   font-medium text-center text-[#4C4C4C] px-14  capitalize">
          {description}
        </p>
      </div>
    </div>
  );
}
