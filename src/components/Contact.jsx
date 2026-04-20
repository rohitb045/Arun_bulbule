export default function Contact() {
  return (
    <section className="py-32 bg-surface" id="contact">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">
              Contact
            </span>
            <h2 className="text-6xl font-black font-headline tracking-tighter mt-4 mb-12">
              Let's build <br />
              your vision.
            </h2>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-primary"
                    data-icon="mail"
                  >
                    mail
                  </span>
                </div>
                <div>
                  <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                    Email Me
                  </p>
                  <p className="text-xl font-bold text-on-surface">
                    hello@designerportfolio.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-primary"
                    data-icon="call"
                  >
                    call
                  </span>
                </div>
                <div>
                  <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                    Call Me
                  </p>
                  <p className="text-xl font-bold text-on-surface">
                    +1 (555) 012-3456
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-primary"
                    data-icon="location_on"
                  >
                    location_on
                  </span>
                </div>
                <div>
                  <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                    Office
                  </p>
                  <p className="text-xl font-bold text-on-surface">
                    New York City, NY
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-12 rounded-[40px] bg-surface-container-lowest shadow-[0px_40px_80px_rgba(25,28,29,0.08)]">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
                    placeholder="Jane Doe"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
                    placeholder="jane@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">
                  Phone Number
                </label>
                <input
                  className="w-full bg-surface-container-low border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                />
              </div>
              <div>
                <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">
                  Your Message
                </label>
                <textarea
                  className="w-full bg-surface-container-low border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none resize-none"
                  placeholder="Tell me about your project..."
                  rows="5"
                ></textarea>
              </div>
              <button
                className="w-full py-5 bg-gradient-to-br from-primary to-primary-container text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
