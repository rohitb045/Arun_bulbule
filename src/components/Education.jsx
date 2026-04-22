export default function Education() {
  return (
    <section className="py-32 px-8 md:px-20 bg-surface-container-low">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-headline text-5xl md:text-6xl font-black tracking-tighter mb-20 text-center">
          Academic Roots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-surface p-12 rounded-xl flex flex-col justify-between group hover:bg-surface-bright transition-colors">
            <div>
              <span className="material-symbols-outlined text-primary text-4xl mb-6">
                school
              </span>
              <h3 className="text-3xl font-headline font-extrabold mb-4">
                G.D. Art Diploma
              </h3>
              <p className="text-on-surface-variant text-lg">
                Abhinav Kala Mahavidyalaya, Pune. Specialized in Applied Art and
                Visual Communication.
              </p>
            </div>
            <div className="mt-12 text-primary font-bold tracking-[0.1em]">
              MASTERED FOUNDATIONS
            </div>
          </div>
          <div className="bg-surface p-12 rounded-xl group hover:bg-surface-bright transition-colors">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">
              brush
            </span>
            <h3 className="text-2xl font-headline font-extrabold mb-4">
              ATD Drawing &amp; Painting
            </h3>
            <p className="text-on-surface-variant">
              Focusing on traditional artistic techniques and color theory.
            </p>
          </div>
          <div className="bg-primary p-12 rounded-xl text-on-primary">
            <span className="material-symbols-outlined text-4xl mb-6">
              history_edu
            </span>
            <h3 className="text-2xl font-headline font-extrabold mb-4">
              Vishwakarma College
            </h3>
            <p className="font-medium opacity-90">
              Advanced certification in digital graphic software and creative
              workflow management.
            </p>
          </div>
          <div className="md:col-span-2 bg-surface-container-highest p-12 rounded-xl flex items-center justify-center border border-outline-variant/20 overflow-hidden relative group">
            <div className="text-center relative z-10">
              <h3 className="text-2xl font-headline font-bold mb-2">
                Constant Learner
              </h3>
              <p className="text-on-surface-variant">
                Always evolving with the latest industry standards.
              </p>
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-10 scale-150 transform translate-x-4 -translate-y-4">
              <span className="material-symbols-outlined text-9xl">
                auto_awesome
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
