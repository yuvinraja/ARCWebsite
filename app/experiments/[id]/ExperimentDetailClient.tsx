'use client';

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

interface ExperimentDetailClientProps {
  experiment: {
    id: string;
    title: string;
    shortDescription: string;
    details: string;
    difficulty: string;
    equipment: string[];
  };
}

const ExperimentDetailClient = ({ experiment }: ExperimentDetailClientProps) => {
  return (
    <motion.div
      className="container mx-auto px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="text-center mb-8" {...fadeInUp}>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{experiment.title}</h1>
        <p className="text-lg text-gray-600 mt-2">{experiment.shortDescription}</p>
      </motion.div>

      <motion.div
        className="w-full h-64 md:h-96 bg-gray-200 flex items-center justify-center rounded-lg shadow-lg mb-6"
        {...fadeInUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className="text-gray-500 text-lg">Placeholder Image for {experiment.title}</span>
      </motion.div>

      <motion.div
        className="bg-white p-6 rounded-lg shadow-xl"
        {...fadeInUp}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold mb-4">About the Experiment</h2>
        <p className="text-gray-700 leading-relaxed">{experiment.details}</p>

        <motion.div
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800">Difficulty Level</h3>
            <p className="text-blue-600">{experiment.difficulty}</p>
          </div>

          <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800">Equipment Required</h3>
            <ul className="text-green-600 list-disc list-inside">
              {experiment.equipment.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ExperimentDetailClient;
