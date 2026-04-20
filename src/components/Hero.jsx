export default function Hero() {
  return (
    <section className="relative min-h-[921px] flex items-center px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-surface-container-high text-primary font-bold text-xs tracking-widest uppercase mb-6">
            Senior Graphic Designer
          </span>
          <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter leading-[0.9] text-on-surface mb-8">
            Creative Vision.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
              Strategic Design.
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-body text-on-surface-variant max-w-xl mb-12 leading-relaxed">
            Crafting impactful visual identities and digital experiences with a
            focus on minimalism and modern aesthetics.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="px-10 py-5 bg-gradient-to-br from-primary to-primary-container text-white rounded font-bold text-lg shadow-xl hover:scale-105 active:scale-95 transition-all"
              href="#work"
            >
              View Work
            </a>
            <a
              className="px-10 py-5 bg-surface-container-high text-primary rounded font-bold text-lg hover:bg-surface-container-highest active:scale-95 transition-all"
              href="#contact"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
            <img
              alt="Professional Design Workspace"
              className="w-full h-full object-cover"
              data-alt="Modern minimalist home office with high-end computer monitor displaying abstract colorful vector art and sleek designer accessories in warm morning light"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF1-1QDwCBN9c6btc-8TMrQzvHwA7PbPMU2AN5IEiFhGXGAxFibCrdKwte7YaR6XGBFYZwV_IPPSbu0uIQp7BTYoeiTfr25AcBRlelz_NvSYcNbHWZ9hH688sItYKjKJHMTnU4vNrVSOokv4Dr2eoA2ssm-zjDKn51s6YXmUZJR56MXjjIRj-2kPDNXamy0OMtzsrJKP7GRb7Thb3-epj0TI4sfLlv9oDq6n1n8XazItGFbpQAMahCeANycF3s6Nj1eJw2ORFY7AI"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-8 rounded-2xl shadow-xl max-w-[240px] -rotate-3">
            <p className="text-primary font-black text-4xl mb-1">8+</p>
            <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
              Years of industry expertise in global branding
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
}
