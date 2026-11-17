import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserCard from '../components/UserCard';

/**
 * Users page component - displays users fetched from JSONPlaceholder API
 * Features real-time search across name, username, email, and city.
 */
export default function Users() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users from JSONPlaceholder API using async/await and try/catch
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error(`სერვერის შეცდომა: HTTP ${response.status} (${response.statusText || 'შეცდომა'})`);
      }
      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error('მიღებული მონაცემები არასწორი ფორმატისაა.');
      }
      setUsers(data);
    } catch (err) {
      console.error('Fetch Users Error:', err);
      setError(err.message || 'მონაცემების ჩატვირთვა ვერ მოხერხდა. გთხოვთ შეამოწმოთ ინტერნეტის კავშირი.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Real-time, case-insensitive filter by: name, username, email, and city
  const filteredUsers = users.filter((user) => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return true;

    const nameMatch = user?.name?.toLowerCase().includes(term);
    const usernameMatch = user?.username?.toLowerCase().includes(term);
    const emailMatch = user?.email?.toLowerCase().includes(term);
    const cityMatch = user?.address?.city?.toLowerCase().includes(term);

    return Boolean(nameMatch || usernameMatch || emailMatch || cityMatch);
  });

  return (
    <div className="space-y-10 sm:space-y-12 animate-fadeIn py-2">
      {/* Top Breadcrumb & Page Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-purple-500/40 text-xs sm:text-sm font-medium transition duration-200 group"
          >
            <i className="fa-solid fa-arrow-left text-xs group-hover:-translate-x-1 transition-transform"></i>
            <span>მთავარ პორტფოლიოში დაბრუნება</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>JSONPlaceholder REST API • Live Data</span>
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight break-words">
            Users / მომხმარებლები
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            მომხმარებელთა სია დინამიკურად იტვირთება JSONPlaceholder API-დან JavaScript-ის Fetch მეთოდითა და Async/Await-ით. 
            შეგიძლიათ განახორციელოთ რეალურ დროში ძებნა სახელის, username-ის, ელფოსტის ან ქალაქის მიხედვით.
          </p>
        </div>
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
              placeholder="მოძებნე სახელით, username-ით, ელფოსტით ან ქალაქით..."
              className="w-full pl-11 pr-10 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
              aria-label="მომხმარებლის ძებნა"
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
            <span className="text-xs sm:text-sm text-slate-400 font-medium px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800/80">
              {loading
                ? 'იტვირთება...'
                : `ნაპოვნია: ${filteredUsers.length} / ${users.length}`}
            </span>
          </div>
        </div>

        {/* Search criteria chips */}
        <div className="flex items-center gap-2 flex-wrap text-xs text-slate-400 pt-1 border-t border-slate-800/60">
          <span className="text-slate-500 font-semibold text-[11px] uppercase tracking-wider">ძებნის ველები:</span>
          <span className="px-2 py-0.5 rounded-md bg-purple-950/50 text-purple-300 border border-purple-500/20">სახელი (name)</span>
          <span className="px-2 py-0.5 rounded-md bg-purple-950/50 text-purple-300 border border-purple-500/20">Username</span>
          <span className="px-2 py-0.5 rounded-md bg-purple-950/50 text-purple-300 border border-purple-500/20">ელფოსტა (email)</span>
          <span className="px-2 py-0.5 rounded-md bg-purple-950/50 text-purple-300 border border-purple-500/20">ქალაქი (city)</span>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="py-12 flex flex-col items-center justify-center gap-5 text-center">
          <div className="w-14 h-14 rounded-full border-4 border-purple-500/20 border-t-purple-500 animate-spin"></div>
          <div className="space-y-1.5">
            <p className="text-white font-semibold text-base sm:text-lg">მონაცემები იტვირთება API-დან...</p>
            <p className="text-xs sm:text-sm text-slate-400">
              Fetch API &bull; Async/Await &bull; JSONPlaceholder Users
            </p>
          </div>

          {/* Skeleton Placeholder Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-6">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="h-80 rounded-3xl bg-slate-900/40 border border-slate-800/60 animate-pulse p-6 space-y-4"
              >
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800"></div>
                  <div className="w-16 h-6 rounded-full bg-slate-800"></div>
                </div>
                <div className="w-3/4 h-6 rounded-lg bg-slate-800"></div>
                <div className="w-1/2 h-4 rounded-lg bg-slate-800"></div>
                <div className="space-y-3 pt-4">
                  <div className="w-full h-4 rounded bg-slate-800/80"></div>
                  <div className="w-5/6 h-4 rounded bg-slate-800/80"></div>
                  <div className="w-4/6 h-4 rounded bg-slate-800/80"></div>
                  <div className="w-3/4 h-4 rounded bg-slate-800/80"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Error State with Retry Button */}
      {!loading && error && (
        <div className="bg-rose-950/40 border-2 border-rose-500/50 rounded-3xl p-6 sm:p-10 text-center space-y-5 max-w-xl mx-auto shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-rose-900/50 border border-rose-500/40 text-rose-300 text-3xl flex items-center justify-center mx-auto shadow-lg">
            <i className="fa-solid fa-triangle-exclamation"></i>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white">მონაცემების ჩატვირთვა ვერ მოხერხდა</h3>
            <p className="text-xs sm:text-sm text-rose-200 leading-relaxed break-words">
              {error}
            </p>
          </div>
          <div className="pt-2">
            <button
              onClick={fetchUsers}
              type="button"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 shadow-lg shadow-rose-950/50 hover:scale-105 active:scale-100 transition duration-200 cursor-pointer text-sm"
            >
              <i className="fa-solid fa-rotate-right"></i>
              <span>ხელახლა ცდა (Retry)</span>
            </button>
          </div>
        </div>
      )}

      {/* Empty Search Results */}
      {!loading && !error && filteredUsers.length === 0 && (
        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-4 max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-slate-800/80 border border-slate-700/60 text-slate-400 text-2xl flex items-center justify-center mx-auto shadow-inner">
            <i className="fa-solid fa-user-slash"></i>
          </div>
          <div className="space-y-1.5">
            <h3 className="text-lg sm:text-xl font-bold text-white">მომხმარებელი ვერ მოიძებნა</h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
              საძიებო მოთხოვნით <span className="text-purple-300 font-medium">„{searchTerm}“</span> მომხმარებელი ვერ მოიძებნა. 
              გთხოვთ შეამოწმოთ სახელი, username, ელფოსტა ან ქალაქი.
            </p>
          </div>
          {searchTerm && (
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-medium transition cursor-pointer"
              >
                <i className="fa-solid fa-xmark text-xs"></i>
                <span>ძებნის გასუფთავება</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Users Grid */}
      {!loading && !error && filteredUsers.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}
