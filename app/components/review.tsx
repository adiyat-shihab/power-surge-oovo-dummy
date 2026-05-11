"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";
import Image from "next/image";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  review: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "MISHU SABIR",
    role: "UI/UX DESIGNER",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    review:
      "Lorem ipsum dolor sit amet consectetur. Massa ut cras augue lectus at tellus cras diam erat id euismod risus.",
  },
  {
    id: 2,
    name: "BENJAMIN BEER",
    role: "FULL STACK DEVELOPER",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    review:
      "Lorem ipsum dolor sit amet consectetur. Massa ut cras augue lectus at tellus cras diam erat id euismod risus.",
  },
  {
    id: 3,
    name: "JOSH FAHEY",
    role: "SOFTWARE ENGINEER",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=400&auto=format&fit=crop",
    review:
      "Lorem ipsum dolor sit amet consectetur. Massa ut cras augue lectus at tellus cras diam erat id euismod risus.",
  },
];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative flex items-center gap-4 overflow-hidden bg-white px-5 py-4 shadow-xl"
    >
      {/* Red Side Accent */}
      <div className="absolute left-0 top-0 h-full w-4 bg-red-600" />

      {/* Image */}
      <div className="relative z-10 h-20 w-20 shrink-0 overflow-hidden rounded-full">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1">
        <h3 className="text-lg font-extrabold uppercase tracking-wide text-zinc-900">
          {item.name}
        </h3>

        <p className="mt-1 text-xs font-medium uppercase tracking-wider text-red-500">
          {item.role}
        </p>

        <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-500">
          {item.review}
        </p>
      </div>

      {/* Quote Icon */}
      <Quote
        size={34}
        strokeWidth={2.5}
        className="absolute right-4 top-4 text-red-300"
      />
    </motion.div>
  );
}

export default function TestimonialSection() {
  return (
    <section className="bg-[#2d2d2d] px-6 py-16 text-white md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.2fr]">
        {/* Left Side */}
        <div className="border-r border-white/20 pr-0 lg:pr-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-xs text-5xl font-black uppercase leading-[0.95]"
          >
            What Our Customer Says
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-8 max-w-sm text-base leading-relaxed text-zinc-300"
          >
            Lorem ipsum dolor sit amet consectetur. Nulla enim morbi mi etiam
            cursus. Nullam neque eu elementum leo.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 flex items-center gap-2"
          >
            <button className="bg-red-600 px-6 py-3 text-sm font-semibold transition hover:bg-red-700">
              About Us
            </button>

            <button className="flex h-12 w-12 items-center justify-center bg-red-600 transition hover:bg-red-700">
              <ArrowUpRight size={18} />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-5xl font-extrabold">12K+</h3>
            <p className="mt-2 text-lg text-zinc-300">Happy Members</p>
          </motion.div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center gap-6 lg:pl-8">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}