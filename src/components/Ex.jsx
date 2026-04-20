export default function Experience() {
  return (
    <section
      class="py-32 bg-primary-fixed overflow-hidden relative"
      id="experience"
    >
      <div class="max-w-7xl mx-auto px-8 relative z-10">
        <h2 class="text-5xl font-black font-headline tracking-tighter text-on-primary-fixed mb-20">
          The Career Path
        </h2>
        <div class="space-y-6">
          {/* <!-- Exp Item 1 --> */}
          <div class="group flex flex-col md:flex-row gap-8 p-10 rounded-[32px] bg-white hover:bg-on-primary-fixed hover:text-white transition-all duration-500 cursor-default">
            <div class="md:w-1/4">
              <p class="font-label text-sm uppercase tracking-widest text-primary font-bold group-hover:text-primary-fixed-dim">
                2021 — Present
              </p>
            </div>
            <div class="md:w-3/4">
              <h3 class="text-3xl font-black font-headline tracking-tight mb-4">
                Senior Designer at Creative Studio
              </h3>
              <p class="text-lg opacity-80 leading-relaxed max-w-2xl">
                Leading a team of 5 designers to execute complex visual identity
                systems for Fortune 500 clients. Responsible for creative
                direction, stakeholder management, and cross-platform design
                systems.
              </p>
            </div>
          </div>
          {/* <!-- Exp Item 2 --> */}
          <div class="group flex flex-col md:flex-row gap-8 p-10 rounded-[32px] bg-white/50 hover:bg-on-primary-fixed hover:text-white transition-all duration-500 cursor-default">
            <div class="md:w-1/4">
              <p class="font-label text-sm uppercase tracking-widest text-primary font-bold group-hover:text-primary-fixed-dim">
                2018 — 2021
              </p>
            </div>
            <div class="md:w-3/4">
              <h3 class="text-3xl font-black font-headline tracking-tight mb-4">
                Brand Lead at Marketing Co.
              </h3>
              <p class="text-lg opacity-80 leading-relaxed max-w-2xl">
                Oversaw internal brand development and external marketing
                assets. Increased social engagement by 140% through a complete
                visual overhaul of digital content channels.
              </p>
            </div>
          </div>
          {/* <!-- Exp Item 3 --> */}
          <div class="group flex flex-col md:flex-row gap-8 p-10 rounded-[32px] bg-white/30 hover:bg-on-primary-fixed hover:text-white transition-all duration-500 cursor-default">
            <div class="md:w-1/4">
              <p class="font-label text-sm uppercase tracking-widest text-primary font-bold group-hover:text-primary-fixed-dim">
                2015 — 2018
              </p>
            </div>
            <div class="md:w-3/4">
              <h3 class="text-3xl font-black font-headline tracking-tight mb-4">
                Visual Designer at Print House
              </h3>
              <p class="text-lg opacity-80 leading-relaxed max-w-2xl">
                Focused on high-end editorial and publication design. Mastered
                pre-press production and tactile finishing techniques for
                boutique physical media.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute -right-20 top-0 text-[30rem] font-black font-headline text-on-primary-fixed/5 select-none leading-none -z-0">
        WORK
      </div>
    </section>
  );
}
