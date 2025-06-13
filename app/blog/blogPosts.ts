// app/blog/blogPosts.ts

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  date: string;
  type: 'article' | 'reel';
  link: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Rise of AI Drones in Agriculture",
    excerpt: "How AI-powered drones are transforming modern farming techniques...",
    thumbnail: "/blog/article1.jpg",
    date: "June 10, 2025",
    type: "article",
    link: "https://cropim.com/ai-in-agricultural-drone-technologies-future-trends/",
  },
  {
    id: "2",
    title: "This Drone Reel is Breaking the Internet!",
    excerpt: "Watch this incredible pocket-sized drone used in military operations...",
    thumbnail: "/blog/reel1.jpg",
    date: "May 29, 2025",
    type: "reel",
    link: "https://www.instagram.com/reel/DKNrlmssN5P/",
  },
  // Add more entries similarly
];
