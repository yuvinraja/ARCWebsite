import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Voltaero Technologies | Drones, AI, Innovation",
  description:
    "Voltaero Technologies builds cutting-edge drones and products powered by AI and advanced tech.",
  keywords: ["drones", "AI", "technology", "Voltaero", "autonomous systems"],
  authors: [{ name: "Voltaero technologies" }],
  openGraph: {
    title: "Voltaero Technologies",
    description: "Experience our innovative drone technology and AI products.",
    url: "https://voltaero.vercel.app/", // Replace with your domain
    siteName: "Voltaero Ventures",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen bg-gray-50 pt-16 pb-16">
        {/* <main className="min-h-screen bg-gradient-to-r from-gray-50 to-purple-50 pt-16 pb-16"> */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
