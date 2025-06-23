"use client";

import { useState, useEffect } from "react";
import {
  Satellite,
  Navigation,
  Settings,
  Rocket,
  GraduationCap,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import AboutPage from "./about/AboutPage";

const heroImages = [
  "/hero/img1.jpg",
  "/hero/img2.jpg",
  "/hero/img3.jpg",
  "/hero/img4.jpg",
  "/hero/img5.jpg",
];

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white -mb-16 -mt-16">
      {/* Hero Section with Slideshow */}
      <section className="relative h-screen overflow-hidden">
        {/* Slideshow Container */}
        <div className="relative h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                fill
                src={image || "/placeholder.svg"}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover md:object-cover sm:object-contain sm:object-center"
                priority={index === 0} // Load first slide immediately
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                loading={index === 0 ? "eager" : "lazy"}
                quality={80} // Adjust quality for better performance
                style={{ objectFit: "cover" }} // Ensure images cover the container
                unoptimized={true} // Disable Next.js image optimization for external images
              />
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 z-10">
          <div className="text-center text-white max-w-4xl">
            {/* Background overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/40 -z-10"></div>
            <div className="relative p-8 sm:p-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
                Shaping the Future of
                <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg pb-[10px] ">
                  Autonomy and AI
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed px-4 drop-shadow-lg">
                We specialize in the integration of autonomous ground and aerial
                vehicles, swarm drone technologies, and AI-powered solutions for
                agriculture and defense.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                <Link href="/projects">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-black font-semibold px-6 sm:px-8 py-3 text-base sm:text-lg shadow-2xl"
                  >
                    Explore Solutions
                  </Button>
                </Link>
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-gray-200 px-6 sm:px-8 py-3 text-base sm:text-lg backdrop-blur-sm shadow-2xl"
                >
                  Partner with Us
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutPage />

      {/* Video Showcase Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              See Our Technology in Action
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch our autonomous drones and AI-powered systems demonstrate
              their capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-64 md:h-80 object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/videos/video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Swarm Drone Technology
                </h3>
                <p className="text-gray-300 text-sm">
                  Coordinated autonomous flight demonstrations
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-64 md:h-80 object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/videos/video2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Autonomous Navigation
                </h3>
                <p className="text-gray-300 text-sm">
                  GPS-denied environment navigation showcase
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/showcase">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 text-lg"
              >
                View More Demonstrations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Educational Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500">
        <div className="max-w-6xl mx-auto text-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Future Innovators
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              We offer Next-Gen AI Labs for universities and colleges, where
              students can build, learn, and innovate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <Satellite className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">
                Build Autonomous Drones
              </h3>
              <p className="text-purple-100 text-sm">
                Hands-on experience with drone assembly and programming
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <Navigation className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Navigation Systems</h3>
              <p className="text-purple-100 text-sm">
                Real-time navigation and control system development
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">
                AI in Electric Vehicles
              </h3>
              <p className="text-purple-100 text-sm">
                Learn AI applications in modern electric vehicle systems
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Industry Projects</h3>
              <p className="text-purple-100 text-sm">
                Participate in real-world, industry-relevant projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900 border-0">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Innovate Together?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join us in shaping the future of autonomous technologies and AI
            education
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-purple-600 to-pink-600 border-0 text-white hover:scale-105 transition-transform">
              <CardContent className="p-8 text-center">
                <Rocket className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Partner with Us</h3>
                <p className="mb-6 text-purple-100">
                  Explore collaboration for research and product deployment
                </p>
                <Button variant="secondary" className="w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-600 to-cyan-600 border-0 text-white hover:scale-105 transition-transform">
              <CardContent className="p-8 text-center">
                <GraduationCap className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Set Up an AI Lab</h3>
                <p className="mb-6 text-teal-100">
                  Bring industry-grade autonomous technology to your campus
                </p>
                <Button variant="secondary" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-600 to-orange-600 border-0 text-white hover:scale-105 transition-transform">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <p className="mb-6 text-yellow-100">
                  Have questions or need more information? We&apos;re here to
                  help!
                </p>
                <Button variant="secondary" className="w-full">
                  Contact Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
