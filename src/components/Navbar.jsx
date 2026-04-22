export default function Navbar() {
  return (
    <nav classNameName="fixed top-0 w-full z-50 bg-[#111318]/60 backdrop-blur-lg shadow-[0px_40px_60px_-15px_rgba(0,31,36,0.15)]">
      <div className="flex justify-between items-center w-full px-8 md:px-20 py-8 max-w-[1920px] mx-auto">
        <div className="text-2xl font-epilogue font-bold tracking-tighter text-[#c3f5ff]">
          Arun Bulbule
        </div>
        <div className="hidden md:flex gap-12 items-center">
          <a
            className="text-[#c3f5ff] border-b-2 border-[#c3f5ff] pb-1 font-bold text-sm tracking-widest uppercase"
            href="#work"
          >
            Work
          </a>
          <a
            className="text-[#e2e2e8]/70 font-manrope text-sm tracking-widest uppercase hover:text-[#c3f5ff] hover:scale-105 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
            href="#expertise"
          >
            Expertise
          </a>
          <a
            className="text-[#e2e2e8]/70 font-manrope text-sm tracking-widest uppercase hover:text-[#c3f5ff] hover:scale-105 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
            href="#about"
          >
            About
          </a>
          <a
            className="px-6 py-2 bg-primary text-on-primary font-bold rounded hover:scale-105 transition-all duration-300"
            href="#contact"
          >
            Get in Touch
          </a>
          <a
            href="/Arun_Bulbule_Resume.pdf"
            download="Arun_Bulbule_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-primary text-on-primary font-bold rounded hover:scale-105 transition-all duration-300"
          >
            Resume
          </a>
        </div>
        {/* <!-- Mobile Nav Toggle --> */}
        <button className="md:hidden text-[#c3f5ff]">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
