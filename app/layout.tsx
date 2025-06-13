import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";


export const metadata: Metadata = {
  title: 'Voltaero Technologies | Drones, AI, Innovation',
  description: 'Voltaero Technologies builds cutting-edge drones and products powered by AI and advanced tech.',
  keywords: ['drones', 'AI', 'technology', 'Voltaero', 'autonomous systems'],
  authors: [{ name: 'Voltaero technologies' }],
  openGraph: {
    title: 'Voltaero Technologies',
    description: 'Experience our innovative drone technology and AI products.',
    url: 'https://voltaero.tech', // Replace with your domain
    siteName: 'Voltaero Ventures',
    images: [
      {
        url: '/og-image.png', // Place an OG image in public/
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
  }
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
