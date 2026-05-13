import AccordionItem from '../ui/AccordionItem';

const FAQ_DATA = [
  {
    number: '01',
    question: 'Is this gym suitable for beginners?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Auctor tortor egestas amet ultricies. Lobortis viverra quam suscipit velit enim. A felis dictum mauris mattis netus orci mi duis maecenas. Rhoncus sed pulvinar nisl praesent. Pellentesque amet suspendisse sagittis nullam eget augue. Purus porttitor lacus commodo morbi sagittis dictum. Aliquet lorem mauris est eget volutpat faucibus sed mauris.',
    imageSrc: '/images/faq/rectangle-36-38.png',
  },
  {
    number: '02',
    question: 'Do I need a long-term commitment?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Auctor tortor egestas amet ultricies. Lobortis viverra quam suscipit velit enim. A felis dictum mauris mattis netus orci mi duis maecenas.',
  },
  {
    number: '03',
    question: 'What makes your gym different?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Auctor tortor egestas amet ultricies. Lobortis viverra quam suscipit velit enim.',
  },
  {
    number: '04',
    question: 'Can I try the gym before joining?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Auctor tortor egestas amet ultricies. Lobortis viverra quam suscipit velit enim.',
  },
  {
    number: '05',
    question: 'What kind of equipment do you have?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Auctor tortor egestas amet ultricies. Lobortis viverra quam suscipit velit enim.',
  },
];

export default function FaqSection() {
  return (
    <section className="w-full bg-[#242424] text-white py-[100px] flex justify-center">
      <div className="w-full max-w-[1440px] px-4 md:px-[24px]">
        
        {/* Header Section */}
        <div className="flex items-center justify-between gap-[20px] md:gap-[80px] mb-[80px]">
          <div className="flex-1 h-[8px] bg-white hidden md:block"></div>
          <h2 className="text-[28px] md:text-[42px] font-bold font-inter text-center uppercase tracking-wide">
            Programs Designed For Real<br className="hidden md:block" /> Progress
          </h2>
          <div className="flex-1 h-[8px] bg-white hidden md:block"></div>
        </div>

        {/* Accordion List */}
        <div className="w-full border-t-2 border-[#555555]">
          {FAQ_DATA.map((item, index) => (
            <AccordionItem 
              key={index}
              number={item.number}
              question={item.question}
              answer={item.answer}
              imageSrc={item.imageSrc}
              defaultOpen={index === 0} // Open the first one by default as shown in the design
            />
          ))}
        </div>

      </div>
    </section>
  );
}
