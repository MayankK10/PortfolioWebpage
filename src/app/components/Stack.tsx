export default function Stack() {
  const stack = [
    {
      title: "LANGUAGES",
      items: ["Python", "SQL", "MATLAB", "R"],
    },
    {
      title: "AI / ML",
      items: [
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "Pandas",
        "OpenCV",
      ],
    },
    {
      title: "GENERATIVE AI",
      items: [
        "Vision Language Models",
        "AI Agents",
        "Vector Databases",
        "HuggingFace",
        "Whisper",
      ],
    },
    {
      title: "DATA ENGINEERING",
      items: [
        "Spark",
        "Hadoop",
        "Airflow",
        "Pandas",
        "NumPy",
        "ETL",
      ],
    },
    {
      title: "TOOLS",
      items: [
        "Git",
        "Docker",
        "CI/CD",
        "VS Code",
        "Flask",
        "Azure"
      ],
    },
    {
      title: "ANALYTICS",
      items: [
        "Power BI",
        "Google Analytics(GA4)",
        "A/B Testing",
        "SQL",
        "Figma"
      ],
    },
  ];

  return (
    <section id="stack" className="bg-transparent px-8 py-30">
      <div className="mx-auto max-w-7xl">

        <h2 className="mt-4 text-6xl font-extrabold tracking-tight text-black dark:text-white">
            Tools & Technologies
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stack.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-[#D2D6E0] bg-[#F1F3F8] dark:border-[#293142] dark:bg-[#121824] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                {category.title}
            </h3>

              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-2xl border border-gray-200 bg-gray-50 px-5 py-3 text-base text-gray-700 transition-all duration-300 hover:border-black hover:bg-black hover:text-white dark:border-[#354052] dark:bg-[#1B2332] dark:text-gray-200 dark:hover:border-blue-400 dark:hover:bg-[#24304A] dark:hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}