import React from 'react';
import { blogData } from '../data/projects';

/**
 * About section
 */
export default function About() {
  return (
    <section id="about" className="space-y-12 sm:space-y-16">
      {/* Intro & Bio */}
      <div className="space-y-4 sm:space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-medium">
          <i className="fa-solid fa-user text-xs"></i>
          <span>პროფილი &amp; გამოცდილება</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight break-words">
          ჩემ შესახებ
        </h2>

        <div className="text-slate-300 space-y-4 text-sm sm:text-base md:text-lg leading-relaxed bg-slate-900/40 p-6 sm:p-8 rounded-3xl border border-slate-800/80 backdrop-blur-sm shadow-xl">
          <p>
            მოგესალმებით! მე ვარ <strong className="text-white font-semibold">სანდრო ქათამაძე</strong> — Fullstack, Mobile და Arduino/AI დეველოპერი.
            ჩემი გზა ტექნოლოგიების სამყაროში დაიწყო ინტერესით, თუ როგორ მუშაობს კომპიუტერული პროგრამები და როგორ შეიძლება კოდის საშუალებით რეალური მოწყობილობებისა და ციფრული სერვისების მართვა.
          </p>
          <p>
            დღესდღეობით აქტიურად ვმუშაობ როგორც პროგრამული უზრუნველყოფის შექმნაზე (ვებ-პლატფორმები და მობილური აპლიკაციები), 
            ისე აპარატურულ ინჟინერიასა და ჭკვიან მოწყობილობებზე Arduino-ს ბაზაზე.
          </p>
        </div>
      </div>

      {/* Interests and Goals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Interests */}
        <div className="bg-slate-900/50 rounded-3xl p-6 sm:p-8 border border-slate-800/80 space-y-4 shadow-lg">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-purple-500 shrink-0"></span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">ინტერესები</h3>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm">
            ჩემი პროფესიული და პირადი ინტერესების ძირითადი ბირთვია:
          </p>
          <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold mt-0.5">•</span>
              <span>
                <strong className="text-white">პროგრამირება:</strong> სუფთა, ოპტიმიზებული და მასშტაბირებადი კოდის წერა.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold mt-0.5">•</span>
              <span>
                <strong className="text-white">მობილური აპლიკაციები:</strong> თანამედროვე ციფრული სერვისების შექმნა ყოველდღიური გამოყენებისთვის.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold mt-0.5">•</span>
              <span>
                <strong className="text-white">ვებ-დეველოპმენტი:</strong> ხელმისაწვდომი, სწრაფი და უსაფრთხო ვებ-რესურსების აგება.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold mt-0.5">•</span>
              <span>
                <strong className="text-white">Arduino &amp; AI:</strong> ჭკვიანი სისტემების, რობოტოტექნიკისა და ხელოვნური ინტელექტის თანაკვეთა.
              </span>
            </li>
          </ul>
        </div>

        {/* Goals */}
        <div className="bg-slate-900/50 rounded-3xl p-6 sm:p-8 border border-slate-800/80 space-y-4 shadow-lg">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-blue-500 shrink-0"></span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">მიზნები და გეგმები</h3>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm">
            ჩემი უახლოესი და გრძელვადიანი პროფესიული ამოცანები:
          </p>
          <ol className="space-y-3 pt-2 text-xs sm:text-sm list-decimal list-inside text-slate-300">
            <li className="leading-relaxed">
              <strong className="text-white">ცოდნის მუდმივი გაღრმავება:</strong> უახლესი ტექნოლოგიური სტანდარტების შესწავლა და პრაქტიკაში დანერგვა.
            </li>
            <li className="leading-relaxed">
              <strong className="text-white">კომპლექსური სისტემების აგება:</strong> ვებ-პლატფორმის, მობილური აპლიკაციისა და ჭკვიანი IoT მოწყობილობების ჰარმონიული გაერთიანება.
            </li>
            <li className="leading-relaxed">
              <strong className="text-white">Open Source &amp; გუნდური მუშაობა:</strong> გამოცდილების გაზიარება და საინტერესო ინოვაციურ ინიციატივებში მონაწილეობა.
            </li>
          </ol>
        </div>
      </div>

      {/* Blog & Publications */}
      <div className="space-y-6">
        <div className="border-b border-slate-800 pb-3">
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span>ჩემი ბლოგი &amp; პუბლიკაციები</span>
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            სტატიები ჩემს პროექტებსა და ტექნოლოგიებზე:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {blogData.map((item) => (
            <article
              key={item.id}
              className="bg-slate-900/60 p-5 sm:p-6 rounded-3xl border border-slate-800 hover:border-purple-500/50 hover:bg-slate-900/80 transition flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-2">
                <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider">
                  {item.source}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition">
                  {item.title}
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800 mt-4">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-purple-400 hover:text-purple-300 inline-flex items-center gap-1.5 transition"
                >
                  <span>სტატიის ნახვა</span>
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Motto / Quote */}
      <aside className="text-center p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-blue-950/40 border border-purple-500/30 backdrop-blur-sm shadow-xl">
        <h3 className="text-xs uppercase tracking-widest font-bold text-purple-400 mb-3 flex items-center justify-center gap-2">
          <i className="fa-solid fa-quote-left text-xs"></i>
          <span>ჩემი დევიზი</span>
        </h3>
        <blockquote className="text-base sm:text-xl md:text-2xl font-medium text-white italic max-w-2xl mx-auto leading-relaxed break-words">
          „საუკეთესო გზა მომავლის წინასწარმეტყველებისთვის — მისი საკუთარი ხელით შექმნაა.“
        </blockquote>
        <p className="text-slate-400 text-xs sm:text-sm mt-3">
          ყოველდღიური პრაქტიკა და ახალი გამოწვევების მიღება არის ის, რაც მუდმივად წინ მამოძრავებს.
        </p>
      </aside>
    </section>
  );
}

