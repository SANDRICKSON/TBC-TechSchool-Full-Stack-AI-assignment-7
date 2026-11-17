import React from 'react';

/**
 * UserCard component to display individual user data from JSONPlaceholder API
 * @param {Object} props
 * @param {Object} props.user - JSONPlaceholder user object
 */
export default function UserCard({ user }) {
  if (!user) return null;

  // Generate initials for avatar
  const initials = user.name
    ? user.name
        .split(' ')
        .filter(Boolean)
        .map((part) => part[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : 'U';

  // Normalize website URL for link href
  const websiteUrl = user.website
    ? user.website.startsWith('http://') || user.website.startsWith('https://')
      ? user.website
      : `https://${user.website}`
    : null;

  const cityName = user.address?.city || 'უცნობი ქალაქი';
  const companyName = user.company?.name || 'ინდივიდუალური';

  return (
    <article className="bg-slate-900/60 rounded-3xl p-6 sm:p-7 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-900/90 transition duration-300 flex flex-col justify-between group shadow-xl hover:shadow-purple-950/20 relative overflow-hidden">
      {/* Decorative ambient top glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition duration-300 pointer-events-none"></div>

      <div className="space-y-5">
        {/* Card Header: Avatar & User ID Badge */}
        <div className="flex items-center justify-between gap-3">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 p-0.5 shadow-md shadow-purple-950/40 group-hover:scale-105 transition duration-200 shrink-0">
            <div className="w-full h-full rounded-[14px] bg-slate-950/40 flex items-center justify-center font-bold text-white text-lg tracking-wider">
              {initials}
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-950/80 text-purple-300 border border-purple-500/30 shrink-0">
            ID #{user.id}
          </span>
        </div>

        {/* User Name & Username */}
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition leading-snug break-words">
            {user.name || 'უცნობი მომხმარებელი'}
          </h3>
          <p className="text-xs sm:text-sm text-purple-400 font-mono font-medium flex items-center gap-1.5">
            <span className="text-slate-500">@</span>
            <span>{user.username || 'unknown'}</span>
          </p>
        </div>

        {/* User Details Grid */}
        <div className="space-y-3 pt-3 border-t border-slate-800/80 text-xs sm:text-sm">
          {/* Email */}
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-purple-950/70 border border-purple-500/20 flex items-center justify-center shrink-0 text-purple-400 mt-0.5">
              <i className="fa-solid fa-envelope text-xs"></i>
            </div>
            <div className="min-w-0 flex-1">
              <span className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">ელფოსტა</span>
              <a
                href={user.email ? `mailto:${user.email}` : undefined}
                className="text-slate-200 hover:text-purple-300 transition truncate block font-medium"
                title={user.email}
              >
                {user.email || '—'}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-blue-950/70 border border-blue-500/20 flex items-center justify-center shrink-0 text-blue-400 mt-0.5">
              <i className="fa-solid fa-phone text-xs"></i>
            </div>
            <div className="min-w-0 flex-1">
              <span className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">ტელეფონი</span>
              <a
                href={user.phone ? `tel:${user.phone}` : undefined}
                className="text-slate-200 hover:text-blue-300 transition truncate block font-medium"
                title={user.phone}
              >
                {user.phone || '—'}
              </a>
            </div>
          </div>

          {/* Website */}
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-indigo-950/70 border border-indigo-500/20 flex items-center justify-center shrink-0 text-indigo-400 mt-0.5">
              <i className="fa-solid fa-globe text-xs"></i>
            </div>
            <div className="min-w-0 flex-1">
              <span className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">ვებსაიტი</span>
              {websiteUrl ? (
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-300 hover:text-indigo-200 transition truncate block font-medium underline decoration-indigo-500/40 hover:decoration-indigo-300"
                  title={user.website}
                >
                  {user.website}
                </a>
              ) : (
                <span className="text-slate-400">—</span>
              )}
            </div>
          </div>

          {/* City */}
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-rose-950/70 border border-rose-500/20 flex items-center justify-center shrink-0 text-rose-400 mt-0.5">
              <i className="fa-solid fa-location-dot text-xs"></i>
            </div>
            <div className="min-w-0 flex-1">
              <span className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">ქალაქი</span>
              <span className="text-slate-200 truncate block font-medium" title={cityName}>
                {cityName}
              </span>
            </div>
          </div>

          {/* Company */}
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-emerald-950/70 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400 mt-0.5">
              <i className="fa-solid fa-building text-xs"></i>
            </div>
            <div className="min-w-0 flex-1">
              <span className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">კომპანია</span>
              <span className="text-slate-200 truncate block font-medium" title={companyName}>
                {companyName}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer: Company catchPhrase quote */}
      {user.company?.catchPhrase && (
        <div className="pt-4 border-t border-slate-800/80 mt-5">
          <p className="text-xs text-slate-400 italic line-clamp-2" title={user.company.catchPhrase}>
            &ldquo;{user.company.catchPhrase}&rdquo;
          </p>
        </div>
      )}
    </article>
  );
}
