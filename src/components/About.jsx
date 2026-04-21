export default function About() {
  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-surface" id="about">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
          
          {/* Left Content */}
          <div className="space-y-8 md:space-y-10 lg:space-y-12 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-tight">
              The Architect of <br />
              <span className="text-primary">Visual Narrative</span>
            </h2>

            <div className="space-y-4 sm:space-y-5 md:space-y-6 text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-xl mx-auto lg:mx-0">
              <p>
                With over 8 years of experience in the creative industry, I've
                dedicated my career to bridging the gap between artistic
                expression and strategic communication.
              </p>
              <p>
                I believe that great design isn't just about how things look,
                but how they function within a brand's ecosystem. My approach is
                rooted in reductive minimalism—removing the noise to amplify the
                essence of a brand's message.
              </p>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            
            {[
              {
                icon: "brush",
                title: "Branding",
                desc: "Comprehensive identity systems that define market presence and emotional connection.",
              },
              {
                icon: "print",
                title: "Print",
                desc: "High-end editorial layouts and tactile collateral that leave a lasting physical impression.",
              },
              {
                icon: "share",
                title: "Social Media",
                desc: "Dynamic, high-engagement content strategies for modern digital-first audiences.",
              },
              {
                icon: "auto_awesome",
                title: "Art Direction",
                desc: "Strategic oversight that ensures visual cohesion across multiple platforms and media.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 md:p-8 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <span className="material-symbols-outlined text-3xl sm:text-4xl text-primary mb-3 sm:mb-4 block">
                  {item.icon}
                </span>

                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}