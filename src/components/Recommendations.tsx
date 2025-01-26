import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef } from 'react';

const recommendations = [
    {
    name: "Alexis Sosa - MBA Colleague",
    role: "High Value Commercial Service Lead at Wester Alliance Bank",
    image: "/alexis.png", 
    text: "When you think about people who go above and beyond that you've met before who do you think about?\n I think about people like Hrithik who in their spare time conjure up projects like this and make it look easy. It's almost like a professional sport when athletes make hitting a home run look easy. You feel like you can do it as well, and the inspiration is enough some times.\nHrithik is hitting home runs and makes it look easy. \nTake the time to appreciate those who go above and beyond in your life."
    },
    {
    name: "Advait Patki - Skip Manager at Media.net",
    role: "Director, Program Management at Media.net",
    image: "/advait.png",
    text: "Hrithik is a well organised and a dedicated professional who brings quality insights to all his projects. He is data driven, detail oriented and is always eager to learn new things. He is a good team player and will make a great addition to any organisation."
    },
    {
    name: "Aditya Sawant - Team Lead and Mentor at Media.net",
    role: "Lead - Programmatic Buying & Revenue at Media.net",
    image: "/aditya.png",
    text: "Hrithik has been one of the most professional and friendly colleagues I have worked with. He has got the right blend of all the required attributes to achieve big things. I have seen how well Hrithik manages difficult situations and challenges through constant learning and has good self-awareness along with sharp thinking and crisp decision-making. His critical thinking and tenacity of seeing things through have been inspiring!! A definite asset to any team and organization across the globe. I wish him all the luck!!"
    },
    {
    name: "Rushab Yapuram - Software Dev and Colleague at Media.net",
    role: "ML Engineer at Google",
    image: "/rushabh.png",
    text: "Hrithik delivered relevant data and provided key insights showcasing his analytical skills. His analysis with suggestions for product development greatly benefitted the bidder team. Overall was a good team player and fun to work with. His work ethic and skills will definitely make him an invaluable asset for his future organisations!"
    },
    {
    name: "Shalaka Joshi - Manager at Media.net",
    role: "Program Manager at Amazon",
    image: "/shalaka.png",
    text: "Hrithik is a huge asset to any team. His quick thinking, ability to deconstruct a problem and identify the root cause has proved to be super helpful. He can effortlessly identify feature upgrades to any product, use-cases and hiccups in the user experience. Great going Hrithik, keep up the superb work!"
    },
    
];

export default function Recommendations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    if (activeIndex < recommendations.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const scrollToPrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className="relative w-full py-16">
      <h2 className="text-4xl font-bold text-text-primary mb-12">Recommendations</h2>
      
      <div className="relative overflow-hidden">
        <div 
          ref={containerRef}
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              className="min-w-full px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-card-bg/80 backdrop-blur-sm rounded-2xl border border-card-border p-12 mb-6 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 flex-shrink-0 rounded-full overflow-hidden border-2 border-card-border">
                    <Image
                      src={rec.image}
                      alt={rec.name}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-text-primary">{rec.name}</h3>
                    <p className="text-sm text-text-secondary mb-4">{rec.role}</p>
                    <p className="text-text-secondary">{rec.text}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={scrollToPrev}
          disabled={activeIndex === 0}
          className="p-2 rounded-full bg-card-bg border border-card-border disabled:opacity-50"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={scrollToNext}
          disabled={activeIndex === recommendations.length - 1}
          className="p-2 rounded-full bg-card-bg border border-card-border disabled:opacity-50"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
} 