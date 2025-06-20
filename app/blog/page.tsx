// /blog/page.tsx
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allPostsQuery } from "@/sanity/lib/blogQuery";
import type { BlogPost } from "@/sanity/schemaTypes/blogPost";

import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

export default async function BlogPage() {
  const posts: BlogPost[] = await client.fetch(allPostsQuery);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            OUR BLOG
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Insights, innovations, and updates from the world of autonomous
            technologies and AI
          </p>
        </div>

        {/* Blog Posts Grid */}
        <section className=" px-6">
          <div className="max-w-6xl mx-auto">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-gray-600 mb-4">
                  No blog posts yet
                </h2>
                <p className="text-gray-500">
                  Check back soon for exciting content!
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link 
                    key={post._id}
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
                            {new Date(post.publishedAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
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
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
  );
}
