export default function Experience() {
  return (
    <section
      className="py-16 sm:py-20 md:py-28 lg:py-32 bg-primary-fixed overflow-hidden relative"
      id="experience"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 relative z-10">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-on-primary-fixed mb-12 md:mb-16 lg:mb-20 text-center lg:text-left">
          The Career Path
        </h2>

        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          
          {[
            {
              year: "2021 — Present",
              title: "Senior Designer at Creative Studio",
              desc: "Leading a team of 5 designers to execute complex visual identity systems for Fortune 500 clients. Responsible for creative direction, stakeholder management, and cross-platform design systems.",
              bg: "bg-white",
            },
            {
              year: "2018 — 2021",
              title: "Brand Lead at Marketing Co.",
              desc: "Oversaw internal brand development and external marketing assets. Increased social engagement by 140% through a complete visual overhaul of digital content channels.",
              bg: "bg-white/50",
            },
            {
              year: "2015 — 2018",
              title: "Visual Designer at Print House",
              desc: "Focused on high-end editorial and publication design. Mastered pre-press production and tactile finishing techniques for boutique physical media.",
              bg: "bg-white/30",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`group flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 
              p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-[32px] 
              ${item.bg} hover:bg-on-primary-fixed hover:text-white 
              transition-all duration-500`}
            >
              
              {/* Year */}
              <div className="md:w-1/4">
                <p className="text-xs sm:text-sm uppercase tracking-widest text-primary font-bold group-hover:text-primary-fixed-dim">
                  {item.year}
                </p>
              </div>

              {/* Content */}
              <div className="md:w-3/4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-2 sm:mb-3 md:mb-4">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base md:text-lg opacity-80 leading-relaxed max-w-2xl">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Text */}
      <div className="absolute -right-10 sm:-right-16 md:-right-20 top-0 
        text-[8rem] sm:text-[12rem] md:text-[20rem] lg:text-[30rem] 
        font-black text-on-primary-fixed/5 select-none leading-none -z-0">
        WORK
      </div>
    </section>
  );
}