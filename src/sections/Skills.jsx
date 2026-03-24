import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import { portfolioData } from '../data/portfolioData';

// Import icons
import { FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiC, SiCplusplus, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman } from 'react-icons/si';

const iconMap = {
  'C': <SiC className="text-blue-500" />,
  'C++': <SiCplusplus className="text-blue-600" />,
  'Java': <FaJava className="text-red-500" />,
  'Python': <FaPython className="text-yellow-500" />,
  'React': <FaReact className="text-cyan-400" />,
  'HTML': <FaHtml5 className="text-orange-500" />,
  'CSS': <FaCss3Alt className="text-blue-500" />,
  'JavaScript': <FaJsSquare className="text-yellow-400" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />,
  'Bootstrap': <FaBootstrap className="text-purple-600" />,
  'Node.js': <FaNodeJs className="text-green-500" />,
  'Express.js': <SiExpress className="text-gray-400 dark:text-gray-300" />,
  'MongoDB': <SiMongodb className="text-green-600" />,
  'MySQL': <SiMysql className="text-blue-400" />,
  'Git & GitHub': <FaGithub className="text-gray-900 dark:text-white" />,
  'Postman': <SiPostman className="text-orange-500" />
};

const Skills = () => {
  // Group skills by category
  const groupedSkills = portfolioData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const SkillItem = ({ name }) => (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2, scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-2 bg-light-muted/10 dark:bg-dark-muted/10 px-4 py-2 rounded-lg border border-light-muted/20 dark:border-dark-muted/20 hover:border-primary/50 dark:hover:border-primary/50 shadow-sm"
    >
      <div className="text-lg flex items-center justify-center">
        {iconMap[name] || <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary"></div>}
      </div>
      <span className="text-sm font-medium text-light-text dark:text-dark-text">{name}</span>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-light-bg/50 dark:bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>Technical Arsenal</SectionHeading>
        <p className="text-center text-light-muted dark:text-dark-muted mb-12 max-w-2xl mx-auto pb-4">
          A showcase of technologies I've mastered on my journey as a developer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {Object.entries(groupedSkills).map(([category, skills], index) => (
            <Card key={category} className="h-full">
              <h3 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map(skill => (
                  <SkillItem key={skill.name} name={skill.name} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
