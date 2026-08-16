export default function About() {
  return (
    <section
      id="about"
      className="bg-transparent px-8 py-30"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-14 text-6xl font-extrabold tracking-tight">
          A quick snapshot
        </h2>

        <div className="grid grid-cols-12 gap-6">

          {/* Large About Card */}
          <div className="col-span-6 rounded-3xl border border-[#D2D6E0] bg-[#F1F3F8] dark:border-[#293142] dark:bg-[#121824] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="mt-5 text-3xl font-bold text-black dark:text-white">
              Building at the intersection of{" "}
              <span className="text-blue-600">
                AI & Data
              </span>
            </h3>

            <p className="mt-8 text-lg leading-9 text-gray-600 dark:text-gray-400">
              I'm passionate about building AI Products and end to end production-ready AI & Data systems that
              combine Agentic AI, Machine Learning, and User Centric Analytics.

              <br />
              <br />

              I enjoy taking ideas from notebooks to real-world products implementing Machine Learning lifecycles leading to measurable business
              impact.
            </p>
          </div>

          {/* £19M+ */}
<div className="col-span-3 h-[200px] rounded-3xl border border-[#D2D6E0] bg-[#F1F3F8] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-[#293142] dark:bg-[#121824]">
  <h3 className="text-5xl font-bold text-black dark:text-white">
    £19M+
  </h3>

  <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
    Impact through Data & Product Services
  </p>
</div>


{/* Purple Card */}
<div className="col-span-3 h-[200px] rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
  <h3 className="text-5xl font-bold">
    35%
  </h3>

  <p className="mt-4 text-lg">
    Reduction in Latency through Agentic AI Systems
    <br />
    
  </p>
</div>

          {/* Currently */}
          <div className="col-start-7 col-span-6 rounded-3xl -mt-[250px] h-[240px] border border-[#D2D6E0] dark:border-[#293142] bg-[#F1F3F8] dark:bg-[#121824] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <p className="text-xs uppercase tracking-[0.25em] text-blue-600">
              Currently
            </p>

            <h3 className="mt-3 text-3xl font-bold text-black dark:text-white">
                University College London
            </h3>

            <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
                <strong className="font-semibold text-gray-900 dark:text-white">Master's Student</strong>
            </p>

           <p className="mt-3 text-gray-600 dark:text-gray-400">
            <strong className="font-semibold text-gray-900 dark:text-white">Relevant Coursework: </strong>Data Engineering, NLP , Predictive Analytics, (Deep Learning, LLM Ops), Classical Machine Learning, Causal Inference, Python, R.
            </p>
          </div>

          {/* IIT */}
          <div className="col-span-6 -mt-[20px] h-[200px] rounded-3xl border border-[#D2D6E0] dark:border-[#293142] bg-[#F1F3F8] dark:bg-[#121824] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <p className="text-xs uppercase tracking-[0.25em] text-blue-600">
              Previously
            </p>

            <h3 className="mt-3 text-3xl font-bold text-black dark:text-white">
                IIT Madras
            </h3>
            

            <p className="mt-2 text-gray-500 dark:text-gray-400">
                <strong className="font-semibold text-gray-900 dark:text-white">Bachelor of Technology, Engineering</strong>
            </p>
            
          </div>

          {/* Skills */}
      <div className="col-span-6 -mt-[18px] h-[200px] rounded-3xl border border-[#D2D6E0] bg-[#F1F3F8] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-[#293142] dark:bg-[#121824]">
        <h3 className="text-xs uppercase tracking-[0.25em] text-blue-600">
            Interests & Hobbies
        </h3>
        <div className="mt-5 grid grid-cols-2 gap-x-12 gap-y-6 text-gray-700 dark:text-gray-300">
            <p>▸ Badminton </p>
            <p>▸ Table Tennis </p>
            <p>▸ Gaming </p>
            <p>▸ Investing in Capital Markets</p>
            </div>
        </div>

          {/* New Card */}
          <div className="col-start-1 col-span-6 h-[142px] rounded-3xl border border-[#D2D6E0] bg-[#F1F3F8] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-[#293142] dark:bg-[#121824]">
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