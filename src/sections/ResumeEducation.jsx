import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { portfolioData } from '../data/portfolioData';
import { Download, Calendar } from 'lucide-react';

const ResumeEducation = () => {
  return (
    <section id="resume" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <SectionHeading className="mb-0">Resume & Education</SectionHeading>
          <a href="/resume.pdf" download>
            <Button variant="primary" className="flex items-center gap-2">
              <Download size={20} /> Download Resume
            </Button>
          </a>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-light-muted/20 dark:before:via-dark-muted/20 before:to-transparent">
            {portfolioData.education.map((item, index) => (
              <div key={item.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-light-bg dark:border-dark-bg bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Card */}
                <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6">
                  <div className="flex items-center gap-2 text-primary font-bold mb-2">
                    <Calendar size={16} />
                    <span className="text-sm">{item.duration}</span>
                  </div>
                  <h3 className="font-bold text-xl text-light-text dark:text-dark-text mb-1">{item.degree}</h3>
                  <h4 className="text-light-muted dark:text-dark-muted font-medium mb-3">{item.institution}, {item.location}</h4>
                  <p className="text-light-text dark:text-dark-text/80 font-medium inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {item.score}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeEducation;
