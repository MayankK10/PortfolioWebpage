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
        "AWS",
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
        "Azure",
      ],
    },
    {
      title: "ANALYTICS",
      items: [
        "Power BI",
        "Google Analytics(GA4)",
        "A/B Testing",
        "SQL",
        "Figma",
      ],
    },
  ];

  return (
    <section
      id="stack"
      className="bg-transparent px-4 py-20 md:px-8 md:py-30"
    >
      <div className="mx-auto max-w-7xl">

        <h2 className="mt-4 text-center text-4xl font-extrabold tracking-tight text-black dark:text-white md:text-left md:text-5xl">
          Tools & Technologies
        </h2>

        <div className="mt-12 grid min-w-0 gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {stack.map((category) => (
            <div
              key={category.title}
              className="min-w-0 rounded-3xl border border-[#D2D6E0] bg-[#F1F3F8] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-[#293142] dark:bg-[#121824] md:p-8"
            >
              <h3 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                {category.title}
              </h3>

              <div className="flex min-w-0 flex-wrap gap-3">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="max-w-full break-words rounded-2xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-700 transition-all duration-300 hover:border-black hover:bg-black hover:text-white dark:border-[#354052] dark:bg-[#1B2332] dark:text-gray-200 dark:hover:border-blue-400 dark:hover:bg-[#24304A] dark:hover:text-white md:px-5 md:py-3 md:text-base"
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