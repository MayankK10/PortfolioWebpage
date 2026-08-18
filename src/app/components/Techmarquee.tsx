export default function TechMarquee() {
  const items = [
    "User-Centric Analytics",
    "AI Products",
    "Data Engineering Pipelines",
    "MLOps",
    "LLM Applications",
    "Agentic AI",
    "Machine Learning",
  ];

  return (
    <div className="group mt-10 w-full overflow-hidden border-y border-gray-300 bg-[#F1F4FA] py-5 dark:border-[#293142] dark:bg-[#0F1522] md:mt-0">
      <div className="marquee-track">

        {/* Copy 1 */}
        <div className="marquee-content">
          {items.map((item, index) => (
            <span key={`one-${index}`} className="marquee-item">
              {item}
              <span className="mx-8 text-blue-600">•</span>
            </span>
          ))}
        </div>

        {/* Copy 2 */}
        <div className="marquee-content" aria-hidden="true">
          {items.map((item, index) => (
            <span key={`two-${index}`} className="marquee-item">
              {item}
              <span className="mx-8 text-blue-600">•</span>
            </span>
          ))}
        </div>

        {/* Copy 3 */}
        <div className="marquee-content" aria-hidden="true">
          {items.map((item, index) => (
            <span key={`three-${index}`} className="marquee-item">
              {item}
              <span className="mx-8 text-blue-600">•</span>
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}