export default function Footer() {
  return (
    <footer className="w-full py-12 bg-slate-100 dark:bg-slate-950 tonal-shift-no-border flat">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-manrope font-bold text-slate-900 dark:text-slate-50 text-xl tracking-tighter">
            Arun Bulbule
          </span>
          <p className="font-inter text-sm tracking-wide text-slate-500 dark:text-slate-400">
            © 2024 Designer Portfolio. Built on The Curated Canvas.
          </p>
        </div>
        <div className="flex gap-8">
          <a
            className="text-slate-500 dark:text-slate-400 font-inter text-sm tracking-wide opacity-80 hover:opacity-100 hover:text-red-700 underline-offset-4 hover:underline transition-all"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="text-slate-500 dark:text-slate-400 font-inter text-sm tracking-wide opacity-80 hover:opacity-100 hover:text-red-700 underline-offset-4 hover:underline transition-all"
            href="#"
          >
            Dribbble
          </a>
          <a
            className="text-slate-500 dark:text-slate-400 font-inter text-sm tracking-wide opacity-80 hover:opacity-100 hover:text-red-700 underline-offset-4 hover:underline transition-all"
            href="#"
          >
            Instagram
          </a>
          <a
            className="text-slate-500 dark:text-slate-400 font-inter text-sm tracking-wide opacity-80 hover:opacity-100 hover:text-red-700 underline-offset-4 hover:underline transition-all"
            href="#"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
