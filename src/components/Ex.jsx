export default function Experience() {
  return (
    <section className="py-32 px-8 md:px-20 bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-24">
          <div className="lg:w-1/3">
            <span className="text-primary tracking-[0.2em] uppercase text-xs font-bold mb-4 block">
              The Journey
            </span>
            <h2 className="font-headline text-5xl md:text-6xl font-black tracking-tighter mb-8">
           Experience Timeline

            </h2>
            <p className="text-on-surface-variant text-lg">
              A decade of evolution from hands-on print technician to senior
              strategic designer.
            </p>
          </div>
          <div className="lg:w-2/3 space-y-16">
            {/* <!-- Item 1 --> */}
            <div className="relative pl-12 border-l border-outline-variant/30">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0 shadow-[0_0_15px_rgba(195,245,255,0.5)]"></div>
              <span className="text-primary font-bold text-sm tracking-widest">
                2023 - PRESENT
              </span>
              <h3 className="text-3xl font-headline font-bold text-on-surface mt-2">
                Bharati Hospital
              </h3>
              <p className="text-on-surface-variant font-manrope font-semibold mt-1">
                Senior Graphic Designer
              </p>
              <p className="text-on-surface-variant mt-4 max-w-xl">
                Leading hospital brand communication, healthcare marketing
                collateral, and internal design systems.
              </p>
            </div>
            {/* <!-- Item 2 --> */}
            <div className="relative pl-12 border-l border-outline-variant/30">
              <div className="absolute w-4 h-4 bg-surface-container-highest rounded-full -left-[9px] top-0"></div>
              <span className="text-on-surface-variant/70 font-bold text-sm tracking-widest">
                2021 - 2023
              </span>
              <h3 className="text-3xl font-headline font-bold text-on-surface mt-2">
                Gigante Technologies
              </h3>
              <p className="text-on-surface-variant font-manrope font-semibold mt-1">
                Graphic Designer
              </p>
              <p className="text-on-surface-variant mt-4 max-w-xl">
                Focused on digital marketing assets, tech-centric branding, and
                UI/UX support materials.
              </p>
            </div>
            {/* <!-- Item 3 --> */}
            <div className="relative pl-12 border-l border-outline-variant/30">
              <div className="absolute w-4 h-4 bg-surface-container-highest rounded-full -left-[9px] top-0"></div>
              <span className="text-on-surface-variant/70 font-bold text-sm tracking-widest">
                2020 - 2021
              </span>
              <h3 className="text-3xl font-headline font-bold text-on-surface mt-2">
                Swarajya Decal
              </h3>
              <p className="text-on-surface-variant font-manrope font-semibold mt-1">
                Production Designer
              </p>
              <p className="text-on-surface-variant mt-4 max-w-xl">
                Specialized in large-scale decals, color separation for print,
                and industrial graphics.
              </p>
            </div>
            {/* <!-- More Experience --> */}
            <div className="relative pl-12 border-l border-outline-variant/30">
              <div className="absolute w-4 h-4 bg-surface-container-highest rounded-full -left-[9px] top-0"></div>
              <span className="text-on-surface-variant/70 font-bold text-sm tracking-widest">
                2016 - 2020
              </span>
              <div className="space-y-6 mt-2">
                <div>
                  <h4 className="text-xl font-headline font-bold text-on-surface">
                    Seri Prints (2018-2020)
                  </h4>
                  <p className="text-on-surface-variant text-sm">
                    Lead Layout Artist
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-headline font-bold text-on-surface">
                    Insights Success (2018)
                  </h4>
                  <p className="text-on-surface-variant text-sm">
                    Editorial Designer
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-headline font-bold text-on-surface">
                    Blaze Graphics (2016-2017)
                  </h4>
                  <p className="text-on-surface-variant text-sm">Junior Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
