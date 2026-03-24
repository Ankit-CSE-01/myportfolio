import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ children, className = '' }) => {
  return (
    <motion.h2 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-3xl md:text-4xl font-bold text-center text-primary mb-12 ${className}`}
    >
      <span className="relative inline-block pb-2 after:content-[''] after:absolute after:w-1/2 after:h-1 after:bg-secondary after:bottom-0 after:left-1/4 after:rounded-full">
        {children}
      </span>
    </motion.h2>
  );
};

export default SectionHeading;
