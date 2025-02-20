import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
        <h1 className="text-5xl font-bold mb-6">Empowering Innovation</h1>
        <p className="text-lg mb-8">Access Experiments, Build the Future.</p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <Link
            href="/experiments"
            className="px-6 py-3 border border-black-500 hover:border-blue-600 h text-white font-semibold rounded-lg transition hover:text-blue-400 hover:font-bold"
          >
            Explore Experiments
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 border border-black-500 hover:border-green-600 text-white font-semibold rounded-lg transition hover:text-green-400 hover:font-bold"
          >
            Explore Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
