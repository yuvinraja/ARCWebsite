"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Satellite, Settings, Navigation, Wheat, Shield } from "lucide-react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div>
      {/* About Section */}
      <section id="about" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Who We Are
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are a forward-thinking company committed to advancing
              autonomous technologies for real-world impact. Our core focus
              spans integrated systems, swarm technologies, and GPS-denied
              navigation solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:items-stretch">
            {[
              {
                Icon: Satellite,
                title: "Integrated Autonomous Systems",
                description:
                  "Seamless integration of ground and aerial vehicles for comprehensive solutions.",
                iconGradient: "bg-gradient-to-r from-purple-500 to-pink-500",
                cardGradient: "bg-gradient-to-br from-purple-50 to-pink-50",
              },
              {
                Icon: Settings,
                title: "Swarm Drone Technology",
                description:
                  "Coordinated autonomous networks for precision and scalable mission execution.",
                iconGradient: "bg-gradient-to-r from-teal-500 to-cyan-500",
                cardGradient: "bg-gradient-to-br from-teal-50 to-cyan-50",
              },
              {
                Icon: Navigation,
                title: "GPS-Denied Navigation",
                description:
                  "Reliable autonomous mobility solutions in challenging environments.",
                iconGradient: "bg-gradient-to-r from-yellow-500 to-orange-500",
                cardGradient: "bg-gradient-to-br from-yellow-50 to-orange-50",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <Card
                  className={`border-0 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col ${item.cardGradient}`}
                >
                  <CardContent className="p-8 text-center flex flex-col flex-1">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${item.iconGradient}`}
                    >
                      <item.Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 flex-1 flex items-center">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 pb-[7px] bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Key Capabilities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[Satellite, Navigation, Wheat, Shield].map((Icon, i) => (
              <motion.div
                key={i}
                className="text-center group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform ${
                    [
                      "bg-gradient-to-r from-purple-500 to-pink-500",
                      "bg-gradient-to-r from-teal-500 to-cyan-500",
                      "bg-gradient-to-r from-green-500 to-teal-500",
                      "bg-gradient-to-r from-red-500 to-pink-500",
                    ][i]
                  }`}
                >
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {
                    [
                      "Swarm Drone Systems",
                      "Autonomous Navigation",
                      "Agri-Tech Solutions",
                      "Defense Applications",
                    ][i]
                  }
                </h3>
                <p className="text-gray-600">
                  {
                    [
                      "Coordinated autonomous drone networks for scalable missions and precision operations.",
                      "Reliable mobility solutions even in GPS-denied environments and challenging terrains.",
                      "Smart drones and ground robots for crop monitoring, disease detection, and precision spraying.",
                      "Tactical autonomous systems for surveillance, tracking, and mission-critical operations.",
                    ][i]
                  }
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                To be India's leading provider of autonomous technology and
                hands-on learning experiences for educational institutions
                nationwide.
              </p>

              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Empowering the next generation of innovators by bridging the gap
                in robotics and drone education across India's educational
                institutions.
              </p>
            </div>

            <motion.div
              className="relative"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      50+
                    </div>
                    <div className="text-gray-600">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-pink-600 mb-2">
                      25+
                    </div>
                    <div className="text-gray-600">AI Labs Setup</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-teal-600 mb-2">
                      100+
                    </div>
                    <div className="text-gray-600">Students Trained</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-600 mb-2">
                      15+
                    </div>
                    <div className="text-gray-600">Industry Partners</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
