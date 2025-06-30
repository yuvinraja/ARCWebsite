"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  TrendingUp,
  Target,
  Users,
  Rocket,
  Download,
  Zap,
  BookOpen,
  Settings,
  BarChart3,
  CheckCircle,
  Eye,
} from "lucide-react";
import Contact from "../contact/ContactPage";

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-white -mb-16 -mt-16 ">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/investors.jpg"
            alt="Students learning with drones and robots"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-pink-900/70 to-red-900/80"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6">
          <div className="text-center text-white max-w-5xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Invest in the Future of
              <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                Educational Robotics
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl mb-8 text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Voltaero Technologies is revolutionizing STEM education in India
              by making autonomous technology accessible to every school and
              college.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-black font-semibold px-8 py-4 text-lg shadow-2xl"
                onClick={() => window.open("/pitchdeck.pdf", "_blank")}
              >
                <Eye className="w-5 h-5 mr-2" />
                View Pitch Deck
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-purple-600 to-pink-600 text-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-xl leading-relaxed text-purple-100">
                  Empowering the next generation of innovators by bridging the
                  gap in robotics and drone education across India's educational
                  institutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl bg-gradient-to-br from-teal-600 to-cyan-600 text-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-xl leading-relaxed text-teal-100">
                  To be India's leading provider of autonomous technology and
                  hands-on learning experiences for educational institutions
                  nationwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Invest in Voltaero */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Why Invest in Voltaero?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're positioned at the intersection of education, technology, and
              India's digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">
                  First-Mover Advantage
                </h3>
                <p className="text-gray-600 text-sm">
                  Leading the underserved educational robotics market with
                  proprietary solutions
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-teal-50 to-cyan-50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">
                  Proprietary Technology
                </h3>
                <p className="text-gray-600 text-sm">
                  Custom autonomous components with integrated curriculum and
                  training programs
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">
                  Scalable Model
                </h3>
                <p className="text-gray-600 text-sm">
                  Recurring revenue from kits, upgrades, training, and ongoing
                  support services
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-green-50 to-teal-50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">
                  Proven Traction
                </h3>
                <p className="text-gray-600 text-sm">
                  25+ AI labs established, 100+ students trained, 15+
                  institutional partnerships
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500">
        <div className="max-w-6xl mx-auto text-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Market Opportunity
            </h2>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              India's EdTech market is experiencing unprecedented growth, driven
              by government initiatives and increasing digital adoption
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold mb-2 text-yellow-300">
                  1.5M+
                </div>
                <div className="text-lg font-semibold mb-2">
                  Schools in India
                </div>
                <p className="text-purple-100 text-sm">
                  Massive addressable market with increasing focus on STEM
                  education
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold mb-2 text-yellow-300">
                  $30B
                </div>
                <div className="text-lg font-semibold mb-2">
                  EdTech Market Size
                </div>
                <p className="text-purple-100 text-sm">
                  Projected to reach $30B by 2025 with 39% CAGR growth rate
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold mb-2 text-yellow-300">
                  NEP 2020
                </div>
                <div className="text-lg font-semibold mb-2">
                  Government Support
                </div>
                <p className="text-purple-100 text-sm">
                  National Education Policy emphasizes hands-on learning and
                  technology integration
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals driving innovation in education
              technology and autonomous systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Founder & CEO
                </h3>
                <p className="text-purple-600 font-semibold mb-3">
                  Voltaero Technologies
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  10+ years in robotics and autonomous systems. Former lead
                  engineer at aerospace companies with expertise in drone
                  technology and AI applications.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Head of Education
                </h3>
                <p className="text-teal-600 font-semibold mb-3">
                  Curriculum Development
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  15+ years in educational technology and curriculum design.
                  Former professor with deep understanding of STEM education and
                  learning methodologies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">CTO</h3>
                <p className="text-yellow-600 font-semibold mb-3">
                  Technology & Innovation
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  12+ years in software development and AI. Expert in autonomous
                  systems, machine learning, and embedded systems development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Investment Opportunity
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Partner with us to scale impact and returns in India's rapidly
            growing educational technology sector
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2 text-yellow-300">
                  Series A
                </div>
                <div className="text-lg font-semibold mb-2">Current Round</div>
                <p className="text-purple-100 text-sm">
                  Seeking strategic investors for market expansion
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2 text-yellow-300">
                  ₹5-10Cr
                </div>
                <div className="text-lg font-semibold mb-2">Funding Target</div>
                <p className="text-purple-100 text-sm">
                  Scale operations and expand to 500+ institutions
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2 text-yellow-300">
                  3-5x
                </div>
                <div className="text-lg font-semibold mb-2">
                  Projected Returns
                </div>
                <p className="text-purple-100 text-sm">
                  Based on market growth and expansion plans
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => window.open("/pitchdeck.pdf", "_blank")}
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-2xl"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Pitch Deck
            </Button>
          </div>
        </div>
      </section>

      {/* Contact & Next Steps */}
      <div className="bg-gradient-to-br from-gray-50 to-purple-50 py-16">
        <Contact />
      </div>
    </div>
  );
}
