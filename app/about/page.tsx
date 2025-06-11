"use client"

import React from 'react'
import About from '@/app/components/About'
import { motion } from 'framer-motion'

const page = () => {
  return (
    <>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
        >
            <About />
        </motion.div>
    </>
  )
}

export default page