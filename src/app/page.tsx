"use client"

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SocialLinks from '@/components/SocialLinks';

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 px-8 mt-10">
        <div className="max-w-5xl mx-auto py-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Text Content */}
            <div className="flex-1">
              <br />
              <h1 className="text-6xl font-bold text-text-primary mb-4 drop-shadow-sm [text-shadow:_0_3px_10px_rgb(0_0_0_/_30%)]">
                Hello, I'm Hrithik Koduri!
              </h1>
              <div className="space-y-6">
                <p className="text-text-primary text-xl md:text-xl leading-relaxed">
                  Welcome to my corner of the internet! I'm an aspiring Product Manager with a passion for crafting exceptional products.
                </p>
                
                <p className="text-text-primary text-xl md:text-xl leading-relaxed">
                  Lately, I've been diving deep into Generative AI, experimenting and pushing the boundaries of what's possible. This page is a list of my creations and musings on technology and beyond.
                </p>

                <p className="text-text-primary text-xl md:text-xl leading-relaxed">
                  Feel free to reach out if you'd like to learn more about me or just have a chat!
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
                      Dual Masters in <span className="text-text-primary font-medium">MBA</span> and <span className="text-text-primary font-medium">MSMIS</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="max-w-5xl mx-auto mt-24 py-10">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card 1 */}
            <a
              href="https://github.com/hrithikkoduri/WebRover" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative block bg-card-bg/80 backdrop-sm rounded-2xl border border-card-border shadow-lg shadow-black/5 dark:shadow-black/20 overflow-hidden transform transition-transform duration-300"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ transform: opacity > 0 ? 'scale(1.05)' : 'scale(1)' }}
            >
              <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
                style={{
                  opacity,
                  background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(39, 118, 245, 0.8), transparent 100%)`,
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
                <h3 className="text-xl font-bold text-text-primary mb-2">WebRover</h3>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Arrow Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 1-.5.5H3.707l9.147 9.146a.5.5 0 0 1-.708.708L3 3.707V13.5a.5.5 0 0 1-1 0v-11A.5.5 0 0 1 2.5 2h11a.5.5 0 0 1 .5.5z"/>
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
            <motion.div 
              className="group relative bg-card-bg/80 backdrop-blur-sm rounded-2xl border border-card-border shadow-lg shadow-black/5 dark:shadow-black/20 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-2">Project Name</h3>
                <p className="text-text-secondary mb-4">
                  Brief description of the project and what technologies were used.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 text-sm bg-card-border rounded-xl text-text-primary">Python</span>
                  <span className="px-3 py-1 text-sm bg-card-border rounded-xl text-text-primary">FastAPI</span>
                  <span className="px-3 py-1 text-sm bg-card-border rounded-xl text-text-primary">PostgreSQL</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}