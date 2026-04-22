export default function Footer() {
  return (
    <footer className="bg-[#1a1c20] w-full py-16 border-t border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 md:px-20 max-w-[1920px] mx-auto gap-8">
        <div className="font-epilogue font-black text-[#c3f5ff] text-2xl">
          Arun Bulbule
        </div>
        <p className="font-manrope text-xs tracking-[0.2em] uppercase text-[#e2e2e8]/50 text-center md:text-left">
          © 2024 Arun Bulbule. Designed for the Digital Lithograph.
        </p>
        <div className="flex gap-8">
          <a
            className="text-[#e2e2e8]/50 hover:text-[#c3f5ff] transition-colors duration-300 font-manrope text-xs tracking-[0.2em] uppercase"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="text-[#e2e2e8]/50 hover:text-[#c3f5ff] transition-colors duration-300 font-manrope text-xs tracking-[0.2em] uppercase"
            href="#"
          >
            Behance
          </a>
          <a
            className="text-[#e2e2e8]/50 hover:text-[#c3f5ff] transition-colors duration-300 font-manrope text-xs tracking-[0.2em] uppercase"
            href="#"
          >
            Dribbble
          </a>
        </div>
      </div>
    </footer>
  );
}
