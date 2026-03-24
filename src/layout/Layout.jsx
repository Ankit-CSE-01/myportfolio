import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/ui/AnimatedBackground';

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen relative z-0">
        <AnimatedBackground />
        <Navbar />
        <main className="flex-grow flex flex-col w-full">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
