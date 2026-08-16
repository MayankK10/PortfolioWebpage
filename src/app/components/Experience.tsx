export default function Experience() {
  const experiences = [
    {
      period: "Jul 2025 - Jun 2026",
      company: "CleanMax",
      role: "Manager, Business Development",
      team: "ANALYTICS & PRODUCT",
      points: [
        "Owned a Product Requirements Document (PRD) and deployed a CRM to reduce business turnaround time by 27%, using Azure SQL, Microsoft Graph API, and Power BI, automating workflows across 4+ agile teams for effective KPI tracking",
        "Supported renewable asset deal closures worth £19M+ delivering 30–35% equity IRRs through cash flow sensitivity analysis using VBA for automated report generation, SQL demand analytics, and Power BI dashboards for compliance tracking",
        "Developed a Python based BESS arbitrage model using SQL for data extraction and PuLP for Linear Optimization and Time Series Forecasting of electricity pricing for profitability maximization across 35,000+ market observations spanning 5 years",
      ],
      tags: ["Python", "SQL", "Power BI", "VBA", "Advanced Excel", "Optimization", "Azure"],
    },
    {
      period: "Jun 2024 - Jan 2025",
      company: "Campus Fund",
      role: "Investment Associate",
      team: "PRODUCT AND VENTURE CAPITAL",
      points: [
        "Evaluated 40+ sector-agnostic startups through founder meetings, expert calls, primary research, competitive analysis, and unit economics analysis including CAC, and Life Time Value (LTV) for B2C startups using Google Analytics",
        "Raised a £0.4M investment for a deep-tech startup by preparing an investment thesis covering finances, product roadmap, Total Addressable Market (TAM), risks, and exit opportunities for investment committee decisions",
      ],
      tags: ["Venture Capital", "Google Analytics", "Excel", "User Centric Analytics", "Financial Modeling"]
    },
    {
      period: "May 2023 - July 2023",
      company: "Stellapps",
      role: "AI Engineering Intern",
      team: "AI & SOFTWARE ENGINEERING",
      points: [
        "Developed a Retrieval-Augmented Generation agent system integrating dense retrieval with GPT 4.0 LLM for grounded multi-document answers, indexing the corpus with FAISS vector database and BERT embeddings via context-aware chunking",
        "Reduced latency by 35% through chunk-size tuning, top-k pruning, reaching ~82% answer accuracy on Recall@3. Built and deployed a dockerized Gradio based UI with Whisper voice input using CI/CD pipeline. Improved the UX using A/B and Multivariate testing",
      ],
      tags: ["RAG Systems", "Latency Optimization","LLMs", "Vector Databases", "Docker", "CI/CD","A/B Testing"],
    },
  ];

  return (
    <section id="experience" className="bg-transparent px-8 py-30">
      <div className="mx-auto max-w-7xl">

        <h2 className="mt-3 text-6xl font-extrabold tracking-tight text-black dark:text-white">
            Where I've Worked
        </h2>
        <div className="mt-16 space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="grid grid-cols-12 gap-8 rounded-3xl border border-[#D2D6E0] bg-[#F1F3F8] dark:border-[#293142] dark:bg-[#121824] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Left Timeline */}
              <div className="col-span-2">
                <p className="text-sm text-gray-400">{exp.period}</p>
                <h3 className="mt-2 text-xl font-bold text-black dark:text-white">{exp.company}</h3>
              </div>

              {/* Right Content */}
              <div className="col-span-10">
                <div>
                  <div>
                    <h3 className="text-3xl font-bold text-black dark:text-white">
                        {exp.role}
                    </h3>
                    <p className="mt-2 text-blue-600">{exp.team}</p>
                  </div>

                </div>

                <ul className="mt-6 space-y-3 text-gray-900 dark:text-gray-400">
                  {exp.points.map((point) => (
                    <li key={point} className="flex items-start">
                        <span className="mr-2 shrink-0">▸</span>
                        <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-xl border border-[#D2D6E0] bg-[#E9ECF2] px-3 py-1 text-sm text-gray-600 dark:border-[#30394A] dark:bg-[#1A2130] dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}