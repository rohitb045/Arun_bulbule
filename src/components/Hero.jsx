export default function Hero() {
  return (
    <section className="relative flex items-center px-5 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 items-center">
        
        {/* Left Content */}
        <div className="md:col-span-1 lg:col-span-7 z-10 text-center md:text-left">
          
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-surface-container-high text-primary font-bold text-[10px] sm:text-xs tracking-widest uppercase mb-5 md:mb-6">
            Senior Graphic Designer
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[1.05] md:leading-[0.95] text-on-surface mb-5 md:mb-6 lg:mb-8">
            Creative Vision.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
              Strategic Design.
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-on-surface-variant max-w-md sm:max-w-lg md:max-w-xl mx-auto md:mx-0 mb-6 md:mb-8 lg:mb-12 leading-relaxed">
            Crafting impactful visual identities and digital experiences with a
            focus on minimalism and modern aesthetics.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <a
              href="#work"
              className="px-5 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-4 lg:py-5 bg-gradient-to-br from-primary to-primary-container text-white rounded font-bold text-sm sm:text-base md:text-base lg:text-lg shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-5 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-4 lg:py-5 bg-surface-container-high text-primary rounded font-bold text-sm sm:text-base md:text-base lg:text-lg hover:bg-surface-container-highest active:scale-95 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:col-span-1 lg:col-span-5 relative flex justify-center md:justify-end">
          
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
            <img
              alt="Professional Design Workspace"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF1-1QDwCBN9c6btc-8TMrQzvHwA7PbPMU2AN5IEiFhGXGAxFibCrdKwte7YaR6XGBFYZwV_IPPSbu0uIQp7BTYoeiTfr25AcBRlelz_NvSYcNbHWZ9hH688sItYKjKJHMTnU4vNrVSOokv4Dr2eoA2ssm-zjDKn51s6YXmUZJR56MXjjIRj-2kPDNXamy0OMtzsrJKP7GRb7Thb3-epj0TI4sfLlv9oDq6n1n8XazItGFbpQAMahCeANycF3s6Nj1eJw2ORFY7AI"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-0 sm:-bottom-4 md:-bottom-6 left-1/2 md:-left-6 -translate-x-1/2 md:translate-x-0 bg-surface-container-lowest p-4 sm:p-5 md:p-6 lg:p-8 rounded-2xl shadow-xl max-w-[180px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[240px] -rotate-3">
            
            <p className="text-primary font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1">
              8+
            </p>

            <p className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant">
              Years of industry expertise in global branding
            </p>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2/3 sm:w-1/2 md:w-1/3 h-full bg-primary/5 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full -z-10"></div>
    </section>
  );
}