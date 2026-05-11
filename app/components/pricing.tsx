// PricingSection.tsx

import { Check, ArrowUpRight } from "lucide-react";
import { JSX } from "react";

type Plan = {
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "STARTER PLAN",
    price: 50,
    features: [
      "Access To All Group Workout Sessions",
      "Gym Entry During Staffed Hours",
      "Complimentary Fitness Evaluation",
      "Locker & Shower Use",
      "5% Off On Gym Merchandise",
    ],
  },
  {
    name: "PRO",
    price: 75,
    popular: true,
    features: [
      "Access To All Group Workout Sessions",
      "Gym Entry During Staffed Hours",
      "Complimentary Fitness Evaluation",
      "Locker & Shower Use",
      "5% Off On Gym Merchandise",
    ],
  },
  {
    name: "ELITE",
    price: 125,
    features: [
      "Access To All Group Workout Sessions",
      "Gym Entry During Staffed Hours",
      "Complimentary Fitness Evaluation",
      "Locker & Shower Use",
      "5% Off On Gym Merchandise",
    ],
  },
];

export default function PricingSection(): JSX.Element {
  return (
    <section className="bg-[#f4f4f4] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex items-center gap-5 mb-14">
          <div className="flex-1 h-[3px] bg-black" />

          <h2 className="text-4xl text-black font-extrabold uppercase tracking-wide">
            Pricing
          </h2>

          <div className="flex-1 h-[3px] bg-black" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan: Plan, index: number) => (
            <div
              key={index}
              className={`bg-[#1f1f1f] text-white p-6 shadow-2xl transition hover:-translate-y-2 duration-300 ${
                plan.popular ? "scale-[1.03]" : ""
              }`}
            >
              {/* Plan Name */}
              <h3 className="text-2xl font-bold uppercase mb-4">
                {plan.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-6 mb-6">
                Perfect for beginners looking to join classes without
                any pressure.
              </p>

              {/* Price */}
              <div className="flex items-end gap-2 mb-8">
                <span className="text-6xl font-extrabold">
                  ${plan.price}
                </span>

                <span className="text-xl text-gray-300 mb-2">
                  /month
                </span>
              </div>

              {/* Features */}
              <div className="bg-[#2a2a2a] p-5 space-y-5 mb-6">
                {plan.features.map(
                  (feature: string, featureIndex: number) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center shrink-0">
                        <Check size={14} />
                      </div>

                      <p className="text-sm text-gray-300 leading-5">
                        {feature}
                      </p>
                    </div>
                  )
                )}
              </div>

              {/* Buttons */}
              <div className="flex gap-2">
                <button className="flex-1 bg-red-600 hover:bg-red-700 transition py-4 font-semibold text-lg">
                  Start Now
                </button>

                <button className="w-16 bg-red-600 hover:bg-red-700 transition flex items-center justify-center">
                  <ArrowUpRight size={22} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}