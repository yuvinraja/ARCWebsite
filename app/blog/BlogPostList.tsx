"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { BlogPost } from "@/sanity/schemaTypes/blogPost";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  posts: BlogPost[];
}

export default function BlogPostList({ posts }: Props) {
  return (
    <section className="px-6">
      <div className="max-w-6xl mx-auto">
        {posts.length === 0 ? (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-600 mb-4">
              No blog posts yet
            </h2>
            <p className="text-gray-500">
              Check back soon for exciting content!
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {posts.map((post, index) => (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="block transition-all duration-300 hover:scale-105"
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl overflow-hidden h-full">
                    <div className="relative h-48 overflow-hidden">
                      {post.mainImage ? (
                        <Image
                          src={
                            urlFor(post.mainImage.asset)
                              .width(400)
                              .height(200)
                              .url() || "/placeholder.svg"
                          }
                          alt={post.mainImage.alt || post.title}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                          <span className="text-white text-lg font-semibold">
                            No Image
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                        {post.author && (
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author.name}
                          </div>
                        )}
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2">
                        {post.title}
                      </h3>

                      {post.excerpt && (
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
