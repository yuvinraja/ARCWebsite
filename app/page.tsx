"use client"

import { useState, useEffect } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Satellite,
  Navigation,
  Wheat,
  Shield,
  Settings,
  Rocket,
  GraduationCap,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const heroImages = [
  "/hero/img1.jpg",
  "/hero/img2.jpg",
  "/hero/img3.jpg",
  "/hero/img4.jpg",
  "/hero/img5.jpg",
]

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Slideshow */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500">
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Slideshow */}
        <div className="relative h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-30" : "opacity-0"
              }`}
            >
              <Image
                fill
                src={image || "/placeholder.svg"}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

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
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Shaping the Future of
              <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                Autonomy and AI
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              We specialize in the integration of autonomous ground and aerial vehicles, swarm drone technologies, and
              AI-powered solutions for agriculture and defense.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-black font-semibold px-8 py-3 text-lg"
              >
                Partner with Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg"
              >
                Explore Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Who We Are
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are a forward-thinking company committed to advancing autonomous technologies for real-world impact.
              Our core focus spans integrated systems, swarm technologies, and GPS-denied navigation solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Satellite className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Integrated Autonomous Systems</h3>
                <p className="text-gray-600">
                  Seamless integration of ground and aerial vehicles for comprehensive solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-teal-50 to-cyan-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Swarm Drone Technology</h3>
                <p className="text-gray-600">
                  Coordinated autonomous networks for precision and scalable mission execution.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Navigation className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">GPS-Denied Navigation</h3>
                <p className="text-gray-600">Reliable autonomous mobility solutions in challenging environments.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Key Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge solutions designed for agriculture and defense sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Satellite className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Swarm Drone Systems</h3>
              <p className="text-gray-600">
                Coordinated autonomous drone networks for scalable missions and precision operations.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Navigation className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Autonomous Navigation</h3>
              <p className="text-gray-600">
                Reliable mobility solutions even in GPS-denied environments and challenging terrains.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Wheat className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Agri-Tech Solutions</h3>
              <p className="text-gray-600">
                Smart drones and ground robots for crop monitoring, disease detection, and precision spraying.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Defense Applications</h3>
              <p className="text-gray-600">
                Tactical autonomous systems for surveillance, tracking, and mission-critical operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                To become a global leader in autonomous system integration and AI education for real-world challenges in
                agriculture and defense.
              </p>

              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                To innovate and deploy cutting-edge autonomous technologies while nurturing AI skills among students and
                institutions across the country.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                    <div className="text-gray-600">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-pink-600 mb-2">25+</div>
                    <div className="text-gray-600">AI Labs Setup</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-teal-600 mb-2">100+</div>
                    <div className="text-gray-600">Students Trained</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-600 mb-2">15+</div>
                    <div className="text-gray-600">Industry Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500">
        <div className="max-w-6xl mx-auto text-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Empowering Future Innovators</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              We offer Next-Gen AI Labs for universities and colleges, where students can build, learn, and innovate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <Satellite className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Build Autonomous Drones</h3>
              <p className="text-purple-100 text-sm">Hands-on experience with drone assembly and programming</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <Navigation className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Navigation Systems</h3>
              <p className="text-purple-100 text-sm">Real-time navigation and control system development</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">AI in Electric Vehicles</h3>
              <p className="text-purple-100 text-sm">Learn AI applications in modern electric vehicle systems</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Industry Projects</h3>
              <p className="text-purple-100 text-sm">Participate in real-world, industry-relevant projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Innovate Together?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join us in shaping the future of autonomous technologies and AI education
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-purple-600 to-pink-600 border-0 text-white hover:scale-105 transition-transform">
              <CardContent className="p-8 text-center">
                <Rocket className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Partner with Us</h3>
                <p className="mb-6 text-purple-100">Explore collaboration for research and product deployment</p>
                <Button variant="secondary" className="w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-600 to-cyan-600 border-0 text-white hover:scale-105 transition-transform">
              <CardContent className="p-8 text-center">
                <GraduationCap className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Set Up an AI Lab</h3>
                <p className="mb-6 text-teal-100">Bring industry-grade autonomous technology to your campus</p>
                <Button variant="secondary" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-600 to-orange-600 border-0 text-white hover:scale-105 transition-transform">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <p className="mb-6 text-yellow-100">Lets discuss your autonomous technology needs</p>
                <Button variant="secondary" className="w-full">
                  Contact Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-6 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-white text-center">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6" />
              <span className="text-lg">+91 8848653573</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-6 h-6" />
              <span className="text-lg">voltaerotech@gmail.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">Chittoor, Andhra Pradesh</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
