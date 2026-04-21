export default function Footer() {
  return (
    <footer className="w-full py-10 sm:py-12 bg-slate-100 dark:bg-slate-950">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-5 sm:px-6 md:px-8 max-w-7xl mx-auto gap-6">
        
        {/* Left */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <span className="font-bold text-slate-900 dark:text-slate-50 text-lg sm:text-xl tracking-tighter">
            Arun B
          </span>

          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Designer Portfolio. Built with care.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 md:gap-8">
          {[
            "LinkedIn",
            "Dribbble",
            "Instagram",
            "Email",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 
              hover:text-red-700 transition-all underline-offset-4 hover:underline"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}