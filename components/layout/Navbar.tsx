import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-8 z-50 relative">
      {/* Left side: Logo */}
      <div className="flex items-center gap-6">
        <div className="relative w-[50px] h-[50px]">
          <Image
            src="/images/hero/1-78-9.png"
            alt="PowerSurge Logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-center justify-center -mt-1">
          <span className="text-[11.32px] font-normal text-white leading-[1.2]">
            PowerSurge
          </span>
          <div className="flex items-center gap-[3px]">
            <Image
              src="/images/hero/line-2-13.svg"
              alt="line"
              width={15}
              height={1}
            />
            <span className="text-[13.74px] font-bold text-white tracking-[0.36em] leading-[1.2] ml-1">
              Gym
            </span>
            <Image
              src="/images/hero/line-1-15.svg"
              alt="line"
              width={15}
              height={1}
            />
          </div>
        </div>
      </div>

      {/* Center: Links */}
      <div className="flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
        <Link
          href="#"
          className="text-base font-medium text-white hover:text-gym-gray transition-colors"
        >
          Home
        </Link>
        <Link
          href="#"
          className="text-base font-medium text-white hover:text-gym-gray transition-colors"
        >
          Podcast
        </Link>
        <div className="flex items-center gap-2 cursor-pointer group">
          <span className="text-base font-medium text-white group-hover:text-gym-gray transition-colors">
            Feature
          </span>
          <Image
            src="/images/hero/vector-24.svg"
            alt="dropdown"
            width={10}
            height={6}
            className="mt-0.5"
          />
        </div>
        <Link
          href="#"
          className="text-base font-medium text-white hover:text-gym-gray transition-colors"
        >
          About Us
        </Link>
      </div>

      {/* Right side: Button */}
      <button className="bg-[#c60000] hover:bg-[#c0000b] cursor-pointer text-white text-[19.42px] font-bold py-[13px] px-[24px] rounded-[4px] transition-colors">
        Explore
      </button>
    </nav>
  );
}
