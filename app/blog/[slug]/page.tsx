import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { singlePostQuery } from "@/sanity/lib/blogQuery";
import type { BlogPost } from "@/sanity/schemaTypes/blogPost";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Calendar, User, Tag, ArrowLeft } from "lucide-react";
import { PortableText, PortableTextComponents } from "@portabletext/react";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className="my-8">
        <Image
          src={
            urlFor(value.asset).width(800).height(400).url() ||
            "/placeholder.svg"
          }
          alt={value.alt || "Blog image"}
          width={800}
          height={400}
          className="rounded-lg shadow-lg w-full"
        />
        {value.caption && (
          <p className="text-center text-sm text-gray-500 mt-2">
            {value.caption}
          </p>
        )}
      </div>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mt-8 mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-6 mb-3 text-gray-800">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-purple-500 pl-4 my-6 italic text-gray-600 bg-purple-50 py-2">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 text-gray-700 space-y-1">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value.href}
        className="text-purple-600 hover:text-pink-600 underline transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-800">{children}</strong>
    ),
  },
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post: BlogPost = await client.fetch(singlePostQuery, { slug });

  return (
    <div className="-mb-16 -mt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {post.mainImage && (
          <>
            <div className="absolute inset-0">
              <Image
                src={
                  urlFor(post.mainImage.asset).width(1200).height(600).url() ||
                  "/placeholder.svg"
                }
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>
          </>
        )}

        <div className="relative max-w-4xl mx-auto text-center text-white">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>

            {post.author && (
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {post.author.name}
              </div>
            )}
          </div>

          {post.categories && post.categories.length > 0 && (
            <div className="flex items-center justify-center gap-2 mt-4">
              <Tag className="w-4 h-4" />
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <span
                    key={category._id}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <PortableText
              value={post.body}
              components={portableTextComponents}
            />
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Interested in Our Solutions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Learn more about our autonomous technologies and AI innovations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                Explore Our Projects
              </Button>
            </Link>
            <Link href="/blog">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50"
              >
                Read More Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
