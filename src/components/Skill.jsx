export default function Skill() {
  return (
    <section className="py-32 px-8 md:px-20 bg-surface" id="expertise">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24 text-center">
          <span className="text-primary tracking-[0.2em] uppercase text-xs font-bold mb-4 block">
            Specializations
          </span>
          <h2 className="font-headline text-5xl md:text-6xl font-black tracking-tighter">
           Skills & Technologies 

          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* <!-- Design Tools --> */}
          <div>
            <h3 className="text-on-surface font-manrope font-bold text-xs tracking-[0.1em] uppercase mb-10 pb-4 border-b border-outline-variant/30">
              Design Tools
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-surface-container-low p-4 rounded hover:bg-surface-container-high transition-colors">
                <span className="text-on-surface">Adobe Illustrator</span>
                <span className="text-primary text-xs font-bold">Expert</span>
              </div>
              <div className="flex justify-between items-center bg-surface-container-low p-4 rounded hover:bg-surface-container-high transition-colors">
                <span className="text-on-surface">Adobe Photoshop</span>
                <span className="text-primary text-xs font-bold">Advanced</span>
              </div>
              <div className="flex justify-between items-center bg-surface-container-low p-4 rounded hover:bg-surface-container-high transition-colors">
                <span className="text-on-surface">CorelDRAW</span>
                <span className="text-primary text-xs font-bold">Expert</span>
              </div>
              <div className="flex justify-between items-center bg-surface-container-low p-4 rounded hover:bg-surface-container-high transition-colors">
                <span className="text-on-surface">Adobe Premiere Pro</span>
                <span className="text-primary text-xs font-bold">Advanced</span>
              </div>
              <div className="flex justify-between items-center bg-surface-container-low p-4 rounded hover:bg-surface-container-high transition-colors">
                <span className="text-on-surface">Figma</span>
                <span className="text-primary text-xs font-bold">Advanced </span>
              </div>
            </div>
          </div>
          {/* <!-- Print Expertise --> */}
          <div>
            <h3 className="text-on-surface font-manrope font-bold text-xs tracking-[0.1em] uppercase mb-10 pb-4 border-b border-outline-variant/30">
              Print Expertise
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-surface-container-low p-4 rounded hover:bg-surface-container-high transition-colors">
                <span className="text-on-surface">Layout Design</span>
                <span className="text-primary text-xs font-bold">Mastery</span>
              </div>
              <div className="flex justify-between items-center bg-surface-container-low p-4 rounded hover:bg-surface-container-high transition-colors">
                <span className="text-on-surface">Screen Printing</span>
                <span className="text-primary text-xs font-bold">Advanced</span>
              </div>
              <div className="flex justify-between items-center bg-surface-container-low p-4 rounded hover:bg-surface-container-high transition-colors">
                <span className="text-on-surface">Color Separation</span>
                <span className="text-primary text-xs font-bold">Precision</span>
              </div>
              <div className="flex justify-between items-center bg-surface-container-low p-4 rounded hover:bg-surface-container-high transition-colors">
                <span className="text-on-surface">Prepress & Print Production </span>
                <span className="text-primary text-xs font-bold"> Expert</span>
              </div>
              <div className="flex justify-between items-center bg-surface-container-low p-4 rounded hover:bg-surface-container-high transition-colors">
                <span className="text-on-surface">Paper, GSM & Finish Knowledge </span>
                <span className="text-primary text-xs font-bold"> Practical</span>
              </div>
            </div>
          </div>
          {/* <!-- Digital Design --> */}
          <div>
            <h3 className="text-on-surface font-manrope font-bold text-xs tracking-[0.1em] uppercase mb-10 pb-4 border-b border-outline-variant/30">
              Digital Design
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-surface-container-low p-4 rounded hover:bg-surface-container-high transition-colors">
                <span className="text-on-surface">Social Media Graphics</span>
                <span className="text-primary text-xs font-bold">Strategy</span>
              </div>
              <div className="flex justify-between items-center bg-surface-container-low p-4 rounded hover:bg-surface-container-high transition-colors">
                <span className="text-on-surface">Marketing Collaterals</span>
                <span className="text-primary text-xs font-bold">Focus</span>
              </div>
              <div className="flex justify-between items-center bg-surface-container-low p-4 rounded hover:bg-surface-container-high transition-colors">
                <span className="text-on-surface">Brand Guidelines</span>
                <span className="text-primary text-xs font-bold">Unified</span>
              </div>
              <div className="flex justify-between items-center bg-surface-container-low p-4 rounded hover:bg-surface-container-high transition-colors">
                <span className="text-on-surface">UI Layouts & Wireframes </span>
                <span className="text-primary text-xs font-bold">Structured</span>
              </div>
              <div className="flex justify-between items-center bg-surface-container-low p-4 rounded hover:bg-surface-container-high transition-colors">
                <span className="text-on-surface">Video Graphics & Reels </span>
                <span className="text-primary text-xs font-bold"> Engaging</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
