"use client"

import { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SocialLinks from '@/components/SocialLinks';
import Recommendations from '@/components/Recommendations';
import Footer from '@/components/Footer';

const experiences = [
  {
    company: "Lokally",
    startDate: "Jan",
    endDate: "2024",
    roles: [{
      title: "Co-Founder, Product Management",
      duration: "Jan 2024 - Jul 2024",
      responsibilities: [
        "Led 6 product development cycles, created product roadmap and go-to-market strategy, onboarded 50+ local eateries in 3 months",
        "Conducted user research and analysis with 100+ target users to iterate prototype, leading to 80% increase in user engagement",
        "Gathered qualitative and quantitative metrics/reviews, architecture and crafted wireframes and UI/UX design prototype"
      ]
    }]
  },
  {
    company: "Tucson Waters",
    startDate: "May",
    endDate: "2023",
    roles: [{
      title: "Product Management Intern",
      duration: "May 2023 - Nov 2023",
      responsibilities: [
        "Spearheaded product lifecycle for real-time threat detection mobile app's feature releases, reducing response time by 20%",
        "Developed strategy, system design and UI/UX to launch an MVP for asset tracking, cutting $50k monthly maintenance costs",
        "Enhanced feature adoption by 30% through iterative design and feedback loops from user acceptance testing"
      ]
    }]
  },
  {
    company: "Media.net",
    startDate: "Aug",
    endDate: "2020",
    roles: [
      {
        title: "Associate Product Manager",
        duration: "Aug 2021 - May 2022",
        responsibilities: [
          "Drove product roadmap by managing backlog, sprints and product release for width responsive ads, generating $4.6M revenue",
          "Developed RESTful APIs and implemented a microservice for a bidding product to optimize bidding strategies, resulting in a 25% increase in win rate for high-value bidder",
          "Formulated product vision and collaborated cross-functionally with design, engineering, and research teams to launch Direct-to-Search ads, serving 350M+ daily ads"
        ]
      },
      {
        title: "Product Analyst",
        duration: "Aug 2020 - Jul 2021",
        responsibilities: [
          "Translated product requirements into user stories and used RICE prioritization framework to implement ML based consumer targeting product features, optimizing user experience and increasing ad-click by 34%",
          "Designed and creative wireframes and prototypes in Figma, performed A/B testing, elevating ad viewability by 9%",
          "Automated reporting for product performance KPIs, reducing TAT by 72 hours, enabling data-driven product improvements"
        ]
      }
    ]
  },
  {
    company: "Fruit Bowl Digital",
    startDate: "Jun",
    endDate: "2019",
    roles: [{
      title: "Marketing Analyst Intern",
      duration: "Jun 2019 - May 2020",
      responsibilities: [
        "Applied market research and analysis to find product market fit for 5 early-stage startups, boosting customer traffic by 40%",
        "Executed 20+ marketing campaigns, leveraging market insights from competitive analysis, achieving 100k+ impressions"
      ]
    }]
  }
];

export default function Home() {
  const [position1, setPosition1] = useState({ x: 0, y: 0 });
  const [opacity1, setOpacity1] = useState(0);
  const [position2, setPosition2] = useState({ x: 0, y: 0 });
  const [opacity2, setOpacity2] = useState(0);
  const [position3, setPosition3] = useState({ x: 0, y: 0 });
  const [opacity3, setOpacity3] = useState(0);
  const [position4, setPosition4] = useState({ x: 0, y: 0 });
  const [opacity4, setOpacity4] = useState(0);
  const [position5, setPosition5] = useState({ x: 0, y: 0 });
  const [opacity5, setOpacity5] = useState(0);
  const [position6, setPosition6] = useState({ x: 0, y: 0 });
  const [opacity6, setOpacity6] = useState(0);

  // Add state for tracking which experience is in view
  const [activeExperience, setActiveExperience] = useState<number | null>(null);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-20% 0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = experienceRefs.current.findIndex(ref => ref === entry.target);
          setActiveExperience(index);
        }
      });
    }, options);

    experienceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseMove1 = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition1({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter1 = () => {
    setOpacity1(0.6);
  };

  const handleMouseLeave1 = () => {
    setOpacity1(0);
  };

  const handleMouseMove2 = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition2({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter2 = () => {
    setOpacity2(0.6);
  };

  const handleMouseLeave2 = () => {
    setOpacity2(0);
  };

  const handleMouseMove3 = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition3({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter3 = () => {
    setOpacity3(0.6);
  };

  const handleMouseLeave3 = () => {
    setOpacity3(0);
  };

  const handleMouseMove4 = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition4({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };  

  const handleMouseEnter4 = () => {
    setOpacity4(0.6);
  };

  const handleMouseLeave4 = () => {
    setOpacity4(0);
  };

  const handleMouseMove5 = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition5({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };  

  const handleMouseEnter5 = () => {
    setOpacity5(0.6);
  };

  const handleMouseLeave5 = () => {
    setOpacity5(0);
  };

  const handleMouseMove6 = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition6({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };  

  const handleMouseEnter6 = () => {
    setOpacity6(0.6);
  };

  const handleMouseLeave6 = () => {
    setOpacity6(0);
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto py-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Text Content */}
            <div className="flex-1">
              <br />
              <h1 className="text-6xl font-bold text-text-primary mb-4 drop-shadow-sm [text-shadow:_0_3px_10px_rgb(0_0_0_/_30%)]">
                Hello, I&apos;m Hrithik Koduri!
              </h1>
              <div className="space-y-6">
                <p className="text-text-primary text-xl md:text-xl leading-relaxed">
                  Welcome to my corner of the internet! I&apos;m an aspiring Product Manager with a passion for crafting exceptional products.
                </p>
                
                <p className="text-text-primary text-xl md:text-xl leading-relaxed">
                  Lately, I&apos;ve been diving deep into Generative AI, experimenting and pushing the boundaries of what&apos;s possible. This page is a list of my creations and musings on technology and beyond.
                </p>

                <p className="text-text-primary text-xl md:text-xl leading-relaxed">
                  Feel free to reach out if you&apos;d like to learn more about me or just have a chat!
                </p>
                <div className="flex">
                  <SocialLinks />
                </div>
              </div>
            </div>

            {/* Minimalist Image Section */}
            <div className="w-full md:w-[300px] sticky top-24 ]">
              <motion.div 
                className="group relative"
                initial={{ rotate: 5 }}
                whileHover={{ scale: 1.02, rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Subtle glow */}
                <div className="absolute -inset-0.5 bg-card-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                
                {/* Main container */}
                <div className="relative bg-card-bg/80 backdrop-blur-sm rounded-2xl border border-card-border shadow-lg shadow-black/5 dark:shadow-black/20">
                  {/* Image container */}
                  <div className="p-3">
                    <div className="aspect-square rounded-xl overflow-hidden bg-card-bg ring-1 ring-card-border shadow-inner">
                      <Image
                        src="/profile_.png"
                        alt="Hrithik Koduri"
                        width={400}
                        height={400}
                        priority
                        className="object-cover w-full h-full transition-all duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="p-4 text-center bg-card-bg/50 rounded-b-2xl border-t border-card-border">
                    <p className="text-text-primary text-sm font-medium">
                      Graduated from University of Arizona,
                      <br />
                      Eller College of Management
                    </p>
                    <p className="text-sm mt-2 text-text-secondary">
                      Dual Masters - <span className="text-text-primary font-medium">MBA</span> and <span className="text-text-primary font-medium">MS-MIS</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Featured Posts Section */}
        <div className="max-w-5xl mx-auto mt-20 py-10">
          <h2 className="text-4xl font-bold text-text-primary drop-shadow-sm [text-shadow:_0_2px_8px_rgb(0_0_0_/_20%)]">
            Updates - My latest project WebRover AI Agent got featured by Langchain & Bizety!
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* LinkedIn Post */}
            <div className="flex justify-center">
              <iframe 
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7288960354762510337" 
                height="717" 
                width="100%" 
                frameBorder="0" 
                allowFullScreen 
                title="Embedded LinkedIn post"
                className="rounded-xl shadow-lg"
              />
            </div>
            
            {/* Bizety Article */}
            <div className="flex justify-center">
              <iframe 
                src="https://bizety.com/2025/01/25/cool-product-webrover-an-open-source-ai-agent-for-the-web/" 
                height="717" 
                width="100%" 
                frameBorder="0" 
                allowFullScreen 
                title="WebRover Article"
                className="rounded-xl shadow-lg"
                sandbox="allow-same-origin allow-scripts"
              />
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="max-w-5xl mx-auto mt-20 py-10">
          <h2 className="text-4xl font-bold text-text-primary drop-shadow-sm [text-shadow:_0_2px_8px_rgb(0_0_0_/_20%)]">
            Projects
          </h2>
          <p className="text-text-primary text-xl md:text-xl leading-relaxed py-10">
            Amidst job hunting in September 2024, facing rejections and battling imposter syndrome, 
            I turned to what I knew best - building things. Instead of letting self-doubt win, 
            I channeled that energy into exploring Generative AI, a field that had always intrigued me. 
            This journey became my way of proving to myself that I could create meaningful things, 
            regardless of the circumstances.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Project Card 1 */}
            <a
              href="https://github.com/hrithikkoduri/WebRover"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block bg-card-bg/20 backdrop-blur-sm rounded-2xl border border-card-border/40 shadow-lg shadow-black/5 dark:shadow-black/20 overflow-hidden transform transition-transform duration-300 group hover:bg-card-bg/30"
              onMouseMove={(e) => handleMouseMove1(e)}
              onMouseEnter={() => handleMouseEnter1()}
              onMouseLeave={() => handleMouseLeave1()}
              style={{ transform: opacity1 > 0 ? 'scale(1.05)' : 'scale(1)' }}
            >
              <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
                style={{
                  opacity: opacity1,
                  background: `radial-gradient(circle at ${position1.x}px ${position1.y}px, rgba(186, 85, 255, 0.3), transparent 100%)`,
                }}
              />
              <div className="px-6 py-4 flex items-center gap-2">
                <Image
                  src="/WebRover.png"
                  alt="WebRover Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <h3 className="text-xl font-bold text-text-primary">WebRover</h3>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Arrow Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10 14.5a.5.5 0 0 1-.5-.5V5.707L1.354 13.854a.5.5 0 0 1-.708-.708L8.293 5H1.5a.5.5 0 0 1 0-1h9a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5z"/>
                  </svg>
                </span>
              </div>
              <div className="px-6 flex items-center gap-2">
                <p className="text-text-secondary">
                  An autonomous AI agent that acts like a web-savvy robot that helps you find answers and get things done online without lifting a finger.
                </p>
              </div>
              <div className="p-6 flex items-center gap-2">
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">Langgraph</span>
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">Next.js</span>
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">Playwright</span>
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">FastAPI</span>
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">Pillow</span>
              </div>
            </a>

            {/* Project Card 2 */}
            <a
              href="https://github.com/hrithikkoduri/TalkQL" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative block bg-card-bg/20 backdrop-blur-sm rounded-2xl border border-card-border/40 shadow-lg shadow-black/5 dark:shadow-black/20 overflow-hidden transform transition-transform duration-300 group hover:bg-card-bg/30"
              onMouseMove={(e) => handleMouseMove2(e)}
              onMouseEnter={() => handleMouseEnter2()}
              onMouseLeave={() => handleMouseLeave2()}
              style={{ transform: opacity2 > 0 ? 'scale(1.05)' : 'scale(1)' }}
            >
              <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
                style={{
                  opacity: opacity2,
                  background: `radial-gradient(circle at ${position2.x}px ${position2.y}px, rgba(39, 118, 245, 0.3), transparent 100%)`,
                }}
              />
              <div className="px-6 py-4 flex items-center gap-2">
                <Image
                  src="/TalkQL.png"
                  alt="TalkQL Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.png';
                  }}
                />
                <h3 className="text-xl font-bold text-text-primary">TalkQL</h3>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Arrow Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10 14.5a.5.5 0 0 1-.5-.5V5.707L1.354 13.854a.5.5 0 0 1-.708-.708L8.293 5H1.5a.5.5 0 0 1 0-1h9a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5z"/>
                  </svg>
                </span>
              </div>
              <div className="px-6 flex items-center gap-2">
                <p className="text-text-secondary">
                TalkQL turns your casual conversations into SQL queries, providing clear answers with intuitive visualizations as if you were chatting with a friend.
                </p>
              </div>
              <div className="p-6 flex items-center gap-2">
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">Langgraph</span>
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">Next.js</span>
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">SQLite</span>
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">FastAPI</span>
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">Matplotlib</span>
              </div>
            </a>

                {/* Project Card 3 */}
            <a
              href="https://github.com/hrithikkoduri/ConvoPro" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative block bg-card-bg/20 backdrop-blur-sm rounded-2xl border border-card-border/40 shadow-lg shadow-black/5 dark:shadow-black/20 overflow-hidden transform transition-transform duration-300 group hover:bg-card-bg/30"
              onMouseMove={(e) => handleMouseMove3(e)}
              onMouseEnter={() => handleMouseEnter3()}
              onMouseLeave={() => handleMouseLeave3()}
              style={{ transform: opacity3 > 0 ? 'scale(1.05)' : 'scale(1)' }}
            >
              <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
                style={{
                  opacity: opacity3,
                  background: `radial-gradient(circle at ${position3.x}px ${position3.y}px, rgba(255, 255, 0, 0.3), transparent 100%)`,
                }}
              />
              <div className="px-6 py-4 flex items-center gap-2">
                <Image
                  src="/ConvoPro.png"
                  alt="ConvoPro Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <h3 className="text-xl font-bold text-text-primary">ConvoPro</h3>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Arrow Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10 14.5a.5.5 0 0 1-.5-.5V5.707L1.354 13.854a.5.5 0 0 1-.708-.708L8.293 5H1.5a.5.5 0 0 1 0-1h9a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5z"/>
                  </svg>
                </span>
              </div>
              <div className="px-6 flex items-center gap-2">
                <p className="text-text-secondary">
                An AI assistant that leverages real-time speech-to-speech interactions, streamlining customer service, automating responses, and scheduling appointments.
                </p>
              </div>
              <div className="p-6 flex items-center gap-2">
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">Langchain</span>
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">OpenAI</span>
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">Twilio</span>
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">Make.com</span>
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">Websockets</span>
              </div>
            </a>


                  {/* Project Card 4 */}
            <a
              href="https://github.com/hrithikkoduri/DelvinDocs.AI" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative block bg-card-bg/20 backdrop-blur-sm rounded-2xl border border-card-border/40 shadow-lg shadow-black/5 dark:shadow-black/20 overflow-hidden transform transition-transform duration-300 group hover:bg-card-bg/30"
              onMouseMove={(e) => handleMouseMove4(e)}
              onMouseEnter={() => handleMouseEnter4()}
              onMouseLeave={() => handleMouseLeave4()}
              style={{ transform: opacity4 > 0 ? 'scale(1.05)' : 'scale(1)' }}
            >
              <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
                style={{
                  opacity: opacity4,
                  background: `radial-gradient(circle at ${position4.x}px ${position4.y}px, rgba(234, 117, 35, 0.3), transparent 100%)`,
                }}
              />
              <div className="px-6 py-4 flex items-center gap-2">
                <Image
                  src="/DelvinDocsAI.png"
                  alt="DelvinDocsAI Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <h3 className="text-xl font-bold text-text-primary">DelvinDocs.AI</h3>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Arrow Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10 14.5a.5.5 0 0 1-.5-.5V5.707L1.354 13.854a.5.5 0 0 1-.708-.708L8.293 5H1.5a.5.5 0 0 1 0-1h9a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5z"/>
                  </svg>
                </span>
              </div>
              <div className="px-6 flex items-center gap-2">
                <p className="text-text-secondary">
                DelvInDocs.AI simplifies documentation understanding by scraping content and providing instant answers with relevant code snippets.
                </p>
              </div>
              <div className="p-6 flex items-center gap-2">
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">Langchain</span>
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">DeepLake</span>
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">Streamlit</span>
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">BeautifulSoup</span>
              </div>
            </a>



             {/* Project Card 5 */}
             <a
              href="https://github.com/hrithikkoduri/GitChat" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative block bg-card-bg/20 backdrop-blur-sm rounded-2xl border border-card-border/40 shadow-lg shadow-black/5 dark:shadow-black/20 overflow-hidden transform transition-transform duration-300 group hover:bg-card-bg/30"
              onMouseMove={(e) => handleMouseMove5(e)}
              onMouseEnter={() => handleMouseEnter5()}
              onMouseLeave={() => handleMouseLeave5()}
              style={{ transform: opacity5 > 0 ? 'scale(1.05)' : 'scale(1)' }}
            >
              <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
                style={{
                  opacity: opacity5,
                  background: `radial-gradient(circle at ${position5.x}px ${position5.y}px, rgba(97, 96, 235, 0.3), transparent 100%)`,
                }}
              />
              <div className="px-6 py-4 flex items-center gap-2">
                <Image
                  src="/GitChat.png"
                  alt="GitChat Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <h3 className="text-xl font-bold text-text-primary">GitChat</h3>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Arrow Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10 14.5a.5.5 0 0 1-.5-.5V5.707L1.354 13.854a.5.5 0 0 1-.708-.708L8.293 5H1.5a.5.5 0 0 1 0-1h9a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5z"/>
                  </svg>
                </span>
              </div>
              <div className="px-6 flex items-center gap-2">
                <p className="text-text-secondary">
                GitChat transforms GitHub navigation into a conversation, letting users explore, query, and uncover insights effortlessly.
                </p>
              </div>
              <div className="p-6 flex items-center gap-2">
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">Langchain</span>
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">DeepLake</span>
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">Next.js</span>
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">FastAPI</span>
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">SQLite</span>
              </div>
            </a>

            {/* Project Card 6 */}
            <a
              href="https://github.com/hrithikkoduri/GraphRAG" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative block bg-card-bg/20 backdrop-blur-sm rounded-2xl border border-card-border/40 shadow-lg shadow-black/5 dark:shadow-black/20 overflow-hidden transform transition-transform duration-300 group hover:bg-card-bg/30"
              onMouseMove={(e) => handleMouseMove6(e)}
              onMouseEnter={() => handleMouseEnter6()}
              onMouseLeave={() => handleMouseLeave6()}
              style={{ transform: opacity6 > 0 ? 'scale(1.05)' : 'scale(1)' }}
            >
              <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
                style={{
                  opacity: opacity6,
                  background: `radial-gradient(circle at ${position6.x}px ${position6.y}px, rgba(242, 56, 63, 0.3), transparent 100%)`,
                }}
              />
              <div className="px-6 py-4 flex items-center gap-2">
                <Image
                  src="/GraphRAG.png"
                  alt="GraphRAG Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <h3 className="text-xl font-bold text-text-primary">GraphRAG</h3>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Arrow Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10 14.5a.5.5 0 0 1-.5-.5V5.707L1.354 13.854a.5.5 0 0 1-.708-.708L8.293 5H1.5a.5.5 0 0 1 0-1h9a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5z"/>
                  </svg>
                </span>
              </div>
              <div className="px-6 flex items-center gap-2">
                <p className="text-text-secondary">
                GraphRAG transforms chatbots by integrating Knowledge Graphs for relationship-aware context, delivering smarter, and more accurate responses.
                </p>
              </div>
              <div className="p-6 flex items-center gap-2">
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">Langchain</span>
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">Neo4j</span>
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">FastAPI</span>
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">Next.js</span>
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">Cypher</span>
              </div>
            </a>
 
                

          </div>
        </div>

        

        {/* Work Experience Section */}
        <div className="max-w-5xl mx-auto mt-20 py-10">
          <h2 className="text-4xl font-bold text-text-primary drop-shadow-sm [text-shadow:_0_2px_8px_rgb(0_0_0_/_20%)]">
            Work Experience
          </h2>
          <p className="text-text-primary text-xl md:text-xl leading-relaxed py-10">
            Throughout my career, I&apos;ve been fortunate to collaborate with exceptional companies and talented professionals on impactful projects. 
            Each role has shaped my growth and contributed to my expertise in software development and product management.
          </p>
          
          <div className="mt-10 relative">
            {/* Timeline Line */}
            <div className="absolute left-[60px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-card-border via-card-border to-transparent" />
            
            <div className="space-y-16">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  ref={(el) => {
                    if (el) {
                      experienceRefs.current[index] = el;
                    }
                  }}
                  className="experience-item group relative"
                  data-index={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: activeExperience === index ? 1.02 : 1
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  
                >
                  
                  {/* Date Display */}
                  <div className="absolute -left-32 top-1/2 -translate-y-1/2 flex items-center">
                    <motion.div 
                      className="w-36 h-14 rounded-xl bg-card-bg/80 backdrop-blur-sm border border-card-border flex flex-col items-center justify-center shadow-lg shadow-black/5 dark:shadow-black/20"
                      animate={{
                        scale: activeExperience === index ? 1.1 : 1,
                      }}
                    >
                      <div className="text-xs text-center leading-tight">
                        <div className="text-[10px] text-text-secondary uppercase tracking-wider">Duration</div>
                        <div className="font-medium text-text-primary whitespace-nowrap">
                          {experience.roles[0].duration}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Company Logo Space */}
                  <div className="absolute left-[30px] top-1/2 -translate-y-1/2">
                    <div className="w-20 h-20 rounded-2xl bg-card-bg/80 backdrop-blur-sm border border-card-border flex items-center justify-center overflow-hidden shadow-lg shadow-black/5 dark:shadow-black/20">
                      <Image
                        src={`/${experience.company === 'Media.net' ? 'media_net' : 
                              experience.company === 'Tucson Waters' ? 'Tucson_Waters' :
                              experience.company === 'Fruit Bowl Digital' ? 'FBD' : 
                              'Lokally'}.png`}
                        alt={`${experience.company} logo`}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Content Card - adjust margin */}
                  <div className="ml-40">
                    <motion.div 
                      className="relative bg-card-bg/80 backdrop-blur-sm rounded-2xl border border-card-border p-8 overflow-hidden transition-all duration-300"
                      animate={{
                        scale: activeExperience === index ? 1.02 : 1,
                        boxShadow: activeExperience === index 
                          ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                          : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <div
                        className="pointer-events-none absolute -inset-[1px] transition-opacity duration-500 ease-in-out rounded-2xl"
                        style={{
                          opacity: activeExperience === index ? 0.15 : 0,
                          background: `radial-gradient(800px circle at 50% 50%, ${
                            experience.company === 'Lokally' 
                              ? 'rgba(16, 185, 129, 0.9)' // Green for Lokally
                              : experience.company === 'Tucson Waters' 
                              ? 'rgba(0, 119, 182, 0.9)' // Blue for Tucson Waters
                              : experience.company === 'Media.net'
                              ? 'rgba(234, 117, 35, 0.9)' // Orange for Media.net
                              : 'rgba(255, 255, 0, 0.9)' // Yellow for Fruit Bowl Digital
                          }, transparent 100%)`,
                        }}
                      />
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-text-primary">{experience.company}</h3>
                        <div className="space-y-6 mt-4">
                          {experience.roles.map((role, roleIndex) => (
                            <div key={roleIndex}>
                              <h4 className="text-lg font-semibold text-text-primary mb-3">{role.title}</h4>
                              <ul className="list-disc space-y-3 ml-5">
                                {role.responsibilities.map((item, i) => (
                                  <li key={i} className="text-base text-text-secondary pl-2">
                                    <span className="relative -left-2">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <Recommendations />
      </main>
      <Footer />
    </>
  );
}