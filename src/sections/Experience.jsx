import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import { portfolioData } from '../data/portfolioData';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-light-bg/50 dark:bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>Experience & Training</SectionHeading>
        
        <div className="mt-12 space-y-6 max-w-4xl mx-auto">
          {portfolioData.experience.map((exp) => (
            <Card key={exp.id} className="relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-light-text dark:text-dark-text group-hover:text-primary transition-colors">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-primary font-medium mt-1">
                    <Briefcase size={16} />
                    <span>{exp.company}</span>
                    <span className="text-light-muted dark:text-dark-muted mx-2 hidden sm:inline">•</span>
                    <span className="text-secondary w-full sm:w-auto">{exp.type}</span>
                  </div>
                </div>
                <div className="inline-block px-3 py-1 bg-light-muted/10 dark:bg-dark-muted/10 rounded-full text-sm font-medium text-light-text dark:text-dark-text h-fit whitespace-nowrap">
                  {exp.duration}
                </div>
              </div>
              
              {exp.tech && (
                <div className="mb-4">
                  <span className="text-sm font-semibold text-light-muted dark:text-dark-muted uppercase tracking-wider">Technologies: </span>
                  <span className="text-sm font-medium text-light-text dark:text-dark-text ml-2">{exp.tech}</span>
                </div>
              )}
              
              <ul className="space-y-3 mt-4">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0"></span>
                    <span className="text-light-text dark:text-dark-text/90 leading-relaxed text-[15px]">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
