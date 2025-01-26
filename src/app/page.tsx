"use client"

import { useState, useCallback } from 'react';
import DecryptedText from '@/components/DecryptedText';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import profile from './profile.png'  // Adjust the path to match your image location

export default function Home() {
  const [animationStates, setAnimationStates] = useState({
    intro: false,
    welcome: false,
    experience: false,
    outro: false
  });

  const handleAnimationComplete = useCallback((key: keyof typeof animationStates) => {
    // Using setTimeout to ensure state update happens after current render cycle
    setTimeout(() => {
      setAnimationStates(prev => ({
        ...prev,
        [key]: true
      }));
    }, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Text Content */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-bold mb-8">
                <DecryptedText 
                  text="Hello, I'm Hrithik Koduri."
                  animateOn="view"
                  speed={30}
                  sequential={true}
                  revealDirection="start"
                  className="text-white"
                  encryptedClassName="text-gray-500"
                  onAnimationComplete={() => handleAnimationComplete('intro')}
                />
              </h1>
              <div className="space-y-6">
                {animationStates.intro && (
                  <p className="text-gray-400 text-xl md:text-2xl leading-relaxed">
                    <DecryptedText 
                      text="Welcome to my digital space! I'm an aspiring Product Manager with a passion for crafting exceptional products."
                      animateOn="view"
                      speed={20}
                      sequential={true}
                      revealDirection="start"
                      className="text-gray-400"
                      encryptedClassName="text-gray-600"
                      onAnimationComplete={() => handleAnimationComplete('welcome')}
                    />
                  </p>
                )}
                
                {animationStates.welcome && (
                  <p className="text-gray-400 text-xl md:text-2xl leading-relaxed">
                    <DecryptedText 
                      text="Lately, I've been diving deep into Generative AI, experimenting and pushing the boundaries of what's possible. This page is a list of my creations and musings on technology and beyond."
                      animateOn="view"
                      speed={20}
                      sequential={true}
                      revealDirection="start"
                      className="text-gray-400"
                      encryptedClassName="text-gray-600"
                      onAnimationComplete={() => handleAnimationComplete('experience')}
                    />
                  </p>
                )}

                {animationStates.experience && (
                  <p className="text-gray-400 text-xl md:text-2xl leading-relaxed">
                    <DecryptedText 
                      text="Feel free to reach out if you'd like to learn more about me or just have a chat!"
                      animateOn="view"
                      speed={20}
                      sequential={true}
                      revealDirection="start"
                      className="text-gray-400"
                      encryptedClassName="text-gray-600"
                      onAnimationComplete={() => handleAnimationComplete('outro')}
                    />
                  </p>
                )}
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-[400px] sticky top-24">
              <div className="aspect-square relative rounded-2xl overflow-hidden bg-gray-900">
                <Image
                  src={profile} 
                  alt="Hrithik Koduri"
                  width={400}
                  height={400}
                  priority
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}