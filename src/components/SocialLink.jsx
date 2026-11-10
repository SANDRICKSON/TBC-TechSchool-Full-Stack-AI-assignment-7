import React from 'react';

/**
 * SocialLink component - reusable social & contact link
 * @param {Object} props
 * @param {string} props.href - Destination URL
 * @param {string} props.icon - FontAwesome icon class
 * @param {string} props.label - Display text or description
 * @param {string} [props.sublabel] - Optional subtext
 * @param {string} [props.variant] - 'pill' | 'card' | 'footer'
 * @param {string} [props.color] - 'purple' | 'blue' | 'indigo' | 'emerald'
 */
export default function SocialLink({
  href,
  icon,
  label,
  sublabel,
  variant = 'pill',
  color = 'purple'
}) {
  const isExternal = href.startsWith('http');
  const rel = isExternal ? 'noopener noreferrer' : undefined;
  const target = isExternal ? '_blank' : undefined;

  if (variant === 'footer') {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className="hover:text-purple-400 transition inline-flex items-center gap-1.5"
      >
        {icon && <i className={`${icon} text-sm`}></i>}
        <span>{label}</span>
      </a>
    );
  }

  if (variant === 'card') {
    const bgColors = {
      purple: 'bg-purple-950/80 border-purple-500/30 text-purple-400',
      blue: 'bg-blue-950/80 border-blue-500/30 text-blue-400',
      indigo: 'bg-indigo-950/80 border-indigo-500/30 text-indigo-400',
      emerald: 'bg-emerald-950/80 border-emerald-500/30 text-emerald-400'
    };

    return (
      <li className="flex items-start gap-4">
        <div
          className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 ${
            bgColors[color] || bgColors.purple
          }`}
        >
          <i className={`${icon} text-base`}></i>
        </div>
        <div className="min-w-0 flex-1">
          {sublabel && (
            <strong className="text-xs text-slate-400 block font-medium">
              {sublabel}
            </strong>
          )}
          {isExternal ? (
            <a
              href={href}
              target={target}
              rel={rel}
              className="text-indigo-300 hover:text-white font-medium text-sm sm:text-base mt-0.5 inline-flex items-center gap-1.5 transition break-all"
            >
              <span>{label}</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-xs text-indigo-400"></i>
            </a>
          ) : (
            <a
              href={href}
              className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base mt-0.5 block break-all transition"
            >
              {label}
            </a>
          )}
        </div>
      </li>
    );
  }

  // Default 'pill' variant
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-purple-500/50 shadow-md hover:-translate-y-0.5 active:translate-y-0 transition duration-200 text-sm cursor-pointer"
    >
      {icon && <i className={`${icon} text-base text-purple-400`}></i>}
      <span>{label}</span>
    </a>
  );
}

