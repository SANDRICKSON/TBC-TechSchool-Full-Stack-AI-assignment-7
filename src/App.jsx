import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Employees from './sections/Employees';
import Contact from './sections/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // IntersectionObserver to update active navbar item while scrolling
  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'skills',
      'projects',
      'experience',
      'employees',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen flex flex-col font-georgian selection:bg-purple-500 selection:text-white relative overflow-x-hidden">
      
      {/* Ambient background glow circles */}
      <div className="fixed top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="fixed bottom-1/3 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 space-y-16 sm:space-y-20">
        <Hero onNavigate={setActiveSection} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Employees />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onNavigate={setActiveSection} />
    </div>
  );
}

