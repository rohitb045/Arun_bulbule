export default function Skill() {
  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-surface" id="skills">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter">
            Core Proficiency
          </h2>

          <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Mastering the tools of the trade to deliver exceptional visual results
            across all mediums.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
          
          {[
            { icon: "photo_filter", name: "Photoshop" },
            { icon: "draw", name: "Illustrator" },
            { icon: "auto_stories", name: "InDesign" },
            { icon: "layers", name: "Figma" },
            { icon: "verified", name: "Branding" },
            { icon: "history_edu", name: "Print Design" },
          ].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 sm:gap-4 md:gap-6 
              p-4 sm:p-6 md:p-8 lg:p-10 
              rounded-2xl md:rounded-3xl 
              bg-surface-container-lowest 
              shadow-[0px_10px_20px_rgba(25,28,29,0.05)] 
              hover:scale-105 transition-transform duration-300"
            >
              
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-primary/10 rounded-xl md:rounded-2xl">
                <span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl text-primary">
                  {skill.icon}
                </span>
              </div>

              {/* Text */}
              <span className="text-sm sm:text-base font-semibold text-on-surface tracking-tight text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}