import React from 'react';
import { focusAreasData } from '../data/skills';

/**
 * Hero section
 * @param {Object} props
 * @param {Function} props.onNavigate - Function to smoothly scroll to section
 */
export default function Hero({ onNavigate }) {
  const scrollTo = (id) => {
    if (onNavigate) onNavigate(id);
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="space-y-16 sm:space-y-20 pt-4 pb-2">
      {/* Availability Badge */}
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm max-w-full">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
          <span className="truncate">ღია ვარ ახალი პროექტებისა და თანამშრომლობისთვის</span>
        </div>

        {/* 2-column Grid: Main intro left, Quick overview right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-5 sm:space-y-6 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight break-words">
              გამარჯობა! მე ვარ <br />
              <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
                სანდრო ქათამაძე
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-purple-200/90 font-medium flex items-center gap-2 flex-wrap">
              <i className="fa-solid fa-laptop-code text-purple-400"></i>
              <span>Fullstack, Mobile და Arduino Developer</span>
            </p>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base md:text-lg max-w-2xl">
              ენთუზიასტი დეველოპერი, რომელიც დაინტერესებულია პროგრამირებით, ვებ-დეველოპმენტით, 
              მობილური აპლიკაციებით, Arduino-სა და ხელოვნური ინტელექტით (AI). 
              ჩემი მიზანია შევქმნა ისეთი პროგრამული გადაწყვეტილებები, რომლებიც ადამიანებს ყოველდღიურ საქმიანობას 
              უმარტივებს და რეალურ პრობლემებს ეფექტურად წყვეტს.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-900/30 hover:shadow-purple-700/50 hover:-translate-y-0.5 active:translate-y-0 transition duration-200 text-sm sm:text-base text-center cursor-pointer"
              >
                <span>ჩემი პროექტები</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-700 hover:border-purple-500/50 shadow-md hover:-translate-y-0.5 active:translate-y-0 transition duration-200 text-sm sm:text-base text-center cursor-pointer"
              >
                <i className="fa-solid fa-envelope text-purple-400"></i>
                <span>დამიკავშირდი</span>
              </button>
            </div>
          </div>

          {/* Right Column: Quick Overview Card */}
          <aside className="lg:col-span-5 xl:col-span-4 bg-slate-900/60 rounded-3xl p-6 sm:p-7 border border-slate-800/90 backdrop-blur-sm shadow-xl relative overflow-hidden group hover:border-purple-500/40 transition duration-300 w-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition duration-300 pointer-events-none"></div>
            
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xs uppercase tracking-wider font-bold text-purple-400 flex items-center gap-2">
                <i className="fa-solid fa-id-card"></i>
                <span>სწრაფი მიმოხილვა</span>
              </h2>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>

            <dl className="space-y-4 text-sm">
              <div className="border-b border-slate-800/80 pb-3">
                <dt className="text-xs text-slate-400">სრული სახელი</dt>
                <dd className="text-white font-semibold text-base mt-0.5">სანდრო ქათამაძე</dd>
              </div>
              <div className="border-b border-slate-800/80 pb-3">
                <dt className="text-xs text-slate-400">სპეციალობა</dt>
                <dd className="text-purple-300 font-medium mt-0.5">Fullstack / Mobile / Arduino</dd>
              </div>
              <div className="border-b border-slate-800/80 pb-3">
                <dt className="text-xs text-slate-400">ინტერესები</dt>
                <dd className="text-slate-300 mt-0.5 text-xs sm:text-sm">პროგრამირება, ვებ, Mobile, Arduino, AI</dd>
              </div>
              <div className="border-b border-slate-800/80 pb-3">
                <dt className="text-xs text-slate-400">GitHub პროფილი</dt>
                <dd className="text-slate-300 mt-0.5 text-xs font-mono break-all">
                  <a
                    href="https://github.com/SANDRICKSON"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1.5"
                  >
                    <i className="fa-brands fa-github text-sm"></i>
                    <span>github.com/SANDRICKSON</span>
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-slate-400">ადგილმდებარეობა</dt>
                <dd className="text-slate-300 mt-0.5 flex items-center gap-1.5 text-xs sm:text-sm">
                  <i className="fa-solid fa-location-dot text-rose-400"></i>
                  <span>საქართველო</span>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>

      {/* Focus Areas Section */}
      <div className="space-y-6 sm:space-y-8">
        <div className="text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-purple-500"></span>
            <span>რას ვაკეთებ?</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            ჩემი საქმიანობა აერთიანებს პროგრამირების რამდენიმე ძირითად მიმართულებას:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {focusAreasData.map((item) => (
            <article
              key={item.id}
              className="bg-slate-900/60 rounded-3xl p-6 sm:p-7 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 text-xl group-hover:scale-110 transition duration-300">
                  <i className={item.icon}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="pt-5 border-t border-slate-800 mt-5">
                <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                  {item.tag}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

