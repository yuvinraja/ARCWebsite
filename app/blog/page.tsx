import { client } from "@/sanity/lib/client";
import { allPostsQuery } from "@/sanity/lib/blogQuery";
import type { BlogPost } from "@/sanity/schemaTypes/blogPost";

import SectionHeading from "@/components/SectionHeading";
import BlogPostList from "./BlogPostList"

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Explore the latest insights and innovations in autonomous technologies and AI",
  keywords: "autonomous systems, AI, robotics, machine learning, blog, insights, innovations",
  robots: "index, follow",
  openGraph: {
    title: "Blog",
    description: "Explore the latest insights and innovations in autonomous technologies and AI",
    type: "website",
  },
};

export default async function BlogPage() {
  const posts: BlogPost[] = await client.fetch(allPostsQuery);

  return (
    <>
      <SectionHeading
        title="Our Blog"
        subtitle="Explore the latest insights and innovations in autonomous technologies and AI"
      />
      <BlogPostList posts={posts} />
    </>
  );
}
