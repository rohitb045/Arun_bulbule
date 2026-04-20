export default function Work() {
  return (
    <section className="py-32 bg-surface-container-low" id="work">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">
              Portfolio
            </span>
            <h2 className="text-5xl font-black font-headline tracking-tighter mt-4">
              Selected Works
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-2 rounded-full bg-primary text-white font-bold text-sm shadow-lg">
              All
            </button>
            <button className="px-6 py-2 rounded-full bg-surface-container-highest text-on-surface-variant font-bold text-sm hover:bg-primary-fixed transition-colors">
              Branding
            </button>
            <button className="px-6 py-2 rounded-full bg-surface-container-highest text-on-surface-variant font-bold text-sm hover:bg-primary-fixed transition-colors">
              Printing
            </button>
            <button className="px-6 py-2 rounded-full bg-surface-container-highest text-on-surface-variant font-bold text-sm hover:bg-primary-fixed transition-colors">
              Digital
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Project Card 1 --> */}
          <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface-container-lowest">
            <img
              alt="Luxury Brand Design"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              data-alt="Minimalist luxury skincare packaging design with elegant gold typography on matte black bottles against a soft beige background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLClTsY8tYVit7_yiUeGhn2tj6It5xWpPBGTQC4VVQFAWTVk6LWUuof1tQHhFm3bW0UqJH7n_JRirtEFNDP5rkWv0NEySUSLmH4dZLkhRGRHZM7dSss2pgXZirCgFT73xfR_OHTipDLhvMJkywKij0RAMw604SaAjAWvLC36e8f1q4yzrhlIN5VuzXJpg5CNMxenNvnCjMGroHBYv_-oSZQeC4VELKwXnNTf8uPq_n5nhwqJKiC3r7YQqumqMcvQ8sLuuDbL_-Hsc"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
              <p className="font-label text-xs uppercase tracking-widest text-primary-fixed-dim mb-2">
                Branding
              </p>
              <h3 className="text-white text-2xl font-black font-headline">
                Aura Skin Aesthetics
              </h3>
            </div>
          </div>
          {/* <!-- Project Card 2 --> */}
          <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface-container-lowest lg:mt-12">
            <img
              alt="Editorial Layout"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              data-alt="Sleek editorial magazine spread featuring bold typography and avant-garde photography with clean white space and architectural lines"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHMzaU2TeOB30vNEczKQdhA8nUMD58UQsHfTIl14BxrjvoBVOEUlP4IECKI7_CutUVxpyLItfKSFWXZ2fvjITSv4KnfMRquvRph2WjES-xECC6n8JrqWttx1kcCUffq2WC8dkfhMFGGkRka6wdTMaeMMbRt9J5tbbbeB1mmtrwllUjzhIZbA2Fz5BrpkwSw1e0Ne73ADkF3c0cCaH9nz2WJR-OO7yaAa9RcgFXJ13mpuxYUjO-N2Mnk1ZQk67GrZSUIrLxPxzH_D4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
              <p className="font-label text-xs uppercase tracking-widest text-primary-fixed-dim mb-2">
                Print Design
              </p>
              <h3 className="text-white text-2xl font-black font-headline">
                The Modernist Review
              </h3>
            </div>
          </div>
          {/* <!-- Project Card 3 --> */}
          <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface-container-lowest">
            <img
              alt="Social Media Campaign"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              data-alt="Vibrant and high-energy social media graphic campaign for a tech company using neon accents and geometric shapes on dark background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYe7Rmrh5n-pEYeK18sPlSXDD4coI1KQqknBM00V4DbHVlXpEXwXdGA8tDR0dbAuRT2ouIthmof0fTgx5PbFpDSTk3d2_a-uFnKFURcvEbVR3RXjUMC_CQK4wQ_Bo594iwP7vA8ZdIli0HuNACCE80Yj4CxfG3lhWd-EKryNsMfRvk8ZATexAQnzL8ujX8FtpDZDB-z9pn9smvAEQCIVlgKXEZTYKTfR0E9fmlQGEHkC-sA5T6q4KA7-TdHvR8KZEmk6b_nWwCTDc"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
              <p className="font-label text-xs uppercase tracking-widest text-primary-fixed-dim mb-2">
                Marketing
              </p>
              <h3 className="text-white text-2xl font-black font-headline">
                Pulse Tech Campaign
              </h3>
            </div>
          </div>
          {/* <!-- Project Card 4 --> */}
          <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface-container-lowest">
            <img
              alt="Web Experience"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              data-alt="Mobile app interface design showing a clean banking dashboard with soft shadows and pastel primary color accents"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6T2P5_acLFZQ9QzMTKO15o_zPOh6GHKa8BXXn8qiV4AajTFXvsclgg5i-pYg1eH3mohqq0dn9GJF1JRM4IWQR5O_qtfAsiJbK7K10NjXFJggHEWN7rCUxMSlZVJye6Re6ozf66ZDq-N4iuzH6WCIekBpFqPf-Nu1mXIAnOd5QSdLxRdbszd6gYI1eubsHZkpn-QeQbtnK1nrvtnej9feF5j8cRjm2LpmpMefUWPTUH6Yw_q4oM0w9fq_yLDKmMZPqPtpVJHQKSuw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
              <p className="font-label text-xs uppercase tracking-widest text-primary-fixed-dim mb-2">
                Digital Experience
              </p>
              <h3 className="text-white text-2xl font-black font-headline">
                Nexum Mobile App
              </h3>
            </div>
          </div>
          {/* <!-- Project Card 5 --> */}
          <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface-container-lowest lg:mt-12">
            <img
              alt="Packaging Design"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              data-alt="Handcrafted organic coffee packaging with recycled paper texture and minimalist line-art illustrations of coffee plants"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACosdoZxvGboCsLHVWJ7_VkO08BdR2GPa47Edq_JWiOFI-eDDdSHcaQAoidBcwGJ4IJ29nfzf4WR-RqNdBZtjsFvPhRtwYopCnawe6Amqh9S0DP62LDtnJ3b8rYE_Rb5AS44T8byVxuhre-U2p0kFM4soo60xQdB9yDMFhDQEf_eaCuGGoaMd3wvngr5w_5m2F6jacv5LVsNw8ji92OMUoxHCftY4oHxyHZ1YZwS6XUixZCuhj58UW7QdgD29u8gU0XI2r9lv9I48"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
              <p className="font-label text-xs uppercase tracking-widest text-primary-fixed-dim mb-2">
                Branding
              </p>
              <h3 className="text-white text-2xl font-black font-headline">
                Origin Roast Co.
              </h3>
            </div>
          </div>

          <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface-container-lowest">
            <img
              alt="Exhibition Branding"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              data-alt="Large scale typographic installation at a modern art museum using bright red vinyl lettering on white gallery walls"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuByHNO1bllL1iRDTqMBTVcuTooHiX5i17B5MD36aPl2cyK7xxp5ZHxjT3_dkJQ7R5TJwacC0_c2hbV_JRZ-ENk1wm64IbRrGtLncLDsAt7qlvkZpZO6d1IHUTav0hEHfx7uczxSzkvCfKyW63q6ipGw68IC138gqLhHlFCSREgJpEAZyaVVMnRPwziH4TrRpoDboWK3LVH3f3UGjAlwa1V6DcE7KBZukv9gKRpglyzHvMr1Yqm5kawMJ36qOURwrehrdYr3ouRtb7s"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
              <p className="font-label text-xs uppercase tracking-widest text-primary-fixed-dim mb-2">
                Exhibition
              </p>
              <h3 className="text-white text-2xl font-black font-headline">
                The Typography Biennial
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
