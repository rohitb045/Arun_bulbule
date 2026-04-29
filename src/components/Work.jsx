export default function Work() {
  return (
    <section className="py-32 px-8 md:px-20 bg-surface-container-low" id="work">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-primary tracking-[0.2em] uppercase text-xs font-bold mb-4 block">
              Selected Projects
            </span>
            <h2 className="font-headline text-5xl md:text-6xl font-black tracking-tighter">
              Creative Archive
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-2 rounded-full bg-primary text-on-primary text-xs font-bold uppercase tracking-widest">
              All
            </button>
            <button className="px-6 py-2 rounded-full border border-outline-variant text-on-surface-variant text-xs font-bold uppercase tracking-widest hover:border-primary transition-colors">
              Branding
            </button>
            <button className="px-6 py-2 rounded-full border border-outline-variant text-on-surface-variant text-xs font-bold uppercase tracking-widest hover:border-primary transition-colors">
              Print
            </button>
            <button className="px-6 py-2 rounded-full border border-outline-variant text-on-surface-variant text-xs font-bold uppercase tracking-widest hover:border-primary transition-colors">
              Digital
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* <!-- Project 1 --> */}
          <div className="group">
            <div className="aspect-[16/10] bg-surface-container-high overflow-hidden rounded mb-8 relative">
              <img
                alt="Healthcare branding project"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Sleek modern healthcare branding including stationery, logo concepts, and clinic signage in a clean medical setting with cyan accents."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf_BjijFEYUbhHkN8wyL9wwbTZFhCa3UVLFZJCYC_Dp0nDqXi9JMIbhI6q7nykIwa58qlabk0MEcSRrIpJCyTXuULrR9laYzyQaJBvYCxS2-udRTxnH6rDUCPuNEaZb2GkWJyabY_kWs7AJ9GEtN-OPaxWeM1UK1wxJgDMgsDpBj1wvIwT3HXod4JCqnluYwys0njhPhW-Hb75U4WwJr57CutSjChvoLfHJNQ1R9LJNnM0D0acIYO6ky6OAYDBmyP97II_Cd3Oc5yn"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex items-center justify-center">
                <span className="bg-primary text-on-primary p-4 rounded-full font-bold">
                  View Project
                </span>
              </div>
            </div>
            <span className="text-primary font-manrope text-[10px] tracking-[0.2em] uppercase font-bold">
              Healthcare Branding
            </span>
            <h3 className="font-headline text-3xl font-bold mt-2 mb-4 text-on-surface">
              Bharati Hospital Identity
            </h3>
            <p className="text-on-surface-variant leading-relaxed max-w-md">
              Comprehensive visual system for a major multi-specialty hospital,
              focusing on trust and clarity.
            </p>
          </div>
          {/* <!-- Project 2 --> */}
          <div className="group md:mt-24">
            <div className="aspect-[16/10] bg-surface-container-high overflow-hidden rounded mb-8 relative">
              <img
                alt="Corporate marketing materials"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Elegant corporate brochure and marketing collateral spread on a wooden desk with professional high-end finish."
                src="/image/1.jpeg
                "
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex items-center justify-center">
                <span className="bg-primary text-on-primary p-4 rounded-full font-bold">
                  View Project
                </span>
              </div>
            </div>
            <span className="text-primary font-manrope text-[10px] tracking-[0.2em] uppercase font-bold">
              Marketing Collateral
            </span>
            <h3 className="font-headline text-3xl font-bold mt-2 mb-4 text-on-surface">
              Gigante Tech Campaign
            </h3>
            <p className="text-on-surface-variant leading-relaxed max-w-md">
              Multi-channel marketing assets for a leading tech firm,
              emphasizing innovation and speed.
            </p>
          </div>
          {/* <!-- Project 3 --> */}
          <div className="group">
            <div className="aspect-[16/10] bg-surface-container-high overflow-hidden rounded mb-8 relative">
              <img
                alt="Large format print design"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Industrial printing workshop with large format decals being applied to a textured surface, showcasing technical precision and vibrant colors."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB2mdyxWUvZWAjP7kO1fRv9AIcIDwtFD0rDg_TeGvrJPoWWkMOQZYBkQjGp_2Vp0WitO1L4O9512nZZKLKO4q5ejK2PTZqAzaumQiNX0BppycW1l6fXyurfr6Ja15Wxl85WRzCK2o7qZC4UKGbQeuqOxQzNYyOG_vtOlXmxkj4SD51kB--lCtTvgc0Am0SdeOjxjyhyfCv3DltqNnpju-nCCat6FP7pVkl5eLs-Hk6jRm2d2k0hkntfpm7q4OGXs2j1Ewh-WE7kmtp"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex items-center justify-center">
                <span className="bg-primary text-on-primary p-4 rounded-full font-bold">
                  View Project
                </span>
              </div>
            </div>
            <span className="text-primary font-manrope text-[10px] tracking-[0.2em] uppercase font-bold">
              Print &amp; Decals
            </span>
            <h3 className="font-headline text-3xl font-bold mt-2 mb-4 text-on-surface">
              Swarajya Custom Prints
            </h3>
            <p className="text-on-surface-variant leading-relaxed max-w-md">
              Technical print separation and production for high-durability
              industrial decals.
            </p>
          </div>
          {/* <!-- Project 4 --> */}
          <div className="group md:mt-24">
            <div className="aspect-[16/10] bg-surface-container-high overflow-hidden rounded mb-8 relative">
              <img
                alt="Social media campaign"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Composition of social media square graphics on a dark screen backdrop featuring vibrant typography and brand elements."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw6XGRU5Kp48END8NbhOOOTiIDzafayppnDdKZDUCx85XFW4vHCgpchFcPbQlU0OX9Lg083wnbjhsKNWgwPimrNLqdnn6J8j_bQucaxVro4MTHjGvRjNzTP3R989emOvR_it5byhFRj2BPrPFTus43ZxMFci0EK6k_C8pqrRxU3oxzRlEJ1ja2ROiQahzrLrLMg6FWwEMEwGVexqYp1zEIulWrpC3CkpNs7-yka3L263FA4nePbsPFHjFF02g6W849TxYAPhrqJp3S"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex items-center justify-center">
                <span className="bg-primary text-on-primary p-4 rounded-full font-bold">
                  View Project
                </span>
              </div>
            </div>
            <span className="text-primary font-manrope text-[10px] tracking-[0.2em] uppercase font-bold">
              Digital Strategy
            </span>
            <h3 className="font-headline text-3xl font-bold mt-2 mb-4 text-on-surface">
              Social Presence Kit
            </h3>
            <p className="text-on-surface-variant leading-relaxed max-w-md">
              A unified visual language for social media platforms to increase
              engagement and reach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
