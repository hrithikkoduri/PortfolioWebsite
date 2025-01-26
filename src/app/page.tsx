"use client"

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Text Content */}
            <div className="flex-1">
              <br />
              <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                Hello, I'm Hrithik Koduri!
              </h1>
              <div className="space-y-6">
                <p className="text-gray-400 text-xl md:text-xl leading-relaxed">
                  Welcome to my corner of the internet! I'm an aspiring Product Manager with a passion for crafting exceptional products.
                </p>
                
                <p className="text-gray-400 text-xl md:text-xl leading-relaxed">
                  Lately, I've been diving deep into Generative AI, experimenting and pushing the boundaries of what's possible. This page is a list of my creations and musings on technology and beyond.
                </p>

                <p className="text-gray-400 text-xl md:text-xl leading-relaxed">
                  Feel free to reach out if you'd like to learn more about me or just have a chat!
                </p>
              </div>
            </div>

            {/* Minimalist Image Section */}
            <div className="w-full md:w-[280px] sticky top-24">
              <motion.div 
                className="group relative"
                initial={{ rotate: 5 }}
                whileHover={{ scale: 1.02, rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Subtle glow */}
                <div className="absolute -inset-0.5 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                
                {/* Main container */}
                <div className="relative bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10">
                  {/* Image container */}
                  <div className="p-3">
                    <div className="aspect-square rounded-xl overflow-hidden bg-gray-900/50 ring-1 ring-white/10">
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
                  <div className="p-4 text-center bg-black/20">
                    <p className="text-gray-300 text-sm font-medium">
                      Graduated from University of Arizona,
                      <br />
                      Eller College of Management
                    </p>
                    <p className="text-sm mt-2 text-gray-400">
                      Dual Masters in <span className="text-white font-medium">MBA</span> and <span className="text-white font-medium">MSMIS</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}