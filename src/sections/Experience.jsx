import React from 'react';
import { experienceData } from '../data/projects';

/**
 * Experience section - Timeline and professional experience
 */
export default function Experience() {
  return (
    <section id="experience" className="space-y-6 sm:space-y-8">
      <div className="border-b border-slate-800 pb-3">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
          <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
          <span>სამუშაო გამოცდილება და პრაქტიკა</span>
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          პროფესიული საქმიანობა, როლები და ძირითადი მიღწევები:
        </p>
      </div>

      <div className="space-y-6">
        {experienceData.map((exp, index) => (
          <article
            key={exp.id}
            className="bg-slate-900/60 rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-indigo-500/40 transition duration-300 shadow-lg relative overflow-hidden group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-sm shrink-0">
                  {`0${index + 1}`}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition">
                  {exp.role}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-950/60 text-indigo-300 border border-indigo-500/30 w-fit">
                {exp.period}
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {exp.description}
            </p>

            {exp.achievements.length > 0 && (
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                  ძირითადი შედეგები &amp; მიმართულებები:
                </h4>
                <ul className="text-xs sm:text-sm text-slate-300 space-y-1.5">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <i className="fa-solid fa-check text-indigo-400 text-xs mt-1 shrink-0"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

