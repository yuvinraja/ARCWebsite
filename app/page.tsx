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
import { motion } from "framer-motion";

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
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
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
                className="w-full h-full object-cover"
                priority={index === 0}
                sizes="100vw"
                loading={index === 0 ? "eager" : "lazy"}
                quality={80}
                style={{ objectFit: "cover" }}
                unoptimized={true}
              />
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
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
          <motion.div
            className="text-center text-white max-w-4xl relative p-8 sm:p-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset- -z-10"></div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight drop-shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Shaping the Future of
              <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg pb-[10px]">
                Autonomy and AI
              </span>
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed px-4 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              We specialize in the integration of autonomous ground and aerial
              vehicles, swarm drone technologies, and AI-powered solutions for
              agriculture and defense.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link href="/projects">
                <Button className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-black font-semibold px-6 sm:px-8 py-3 text-base sm:text-lg shadow-2xl">
                  Explore Solutions
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <AboutPage />

      {/* Video Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              See Our Technology in Action
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch our autonomous drones and AI-powered systems demonstrate
              their capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((n, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <video
                  className="w-full h-64 md:h-80 object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={`/videos/video${n}.mp4`} type="video/mp4" />
                </video>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {n === 1
                      ? "Swarm Drone Technology"
                      : "Autonomous Navigation"}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {n === 1
                      ? "Coordinated autonomous flight demonstrations"
                      : "GPS-denied environment navigation showcase"}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/showcase">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 text-lg">
                View More Demonstrations
              </Button>
            </Link>
          </motion.div>
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
            {[Satellite, Navigation, Settings, GraduationCap].map((Icon, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  {
                    [
                      "Build Autonomous Drones",
                      "Navigation Systems",
                      "AI in Electric Vehicles",
                      "Industry Projects",
                    ][i]
                  }
                </h3>
                <p className="text-purple-100 text-sm">
                  {
                    [
                      "Hands-on experience with drone assembly and programming",
                      "Real-time navigation and control system development",
                      "Learn AI applications in modern electric vehicle systems",
                      "Participate in real-world, industry-relevant projects",
                    ][i]
                  }
                </p>
              </motion.div>
            ))}
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
            {[
              {
                icon: Rocket,
                title: "Partner with Us",
                text: "Explore collaboration for research and product deployment",
                button: "Get Started",
                gradient: "bg-gradient-to-br from-purple-600 to-pink-600",
              },
              {
                icon: GraduationCap,
                title: "Set Up an AI Lab",
                text: "Bring industry-grade autonomous technology to your campus",
                button: "Learn More",
                gradient: "bg-gradient-to-br from-teal-600 to-cyan-600",
              },
              {
                icon: Phone,
                title: "Contact Us",
                text: "Have questions or need more information? We're here to help!",
                button: "Contact Now",
                gradient: "bg-gradient-to-br from-yellow-600 to-orange-600",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.1, delay: i * 0.01 }}
                viewport={{ once: true }}
              >
                <Card className={`${item.gradient} border-0 text-white`}>
                  <CardContent className="p-8 text-center">
                    <item.icon className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="mb-6 text-purple-100">{item.text}</p>
                    <Button variant="secondary" className="w-full">
                      {item.button}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
