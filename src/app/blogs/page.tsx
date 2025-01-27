"use client"

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
  tag?: string;
}

const blogPosts: BlogPost[] = [
    {
    title: "Are Super Apps Still Relevant?",
    description: "An analysis of the super app trend, examining their relevance in today's digital landscape and the challenges they face in different markets.",
    date: "Dec 15, 2022",
    readTime: "10 min read",
    link: "/blogs/super-apps-relevance",
    tag: "Tech Blog"
  },

{
    title: "Spotify - Programmatic Ads",
    description: "A comprehensive case study on programmatic audio ads on Spotify, focusing on business metrics, technical implementation, and strategies for enhancing ad effectiveness.",
    date: "Oct 25, 2022",
    readTime: "12 min read",
    link: "/blogs/spotify-programmatic-ads",
    tag: "Product Teardown"
    }, 
  {
    title: "CRED Product Teardown - Product Improvement",
    description: "A detailed analysis of CRED's product strategy, user experience, and potential improvements to enhance user engagement and retention.",
    date: "Aug 20, 2022",
    readTime: "15 min read",
    link: "/blogs/cred-product-teardown",
    tag: "Product Teardown"
  },
  
];

export default function Blogs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 px-8">
        <div className="max-w-4xl mx-auto py-10">
          <h1 className="text-5xl font-bold text-text-primary mb-4 drop-shadow-sm [text-shadow:_0_3px_10px_rgb(0_0_0_/_30%)]">
            Blogs
          </h1>
          <p className="text-text-primary text-lg md:text-lg leading-relaxed mb-12">
            Thoughts, learnings, and insights about technology, product management, Project PRDs, System Design, and more.
          </p>

          <div className="flex flex-col gap-12">
            {blogPosts.map((post, index) => (
              <Link href={post.link} key={index} className="block">
                <motion.div
                  className="relative bg-card-bg/80 rounded-2xl border border-card-border p-6 cursor-pointer shadow-lg shadow-black/5 dark:shadow-black/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.2
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    transition: { duration: 0.2 }
                  }}
                >
                  {post.tag && (
                    <span className="absolute top-4 right-4 px-3 py-1 text-sm bg-card-border rounded-full text-text-primary">
                      {post.tag}
                    </span>
                  )}
                  <div>
                    <h2 className="text-xl font-bold text-text-primary mb-2">{post.title}</h2>
                    <p className="text-text-secondary text-sm mb-3">{post.description}</p>
                    <div className="flex items-center gap-4 text-sm text-text-secondary">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {blogPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-secondary text-lg">
                Coming soon... Stay tuned for my first blog post!
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}