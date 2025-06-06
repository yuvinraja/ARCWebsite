'use client'
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-screen ">
      {/* Background Image */}
      <Image
        src="/hero.jpg"
        alt="Hero Background"
        fill
          


      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 md:mb-6"
        >
          Empowering Innovation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg mb-6 md:mb-8"
        >
          Access Experiments, Build the Future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4"
        >
          <Link
            href="/experiments"
            className="px-6 py-3 border border-blue-500 hover:border-blue-600 text-white font-semibold rounded-lg transition hover:text-blue-400 hover:font-bold"
          >
            Explore Experiments
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 border border-green-500 hover:border-green-600 text-white font-semibold rounded-lg transition hover:text-green-400 hover:font-bold"
          >
            Ongoing Projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
