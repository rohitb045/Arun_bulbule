export default function Contact() {
  return (
    <section
      className="py-16 sm:py-20 md:py-28 lg:py-32 bg-surface"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          {/* Left Info */}
          <div className="text-center lg:text-left">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">
              Contact
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mt-4 mb-8 md:mb-12 leading-tight">
              Let's build <br />
              your vision.
            </h2>

            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  icon: "mail",
                  label: "Email Me",
                  value: "hello@designerportfolio.com",
                },
                {
                  icon: "call",
                  label: "Call Me",
                  value: "+1 (555) 012-3456",
                },
                {
                  icon: "location_on",
                  label: "Office",
                  value: "New York City, NY",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center gap-2 
                 lg:flex-row lg:items-center lg:text-left lg:gap-6 lg:justify-start"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-surface-container-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">
                      {item.icon}
                    </span>
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-xs uppercase tracking-widest text-on-surface-variant">
                      {item.label}
                    </p>

                    <p className="text-sm sm:text-base md:text-lg font-semibold text-on-surface break-words">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl md:rounded-[40px] bg-surface-container-lowest shadow-[0px_30px_60px_rgba(25,28,29,0.08)]">
            <form className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-on-surface-variant mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full bg-surface-container-low rounded-xl px-4 sm:px-5 md:px-6 py-3 sm:py-4 focus:ring-2 focus:ring-primary focus:bg-white transition outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-on-surface-variant mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full bg-surface-container-low rounded-xl px-4 sm:px-5 md:px-6 py-3 sm:py-4 focus:ring-2 focus:ring-primary focus:bg-white transition outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-on-surface-variant mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-surface-container-low rounded-xl px-4 sm:px-5 md:px-6 py-3 sm:py-4 focus:ring-2 focus:ring-primary focus:bg-white transition outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-on-surface-variant mb-2">
                  Your Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full bg-surface-container-low rounded-xl px-4 sm:px-5 md:px-6 py-3 sm:py-4 focus:ring-2 focus:ring-primary focus:bg-white transition outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 sm:py-4 md:py-5 bg-gradient-to-br from-primary to-primary-container text-white font-bold text-base sm:text-lg rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all"
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
