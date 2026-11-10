import React from 'react';
import SocialLink from './SocialLink';

/**
 * Footer component
 * @param {Object} props
 * @param {Function} [props.onNavigate] - Callback for internal links
 */
export default function Footer({ onNavigate }) {
  const currentYear = 2026;

  const scrollTo = (id) => {
    if (onNavigate) {
      onNavigate(id);
    }
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80 py-6 sm:py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400 text-center sm:text-left">
        <p>&copy; {currentYear} Sandro Katamadze | All Rights Reserved</p>
        
        <div className="flex items-center gap-5 sm:gap-6 flex-wrap justify-center">
          <SocialLink
            href="https://github.com/SANDRICKSON"
            label="GitHub: SANDRICKSON"
            icon="fa-brands fa-github"
            variant="footer"
          />

          <button
            onClick={() => scrollTo('employees')}
            className="hover:text-purple-400 transition cursor-pointer"
          >
            თანამშრომლები
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="hover:text-purple-400 transition cursor-pointer"
          >
            კონტაქტი
          </button>

          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="text-slate-500">React + Vite + Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}

