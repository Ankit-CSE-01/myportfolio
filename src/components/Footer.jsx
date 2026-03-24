import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-light-card dark:bg-dark-card py-8 border-t border-light-muted/20 dark:border-dark-muted/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-light-muted dark:text-dark-muted">
        <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Ankit Raj. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="https://github.com/Divyanshuvats1006" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            <span className="sr-only">GitHub</span>
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/divyanshu-vats" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin size={20} />
          </a>
          <a href="mailto:divyanshuvats1006@gmail.com" className="hover:text-primary transition-colors">
            <span className="sr-only">Email</span>
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
