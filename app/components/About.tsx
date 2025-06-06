'use client'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-4 py-16"
    >
      <h2 className="text-3xl font-bold mb-6">About Us</h2>
      <p className="text-gray-700 mb-4">
        We are a team of innovators and creators dedicated to pushing the boundaries of technology and design. Our mission is to empower individuals and organizations to achieve their goals through cutting-edge solutions and collaborative projects.
      </p>
      <p className="text-gray-700 mb-4">
        With a focus on experimentation and continuous improvement, we strive to create impactful experiences that inspire and engage our community. Join us on this journey of exploration and discovery.
      </p>
      <p className="text-gray-700">
        Our work spans across full-stack development, AI/ML research, and robotic simulations using ROS2. We believe in building scalable, real-world solutions with a human-centered design philosophy.
      </p>
    </motion.div>
  )
}

export default About
