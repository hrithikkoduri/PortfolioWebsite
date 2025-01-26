"use client"

import DecryptedText from '@/components/DecryptedText';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl font-bold mb-8">
              <DecryptedText 
                text="Hello, I'm Hrithik Koduri."
                animateOn="view"
                speed={30}
                className="text-white"
                encryptedClassName="text-gray-500"
              />
            </h1>
            <div className="space-y-6">
            <p className="text-gray-400 text-xl md:text-2xl leading-relaxed">
              <DecryptedText 
                text="Welcome to my digital space! I'm an aspiring Product Manager with a passion for crafting exceptional products."
                animateOn="view"
                speed={20}
                sequential={true}
                revealDirection="start"
                className="text-gray-400"
                encryptedClassName="text-gray-600"
              />
            </p>
            <p className="text-gray-400 text-xl md:text-2xl leading-relaxed">
              <DecryptedText 
                text="Lately, I've been diving deep into Generative AI, experimenting and pushing the boundaries of what's possible. This page is a list of my creations and musings on technology and beyond."
                animateOn="view"
                speed={20}
                sequential={true}
                revealDirection="start"
                className="text-gray-400"
                encryptedClassName="text-gray-600"
              />
            </p>
            <p className="text-gray-400 text-xl md:text-2xl leading-relaxed">
              <DecryptedText 
                text="Feel free to reach out if you'd like to learn more about me or just have a chat! Stay updated with my work by following me on "
                animateOn="view"
                speed={20}
                sequential={true}
                revealDirection="start"
                className="text-gray-400"
                encryptedClassName="text-gray-600"
              />
              <a href="https://github.com/yourusername" className="underline hover:text-white">
                GitHub
              </a>
              {' '}or{' '}
              <a href="https://www.linkedin.com/in/hrithikkoduri/" className="underline hover:text-white">
                LinkedIn
              </a>
              {' '}
              <DecryptedText 
                text="for all things tech and beyond."
                animateOn="view"
                speed={20}
                sequential={true}
                revealDirection="start"
                className="text-gray-400"
                encryptedClassName="text-gray-600"
              />
            </p>
          </div>
          </div>
        </div>
      </main>
    </>
  );
}