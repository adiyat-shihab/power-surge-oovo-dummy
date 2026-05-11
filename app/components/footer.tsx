import {
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { JSX } from "react";

const quickLinks: string[] = [
  "Home",
  "Programs",
  "Trainers",
  "About",
  "Blog",
  "Contact",
];

const resources: string[] = [
  "Style Guide",
  "Membership",
  "Policy",
  "Terms & Conditions",
  "Support",
];

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-[#1f1f1f] font-sans text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 pb-14 border-b border-white/10">
          <div>
            <h2 className="text-[#FFFFFF] font-sans text-4xl md:text-5xl font-extrabold leading-tight tracking-wide uppercase">
              Start Your Fitness
              <br />
              Journey Today
            </h2>
          </div>

          <p className=" max-w-md text-[#BDBDBD] text-sm md:text-base leading-7">
            Transform your body, sharpen your mindset, and show up
            stronger every single day.
          </p>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-14">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>

            <ul className="space-y-4 text-gray-400">
              {quickLinks.map((item: string) => (
                <li
                  key={item}
                  className="hover:text-white transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>

            <ul className="space-y-4 text-gray-400">
              {resources.map((item: string) => (
                <li
                  key={item}
                  className="hover:text-white transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>

            <div className="space-y-5 text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0" />

                <p className="leading-6">
                  4517 Willowbrook Street
                  <br />
                  Manchester, Kentucky 39495
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <p>hello@example.com</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <p>01245678966</p>
              </div>
            </div>

            {/* Social Icons */}
            {/* <div className="flex items-center gap-4 mt-8">
              <button className="w-11 h-11 rounded-full bg-white/10 hover:bg-red-600 transition flex items-center justify-center">
            
              </button>

              <button className="w-11 h-11 rounded-full bg-white/10 hover:bg-red-600 transition flex items-center justify-center">
              </button>
            </div> */}
          </div>

          {/* Opening Hours */}
          <div className="bg-white text-[#000000] p-8 rounded-sm h-fit">
            <h3 className="text-xl font-bold mb-8">Opening Hours</h3>

            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex justify-between gap-4">
                <span>Monday - Friday</span>
                <span>5:00 AM - 10:00 PM</span>
              </div>

              <div className="flex justify-between gap-4">
                <span>Saturday - Sunday</span>
                <span>7:00 AM - 9:00 PM</span>
              </div>
            </div>

            <button className="w-full mt-8 bg-red-600 hover:bg-red-700 transition text-white py-3 font-semibold">
              View Location
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          Copyright © Fitcore All Rights Reserved
        </div>
      </div>
    </footer>
  );
}