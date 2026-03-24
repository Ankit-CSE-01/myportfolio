import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`bg-light-card dark:bg-dark-card rounded-2xl p-6 shadow-sm border border-light-muted/20 dark:border-dark-muted/20 hover:shadow-md transition-shadow ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
