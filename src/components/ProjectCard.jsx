import React from 'react';

/**
 * ProjectCard component - reusable card for both featured and secondary projects
 * @param {Object} props
 * @param {Object} props.project - Project data object
 * @param {boolean} [props.isFeatured] - Whether to render full featured card or compact card
 */
export default function ProjectCard({ project, isFeatured = false }) {
  const {
    title,
    subtitle,
    badge,
    icon,
    color = 'purple',
    description,
    features = [],
    tags = [],
    links = [],
    platform,
    isCreated = false
  } = project;

  const colorStyles = {
    purple: {
      badge: 'bg-purple-950/80 text-purple-300 border-purple-500/30',
      iconBox: 'bg-purple-950/80 border-purple-500/30 text-purple-400',
      borderHover: 'hover:border-purple-500/50',
      titleHover: 'group-hover:text-purple-300',
      checkIcon: 'text-purple-400',
      tagColor: 'text-purple-300 border-purple-500/20'
    },
    blue: {
      badge: 'bg-blue-950/80 text-blue-300 border-blue-500/30',
      iconBox: 'bg-blue-950/80 border-blue-500/30 text-blue-400',
      borderHover: 'hover:border-blue-500/50',
      titleHover: 'group-hover:text-blue-300',
      checkIcon: 'text-blue-400',
      tagColor: 'text-blue-300 border-blue-500/20'
    },
    indigo: {
      badge: 'bg-indigo-950/80 text-indigo-300 border-indigo-500/30',
      iconBox: 'bg-indigo-950/80 border-indigo-500/30 text-indigo-400',
      borderHover: 'hover:border-indigo-500/50',
      titleHover: 'group-hover:text-indigo-300',
      checkIcon: 'text-indigo-400',
      tagColor: 'text-indigo-300 border-indigo-500/20'
    },
    emerald: {
      badge: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30',
      iconBox: 'bg-emerald-950/80 border-emerald-500/30 text-emerald-400',
      borderHover: 'hover:border-emerald-500/50',
      titleHover: 'group-hover:text-emerald-300',
      checkIcon: 'text-emerald-400',
      tagColor: 'text-emerald-300 border-emerald-500/20'
    }
  };

  const currentTheme = colorStyles[color] || colorStyles.purple;

  if (isFeatured) {
    return (
      <article
        className={`bg-slate-900/60 rounded-3xl p-6 sm:p-7 border border-slate-800 ${currentTheme.borderHover} hover:bg-slate-900/80 transition duration-300 flex flex-col justify-between group shadow-xl h-full`}
      >
        <div className="space-y-5">
          {/* Header with Icon and Badge */}
          <div className="flex items-start justify-between gap-3">
            <div
              className={`w-12 h-12 rounded-2xl border flex items-center justify-center text-xl group-hover:scale-110 transition duration-300 shrink-0 ${currentTheme.iconBox}`}
            >
              <i className={icon || 'fa-solid fa-code'}></i>
            </div>
            {badge && (
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold border ${currentTheme.badge}`}
              >
                {badge}
              </span>
            )}
          </div>

          {/* Title and Description */}
          <div className="space-y-2">
            <h3
              className={`text-xl font-bold text-white transition break-words ${currentTheme.titleHover}`}
            >
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs text-slate-400 font-medium">{subtitle}</p>
            )}
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Features list */}
          {features.length > 0 && (
            <div className="space-y-2 border-t border-slate-800 pt-4">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                ძირითადი ფუნქციონალი:
              </h4>
              <ul className="text-xs text-slate-300 space-y-1.5">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <i
                      className={`fa-solid fa-check text-xs mt-0.5 shrink-0 ${currentTheme.checkIcon}`}
                    ></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer with tags and links */}
        <div className="pt-5 border-t border-slate-800/80 mt-6 space-y-3">
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {links.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 transition"
                >
                  <span>{link.label}</span>
                  {link.icon && <i className={`${link.icon} text-[10px]`}></i>}
                </a>
              ))}
            </div>
          )}
        </div>
      </article>
    );
  }

  // Compact / Standard Project Card
  return (
    <article
      className={`bg-slate-900/60 rounded-3xl p-6 border border-slate-800 ${currentTheme.borderHover} hover:bg-slate-900/80 transition duration-300 flex flex-col justify-between group shadow-lg h-full`}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          {badge && (
            <span
              className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${currentTheme.badge}`}
            >
              {badge}
            </span>
          )}
          {platform && (
            <span className="text-xs text-slate-400 font-medium">
              {platform}
            </span>
          )}
          {isCreated && (
            <span className="text-[11px] text-emerald-400 font-mono">
              Live POST API
            </span>
          )}
        </div>

        <div>
          <h3
            className={`text-lg font-bold text-white transition break-words ${currentTheme.titleHover}`}
          >
            {title}
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2">
            {description}
          </p>
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-xs bg-slate-800 text-slate-300 border border-slate-700/50"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {links.length > 0 && (
        <div className="pt-5 border-t border-slate-800 mt-5 flex flex-wrap gap-2">
          {links.map((link, idx) => {
            const isPrimary = link.primary;
            return (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                  isPrimary
                    ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-sm'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </article>
  );
}

