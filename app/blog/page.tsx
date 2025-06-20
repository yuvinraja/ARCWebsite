// /blog/page.tsx
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allPostsQuery } from "@/sanity/lib/blogQuery";
import type { BlogPost } from "@/sanity/schemaTypes/blogPost";

import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, Tag } from "lucide-react"

export default async function BlogPage() {
  const posts: BlogPost[] = await client.fetch(allPostsQuery);

  return (
    // your UI here
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Insights, innovations, and updates from the world of autonomous
            technologies and AI
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-6">
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
                <Card
                  key={post._id}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
                >
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

                    {post.categories && post.categories.length > 0 && (
                      <div className="flex items-center gap-2 mb-4">
                        <Tag className="w-4 h-4 text-gray-400" />
                        <div className="flex flex-wrap gap-2">
                          {post.categories.slice(0, 2).map((category) => (
                            <span
                              key={category._id}
                              className="px-2 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs rounded-full"
                            >
                              {category.title}
                            </span>
                          ))}
                          {post.categories.length > 2 && (
                            <span className="text-xs text-gray-500">
                              +{post.categories.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    <Link href={`/blog/${post.slug.current}`}>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
