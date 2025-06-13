// app/blog/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "./blogPosts";

const BlogPage = () => {
  return (
    <section className="min-h-screen bg-white px-4 py-16">
      {/* Hero */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Insights & Reels
        </h1>
        <p className="text-lg text-gray-600">
          Curated stories and viral reels from the future of tech and drones.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-gray-50 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition"
            whileHover={{ scale: 1.02 }}
          >
            <Link href={post.link} target="_blank" rel="noopener noreferrer">
              <div className="relative h-48 w-full">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover"
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
  );
};

export default BlogPage;
