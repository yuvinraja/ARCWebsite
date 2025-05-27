import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src="/hero.jpg"
        alt="Hero Background"
        className="w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6">
          Empowering Innovation
        </h1>
        <p className="text-base md:text-lg mb-6 md:mb-8">
          Access Experiments, Build the Future.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
