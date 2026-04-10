import "./App.css";
import "./index.css";

function App() {
  return (
    <main>
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl flex justify-between items-center px-6 md:px-12 py-6 shadow-[0px_20px_40px_rgba(112,0,255,0.06)]">
        {/* Left */}
        <h1 className="font-['Noto_Serif'] text-3xl font-black tracking-tighter text-slate-900">
          Arun Bulbule
        </h1>

        <div className="hidden md:flex items-center space-x-10">
          <a
            href="/"
            className="text-[#7000ff] font-bold font-['Noto_Serif'] text-lg tracking-tight
    transition-all duration-300 ease-in-out
    hover:underline underline-offset-4"
          >
            Home
          </a>

          <a
            href="#"
            className="text-[#7000ff] font-bold font-['Noto_Serif'] text-lg tracking-tight
    transition-all duration-300 ease-in-out
    hover:underline underline-offset-4"
          >
            About
          </a>

          <a
            href="#"
            className="text-[#7000ff] font-bold font-['Noto_Serif'] text-lg tracking-tight
    transition-all duration-300 ease-in-out
    hover:underline underline-offset-4"
          >
            Skill
          </a>

          <a
            href="#"
            className="text-[#7000ff] font-bold font-['Noto_Serif'] text-lg tracking-tight
    transition-all duration-300 ease-in-out
    hover:underline underline-offset-4"
          >
            Testimonials
          </a>

          <a
            href="#"
            className="text-[#7000ff] font-bold font-['Noto_Serif'] text-lg tracking-tight
    transition-all duration-300 ease-in-out
    hover:underline underline-offset-4"
          >
            Contact
          </a>
        </div>
        <button className="bg-[#7000ff] text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:opacity-90 active:scale-95">
          Hire Me
        </button>
      </nav>
      {/* Hero Section */}
      <section className="relative min-h-[750px] flex items-center pt-1 px-4 md:px-24 hero-gradient overflow-hidden bg-gray-300">
        <div className="max-w-4xl z-10">
          <span className="inline-block px-4 py-1.5 mb-6 bg-surface-container-high text-on-surface-variant text-xs font-bold uppercase tracking-[0.2em] rounded-sm">
            Graphic Designer
          </span>

          <h1 className="text-7xl md:text-9xl font-serif font-black text-on-surface leading-[0.9] tracking-tighter mb-8">
            Arun <br />
            Bulbule
          </h1>

          <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            Curating digital experiences through intentional asymmetry and
            futuristic editorial craft.
          </p>

          {/* ✅ BUTTONS MOVED HERE */}
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href=""
              className="bg-[#9356e3] text-on-primary px-10 py-5 rounded-full text-lg font-semibold flex items-center justify-center transition-all hover:shadow-[0px_20px_40px_rgba(112,0,255,0.2)]"
            >
              View Work
            </a>

            <a
              href=""
              className="bg-gray-600 text-primary px-10 py-5 rounded-full text-lg font-semibold flex items-center justify-center transition-all hover:bg-surface-container-highest hover:shadow-[0px_20px_40px_rgba(75,85,99,0.25)]"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Decorative Background Text */}
        <div className="absolute -right-20 top-1/4 opacity-10 select-none pointer-events-none hidden lg:block">
          <span className="text-[30rem] font-serif font-black leading-none">
            AB
          </span>
        </div>
      </section>
      {/* About Section  */}
      <section className="py-32 px-6 md:px-24 bg-surface" id="about">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-high">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiZW0ld2iz2bTSCjDtnPAUTB8Q3dsbwAQUonAFf_O_U49_JAUcsu7InBS5GDsZNcNUPNUnJUlx9Vp3zcH0LKqFF4yt9puF80ULONNVfld2xfArGD6U4NbifL8Jd6WQiS_g6Ck46AbzgGuHrVs5sTKx9we9wxvSONB2KFG-B67TLiOSmvynnZjuXN_SKoGQ3gF807lMEPzfPGkvZnrhcSYZ38W6dAGYE37pTyIn1EAQ4cOcteOV4f1-K1OEQ_-SmSE9THeYtc_6QDSD" alt="Arun Bulbule" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="Modern high-fashion editorial portrait of a creative professional in a minimalist studio setting with dramatic soft lighting"/></div>
          
          </div>
         </div>
      </section>
    </main>
  );
}

export default App;
