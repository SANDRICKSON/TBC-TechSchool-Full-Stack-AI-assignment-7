import React, { useState } from 'react';
import SocialLink from '../components/SocialLink';

/**
 * Contact section - Direct info, interactive contact form & FAQ
 */
export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    userEmail: '',
    subject: '',
    message: ''
  });

  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        fullName: '',
        userEmail: '',
        subject: '',
        message: ''
      });
    }, 4000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterSubmitted(true);
    setTimeout(() => {
      setNewsletterSubmitted(false);
      setNewsletterEmail('');
    }, 4000);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      userEmail: '',
      subject: '',
      message: ''
    });
  };

  const faqItems = [
    {
      q: 'What technologies do you work with?',
      a: 'I specialize in Python (Django, Flask, FastAPI), JavaScript/TypeScript (React, Vue.js, Node.js), Mobile Development with Flutter & Android (Kotlin), AI/ML integration (OpenAI API, Vertex AI, TensorFlow, PyTorch), and embedded hardware with Arduino & IoT.',
      icon: 'fa-solid fa-code'
    },
    {
      q: 'Do you take freelance projects?',
      a: 'Yes! I am open to freelance projects, MVP development for startups, mobile applications, AI chatbots, and custom web systems. Feel free to send a message via the form above.',
      icon: 'fa-solid fa-briefcase'
    },
    {
      q: 'Can I collaborate with you?',
      a: 'Absolutely! I love collaborating with motivated teams, designers, and fellow developers on innovative ideas, hackathons, open source initiatives, and startup projects like PetC, FlirtKey, and Mind Oracle.',
      icon: 'fa-solid fa-users'
    },
    {
      q: 'What is your experience in AI development?',
      a: 'I have extensive hands-on experience building conversational AI chatbots (Psychobot, Medea, Eka, Sandricksoni), generative image creators using Google AI Studio, custom NLP solutions with Rasa, and deep learning models with PyTorch and TensorFlow.',
      icon: 'fa-solid fa-robot'
    }
  ];

  return (
    <section id="contact" className="space-y-12 sm:space-y-16">
      {/* Intro */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium">
          <i className="fa-solid fa-handshake-angle text-purple-400"></i>
          <span>კავშირი &amp; თანამშრომლობა</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          დამიკავშირდით
        </h2>
        <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
          თუ გაქვთ საინტერესო იდეა, გსურთ თანამშრომლობა ახალ პროექტზე ან გაქვთ შეკითხვა ჩემს ნამუშევრებთან დაკავშირებით, სიამოვნებით მოგისმენთ!
        </p>
      </div>

      {/* Grid: Contact Info Left, Message Form Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Info Cards & Newsletter */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900/60 rounded-3xl p-6 sm:p-8 border border-slate-800/90 shadow-xl space-y-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
              პირდაპირი კონტაქტი
            </h3>

            <ul className="space-y-5 text-sm">
              <SocialLink
                variant="card"
                color="purple"
                icon="fa-solid fa-user"
                sublabel="სახელი და გვარი"
                label="სანდრო ქათამაძე"
                href="#hero"
              />

              <SocialLink
                variant="card"
                color="blue"
                icon="fa-solid fa-envelope"
                sublabel="ელექტრონული ფოსტა"
                label="sandroqatamadze802@gmail.com"
                href="mailto:sandroqatamadze802@gmail.com"
              />

              <SocialLink
                variant="card"
                color="indigo"
                icon="fa-brands fa-github"
                sublabel="GitHub პროფილი"
                label="github.com/SANDRICKSON"
                href="https://github.com/SANDRICKSON"
              />

              <SocialLink
                variant="card"
                color="emerald"
                icon="fa-solid fa-laptop-code"
                sublabel="სპეციალობა"
                label="Fullstack, Mobile & Arduino Developer"
                href="#about"
              />

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
                  <i className="fa-solid fa-location-dot text-base"></i>
                </div>
                <div className="min-w-0 flex-1">
                  <strong className="text-xs text-slate-400 block font-medium">ადგილმდებარეობა</strong>
                  <span className="text-white font-medium text-base mt-0.5 block">
                    საქართველო (ჭიათურა / თბილისი)
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-purple-950/40 via-slate-900 to-blue-950/40 border border-purple-500/30 text-sm space-y-4">
            <div>
              <h4 className="text-white font-bold text-base flex items-center gap-2">
                <i className="fa-solid fa-paper-plane text-purple-400 text-sm"></i>
                <span>Subscribe to Our Newsletter</span>
              </h4>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                მიიღეთ უახლესი შეტყობინებები ახალი პროექტების, AI ჩატბოტებისა და ტექნოლოგიური სტატიების შესახებ.
              </p>
            </div>

            {newsletterSubmitted ? (
              <div className="p-3 bg-emerald-950/70 border border-emerald-500/40 rounded-xl text-xs text-emerald-200 flex items-center gap-2 animate-fadeIn">
                <i className="fa-solid fa-circle-check text-emerald-400"></i>
                <span>გმადლობთ გამოწერისთვის! სიახლეებს მიიღებთ ელფოსტაზე.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <label htmlFor="newsletter-email" className="text-xs text-slate-300 font-medium block">
                  თქვენი ელფოსტა:
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    id="newsletter-email"
                    name="newsletterEmail"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="flex-1 w-full bg-slate-950/80 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 transition cursor-pointer flex items-center justify-center gap-1.5 shrink-0"
                  >
                    <span>გამოწერა</span>
                    <i className="fa-solid fa-paper-plane text-[10px]"></i>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7 bg-slate-900/60 rounded-3xl p-6 sm:p-8 border border-slate-800/90 shadow-xl backdrop-blur-sm">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <i className="fa-solid fa-message text-purple-400 text-lg"></i>
              <span>მომწერეთ შეტყობინება</span>
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              შეავსეთ მარტივი ფორმა და გამომიგზავნეთ თქვენი შეკითხვა ან შემოთავაზება:
            </p>
          </div>

          {formSubmitted && (
            <div className="mb-5 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 flex items-center gap-3 animate-fadeIn">
              <i className="fa-solid fa-circle-check text-emerald-400 text-lg shrink-0"></i>
              <div>
                <p className="font-semibold text-sm">მადლობა, შეტყობინება მიღებულია!</p>
                <p className="text-xs text-emerald-300 mt-0.5">
                  უმოკლეს დროში დაგიკავშირდებით მითითებულ ელფოსტაზე.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleContactSubmit} className="space-y-5">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label htmlFor="full-name" className="block text-sm font-semibold text-slate-200">
                თქვენი სახელი და გვარი: <span className="text-purple-400">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <i className="fa-solid fa-user text-sm"></i>
                </span>
                <input
                  type="text"
                  id="full-name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="მაგ: გიორგი ბერიძე"
                  required
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition duration-200 text-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="user-email" className="block text-sm font-semibold text-slate-200">
                თქვენი ელფოსტა: <span className="text-purple-400">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <i className="fa-solid fa-envelope text-sm"></i>
                </span>
                <input
                  type="email"
                  id="user-email"
                  name="userEmail"
                  value={formData.userEmail}
                  onChange={handleInputChange}
                  placeholder="მაგ: example@mail.com"
                  required
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition duration-200 text-sm"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-1.5">
              <label htmlFor="subject" className="block text-sm font-semibold text-slate-200">
                თემა / მიმართულება: <span className="text-purple-400">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <i className="fa-solid fa-tag text-sm"></i>
                </span>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition duration-200 text-sm"
                >
                  <option value="" disabled className="text-slate-500">
                    აირჩიეთ თემა...
                  </option>
                  <option value="web" className="bg-slate-900 text-white">
                    Fullstack ვებ-დეველოპმენტი (Django, React)
                  </option>
                  <option value="mobile" className="bg-slate-900 text-white">
                    მობილური აპლიკაციები (Flutter, Android Kotlin)
                  </option>
                  <option value="ai" className="bg-slate-900 text-white">
                    ხელოვნური ინტელექტი &amp; AI ჩატბოტები
                  </option>
                  <option value="arduino" className="bg-slate-900 text-white">
                    Arduino &amp; IoT სისტემები
                  </option>
                  <option value="collaboration" className="bg-slate-900 text-white">
                    კოლაბორაცია / სტარტაპი
                  </option>
                  <option value="other" className="bg-slate-900 text-white">
                    სხვა შეკითხვა
                  </option>
                </select>
              </div>
            </div>

            {/* Message Text */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="block text-sm font-semibold text-slate-200">
                შეტყობინების ტექსტი: <span className="text-purple-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="დაწერეთ თქვენი შეტყობინება აქ..."
                required
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition duration-200 text-sm resize-y"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-900/30 hover:shadow-purple-700/50 hover:-translate-y-0.5 active:translate-y-0 transition duration-200 text-sm cursor-pointer"
              >
                <span>შეტყობინების გაგზავნა</span>
                <i className="fa-solid fa-paper-plane text-xs"></i>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-300 bg-slate-800/80 hover:bg-slate-800 hover:text-white border border-slate-700 transition duration-200 text-sm cursor-pointer"
              >
                <i className="fa-solid fa-rotate-right text-xs"></i>
                <span>გასუფთავება</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="space-y-6 pt-4">
        <div className="border-b border-slate-800 pb-3">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            <span>Frequently Asked Questions (FAQ)</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            ხშირად დასმული კითხვები თანამშრომლობისა და ტექნოლოგიების შესახებ
          </p>
        </div>

        <div className="space-y-4 max-w-4xl">
          {faqItems.map((item, idx) => (
            <details
              key={idx}
              className="bg-slate-900/60 rounded-2xl border border-slate-800 p-5 group open:border-purple-500/50 transition"
            >
              <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between text-sm sm:text-base gap-3">
                <span className="flex items-center gap-2.5">
                  <i className={`${item.icon} text-purple-400 text-sm`}></i>
                  {item.q}
                </span>
                <i className="fa-solid fa-chevron-down text-purple-400 text-xs group-open:rotate-180 transition-transform duration-200 shrink-0"></i>
              </summary>
              <p className="text-slate-300 text-xs sm:text-sm mt-3 pt-3 border-t border-slate-800 leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

