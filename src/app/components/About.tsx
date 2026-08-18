export default function About() {
  return (
    <section
      id="about"
      className="bg-transparent px-4 py-20 md:px-8 md:py-30"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <h2 className="mb-10 text-center text-5xl font-extrabold tracking-tight md:mb-14 md:text-left md:text-6xl">
          A quick snapshot
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">

          {/* Large About Card */}
          <div className="w-full rounded-3xl border border-[#D2D6E0] bg-[#F1F3F8] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-[#293142] dark:bg-[#121824] md:col-span-6 md:p-8">

            <h3 className="mt-2 text-3xl font-bold text-black dark:text-white md:mt-5">
              Building at the intersection of{" "}
              <span className="text-blue-600">
                AI & Data
              </span>
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 md:mt-8 md:leading-9">
              I'm passionate about building AI Products and end to end
              production-ready AI & Data systems that combine Agentic AI,
              Machine Learning, and User Centric Analytics.

              <br />
              <br />

              I enjoy taking ideas from notebooks to real-world products
              implementing Machine Learning lifecycles leading to measurable
              business impact.
            </p>
          </div>

          {/* £19M+ */}
          <div className="w-full rounded-3xl border border-[#D2D6E0] bg-[#F1F3F8] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-[#293142] dark:bg-[#121824] md:col-span-3 md:h-[200px] md:p-8">

            <h3 className="text-5xl font-bold text-black dark:text-white">
              £19M+
            </h3>

            <p className="mt-4 text-lg leading-8 text-gray-500 dark:text-gray-400">
              Impact through Data & Product Services
            </p>
          </div>

          {/* Purple Card */}
          <div className="w-full rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-600 p-7 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:col-span-3 md:h-[200px] md:p-8">

            <h3 className="text-5xl font-bold">
              35%
            </h3>

            <p className="mt-4 text-lg leading-8">
              Reduction in Latency through Agentic AI Systems
            </p>
          </div>

          {/* Currently */}
          <div className="w-full rounded-3xl border border-[#D2D6E0] bg-[#F1F3F8] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-[#293142] dark:bg-[#121824] md:col-span-6 md:col-start-7 md:-mt-[250px] md:h-[240px] md:p-8">

            <p className="text-xs uppercase tracking-[0.25em] text-blue-600">
              Currently
            </p>

            <h3 className="mt-3 text-3xl font-bold text-black dark:text-white">
              University College London
            </h3>

            <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
              <strong className="font-semibold text-gray-900 dark:text-white">
                Master's Student
              </strong>
            </p>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              <strong className="font-semibold text-gray-900 dark:text-white">
                Relevant Coursework:{" "}
              </strong>
              Data Engineering, NLP, Predictive Analytics, (Deep Learning,
              LLM Ops), Classical Machine Learning, Causal Inference, Python,
              R.
            </p>
          </div>

          {/* IIT */}
          <div className="w-full rounded-3xl border border-[#D2D6E0] bg-[#F1F3F8] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-[#293142] dark:bg-[#121824] md:col-span-6 md:-mt-[20px] md:h-[200px] md:p-8">

            <p className="text-xs uppercase tracking-[0.25em] text-blue-600">
              Previously
            </p>

            <h3 className="mt-3 text-3xl font-bold text-black dark:text-white">
              IIT Madras
            </h3>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              <strong className="font-semibold text-gray-900 dark:text-white">
                Bachelor of Technology, Engineering
              </strong>
            </p>
          </div>

          {/* Interests & Hobbies */}
          <div className="w-full rounded-3xl border border-[#D2D6E0] bg-[#F1F3F8] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-[#293142] dark:bg-[#121824] md:col-span-6 md:-mt-[18px] md:h-[200px] md:p-8">

            <h3 className="text-xs uppercase tracking-[0.25em] text-blue-600">
              Interests & Hobbies
            </h3>

            <div className="mt-5 grid grid-cols-1 gap-4 text-gray-700 dark:text-gray-300 md:grid-cols-2 md:gap-x-12 md:gap-y-6">

              <p>▸ Badminton</p>
              <p>▸ Table Tennis</p>
              <p>▸ Gaming</p>
              <p>▸ Investing in Capital Markets</p>

            </div>
          </div>

          {/* Based in */}
          <div className="w-full rounded-3xl border border-[#D2D6E0] bg-[#F1F3F8] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-[#293142] dark:bg-[#121824] md:col-span-6 md:col-start-1 md:h-[142px] md:p-8">

            <p className="text-xs uppercase tracking-[0.25em] text-blue-600">
              Based in
            </p>

            <h3 className="mt-3 text-xl font-bold text-black dark:text-white">
              London, United Kingdom
            </h3>

            <p className="mt-2 flex items-center gap-2 text-gray-500 dark:text-gray-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
              Open to new opportunities
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}