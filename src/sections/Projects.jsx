import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import { portfolioData } from '../data/portfolioData';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>Featured Projects</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col p-0 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-dark-bg/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 text-light-text dark:text-dark-text group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-light-muted dark:text-dark-muted mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-4 border-t border-light-muted/20 dark:border-dark-muted/20">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center gap-2 text-sm font-medium text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <Github size={18} /> Source Code
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center gap-2 text-sm font-medium text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
