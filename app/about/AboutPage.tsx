import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Satellite, Settings, Navigation, Wheat, Shield } from "lucide-react";

const AboutPage = () => {
  return (
    <div>
      {/* About Section */}
      <section id="about" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Who We Are
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are a forward-thinking company committed to advancing
              autonomous technologies for real-world impact. Our core focus
              spans integrated systems, swarm technologies, and GPS-denied
              navigation solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Satellite className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Integrated Autonomous Systems
                </h3>
                <p className="text-gray-600">
                  Seamless integration of ground and aerial vehicles for
                  comprehensive solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-teal-50 to-cyan-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Swarm Drone Technology
                </h3>
                <p className="text-gray-600">
                  Coordinated autonomous networks for precision and scalable
                  mission execution.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Navigation className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  GPS-Denied Navigation
                </h3>
                <p className="text-gray-600">
                  Reliable autonomous mobility solutions in challenging
                  environments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 pb-[7px] bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Key Capabilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Satellite className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Swarm Drone Systems
              </h3>
              <p className="text-gray-600">
                Coordinated autonomous drone networks for scalable missions and
                precision operations.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Navigation className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Autonomous Navigation
              </h3>
              <p className="text-gray-600">
                Reliable mobility solutions even in GPS-denied environments and
                challenging terrains.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Wheat className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Agri-Tech Solutions
              </h3>
              <p className="text-gray-600">
                Smart drones and ground robots for crop monitoring, disease
                detection, and precision spraying.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Defense Applications
              </h3>
              <p className="text-gray-600">
                Tactical autonomous systems for surveillance, tracking, and
                mission-critical operations.
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
                To become a global leader in autonomous system integration and
                AI education for real-world challenges in agriculture and
                defense.
              </p>

              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                To innovate and deploy cutting-edge autonomous technologies
                while nurturing AI skills among students and institutions across
                the country.
              </p>
            </div>

            <div className="relative">
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
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
