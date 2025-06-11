'use client'
import Link from "next/link";
import Image from "next/image";
import projects from "./projectsData";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  const droneExperiments = projects.filter((exp) => exp.category === "Drones");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Drone Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cutting-edge drone technology for surveillance, cinematography, and specialized applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {droneExperiments.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link
                href={`/projects/${exp.id}`}
                className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2"
              >
                {/* Image Container - Fixed aspect ratio for square images */}
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <Image
                    src={exp.imageUrl}
                    alt={exp.title}
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    priority // Prioritize first 3 images for faster loading
                  />
                  {/* Gradient overlay for better text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {exp.title}
                    </h3>
                    {/* Optional: Add a category badge */}
                    <span className="px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
                      Drone
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {exp.shortDescription}
                  </p>
                  
                  {/* Call to action */}
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-200">
                    <span>Learn more</span>
                    <svg 
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Optional: Add a call-to-action section */}
        {droneExperiments.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center py-16"
          >
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No drone projects yet</h3>
              <p className="text-gray-600">Check back soon for our latest drone innovations.</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;