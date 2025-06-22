"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Camera,
  Battery,
  Wifi,
  Shield,
  Zap,
  Eye,
  LucideIcon,
  Play,
  X,
} from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";
import projects from "../projectsData";

// Define proper TypeScript interfaces
interface ProjectFeature {
  icon: LucideIcon; // This ensures type safety for Lucide icons
  title: string;
  description: string;
}

interface ProjectSpecifications {
  flightTime: string;
  range: string;
  camera: string;
  weatherResistance: string;
  maxSpeed: string;
  payload: string;
}

interface BaseProject {
  id: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
  category: string;
  gallery?: {
    images?: string[];
    videos?: string[];
  };
}

interface EnhancedProject extends BaseProject {
  longDescription: string;
  specifications: ProjectSpecifications;
  features: ProjectFeature[];
  applications: string[];
}

// Placeholder data that would typically come from a more detailed database
const getPlaceholderData = (project: BaseProject): EnhancedProject => ({
  ...project,
  longDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  specifications: {
    flightTime: "45 minutes",
    range: "5 km",
    camera: "4K Ultra HD",
    weatherResistance: "IP65 Rated",
    maxSpeed: "65 km/h",
    payload: "2.5 kg",
  },
  features: [
    {
      icon: Eye,
      title: "Advanced Vision",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      icon: Wifi,
      title: "Real-time Connectivity",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      icon: Battery,
      title: "Extended Performance",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      icon: Camera,
      title: "Professional Imaging",
      description:
        "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
    },
  ],
  applications: [
    "Security & Surveillance",
    "Aerial Photography",
    "Infrastructure Inspection",
    "Emergency Response",
    "Training & Education",
    "Research & Development",
  ],
});

const DroneDetailPage = () => {
  const params = useParams();
  const projectId = params?.id as string;

  // State for media gallery
  const [selectedMedia, setSelectedMedia] = useState<{
    type: "image" | "video";
    src: string;
  } | null>(null);

  // Find the project from projectsData
  const project = projects.find((p: BaseProject) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Project Not Found
          </h1>
          <Link
            href="/projects"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Return to Projects
          </Link>
        </div>
      </div>
    );
  }

  const droneData = getPlaceholderData(project);

  const MediaModal = () => {
    if (!selectedMedia) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center px-4 sm:px-6"
        onClick={() => setSelectedMedia(null)}
      >
        <div
          className="relative w-full max-w-5xl max-h-[90vh] flex justify-center items-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Media */}
          {selectedMedia.type === "image" ? (
            <Image
              src={selectedMedia.src}
              alt="Product media"
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          ) : (
            <video
              src={selectedMedia.src}
              controls
              autoPlay
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="-mb-16 -mt-16">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Link
          href="/projects"
          className="inline-flex items-center text-gray-600 hover:text-black transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src={droneData.imageUrl}
                alt={droneData.title}
                fill={true}
                className="object-contain p-8"
                priority
              />
            </div>

            {/* Category Badge */}
            <div className="absolute top-4 left-4 px-3 py-1 bg-black text-white text-sm font-semibold rounded-full">
              {droneData.category}
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {droneData.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {droneData.shortDescription}
              </p>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                <div className="text-2xl font-bold text-black">
                  {droneData.specifications.flightTime}
                </div>
                <div className="text-sm text-gray-600">Flight Time</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                <div className="text-2xl font-bold text-black">
                  {droneData.specifications.range}
                </div>
                <div className="text-sm text-gray-600">Range</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                <div className="text-2xl font-bold text-black">4K</div>
                <div className="text-sm text-gray-600">Ultra HD</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                <div className="text-2xl font-bold text-black">IP65</div>
                <div className="text-sm text-gray-600">Weather Proof</div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full lg:w-auto px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Request Quote
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Media Gallery Section */}
      {(droneData.gallery?.images?.length ||
        droneData.gallery?.videos?.length) && (
        <div className="bg-white py-16 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Product Gallery
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore detailed images and videos showcasing the design,
                capabilities, and real-world applications
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Images */}
              {droneData.gallery?.images?.map((image, index) => (
                <motion.div
                  key={`image-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative aspect-square bg-gray-100 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
                  onClick={() =>
                    setSelectedMedia({ type: "image", src: image })
                  }
                >
                  <Image
                    src={image}
                    alt={`${droneData.title} gallery image ${index + 1}`}
                    fill={true}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}

              {/* Videos */}
              {droneData.gallery?.videos?.map((video, index) => (
                <motion.div
                  key={`video-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay:
                      (droneData.gallery?.images?.length || 0 + index) * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="group relative aspect-square bg-gray-900 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
                  onClick={() =>
                    setSelectedMedia({ type: "video", src: video })
                  }
                >
                  <video
                    src={video}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    muted
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all duration-300">
                      <Play className="w-6 h-6 text-gray-900 ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-1 bg-black bg-opacity-70 text-white text-xs font-medium rounded">
                    VIDEO
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Gallery Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center items-center mt-8 space-x-8 text-sm text-gray-600"
            >
              {droneData.gallery?.images?.length && (
                <div className="flex items-center">
                  <Camera className="w-4 h-4 mr-2" />
                  {droneData.gallery.images.length} Image
                  {droneData.gallery.images.length !== 1 ? "s" : ""}
                </div>
              )}
              {droneData.gallery?.videos?.length && (
                <div className="flex items-center">
                  <Play className="w-4 h-4 mr-2" />
                  {droneData.gallery.videos.length} Video
                  {droneData.gallery.videos.length !== 1 ? "s" : ""}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}

      {/* Media Modal */}
      <MediaModal />

      {/* Features Section */}
      <div className="bg-white py-16 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advanced capabilities designed for professional applications and
              superior performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {droneData.features.map(
              (feature: ProjectFeature, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Specs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Technical Specifications
              </h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                {Object.entries(droneData.specifications).map(
                  ([key, value]: [string, string], index: number) => (
                    <div
                      key={key}
                      className={`p-4 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </span>
                        <span className="font-semibold text-gray-900">
                          {value}
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </motion.div>

            {/* Applications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Applications
              </h2>
              <div className="space-y-3">
                {droneData.applications.map(
                  (application: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                    >
                      <div className="w-2 h-2 bg-black rounded-full mr-4"></div>
                      <span className="font-medium text-gray-800">
                        {application}
                      </span>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-white py-16 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Product Overview
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed text-lg">
                {droneData.longDescription}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Deploy?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact our team to discuss your specific requirements and get a
              customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg"
              >
                Request Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-black transition-all duration-200"
              >
                Download Specs
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DroneDetailPage;
