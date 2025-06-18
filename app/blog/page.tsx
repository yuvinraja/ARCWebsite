// app/blog/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "./blogPosts";

const BlogPage = () => {
  return (
    <main className="bg-gray-100 min-h-screen">
      <motion.div
        className="bg-gray-100 min-h-screen"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <section className="min-h-screen bg-white px-4 py-16">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Articles and Reels
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Curated stories and viral reels from the future of tech and
              drones.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="group bg-gray-50 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.01, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw" 
                      className="object-cover"
                      priority={index < 2} // Prioritize loading for the first two images
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-1">
                      <span className="capitalize font-semibold text-blue-600">
                        {post.type}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </main>
  );
};

export default BlogPage;
