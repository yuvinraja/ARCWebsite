"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  regNo: string;
  image: string;
  bio: string;
}

export default function TeamCard({ name, regNo, image, bio }: TeamCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white rounded-2xl shadow-lg p-4 w-full sm:w-[280px] text-center space-y-2"
    >
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="w-24 h-24 mx-auto rounded-full object-cover shadow-md"
      />
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-sm text-gray-500">{regNo}</p>
      <p className="text-sm text-gray-600">{bio}</p>
    </motion.div>
  );
}
