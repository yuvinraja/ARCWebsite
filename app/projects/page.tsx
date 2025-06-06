'use client'
import Link from "next/link";
import Image from "next/image";
import projects from "./projectsData";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  const droneExperiments = projects.filter((exp) => exp.category === "Drones");

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Drones
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {droneExperiments.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link
              href={`/projects/${exp.id}`}
              className="group block aspect-square bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <div className="relative w-full h-2/3">
                <Image
                  src={exp.imageUrl}
                  alt={exp.title}
                  fill={true}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 h-1/3 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{exp.shortDescription}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
