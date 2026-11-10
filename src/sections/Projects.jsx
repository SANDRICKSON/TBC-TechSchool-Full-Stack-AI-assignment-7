import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { primaryProjects, moreProjects } from '../data/projects';

/**
 * Projects section with interactive REST API POST form & dynamic project additions
 */
export default function Projects() {
  const [createdProjects, setCreatedProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    userId: 1
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null); // { type: 'success' | 'error', text: '' }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.description.trim() || !formData.userId) {
      setAlert({
        type: 'error',
        text: 'ყველა ველის შევსება სავალდებულოა!'
      });
      return;
    }

    setLoading(true);
    setAlert(null);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: formData.title.trim(),
          body: formData.description.trim(),
          userId: Number(formData.userId)
        })
      });

      if (!response.ok) {
        throw new Error(`სერვერის შეცდომა: HTTP ${response.status}`);
      }

      const data = await response.json();

      // Successfully posted
      const newProject = {
        id: data.id || Date.now(),
        title: data.title,
        description: data.body,
        badge: `API ID: #${data.id || '201'}`,
        color: 'emerald',
        platform: `User ID: ${formData.userId}`,
        tags: ['REST API (POST)', 'JSONPlaceholder', 'Live React State'],
        links: [],
        isCreated: true
      };

      setCreatedProjects((prev) => [newProject, ...prev]);
      setAlert({
        type: 'success',
        text: `პროექტი წარმატებით შეიქმნა! (HTTP ${response.status} Created) — მინიჭებული ID: #${data.id}`
      });

      // Reset form
      setFormData({
        title: '',
        description: '',
        userId: 1
      });
    } catch (err) {
      console.error('Error creating project:', err);
      setAlert({
        type: 'error',
        text: err.message || 'პროექტის დამატება ვერ მოხერხდა. სცადეთ მოგვიანებით.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="projects" className="space-y-12 sm:space-y-16">
      {/* Intro */}
      <div className="space-y-3 sm:space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium">
          <i className="fa-solid fa-layer-group text-xs"></i>
          <span>ჩემი ნამუშევრები</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight break-words">
          ჩემი პროექტები
        </h2>
        <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
          აქ წარმოდგენილია ჩემი ძირითადი პროექტები, რომლებზეც მიმუშავია ვებ-დეველოპმენტში, 
          მობილურ აპლიკაციებსა და ლოგიკურ პროგრამირებაში.
        </p>
      </div>

      {/* Featured Projects Grid */}
      <div className="space-y-6">
        <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
            <span>ძირითადი პროექტები</span>
          </h3>
          <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider">
            3 ძირითადი ნამუშევარი
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {primaryProjects.map((project) => (
            <ProjectCard key={project.id} project={project} isFeatured={true} />
          ))}
        </div>
      </div>

      {/* Additional Projects */}
      <div className="space-y-6 pt-4">
        <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              <span>სხვა განხორციელებული პროექტები</span>
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
              სტარტაპები, AI ჩატბოტები და ვებ-სისტემები
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {moreProjects.map((project) => (
            <ProjectCard key={project.id} project={project} isFeatured={false} />
          ))}
        </div>
      </div>

      {/* Dynamic Projects Added Via Form */}
      {createdProjects.length > 0 && (
        <div className="space-y-4 animate-fadeIn">
          <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>ახლად დამატებული პროექტები (მიმდინარე სესია)</span>
              </h3>
              <p className="text-slate-400 text-xs mt-0.5">
                API-დან POST მეთოდით წარმატებით მიღებული დაგენერირებული ბარათები
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-full">
              {createdProjects.length} ახალი
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {createdProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isFeatured={false} />
            ))}
          </div>
        </div>
      )}

      {/* Add Project Form (POST JSONPlaceholder) */}
      <div className="space-y-6 pt-4">
        <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>ახალი პროექტის დამატება (POST API)</span>
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
              გაგზავნეთ ახალი პროექტი JSONPlaceholder REST API-ზე Fetch POST მოთხოვნით (Async/Await)
            </p>
          </div>
          <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider hidden sm:inline-block">
            POST /posts
          </span>
        </div>

        {/* Alert box */}
        {alert && (
          <div
            className={`p-4 rounded-2xl flex items-start gap-3 transition-all ${
              alert.type === 'success'
                ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-200'
                : 'bg-rose-950/60 border border-rose-500/40 text-rose-200'
            }`}
          >
            <i
              className={`text-base mt-0.5 shrink-0 ${
                alert.type === 'success'
                  ? 'fa-solid fa-circle-check text-emerald-400'
                  : 'fa-solid fa-circle-exclamation text-rose-400'
              }`}
            ></i>
            <p className="font-medium text-xs sm:text-sm">{alert.text}</p>
          </div>
        )}

        {/* Form Card */}
        <div className="bg-slate-900/60 rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-800 backdrop-blur-sm shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <form onSubmit={handleSubmit} className="space-y-6 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Project Title */}
              <div className="md:col-span-2 space-y-2">
                <label
                  htmlFor="project-title"
                  className="block text-xs sm:text-sm font-semibold text-slate-200"
                >
                  <i className="fa-solid fa-heading text-purple-400 mr-1.5"></i>
                  <span>Project Title (პროექტის სათაური)</span>
                  <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  id="project-title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  placeholder="მაგ. AI ასისტენტი, Arduino ჭკვიანი სახლი..."
                  className="w-full px-4 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                />
              </div>

              {/* User ID */}
              <div className="space-y-2">
                <label
                  htmlFor="project-user-id"
                  className="block text-xs sm:text-sm font-semibold text-slate-200"
                >
                  <i className="fa-solid fa-hashtag text-blue-400 mr-1.5"></i>
                  <span>User ID</span>
                  <span className="text-rose-400">*</span>
                </label>
                <input
                  type="number"
                  id="project-user-id"
                  name="userId"
                  value={formData.userId}
                  onChange={handleInputChange}
                  required
                  min="1"
                  max="100"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                />
              </div>
            </div>

            {/* Project Description */}
            <div className="space-y-2">
              <label
                htmlFor="project-description"
                className="block text-xs sm:text-sm font-semibold text-slate-200"
              >
                <i className="fa-solid fa-align-left text-indigo-400 mr-1.5"></i>
                <span>Project Description (პროექტის აღწერა)</span>
                <span className="text-rose-400">*</span>
              </label>
              <textarea
                id="project-description"
                name="description"
                rows="4"
                value={formData.description}
                onChange={handleInputChange}
                required
                placeholder="დაწერეთ პროექტის მოკლე აღწერა, გამოყენებული ტექნოლოგიები და მიზანი..."
                className="w-full px-4 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition resize-y"
              ></textarea>
            </div>

            {/* Submit button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-slate-800/80">
              <p className="text-xs text-slate-400 flex items-center gap-1.5">
                <i className="fa-solid fa-circle-info text-purple-400"></i>
                <span>მონაცემები გაიგზავნება JSONPlaceholder REST API-ზე POST მეთოდით.</span>
              </p>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-900/30 hover:shadow-purple-700/50 hover:-translate-y-0.5 active:translate-y-0 transition duration-200 text-sm sm:text-base cursor-pointer shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <i className="fa-solid fa-spinner animate-spin"></i>
                    <span>იგზავნება...</span>
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane text-xs"></i>
                    <span>პროექტის დამატება</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

