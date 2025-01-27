"use client"

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Bookmark {
  title: string;
  description: string;
  url: string;
  category: string;

}

const bookmarks: Bookmark[] = [
  {
    title: "The Rise of AI Agents",
    description: "An insightful article about how AI agents are transforming the way we interact with technology and automate tasks.",
    url: "https://www.youtube.com/watch?v=KrRD7r7y7NY",
    category: "AI & Technology",
  },
  {
    title: "Building LLMS from Scratch",
    description: "A comprehensive guide on how to build LLMs from scratch, including the basics of neural networks and how to train them.",
    url: "https://youtube.com/playlist?list=PLPTV0NXA_ZSgsLAr8YCgCwhPIJNNtexWu&si=yZZ5yIYgHfIlBRyO",
    category: "Development",
  },
  {
    title: "Product Management in the Age of AI",
    description: "A comprehensive guide on how product managers can leverage AI to build better products and make data-driven decisions.",
    url: "https://www.youtube.com/watch?v=btllH4W4YS4",
    category: "Product Management",
  },
  {
    title: "The Limits of LLMs & Future of AI",
    description: "An analysis of where Large Language Models are headed and their potential impact on various industries.",
    url: "https://www.youtube.com/watch?v=5t1vTLU7s40",
    category: "AI & Technology",
  },
  {
    title: "Multimodal RAG",
    description: "A technical deep dive into building effective Multimodal Retrieval Augmented Generation applications.",
    url: "https://www.youtube.com/watch?v=uLrReyH5cu0",
    category: "Development",
  },
  {
    title: "Launching Airbnb and Challenges of Scale - Brian Chesky",
    description: "An insightful talk about the challenges of scaling Airbnb and the lessons learned from the early days.",
    url: "https://www.youtube.com/watch?v=W608u6sBFpo&t=724s",
    category: "Startup",
  }, 
  {
    title: "Smart Home assistant using Langchain",
    description: "An article about how to build a smart home assistant using Langchain and other LLM frameworks.",
    url: "https://towardsdatascience.com/langchain-meets-home-assistant-unlock-the-power-of-generative-ai-in-your-smart-home-f318732d9d84?gi=bb1b4dd3b58a",
    category: "AI & Technology",
  }
];

const categories = Array.from(new Set(bookmarks.map(bookmark => bookmark.category)));

export default function Bookmarks() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredBookmarks = selectedCategory
    ? bookmarks.filter(bookmark => bookmark.category === selectedCategory)
    : bookmarks;

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 px-8">
        <div className="max-w-4xl mx-auto py-10">
          <h1 className="text-5xl font-bold text-text-primary mb-4 drop-shadow-sm [text-shadow:_0_3px_10px_rgb(0_0_0_/_30%)]">
          Things on the internet I really enjoyed watching or reading
          </h1>
          <p className="text-text-primary text-lg md:text-lg leading-relaxed mb-12">
          These don't follow any particular category, it's just really good articles by awesome people on the internet. I hope you enjoy them as much as I did.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                selectedCategory === null
                  ? 'bg-card-border text-text-primary'
                  : 'bg-card-bg/80 text-text-secondary hover:bg-card-border/50'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-card-border text-text-primary'
                    : 'bg-card-bg/80 text-text-secondary hover:bg-card-border/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-6">
            {filteredBookmarks.map((bookmark, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <Link href={bookmark.url} target="_blank" rel="noopener noreferrer">
                  <div className="group relative bg-card-bg/20 backdrop-blur-sm rounded-xl border border-card-border/40 p-6 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-black/5 dark:shadow-black/20">
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-xl font-semibold text-text-primary group-hover:text-blue-400 transition-colors duration-200">
                        {bookmark.title}
                      </h2>
                      <span className="text-sm text-text-secondary">{bookmark.date}</span>
                    </div>
                    
                    <p className="text-text-secondary mb-4">{bookmark.description}</p>
                    <span className="inline-block px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">
                      {bookmark.category}
                    </span>
                    
                    {/* Arrow icon that appears on hover */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredBookmarks.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-secondary text-lg">
                No bookmarks found in this category.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
} 