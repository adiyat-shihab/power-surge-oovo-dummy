import PricingCard from '../ui/PricingCard';

const FEATURES_LIST = [
  { name: 'Access To All Group Workout Sessions' },
  { name: 'Gym Entry During Staffed Hours' },
  { name: 'Complimentary Fitness Evaluation' },
  { name: 'Locker & Shower Use' },
  { name: '5% Off On Gym Merchandise' },
];

const PRICING_PLANS = [
  {
    title: 'Starter Plan',
    description: 'Perfect for beginners looking to join classes without any pressure.',
    price: '50',
    features: FEATURES_LIST,
    isFeatured: false,
  },
  {
    title: 'PRO',
    description: 'Perfect for beginners looking to join classes without any pressure.',
    price: '75',
    features: FEATURES_LIST,
    isFeatured: true,
  },
  {
    title: 'ELITE',
    description: 'Perfect for beginners looking to join classes without any pressure.',
    price: '125',
    features: FEATURES_LIST,
    isFeatured: false,
  },
];

export default function PricingSection() {
  return (
    <section className="w-full bg-white text-black py-[120px] flex justify-center">
      <div className="w-full max-w-[1440px] px-4 md:px-[24px]">
        
        {/* Header Section */}
        <div className="flex items-center justify-between gap-[20px] md:gap-[40px] mb-[80px]">
          <div className="flex-1 h-[8px] bg-black hidden md:block"></div>
          <h2 className="text-[42px] font-bold font-inter text-center">
            Pricing
          </h2>
          <div className="flex-1 h-[8px] bg-black hidden md:block"></div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-[40px] lg:gap-[30px] pt-[20px]">
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard 
              key={index}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              features={plan.features}
              isFeatured={plan.isFeatured}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
