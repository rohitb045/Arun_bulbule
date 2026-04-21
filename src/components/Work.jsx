export default function Work() {
  return (
    <section
      className="py-16 sm:py-20 md:py-28 lg:py-32 bg-surface-container-low"
      id="work"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 sm:mb-14 md:mb-16 lg:mb-20 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-bold">
              Portfolio
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mt-3 sm:mt-4">
              Selected Works
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
            {["All", "Branding", "Printing", "Digital"].map((item, i) => (
              <button
                key={i}
                className={`px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition
                ${
                  i === 0
                    ? "bg-primary text-white shadow-md"
                    : "bg-surface-container-highest text-on-surface-variant hover:bg-primary-fixed"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {[
            {
              title: "Aura Skin Aesthetics",
              tag: "Branding",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLClTsY8tYVit7_yiUeGhn2tj6It5xWpPBGTQC4VVQFAWTVk6LWUuof1tQHhFm3bW0UqJH7n_JRirtEFNDP5rkWv0NEySUSLmH4dZLkhRGRHZM7dSss2pgXZirCgFT73xfR_OHTipDLhvMJkywKij0RAMw604SaAjAWvLC36e8f1q4yzrhlIN5VuzXJpg5CNMxenNvnCjMGroHBYv_-oSZQeC4VELKwXnNTf8uPq_n5nhwqJKiC3r7YQqumqMcvQ8sLuuDbL_-Hsc",
            },
            {
              title: "The Modernist Review",
              tag: "Print Design",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHMzaU2TeOB30vNEczKQdhA8nUMD58UQsHfTIl14BxrjvoBVOEUlP4IECKI7_CutUVxpyLItfKSFWXZ2fvjITSv4KnfMRquvRph2WjES-xECC6n8JrqWttx1kcCUffq2WC8dkfhMFGGkRka6wdTMaeMMbRt9J5tbbbeB1mmtrwllUjzhIZbA2Fz5BrpkwSw1e0Ne73ADkF3c0cCaH9nz2WJR-OO7yaAa9RcgFXJ13mpuxYUjO-N2Mnk1ZQk67GrZSUIrLxPxzH_D4",
            },
            {
              title: "Pulse Tech Campaign",
              tag: "Marketing",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYe7Rmrh5n-pEYeK18sPlSXDD4coI1KQqknBM00V4DbHVlXpEXwXdGA8tDR0dbAuRT2ouIthmof0fTgx5PbFpDSTk3d2_a-uFnKFURcvEbVR3RXjUMC_CQK4wQ_Bo594iwP7vA8ZdIli0HuNACCE80Yj4CxfG3lhWd-EKryNsMfRvk8ZATexAQnzL8ujX8FtpDZDB-z9pn9smvAEQCIVlgKXEZTYKTfR0E9fmlQGEHkC-sA5T6q4KA7-TdHvR8KZEmk6b_nWwCTDc",
            },
            {
              title: "Nexum Mobile App",
              tag: "Digital",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6T2P5_acLFZQ9QzMTKO15o_zPOh6GHKa8BXXn8qiV4AajTFXvsclgg5i-pYg1eH3mohqq0dn9GJF1JRM4IWQR5O_qtfAsiJbK7K10NjXFJggHEWN7rCUxMSlZVJye6Re6ozf66ZDq-N4iuzH6WCIekBpFqPf-Nu1mXIAnOd5QSdLxRdbszd6gYI1eubsHZkpn-QeQbtnK1nrvtnej9feF5j8cRjm2LpmpMefUWPTUH6Yw_q4oM0w9fq_yLDKmMZPqPtpVJHQKSuw",
            },
            {
              title: "Origin Roast Co.",
              tag: "Branding",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuACosdoZxvGboCsLHVWJ7_VkO08BdR2GPa47Edq_JWiOFI-eDDdSHcaQAoidBcwGJ4IJ29nfzf4WR-RqNdBZtjsFvPhRtwYopCnawe6Amqh9S0DP62LDtnJ3b8rYE_Rb5AS44T8byVxuhre-U2p0kFM4soo60xQdB9yDMFhDQEf_eaCuGGoaMd3wvngr5w_5m2F6jacv5LVsNw8ji92OMUoxHCftY4oHxyHZ1YZwS6XUixZCuhj58UW7QdgD29u8gU0XI2r9lv9I48",
            },
            {
              title: "Typography Biennial",
              tag: "Exhibition",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuByHNO1bllL1iRDTqMBTVcuTooHiX5i17B5MD36aPl2cyK7xxp5ZHxjT3_dkJQ7R5TJwacC0_c2hbV_JRZ-ENk1wm64IbRrGtLncLDsAt7qlvkZpZO6d1IHUTav0hEHfx7uczxSzkvCfKyW63q6ipGw68IC138gqLhHlFCSREgJpEAZyaVVMnRPwziH4TrRpoDboWK3LVH3f3UGjAlwa1V6DcE7KBZukv9gKRpglyzHvMr1Yqm5kawMJ36qOURwrehrdYr3ouRtb7s",
            },
          ].map((project, i) => (
            <div
              key={i}
              className="group relative aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden bg-surface-container-lowest"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-10">
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-primary-fixed-dim mb-1 sm:mb-2">
                  {project.tag}
                </p>

                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-black">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
