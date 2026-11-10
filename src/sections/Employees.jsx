import React, { useState, useEffect } from 'react';

/**
 * Employees section - Live dynamic data fetching with search & retry
 */
export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEmployees = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error(`სერვერის შეცდომა: HTTP ${response.status} (${response.statusText})`);
      }
      const data = await response.json();
      setEmployees(data);
    } catch (err) {
      console.error('Fetch Employees Error:', err);
      setError(err.message || 'მონაცემების ჩატვირთვა ვერ მოხერხდა.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const filteredEmployees = employees.filter((emp) => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return true;
    const nameMatch = emp.name?.toLowerCase().includes(term);
    const usernameMatch = emp.username?.toLowerCase().includes(term);
    const emailMatch = emp.email?.toLowerCase().includes(term);
    return nameMatch || usernameMatch || emailMatch;
  });

  return (
    <section id="employees" className="space-y-10 sm:space-y-12">
      {/* Intro */}
      <div className="space-y-3 sm:space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium">
          <i className="fa-solid fa-users text-xs"></i>
          <span>JSONPlaceholder REST API • Live Data</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight break-words">
          თანამშრომლები
        </h2>
        <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
          გაეცანით ჩვენი გუნდის თანამშრომლების ჩამონათვალს. მონაცემები დინამიკურად იტვირთება 
          JSONPlaceholder REST API-დან Fetch API-სა და Async/Await-ის გამოყენებით.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-slate-900/60 rounded-3xl p-5 sm:p-6 border border-slate-800 backdrop-blur-sm shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-xl">
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none"></i>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="მოძებნე თანამშრომელი სახელით ან username-ით..."
              className="w-full pl-11 pr-10 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
              aria-label="თანამშრომლის ძებნა სახელით"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                aria-label="ძებნის გასუფთავება"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center text-xs transition cursor-pointer"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs sm:text-sm text-slate-400 font-medium">
              {loading
                ? 'იტვირთება...'
                : `ნაპოვნია: ${filteredEmployees.length} / ${employees.length}`}
            </span>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="py-12 flex flex-col items-center justify-center gap-4 text-center">
          <div className="w-12 h-12 rounded-full border-4 border-purple-500/20 border-t-purple-500 animate-spin"></div>
          <div className="space-y-1">
            <p className="text-white font-medium text-base">მონაცემები იტვირთება API-დან...</p>
            <p className="text-xs text-slate-400">გთხოვთ დაელოდოთ (Fetch API • Async/Await)</p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            <div className="h-64 rounded-3xl bg-slate-900/40 border border-slate-800/60 animate-pulse p-6"></div>
            <div className="h-64 rounded-3xl bg-slate-900/40 border border-slate-800/60 animate-pulse p-6 hidden md:block"></div>
            <div className="h-64 rounded-3xl bg-slate-900/40 border border-slate-800/60 animate-pulse p-6 hidden lg:block"></div>
          </div>
        </div>
      )}

      {/* Error State */}
      {!loading && error && (
        <div className="bg-rose-950/40 border-2 border-rose-500/50 rounded-3xl p-6 sm:p-8 text-center space-y-4 max-w-xl mx-auto shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-rose-900/50 border border-rose-500/40 text-rose-300 text-2xl flex items-center justify-center mx-auto">
            <i className="fa-solid fa-triangle-exclamation"></i>
          </div>
          <div className="space-y-1.5">
            <h3 className="text-lg sm:text-xl font-bold text-white">მონაცემების ჩატვირთვა ვერ მოხერხდა</h3>
            <p className="text-xs sm:text-sm text-rose-200 leading-relaxed break-words">
              {error}
            </p>
          </div>
          <div className="pt-2">
            <button
              onClick={fetchEmployees}
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 shadow-lg shadow-rose-950/50 transition cursor-pointer text-sm"
            >
              <i className="fa-solid fa-rotate-right"></i>
              <span>ხელახლა ცდა (Retry)</span>
            </button>
          </div>
        </div>
      )}

      {/* Empty Search Results */}
      {!loading && !error && filteredEmployees.length === 0 && (
        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-3 max-w-lg mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-slate-800 text-slate-400 text-xl flex items-center justify-center mx-auto">
            <i className="fa-solid fa-user-slash"></i>
          </div>
          <h3 className="text-lg font-bold text-white">თანამშრომელი ვერ მოიძებნა</h3>
          <p className="text-xs sm:text-sm text-slate-400">
            სცადეთ სხვა სახელით ან გასუფთავეთ საძიებო ველი.
          </p>
        </div>
      )}

      {/* Employees Grid */}
      {!loading && !error && filteredEmployees.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredEmployees.map((emp) => (
            <article
              key={emp.id}
              className="bg-slate-900/60 rounded-3xl p-6 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-900/80 transition duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-base group-hover:scale-105 transition">
                    {emp.name
                      ? emp.name
                          .split(' ')
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join('')
                      : 'SK'}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-purple-950/80 text-purple-300 border border-purple-500/30">
                    ID #{emp.id}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition">
                    {emp.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">@{emp.username}</p>
                </div>

                <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                  <p className="flex items-center gap-2 truncate">
                    <i className="fa-solid fa-envelope text-purple-400 w-4 text-center"></i>
                    <a
                      href={`mailto:${emp.email}`}
                      className="hover:text-purple-300 transition truncate"
                    >
                      {emp.email}
                    </a>
                  </p>
                  <p className="flex items-center gap-2 truncate">
                    <i className="fa-solid fa-phone text-blue-400 w-4 text-center"></i>
                    <span>{emp.phone}</span>
                  </p>
                  <p className="flex items-center gap-2 truncate">
                    <i className="fa-solid fa-globe text-indigo-400 w-4 text-center"></i>
                    <span className="text-indigo-300">{emp.website}</span>
                  </p>
                  <p className="flex items-center gap-2 truncate">
                    <i className="fa-solid fa-building text-emerald-400 w-4 text-center"></i>
                    <span>{emp.company?.name || 'Company'}</span>
                  </p>
                  <p className="flex items-center gap-2 truncate">
                    <i className="fa-solid fa-location-dot text-rose-400 w-4 text-center"></i>
                    <span>{emp.address?.city || 'City'}</span>
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 mt-4 text-xs text-slate-400 italic truncate">
                "{emp.company?.catchPhrase || 'Driving digital innovation'}"
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

