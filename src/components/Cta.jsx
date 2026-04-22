export default function Cta() {
  return (
    <section
      className="py-32 px-8 md:px-20 bg-surface-container-low text-center"
      id="resume"
    >
      <div className="max-w-[800px] mx-auto">
        <span className="text-primary tracking-[0.2em] uppercase text-xs font-bold mb-4 block">
          Resume
        </span>

        <h2 className="font-headline text-5xl md:text-6xl font-black tracking-tighter mb-8">
          Download My Resume
        </h2>

        <p className="text-on-surface-variant text-lg mb-12">
          Get a detailed overview of my experience, skills, and professional
          journey.
        </p>

        <a
          href="/assets/resume/Arun_Bulbule_Resume.pdf"
          download
          className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-on-primary font-bold text-lg rounded-md hover:scale-105 transition-transform duration-300"
        >
          Download Resume
          {/* <span className="material-symbols-outlined">download</span> */}
        </a>
      </div>
    </section>
  );
}
