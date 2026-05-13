import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#242424] text-white flex flex-col items-center pt-[100px] overflow-hidden">
      
      {/* Top Section */}
      <div className="w-full max-w-[1440px] px-4 md:px-[24px] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[40px] mb-[60px]">
        <h2 className="text-[32px] md:text-[42px] font-bold font-inter leading-[1.2] tracking-wider max-w-[500px] uppercase">
          Start Your Fitness Journey Today
        </h2>
        <p className="text-[20px] md:text-[26px] font-normal font-inter text-[#BDBDBD] leading-[1.6] max-w-[600px]">
          Transform your body, sharpen your mindset, and show up stronger every single day.
        </p>
      </div>

      {/* Main Divider */}
      <div className="w-full max-w-[1440px] h-[1px] bg-white opacity-20 mb-[80px]"></div>

      {/* Middle Section - Links & Contact */}
      <div className="w-full max-w-[1440px] px-4 md:px-[24px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[60px] lg:gap-[40px] mb-[80px]">
        
        {/* Col 1: Quick Links */}
        <div className="flex flex-col gap-[40px]">
          <h4 className="text-[26px] font-bold font-inter">Quick Links</h4>
          <nav className="flex flex-col gap-[20px]">
            {['Home', 'Programs', 'Trainers', 'About', 'Blog', 'Contact'].map((link) => (
              <Link key={link} href="#" className="text-[26px] font-normal font-inter hover:text-gym-red transition-colors">
                {link}
              </Link>
            ))}
          </nav>
        </div>

        {/* Col 2: Resources */}
        <div className="flex flex-col gap-[40px]">
          <h4 className="text-[26px] font-bold font-inter">Resources</h4>
          <nav className="flex flex-col gap-[20px]">
            {['Style Guide', 'Membership', 'Policy', 'Terms & Conditions', 'Support'].map((link) => (
              <Link key={link} href="#" className="text-[26px] font-normal font-inter hover:text-gym-red transition-colors">
                {link}
              </Link>
            ))}
          </nav>
        </div>

        {/* Col 3: Contact Details */}
        <div className="flex flex-col gap-[40px]">
          <h4 className="text-[26px] font-bold font-inter">Contact</h4>
          <div className="flex flex-col gap-[32px]">
            <div className="flex items-start gap-[24px]">
              <Image src="/images/footer/vector-23.svg" width={24} height={24} alt="Location" className="mt-1 shrink-0" />
              <p className="text-[26px] font-normal font-inter leading-[1.5]">
                4517 Willowbrook Street<br />
                Manchester, Kentucky 39495
              </p>
            </div>
            <div className="flex items-center gap-[24px]">
              <Image src="/images/footer/union-27.svg" width={24} height={24} alt="Email" className="shrink-0" />
              <a href="mailto:hello@example.com" className="text-[26px] font-normal font-inter leading-[1.5] hover:text-gym-red transition-colors">
                hello@example.com
              </a>
            </div>
            <div className="flex items-center gap-[24px]">
              <Image src="/images/footer/vector-31.svg" width={24} height={24} alt="Phone" className="shrink-0" />
              <a href="tel:01245678966" className="text-[26px] font-normal font-inter leading-[1.5] hover:text-gym-red transition-colors">
                01245678966
              </a>
            </div>

            {/* Social Icons (using composite logic to handle Figma's split SVGs) */}
            <div className="flex items-center gap-[32px] mt-[16px]">
              {/* Pinterest */}
              <a href="#" className="relative w-[50px] h-[50px] flex items-center justify-center bg-[#3F3F3F] rounded-full hover:bg-gym-red transition-colors">
                <Image src="/images/footer/vector-36.svg" width={20} height={20} alt="Pinterest" className="z-10" />
              </a>
              {/* LinkedIn */}
              <a href="#" className="relative w-[50px] h-[50px] flex items-center justify-center bg-[#3F3F3F] rounded-full hover:bg-gym-red transition-colors">
                <Image src="/images/footer/vector-39.svg" fill alt="LinkedIn Base" className="p-[14px] z-10" />
                <Image src="/images/footer/vector-40.svg" fill alt="LinkedIn Dot" className="p-[14px] z-20" />
                <Image src="/images/footer/vector-41.svg" fill alt="LinkedIn In" className="p-[14px] z-20" />
              </a>
              {/* Instagram */}
              <a href="#" className="relative w-[50px] h-[50px] flex items-center justify-center bg-[#3F3F3F] rounded-full hover:bg-gym-red transition-colors">
                <Image src="/images/footer/vector-44.svg" fill alt="Instagram Outline" className="p-[12px] z-10" />
                <Image src="/images/footer/vector-45.svg" fill alt="Instagram Inner" className="p-[12px] z-20" />
                <Image src="/images/footer/vector-46.svg" fill alt="Instagram Dot" className="p-[12px] z-20" />
              </a>
            </div>
          </div>
        </div>

        {/* Col 4: Opening Hours Card */}
        <div className="flex justify-start lg:justify-end">
          <div className="bg-white text-black p-[48px] w-full max-w-[400px] flex flex-col items-center shadow-xl">
            <h4 className="text-[26px] font-bold font-inter mb-[40px] text-center">
              Opening Hours
            </h4>
            <div className="flex flex-col gap-[24px] mb-[60px] text-center">
              <p className="text-[19.42px] font-normal font-inter leading-[1.4]">
                Monday - Friday: 6:00 AM - 10:00 PM
              </p>
              <p className="text-[19.42px] font-normal font-inter leading-[1.4]">
                Saturday - Sunday: 7:00 AM - 9:00 PM
              </p>
            </div>
            <button className="w-full bg-gym-red text-white font-bold text-[19.42px] py-[16px] hover:bg-gym-red-hover transition-colors">
              View Location
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Footer Section */}
      <div className="w-full h-[1px] bg-white opacity-20"></div>
      <div className="w-full py-[32px] flex justify-center">
        <p className="text-[16px] font-normal font-inter text-[#BDBDBD]">
          Copyright Fitforce All Right Reserved
        </p>
      </div>

    </footer>
  );
}
