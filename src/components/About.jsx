export default function About() {
  return (
    <section className="py-32 px-8 md:px-20 bg-surface-container-low" id="about">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-12 tracking-tight">
              About Me
            </h2>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
              <p>
               I am a Professional Graphic Designer with over 8+ years of experience in print and digital design. I specialize in creating clear, impactful visual communication for hospitals, clinics, educational institutions, and corporate brands. My strength lies in combining creativity with strong production knowledge to deliver designs that are not only visually appealing but also technically perfect for final output.
              </p>
              <p>
               I have extensive experience working on branding, marketing collaterals, medical communication materials, social media creatives, and large-format print designs. My understanding of prepress, color accuracy, layout systems, and finishing techniques allows me to execute print projects with precision and confidence.
              </p>
              <p>
              Along with print expertise, I actively work on digital design including social media campaigns, UI layouts, brand guidelines, and video graphics. I use modern tools like Figma and Adobe Premiere Pro to create engaging digital content and motion visuals for promotions and awareness campaigns.
              </p>
              <p>
              I believe good design is not only about looks, but about clarity, usability, and purpose. My goal is always to create designs that communicate effectively and strengthen brand identity across all platforms.
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
