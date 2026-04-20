export default function Navbar() {
  return (
    <header className="sticky top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl no-border shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <a
          className="font-manrope font-black tracking-tighter text-2xl text-slate-900 dark:text-slate-50 uppercase"
          href="#"
        >
          Arun Bulbule
        </a>
        <div className="hidden md:flex items-center gap-10">
          <a
            className="text-red-800 dark:text-red-500 font-bold font-manrope tracking-tight text-lg hover:text-red-700 transition-colors duration-300"
            href="#work"
          >
            Work
          </a>
          <a
            className="text-slate-600 dark:text-slate-400 font-medium font-manrope tracking-tight text-lg hover:text-red-700 transition-colors duration-300"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="text-slate-600 dark:text-slate-400 font-medium font-manrope tracking-tight text-lg hover:text-red-700 transition-colors duration-300"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="text-slate-600 dark:text-slate-400 font-medium font-manrope tracking-tight text-lg hover:text-red-700 transition-colors duration-300"
            href="#about"
          >
            About
          </a>
          <a
            className="text-slate-600 dark:text-slate-400 font-medium font-manrope tracking-tight text-lg hover:text-red-700 transition-colors duration-300"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <a
          className="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-2.5 rounded-lg font-bold scale-95 active:scale-90 transition-all shadow-lg hover:brightness-110"
          href="#contact"
        >
          Get in Touch
        </a>
      </nav>
    </header>
  );
}
