import React, { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

/**
 * Navbar component with React Router navigation
 * Supports client-side navigation between home sections and the /users page.
 *
 * @param {Object} props
 * @param {string} props.activeSection - Currently active section id on the home page
 * @param {Function} props.setActiveSection - Function to change active section
 */
export default function Navbar({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const sectionItems = [
    { id: 'hero', label: 'მთავარი', icon: 'fa-solid fa-house' },
    { id: 'about', label: 'ჩემ შესახებ', icon: 'fa-solid fa-user' },
    { id: 'skills', label: 'უნარები', icon: 'fa-solid fa-code' },
    { id: 'projects', label: 'პროექტები', icon: 'fa-solid fa-briefcase' },
    { id: 'experience', label: 'გამოცდილება', icon: 'fa-solid fa-timeline' },
    { id: 'employees', label: 'თანამშრომლები', icon: 'fa-solid fa-users' },
    { id: 'contact', label: 'კონტაქტი', icon: 'fa-solid fa-envelope' },
  ];

  const handleSectionClick = (id) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (setActiveSection) {
        setActiveSection(id);
      }
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/85 border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between gap-4">
        
        {/* Logo / Brand - React Router Link */}
        <Link
          to="/"
          onClick={() => {
            setIsOpen(false);
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              if (setActiveSection) setActiveSection('hero');
            }
          }}
          className="flex items-center gap-3 group shrink-0 text-left cursor-pointer focus:outline-none"
          aria-label="მთავარი გვერდი"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center font-bold text-white shadow-md shadow-purple-900/30 group-hover:scale-105 transition duration-200">
            SK
          </div>
          <div>
            <span className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-purple-300 transition block">
              სანდრო ქათამაძე
            </span>
            <span className="text-[11px] sm:text-xs text-slate-400 block -mt-0.5">
              Fullstack, Mobile &amp; Arduino
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="მთავარი ნავიგაცია"
          className="hidden md:flex items-center gap-1.5 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800 text-sm"
        >
          {sectionItems.map((item) => {
            const isActive = location.pathname === '/' && activeSection === item.id;
            return (
              <Link
                key={item.id}
                to={`/#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionClick(item.id);
                }}
                className={`px-3 py-1.5 rounded-xl font-medium transition cursor-pointer text-sm ${
                  isActive
                    ? 'text-white bg-purple-600/25 border border-purple-500/40 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            );
          })}

          {/* New Users NavLink */}
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `px-3.5 py-1.5 rounded-xl font-medium transition cursor-pointer text-sm flex items-center gap-1.5 ${
                isActive
                  ? 'text-white bg-purple-600/25 border border-purple-500/40 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent'
              }`
            }
          >
            <span>Users</span>
          </NavLink>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label="მენიუს გახსნა და დახურვა"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-purple-500/50 flex items-center justify-center transition focus:outline-none focus:ring-2 focus:ring-purple-500/50 cursor-pointer"
        >
          <i
            className={`fa-solid ${
              isOpen ? 'fa-xmark' : 'fa-bars'
            } text-lg transition-transform duration-200`}
          ></i>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800/90 bg-slate-950/95 backdrop-blur-xl px-4 py-4 transition-all animate-fadeIn">
          <nav aria-label="მობილური ნავიგაცია" className="flex flex-col gap-2">
            {sectionItems.map((item) => {
              const isActive = location.pathname === '/' && activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  to={`/#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick(item.id);
                  }}
                  className={`px-4 py-3 rounded-xl font-medium flex items-center gap-3 transition text-left cursor-pointer ${
                    isActive
                      ? 'text-white bg-purple-600/25 border border-purple-500/40'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent'
                  }`}
                >
                  <i
                    className={`${item.icon} w-5 text-center ${
                      isActive ? 'text-purple-400' : 'text-slate-400'
                    }`}
                  ></i>
                  <span>{item.label}</span>
                </Link>
              );
            })}

            {/* Users mobile NavLink */}
            <NavLink
              to="/users"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl font-medium flex items-center gap-3 transition text-left cursor-pointer ${
                  isActive
                    ? 'text-white bg-purple-600/25 border border-purple-500/40'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <i
                    className={`fa-solid fa-users w-5 text-center ${
                      isActive ? 'text-purple-400' : 'text-slate-400'
                    }`}
                  ></i>
                  <span>Users</span>
                </>
              )}
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
