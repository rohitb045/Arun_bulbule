export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-20 pt-20 overflow-hidden bg-surface">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 z-10">
          <span className="inline-block text-primary font-manrope text-xs tracking-[0.3em] uppercase mb-6">
            Senior Graphic Designer • 8+ Years Experience
          </span>
          <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-black text-on-background leading-[0.9] mb-8 tracking-tighter">
            Arun <br /> Bulbule
          </h1>
          <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-12">
            Creating clean, impactful, and brand-focused designs that bridge the
            gap between aesthetics and communication.
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              className="px-10 py-5 bg-primary text-on-primary font-bold text-lg rounded-md hover:scale-105 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center gap-2"
              href="#work"
            >
              View Work{" "}
              <span className="material-symbols-outlined">arrow_outward</span>
            </a>
            <a
              className="px-10 py-5 border border-outline-variant text-on-surface font-bold text-lg rounded-md hover:bg-surface-container-high transition-colors duration-300"
              href="#contact"
            >
              Hire Me
            </a>
          </div>
        </div>
        <div className="lg:col-span-4 relative">
          <div className="aspect-[3/4] bg-surface-container-low rounded-xl overflow-hidden shadow-2xl relative">
            <img
              alt="Arun Bulbule portrait"
              className="w-full h-full object-cover grayscale brightness-75 contrast-125"
              data-alt="Monochrome studio portrait of a professional male creative in a dark environment with dramatic side lighting and a minimalist vibe."
              src="/image/arun.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
      {/* <!-- Decorative Background Element --> */}
      <div className="absolute -right-20 top-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}
