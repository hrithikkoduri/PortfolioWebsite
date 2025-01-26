"use client"

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SocialLinks from '@/components/SocialLinks';

export default function Home() {
  const [position1, setPosition1] = useState({ x: 0, y: 0 });
  const [opacity1, setOpacity1] = useState(0);
  const [position2, setPosition2] = useState({ x: 0, y: 0 });
  const [opacity2, setOpacity2] = useState(0);
  const [position3, setPosition3] = useState({ x: 0, y: 0 });
  const [opacity3, setOpacity3] = useState(0);

  const handleMouseMove1 = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition1({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter1 = () => {
    setOpacity1(0.6);
  };

  const handleMouseLeave1 = () => {
    setOpacity1(0);
  };

  const handleMouseMove2 = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition2({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter2 = () => {
    setOpacity2(0.6);
  };

  const handleMouseLeave2 = () => {
    setOpacity2(0);
  };

  const handleMouseMove3 = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition3({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter3 = () => {
    setOpacity3(0.6);
  };

  const handleMouseLeave3 = () => {
    setOpacity3(0);
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 px-8 ">
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
              className="relative block bg-card-bg/80 backdrop-sm rounded-2xl border border-card-border shadow-lg shadow-black/5 dark:shadow-black/20 overflow-hidden transform transition-transform duration-300 group"
              onMouseMove={handleMouseMove1}
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
              style={{ transform: opacity1 > 0 ? 'scale(1.05)' : 'scale(1)' }}
            >
              <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
                style={{
                  opacity: opacity1,
                  background: `radial-gradient(circle at ${position1.x}px ${position1.y}px, rgba(186, 85, 255, 0.8), transparent 100%)`,
                }}
              />
              <div className="px-6 py-4 flex items-center gap-2">
                <Image
                  src="/WebRover_.png"
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
              className="relative block bg-card-bg/80 backdrop-sm rounded-2xl border border-card-border shadow-lg shadow-black/5 dark:shadow-black/20 overflow-hidden transform transition-transform duration-300 group"
              onMouseMove={handleMouseMove2}
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              style={{ transform: opacity2 > 0 ? 'scale(1.05)' : 'scale(1)' }}
            >
              <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
                style={{
                  opacity: opacity2,
                  background: `radial-gradient(circle at ${position2.x}px ${position2.y}px, rgba(39, 118, 245, 0.8), transparent 100%)`,
                }}
              />
              <div className="px-6 py-4 flex items-center gap-2">
                <Image
                  src="/TalkQL_.png"
                  alt="TalkQL Logo"
                  width={40}
                  height={40}
                  className="object-contain"
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
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">Playwright</span>
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">FastAPI</span>
                <span className="px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">Pillow</span>
              </div>
            </a>

                {/* Project Card 3 */}
            <a
              href="https://github.com/hrithikkoduri/ConvoPro" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative block bg-card-bg/80 backdrop-sm rounded-2xl border border-card-border shadow-lg shadow-black/5 dark:shadow-black/20 overflow-hidden transform transition-transform duration-300 group"
              onMouseMove={handleMouseMove3}
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
              style={{ transform: opacity3 > 0 ? 'scale(1.05)' : 'scale(1)' }}
            >
              <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
                style={{
                  opacity: opacity3,
                  background: `radial-gradient(circle at ${position3.x}px ${position3.y}px, rgba(255, 255, 0, 0.8), transparent 100%)`,
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



          </div>
        </div>
      </main>
    </>
  );
}