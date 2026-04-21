import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = ["Work", "Skills", "Experience", "About", "Contact"];

  return (
    <header className="sticky top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
      
      <nav className="flex justify-between items-center px-5 sm:px-6 md:px-8 py-4 md:py-5 max-w-7xl mx-auto">
        
        {/* Logo */}
        <a className="font-manrope font-black tracking-tighter text-lg sm:text-xl md:text-2xl text-slate-900 dark:text-slate-50 uppercase">
          DESIGNER.PORTFOLIO
        </a>

        {/* Desktop Menu (only large screens) */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm xl:text-base text-slate-600 dark:text-slate-400 font-medium hover:text-red-700 transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden lg:inline-block bg-gradient-to-br from-primary to-primary-container text-white px-5 xl:px-6 py-2 xl:py-2.5 rounded-lg text-sm xl:text-base font-bold transition hover:brightness-110"
        >
          Get in Touch
        </a>

        {/* Mobile / Tablet Menu Button */}
        <button
          className="lg:hidden text-slate-900 dark:text-white"
          onClick={() => setOpen(!open)}
        >
          {/* Hamburger / Close Icon */}
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile / Tablet Menu */}
      {open && (
        <div className="lg:hidden px-5 sm:px-6 pb-6">
          <div className="flex flex-col gap-4 bg-white dark:bg-slate-900 rounded-xl shadow-lg p-5">
            
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-slate-700 dark:text-slate-300 font-medium text-base hover:text-red-700 transition"
              >
                {item}
              </a>
            ))}

            {/* CTA */}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center bg-gradient-to-br from-primary to-primary-container text-white px-5 py-2.5 rounded-lg font-bold"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}