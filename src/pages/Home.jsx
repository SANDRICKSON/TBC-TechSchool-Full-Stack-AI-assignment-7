import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Employees from '../sections/Employees';
import Contact from '../sections/Contact';

/**
 * Home page component containing all portfolio sections
 * @param {Object} props
 * @param {Function} props.onNavigate - Callback for internal section navigation
 */
export default function Home({ onNavigate }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Employees />
      <Contact />
    </>
  );
}
