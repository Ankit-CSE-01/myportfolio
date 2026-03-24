import React from 'react';
import Layout from './layout/Layout';
import Hero from './sections/Hero';
import About from './sections/About';
import ResumeEducation from './sections/ResumeEducation';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <ResumeEducation />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </Layout>
  );
}

export default App;
