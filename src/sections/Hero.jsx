import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { name, role, tagline } = portfolioData.personalInfo;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-light-bg dark:border-dark-bg shadow-xl"
        >
          <img 
            src="/profile.jpg" 
            alt={name} 
            className="w-full h-full object-cover shadow-inner"
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4 tracking-tight"
        >
          {name}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl md:text-3xl font-medium text-light-text dark:text-dark-text mb-6"
        >
          {role}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-xl text-light-muted dark:text-dark-muted mb-10 max-w-2xl mx-auto px-4"
        >
          <p>{tagline} turning ideas into immersive digital experiences that solve real-world problems.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#projects">
            <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4">View My Work</Button>
          </a>
          <a href="#contact">
            <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4">Contact Me</Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
