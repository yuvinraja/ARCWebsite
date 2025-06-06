'use client';

import Link from "next/link";
import experiments from "./experimentsData";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const ExperimentsPage = () => {
  const droneExperiments = experiments.filter((exp) => exp.category === "Drones");
  const groundVehicleExperiments = experiments.filter((exp) => exp.category === "Ground Vehicles");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-10"
    >
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        {...fadeInUp}
        transition={{ duration: 0.7 }}
      >
        Experiments
      </motion.h1>

      {/* Drones Section */}
      <motion.section className="mb-10" {...fadeInUp}>
        <h2 className="text-3xl font-semibold mb-4">Drones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {droneExperiments.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/experiments/${exp.id}`}
                className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition bg-white flex flex-col"
              >
                <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-gray-600">{exp.shortDescription}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Ground Vehicles Section */}
      <motion.section {...fadeInUp}>
        <h2 className="text-3xl font-semibold mb-4">Ground Vehicles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groundVehicleExperiments.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/experiments/${exp.id}`}
                className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition bg-white flex flex-col"
              >
                <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-gray-600">{exp.shortDescription}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ExperimentsPage;
