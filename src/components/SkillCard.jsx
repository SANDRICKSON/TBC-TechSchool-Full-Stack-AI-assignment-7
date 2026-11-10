import React from 'react';

/**
 * SkillCard component - displays a skill / technology category
 * @param {Object} props
 * @param {string} props.number - e.g. "01"
 * @param {string} props.title - Skill Title
 * @param {string} props.description - Detailed text
 * @param {string[]} props.items - List of bullet points
 * @param {string} [props.color] - 'purple' | 'blue' | 'indigo' | 'violet'
 */
export default function SkillCard({
  number,
  title,
  description,
  items = [],
  color = 'purple'
}) {
  const colorMap = {
    purple: {
      badge: 'bg-purple-950/80 border-purple-500/30 text-purple-400',
      borderHover: 'hover:border-purple-500/40',
      icon: 'text-purple-400'
    },
    blue: {
      badge: 'bg-blue-950/80 border-blue-500/30 text-blue-400',
      borderHover: 'hover:border-blue-500/40',
      icon: 'text-blue-400'
    },
    indigo: {
      badge: 'bg-indigo-950/80 border-indigo-500/30 text-indigo-400',
      borderHover: 'hover:border-indigo-500/40',
      icon: 'text-indigo-400'
    },
    violet: {
      badge: 'bg-violet-950/80 border-violet-500/30 text-violet-400',
      borderHover: 'hover:border-violet-500/40',
      icon: 'text-violet-400'
    }
  };

  const scheme = colorMap[color] || colorMap.purple;

  return (
    <article
      className={`bg-slate-900/60 rounded-3xl p-6 sm:p-7 border border-slate-800 ${scheme.borderHover} transition duration-300 space-y-4 shadow-lg`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`w-10 h-10 rounded-xl border flex items-center justify-center font-bold text-sm shrink-0 ${scheme.badge}`}
        >
          {number}
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
      </div>

      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
        {description}
      </p>

      {items.length > 0 && (
        <ul className="space-y-2 text-xs sm:text-sm text-slate-300 pt-2 border-t border-slate-800">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <i
                className={`fa-solid fa-check text-xs mt-1 shrink-0 ${scheme.icon}`}
              ></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

