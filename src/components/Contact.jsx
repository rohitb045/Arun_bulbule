export default function Contact() {
  return (
    <section className="py-32 px-8 md:px-20 bg-surface" id="contact">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div>
            <span className="text-primary tracking-[0.2em] uppercase text-xs font-bold mb-4 block">
              Get in Touch
            </span>
            <h2 className="font-headline text-6xl md:text-7xl font-black tracking-tighter mb-12">
              Let's create something bold.
            </h2>
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-on-surface-variant font-bold text-xs uppercase tracking-widest mb-1">
                    Phone
                  </p>
                  <p className="text-2xl font-epilogue">+91 9766470590</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-on-surface-variant font-bold text-xs uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <p className="text-xl font-epilogue">arunbulbule09@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="text-on-surface-variant font-bold text-xs uppercase tracking-widest mb-1">
                    Location
                  </p>
                  <p className="text-2xl font-epilogue">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-12 rounded-xl shadow-2xl">
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] font-bold text-on-surface-variant">
                  Your Name
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all py-4 text-xl"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] font-bold text-on-surface-variant">
                  Email Address
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all py-4 text-xl"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] font-bold text-on-surface-variant">
                  Project Details
                </label>
                <textarea
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all py-4 text-xl resize-none"
                  placeholder="Tell me about your vision..."
                  rows="4"
                ></textarea>
              </div>
              <button className="w-full py-6 bg-primary text-on-primary font-black text-lg rounded-md hover:scale-[1.02] transition-transform duration-300">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
