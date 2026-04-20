export default function About() {
  return (
    <section className="py-32 bg-surface" id="about">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <h2 className="text-5xl font-black font-headline tracking-tighter">
              The Architect of <br />
              <span className="text-primary">Visual Narrative</span>
            </h2>
            <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
              <span
                className="material-symbols-outlined text-4xl text-primary mb-4"
                data-icon="brush"
              >
                brush
              </span>
              <h3 className="text-xl font-bold mb-2">Branding</h3>
              <p className="text-sm text-on-surface-variant">
                Comprehensive identity systems that define market presence and
                emotional connection.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
              <span
                className="material-symbols-outlined text-4xl text-primary mb-4"
                data-icon="print"
              >
                print
              </span>
              <h3 className="text-xl font-bold mb-2">Print</h3>
              <p className="text-sm text-on-surface-variant">
                High-end editorial layouts and tactile collateral that leave a
                lasting physical impression.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
              <span
                className="material-symbols-outlined text-4xl text-primary mb-4"
                data-icon="share"
              >
                share
              </span>
              <h3 className="text-xl font-bold mb-2">Social Media</h3>
              <p className="text-sm text-on-surface-variant">
                Dynamic, high-engagement content strategies for modern
                digital-first audiences.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
              <span
                className="material-symbols-outlined text-4xl text-primary mb-4"
                data-icon="auto_awesome"
              >
                auto_awesome
              </span>
              <h3 className="text-xl font-bold mb-2">Art Direction</h3>
              <p className="text-sm text-on-surface-variant">
                Strategic oversight that ensures visual cohesion across multiple
                platforms and media.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
