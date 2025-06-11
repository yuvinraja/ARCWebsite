"use client";

import React from "react";
import Contact from "@/app/components/Contact";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Contact />
    </motion.div>
  );
};

export default Page;
