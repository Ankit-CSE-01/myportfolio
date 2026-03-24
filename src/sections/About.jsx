import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import { portfolioData } from '../data/portfolioData';
import { MapPin, GraduationCap, Briefcase, Code, BookOpen, Music } from 'lucide-react';

const About = () => {
  const { bio, approach, location, education, experienceYears, hobbies } = portfolioData.personalInfo;

  return (
    <section id="about" className="py-20 bg-light-bg/50 dark:bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>About Me</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Quick Facts Sidebar */}
          <div className="space-y-8">
            <Card>
              <h3 className="text-xl font-bold mb-6 text-light-text dark:text-dark-text">Quick Facts</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary"><MapPin size={24} /></div>
                  <div>
                    <p className="text-sm text-light-muted dark:text-dark-muted">Location</p>
                    <p className="font-medium text-light-text dark:text-dark-text">{location}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-secondary/10 rounded-lg text-secondary"><GraduationCap size={24} /></div>
                  <div>
                    <p className="text-sm text-light-muted dark:text-dark-muted">Education</p>
                    <p className="font-medium text-light-text dark:text-dark-text">{education}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500"><Briefcase size={24} /></div>
                  <div>
                    <p className="text-sm text-light-muted dark:text-dark-muted">Experience</p>
                    <p className="font-medium text-light-text dark:text-dark-text">{experienceYears}</p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-6 text-light-text dark:text-dark-text">When I'm Not Coding</h3>
              <ul className="space-y-4">
                {hobbies.map((hobby, index) => (
                  <li key={index} className="flex items-center gap-3 p-3 rounded-lg bg-light-muted/5 dark:bg-dark-muted/5 hover:bg-light-muted/10 dark:hover:bg-dark-muted/10 transition-colors">
                    {hobby === 'Surfing Web' ? <Code className="text-primary" size={20} /> :
                     hobby === 'Reading' ? <BookOpen className="text-secondary" size={20} /> :
                     <Music className="text-blue-500" size={20} />}
                    <span className="font-medium text-light-text dark:text-dark-text">{hobby}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Main Bio Content */}
          <div className="md:col-span-2 space-y-8">
            <Card className="h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
              <div className="space-y-4 text-light-text dark:text-dark-text/90 leading-relaxed text-lg">
                <p>Hello! I'm <span className="font-bold text-secondary">{portfolioData.personalInfo.name}</span>, a passionate developer with a deep fascination for transforming complex problems into elegant digital solutions.</p>
                <p>{bio.split("What drives me")[0]}</p>
                <p>What drives me{bio.split("What drives me")[1]}</p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-6 text-primary">My Approach</h3>
              <p className="text-light-text dark:text-dark-text/90 leading-relaxed text-lg">
                {approach}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
