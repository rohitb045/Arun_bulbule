export default function About() {
  return (
    <section className="py-32 px-8 md:px-20 bg-surface-container-low" id="about">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-12 tracking-tight">
              Crafting Identity <br />
              Through Design
            </h2>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
              <p>
                With over 8 years of dedicated experience in the design
                industry, I specialize in transforming complex ideas into
                visually compelling narratives. My journey has taken me from
                traditional print workshops to leading brand communication
                strategies in the healthcare sector.
              </p>
              <p>
                I thrive at the intersection of branding, print production, and
                digital marketing, ensuring every pixel and every ink drop
                serves a strategic purpose.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div className="p-8 bg-surface-container-high rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-lg mb-6">
                <span className="material-symbols-outlined">lightbulb</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-3 text-on-surface">
                Creative Thinking
              </h3>
              <p className="text-on-surface-variant text-sm">
                Approaching every challenge with a fresh perspective to deliver
                unique visual solutions that stand out in crowded markets.
              </p>
            </div>
            <div className="p-8 bg-surface-container-high rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-lg mb-6">
                <span className="material-symbols-outlined">
                  center_focus_strong
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-3 text-on-surface">
                Attention to Detail
              </h3>
              <p className="text-on-surface-variant text-sm">
                Ensuring pixel perfection and technical precision in both
                digital assets and large-scale print production.
              </p>
            </div>
            <div className="p-8 bg-surface-container-high rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-lg mb-6">
                <span className="material-symbols-outlined">groups</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-3 text-on-surface">
                Teamwork
              </h3>
              <p className="text-on-surface-variant text-sm">
                Collaborative mindset with a track record of working seamlessly
                with marketing teams and medical professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
