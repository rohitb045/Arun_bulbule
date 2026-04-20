export default function Skill() {
  return (
    <section className="py-32 bg-surface" id="skills">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-black font-headline tracking-tighter">
            Core Proficiency
          </h2>
          <p className="mt-6 text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">
            Mastering the tools of the trade to deliver exceptional visual results
            across all mediums.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
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
              className="flex flex-col items-center gap-6 p-10 rounded-3xl bg-surface-container-lowest shadow-[0px_20px_40px_rgba(25,28,29,0.06)] hover:scale-105 transition-transform"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-2xl">
                <span className="material-symbols-outlined text-4xl text-primary">
                  {skill.icon}
                </span>
              </div>
              <span className="font-bold text-on-surface tracking-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}