import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Base Background Color */}
      <div className="absolute inset-0 bg-light-bg dark:bg-dark-bg transition-colors duration-500"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-30 dark:opacity-20 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>

      {/* Floating Animated Orbs */}
      <motion.div
        animate={{
          x: [0, 120, 0, -120, 0],
          y: [0, -120, 100, -50, 0],
          scale: [1, 1.2, 0.9, 1.1, 1],
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-primary/30 dark:bg-primary/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen opacity-60 dark:opacity-40"
      />
      
      <motion.div
        animate={{
          x: [0, -150, 80, -100, 0],
          y: [0, 150, -120, 60, 0],
          scale: [1, 0.8, 1.3, 0.9, 1],
          rotate: [360, 270, 180, 90, 0]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-[10%] -right-[10%] w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] bg-secondary/30 dark:bg-secondary/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen opacity-60 dark:opacity-40"
      />
      
      <motion.div
        animate={{
          x: [0, 200, -150, 100, 0],
          y: [0, -100, 150, -80, 0],
          scale: [1, 1.1, 0.85, 1.15, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[30%] left-[30%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] bg-blue-500/20 dark:bg-blue-600/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-50 dark:opacity-30"
      />

      {/* Floating Particles/Stars effect for depth */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: Math.random() * 0.5 + 0.1
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [null, Math.random() * 0.8 + 0.2, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-primary/40 dark:bg-primary/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
