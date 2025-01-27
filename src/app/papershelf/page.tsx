"use client"

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Paper {
  title: string;
  authors: string;
  description: string;
  url: string;
  category: string;
  date: string;
  conference?: string;
}

const papers: Paper[] = [
  {
    title: "Attention Is All You Need",
    authors: "Vaswani et al.",
    description: "Introduces the Transformer architecture, which has become the foundation for modern language models and revolutionized natural language processing.",
    url: "https://arxiv.org/abs/1706.03762",
    category: "Deep Learning",
    date: "2017",
    conference: "NeurIPS"
  },
  {
    title: "Language Models are Few-Shot Learners",
    authors: "Brown et al.",
    description: "Introduces GPT-3 and demonstrates that large language models can perform tasks with few or no examples through in-context learning.",
    url: "https://arxiv.org/abs/2005.14165",
    category: "NLP",
    date: "2020",
    conference: "NeurIPS"
  },
  {
    title: "High-Resolution Image Synthesis with Latent Diffusion Models",
    authors: "Rombach et al.",
    description: "Presents Stable Diffusion, a latent diffusion model for high-quality image synthesis that significantly reduces computational requirements.",
    url: "https://arxiv.org/abs/2112.10752",
    category: "Computer Vision",
    date: "2022",
    conference: "CVPR"
  },
  {
    title: "Constitutional AI: A Framework for Machine Ethics",
    authors: "Askell et al.",
    description: "Introduces a framework for developing AI systems with built-in ethical principles and behavioral constraints, ensuring safer and more reliable AI development.",
    url: "https://arxiv.org/abs/2310.07019",
    category: "AI Ethics",
    date: "2023",
    conference: "arXiv"
  },
  {
    title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
    authors: "Lewis et al.",
    description: "Presents RAG, combining neural seq2seq models with a retrieval component for knowledge-intensive tasks, improving factuality and transparency in language models.",
    url: "https://arxiv.org/abs/2005.11401",
    category: "NLP",
    date: "2020",
    conference: "NeurIPS"
  },
  {
    title: "Learning Transferable Visual Models From Natural Language Supervision",
    authors: "Radford et al.",
    description: "Introduces CLIP, demonstrating how to train highly versatile visual models using natural language supervision at scale.",
    url: "https://arxiv.org/abs/2103.00020",
    category: "Computer Vision",
    date: "2021",
    conference: "ICML"
  }
];

const categories = Array.from(new Set(papers.map(paper => paper.category)));

export default function PaperShelf() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPapers = selectedCategory
    ? papers.filter(paper => paper.category === selectedCategory)
    : papers;

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 px-8">
        <div className="max-w-4xl mx-auto py-10">
          <h1 className="text-5xl font-bold text-text-primary mb-4 drop-shadow-sm [text-shadow:_0_3px_10px_rgb(0_0_0_/_30%)]">
            Research Papers
          </h1>
          <p className="text-text-primary text-lg md:text-lg leading-relaxed mb-12">
            A collection of academic papers that have significantly influenced my understanding of machine learning, 
            computer vision, and artificial intelligence. These papers represent key developments in their respective fields.
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
            {filteredPapers.map((paper, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={paper.url} target="_blank" rel="noopener noreferrer">
                  <div className="group relative bg-card-bg/20 backdrop-blur-sm rounded-xl border border-card-border/40 p-6 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-black/5 dark:shadow-black/20">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h2 className="text-xl font-semibold text-text-primary group-hover:text-blue-400 transition-colors duration-200">
                          {paper.title}
                        </h2>
                        <p className="text-text-secondary text-sm mt-1">
                          {paper.authors}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-text-secondary">{paper.date}</span>
                        {paper.conference && (
                          <p className="text-sm text-text-secondary mt-1">{paper.conference}</p>
                        )}
                      </div>
                    </div>
                    <p className="text-text-secondary mb-4">{paper.description}</p>
                    <span className="inline-block px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">
                      {paper.category}
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

          {filteredPapers.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-secondary text-lg">
                No papers found in this category.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}