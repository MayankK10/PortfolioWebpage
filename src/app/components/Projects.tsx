"use client";
import { useState } from "react";
    <section
      id="projects"
      className="bg-transparent px-8 py-30"
    ></section>
  const projects = [
   {
  emoji: "🔎",
  title: "Nexus- Multi Agentic Research assistant",
  description:
    "A multi-agent system that plans a research strategy, gathers evidence from the live web, and writes a fully-cited report.",
  tags: ["AI Engineering","Streamlit", "Gemini/Groq", "Multi Agentic System","Search Engines"],

  motivation: [
  "Most AI research tools stop at a single search-and-answer loop, making it difficult to verify how conclusions were reached.",
  "Build an autonomous research system that can decompose complex questions, gather evidence from multiple sources, and identify gaps before producing an answer.",
  "Create a production-minded agentic system that prioritizes grounded, traceable answers rather than simply generating plausible text."
],
  architecture:
  "User Query → Planner → Researcher → Critic ↺ → Synthesizer → Cited Report",

  results: [
  "Generated multi-source research reports with inline citations and source traceability.",
  "Implemented autonomous research loops that trigger follow-up searches when the critic identifies evidence gaps.",
  "Planned the working of 4 agents at end to end from planning, research, critique and synthesiss",
  "Designed the system to operate within free-tier LLM limits using request pacing and model failover."
],

built: [
  "Built a multi-agent research workflow with specialized Planner, Researcher, Critic, and Synthesizer agents.",
  "Implemented web search and content extraction pipelines with fallback providers for reliable evidence gathering.",
  "Built source-grounded research where generated claims are tied to sources actually retrieved and read by the system.",
  "Built a Streamlit interface with live agent-stage updates, source visibility, and per-run telemetry."
],

  challenges: [
  "Rate limits: free-tier LLM quotas can interrupt multi-agent workflows, requiring request pacing, retry handling, and cross-model failover.",
  "Citation grounding: preventing the LLM from generating unsupported references required restricting citations to sources actually retrieved by the researcher.",
  "Research completeness: determining when enough evidence has been gathered required a critic capable of identifying gaps and triggering follow-up research."
],

  learning: [
  "Orchestration beats model choice. A well-designed plan → research → critique → synthesis workflow can matter more than simply switching between LLMs.",
  "Reliability, observability, citation traceability, latency, and cost matter just as much as the quality of the generated answer.",
  "Self-critique creates a useful feedback loop. Giving an agent the ability to identify evidence gaps and trigger additional research makes the system more robust than a one-shot workflow."
],
   },
    {
      emoji: "💳",
      title: "Credit Default Prediction- End to End MLOPs Pipeline",
      description:
        "End to End Machine Learning Lifecycle and Deployment",
      tags: [" Apache Airflow", "FAST API", "MLFlow", "Docker","Credit Risk Management"],
      
      motivation:
    ["Predict credit default risk to support faster and more data-driven lending decisions.",
     "Identify high-risk borrowers before making lending decisions, helping reduce potential credit losses.",
     "Build a production-ready ML system rather than stopping at model training, taking the project from raw data through automated preprocessing to deployed predictions."],

  architecture:
  "Credit Data → Airflow Data Pipeline → ML Model Training & MLflow Tracking → FastAPI → Docker Deployment",

  built:[
  "Automated data cleaning and preprocessing using Apache Airflow.",
  "Compared ML experiments using MLflow and identified Random Forest as the optimal model.",
  "Built a FastAPI application to serve credit default predictions.",
  "Dockerized the application for deployment and public usage."
],

  results: [
  "Achieved 78% accuracy on a dataset of 75,000+ credit records.",
  "Achieved an ROC-AUC score of 0.85.",
  "Improved model accuracy by 10% through feature engineering.",
  "Built a reproducible ML pipeline covering data preprocessing, model training, evaluation and deployment."
],

  challenges: [
  "Class Imbalance: defaults were the minority class, making accuracy alone insufficient — evaluated performance using F1 and ROC-AUC.",
  "Feature engineering: derived borrower features improved model accuracy by 10%, outperforming gains from model selection alone.",
],

  learning: [
  "Feature engineering matters more than model choice for tabular data. Strong features can drive larger gains than switching between algorithms.",
  "Production-mindedness is a feature. Automating preprocessing, tracking experiments, and containerizing deployment makes ML systems reproducible, maintainable, and ready for real-world use."
],
    },
    {
      emoji: "📊",
      title: "Big Data Pipeline",
      description:
        "Distributed analytics pipeline built using Spark, Hadoop for scalable ETL.",
      tags: ["Distributed ETL", "Spark", "Hadoop", "HDFS"],
      motivation: [
        "Process and analyze large-scale e-commerce transaction data beyond the limits of traditional single-machine workflows.",
        "Extract actionable insights into customer behavior, product performance, revenue trends, and retention.",
        "Build a scalable distributed analytics pipeline from raw transactions to analytical insights."],
        architecture:
        "E-commerce Data → HDFS → PySpark ETL → Spark SQL → Analytics & Insights",
    built: [
            "Built distributed ETL workflows using PySpark for data cleaning, transformation, feature engineering, and multi-table joins.",
            "Designed Hive tables and Spark SQL workflows for large-scale analytical querying.",
            "Generated analytics on customer behavior, product performance, revenue trends, and customer retention.",
            "Optimized Spark workloads using partitioning, caching, and broadcast joins." ],
    results: [
        "Processed 1M+ e-commerce transactions using a distributed Hadoop and PySpark pipeline.",
        "Reduced Spark processing time by ~30% through partitioning, caching, and broadcast join optimization.",
        "Generated analytics across customer behavior, product performance, revenue trends, and retention.",
        "Benchmarked Spark workloads across multiple configurations to identify optimal processing strategies." ],
    
    challenges: [
        "Large-scale data processing: distributed workloads required efficient partitioning and execution strategies to avoid unnecessary computation.",
        "Multi-table joins: optimized expensive joins using broadcast joins and Spark SQL execution strategies.",
        "Performance tuning: benchmarked different Spark configurations to identify more efficient processing approaches."],
    learning: [
  "Distributed computing changes the way you design data workflows. Partitioning, caching, and efficient joins can matter as much as the transformation logic itself.",
  "Performance is a design constraint. Benchmarking different Spark configurations showed how execution strategies and workload optimization directly affect scalability and processing time."
],
    },
    
    
    {
      emoji: "📈",
      title: "Sentiment Impact on Stock Market Time Series Data",
      description:
        "Part of the Undergraduate Research Project IIT Madras",
      tags: ["Time Series", "Custom LLMs", "LSTM"," Sentiment Analysis"],
      motivation: [
        "Explore whether financial news sentiment can provide additional predictive signal beyond historical price data.",
        "Combine NLP-derived market sentiment with traditional time-series forecasting to improve stock price prediction.",
        "Compare forecasting performance with and without sentiment to quantify the value of news-derived signals."],
    
        architecture:
        "5-Year News + Price Data → FinBERT Sentiment / Embeddings → Feature Engineering → ARIMA & BiLSTM → Forecast Evaluation",
        
        built: [
            "Built a stock forecasting pipeline combining five years of financial news and historical price data.",
            "Used FinBERT to extract sentiment representations from financial news as an exogenous forecasting signal.",
            "Implemented and compared ARIMA and BiLSTM models with and without news-derived sentiment features.",
            "Evaluated forecasts using RMSE, MAE, and directional accuracy to assess both numerical and directional performance."],
            
        results: [
            "Compared forecasting performance between price-only and sentiment-enhanced models.",
            "Evaluated prediction quality using RMSE and MAE across forecasting approaches.",
            "Measured directional accuracy to assess the models' ability to predict market movement direction."],
            
        challenges: [
            "Signal extraction: converting noisy financial news into useful predictive features without introducing irrelevant sentiment signals.",
            "Temporal alignment: matching news-derived signals with historical price data while preserving the correct time ordering.",
            "Model comparison: evaluating traditional statistical forecasting against neural sequence models with and without sentiment information."],
        
        learning: [
            "Alternative data is only useful when it adds predictive signal. Adding sentiment features does not automatically improve a forecasting model.",
            "Model choice should follow the structure of the data combining statistical time-series models with neural sequence models provides a useful benchmark for evaluating different forecasting assumptions."
        ],
    },
    {
      emoji: "🛸",
      title: "Autonomous Drone Swarming with end to end vision pipeline.",
      description:
        "Part of the project under Centre for Innovation IIT Madras",
      tags: ["Vision Language Models", "HuggingFace", "Diffusion Models","OpenCV","Multithreading"],
      motivation: [
        "Enable real-time visual perception for autonomous drone swarms operating in dynamic environments.",
        "Explore GenAI-based vision models for processing live drone imagery while maintaining practical inference performance.",
        "Address limited visual training data through synthetic image generation and augmentation."],
    
        architecture:
        "Drone Video Feed → OpenCV → Multi-threaded Frame Processing → Qwen-VL → Real-time Visual Inference | Stable Diffusion XL + LoRA → Synthetic Data Augmentation",
        
        built: [
            "Engineered a real-time GenAI vision pipeline using OpenCV and multi-threaded Qwen-VL for autonomous drone swarm perception.",
            "Implemented multi-threaded frame processing to support live visual inference.",
            "Used Stable Diffusion XL with LoRA to generate synthetic imagery for visual training-data augmentation.",
            "Integrated real-time inference and synthetic data generation into an end-to-end drone vision workflow." ],
        
        results: [
            "71% mAP achieved on autonomous drone vision tasks.",
            "70% Recall achieved across relevant visual detections.",
            "Real-time visual inference enabled through multi-threaded processing."],
        
        challenges: [
            "Real-time inference: balancing the computational cost of Qwen-VL with the latency requirements of live drone imagery.",
            "Data scarcity: generating synthetic imagery with Stable Diffusion XL and LoRA to expand available visual training data.",
            "Concurrent processing: using multi-threading to improve inference throughput while maintaining reliable visual predictions."],
            
        learning: [
            "Real-time AI is a systems problem. Model performance alone is not enough- inference latency, throughput, and frame processing determine whether the system is usable.",
            "Synthetic data can extend limited real-world datasets by introducing additional visual scenarios that are difficult or expensive to collect."
        ],
    },
    {
      emoji: "💬",
      title: "Stellapps Cattle Management QA Bot",
      description:
        "Conversational AI with voice input, with production ready UI for Cattle Management Workflow.",
      tags: ["Context Engineering", "Vector Database","CI/CD", "LLMs", "Whisper", "Gradio"],
      motivation: [
  "Enable grounded multi-document question answering instead of relying solely on an LLM's parametric knowledge.",
  "Improve answer reliability by retrieving relevant context before generating responses.",
  "Build an end-to-end RAG system that could be deployed and accessed through a user-friendly interface."
],
architecture:
  "Documents → Context-Aware Chunking → BERT Embeddings → FAISS Retrieval → Top-k Context → GPT-4.0 → Gradio + Whisper → Docker → CI/CD",
built: [
  "Built a Retrieval-Augmented Generation system using BERT embeddings and FAISS for dense document retrieval.",
  "Implemented context-aware chunking and top-k retrieval to provide relevant context to GPT-4.0 for grounded multi-document answers.",
  "Built and deployed a Dockerized Gradio application with Whisper-based voice input for interactive querying.",
  "Implemented CI/CD for automated deployment and used A/B and multivariate testing to improve the user experience."
],
results: [
  "Achieved ~82% answer accuracy at Recall@3.",
  "Reduced latency by 35% through chunk-size tuning and top-k pruning.",
  "Deployed a Dockerized RAG application with voice-enabled interaction through Whisper.",
  "Improved the user experience through A/B and multivariate testing."
],
challenges: [
  "Retrieval quality: balancing chunk size and top-k selection to improve contextual relevance without increasing latency.",
  "Deployment: packaging the RAG application with Docker and establishing CI/CD for reliable application delivery.",
  "User experience: optimizing response latency while supporting both text and voice-based interactions."
],
learning: [
  "Retrieval quality drives RAG performance like chunking and candidate selection can have a larger impact than changing the underlying LLM.",
  "Toy RAGs are very different from Production. Docker, CI/CD, latency optimization, and user testing turn an RAG prototype into a deployable AI product."
],
    },
  ];
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null
   >(null);
  return (
    <section id="projects" className="bg-transparent px-8 py-32">
      <div className="mx-auto max-w-7xl">
        

        <h2 className="mt-3 text-6xl font-extrabold tracking-tight text-black dark:text-white">
            Selected Work
        </h2>

        <p className="mt-5 max-w-2xl text-lg text-gray-900 dark:text-gray-200">
            Each opens a full case study - Motivation, Architecture, Results, Challenges and Learnings.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
     <div
       key={project.title}
       className="group overflow-hidden rounded-3xl border border-[#D2D6E0] bg-[#F1F3F8] dark:border-[#293142] dark:bg-[#121824] transition-all duration-300 hover:-translate-y-2 hover:border-black dark:hover:border-gray-500 hover:shadow-2xl"
     >

    {/* Visual Area */}
    <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gray-100 dark:bg-[#1A2130]">

      {/* Emoji */}
      <div className="text-7xl transition-all duration-500 group-hover:scale-110 group-hover:opacity-30">
        {project.emoji}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-40" />

      {/* View Details Button */}
      <button
      onClick={() => setSelectedProject(project)}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FACC15] px-6 py-3 font-medium text-black opacity-0 transition-all duration-500 hover:bg-[#EAB308] group-hover:scale-105 group-hover:opacity-100"
      >
        View Details
     </button>

    </div>

    {/* Existing Content */}
    <div className="p-8">

      <h3 className="text-2xl font-bold text-black dark:text-white">
        {project.title}
    </h3>

      <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
        {project.description}
    </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-[#1A2130] dark:text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>

    </div>
  </div>
))}
        </div>

{/* POPUP */}
    {selectedProject && (
        <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 px-4 py-6 backdrop-blur-sm"
        onClick={() => setSelectedProject(null)}
        >
        <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-gray-200 bg-white shadow-2xl dark:border-[#293142] dark:bg-[#121824]"
        onClick={(e) => e.stopPropagation()}
        >

      <button
        onClick={() => setSelectedProject(null)}
        className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-500 transition-all duration-300 hover:scale-110 hover:bg-gray-200 hover:text-black"
      >
        ×
      </button>



      <div className="px-8 pb-10 pt-10 md:px-12">

        <div className="text-6xl transition-transform duration-500 hover:scale-110">
          {selectedProject.emoji}
        </div>

        <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-black dark:text-white md:text-5xl">
            {selectedProject.title}
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            {selectedProject.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {selectedProject.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-[#30394A] dark:bg-[#1A2130] dark:text-gray-300 dark:hover:border-blue-500 dark:hover:bg-blue-950/40 dark:hover:text-blue-400"
            >
              {tag}
            </span>
          ))}
        </div>


        <div className="my-10 border-t border-gray-200 dark:border-[#293142]" />



        <div className="mb-10">

          <div className="mb-4 flex items-center gap-3">
            <div className="h-7 w-1.5 rounded-full bg-blue-500" />

            <h3 className="text-2xl font-bold">
              Motivation
            </h3>
          </div>
        
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg dark:border-[#30394A] dark:bg-[#1A2130] dark:hover:border-blue-500">
            <div className="space-y-3 text-gray-600 dark:text-gray-400">
                {Array.isArray(selectedProject.motivation) ? (
                    selectedProject.motivation.map((point, index) => (
                    <div key={index} className="flex gap-3">
                        <span className="shrink-0 text-blue-500">
                            ▸
                            </span>
                            <p className="leading-8">
                                {point}
                                </p>
                    </div>
                    ))
                ) : (
                <p className="leading-8">
                    {selectedProject.motivation}
                    </p>
                )}
                </div>
            </div>
        </div>


        <div className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-7 w-1.5 rounded-full bg-blue-500" />

            <h3 className="text-2xl font-bold">
              Architecture
            </h3>
          </div>

          <p className="mb-5 leading-7 text-gray-500 dark:text-gray-400">
            System architecture and workflow used to build the project.
        </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-[#30394A] dark:bg-[#1A2130]">

            <div className="rounded-xl bg-white p-5 font-mono text-sm leading-7 text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-[#0F1520] dark:text-gray-300">
              {selectedProject.architecture}
            </div>

          </div>

        </div>

        <div className="mb-10">

          <div className="mb-4 flex items-center gap-3">
            <div className="h-7 w-1.5 rounded-full bg-blue-500" />

            <h3 className="text-2xl font-bold">
              What I Built
            </h3>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-blue-900/50 dark:bg-blue-950/20">
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
                {Array.isArray(selectedProject.built) ? (
                    selectedProject.built.map((point, index) => (
                    <div key={index} className="flex gap-3">
                        <span className="shrink-0 text-blue-500">
                            ▸
                            </span>
                            <p className="leading-8">
                                {point}
                                </p>
                                </div>
                                ))
                            ) : (
                            <div className="flex gap-3">
                                <span className="shrink-0 text-blue-500">
                                    ▸
                                    </span>
                                    <p className="leading-8">
                                        {selectedProject.built}
                                        </p>
                                        </div>
                                    )}
                                    </div>
                                </div>

          </div>

        </div>


        <div className="mb-10">

          <div className="mb-4 flex items-center gap-3">
            <div className="h-7 w-1.5 rounded-full bg-green-500" />

            <h3 className="text-2xl font-bold">
              Results
            </h3>
          </div>

         <div className="rounded-2xl border border-green-100 bg-green-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-green-900/50 dark:bg-green-950/20">
         <div className="space-y-3 text-gray-700 dark:text-gray-300">
            {Array.isArray(selectedProject.results) ? (
                selectedProject.results.map((point, index) => (
                <div key={index} className="flex gap-3">
                    <span className="shrink-0 text-green-500">
                        ▸
                        </span>
                        <p className="leading-8">
                            {point}
                            </p>
                            </div>
                            ))
                        ) : (
                        <div className="flex gap-3">
                            <span className="shrink-0 text-green-500">
                                ▸
                                </span>
                                <p className="leading-8">
                                    {selectedProject.results}
                                    </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>


        <div className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-7 w-1.5 rounded-full bg-orange-400" />

            <h3 className="text-2xl font-bold">
              Challenges
            </h3>
          </div>

          <div className="rounded-2xl border border-orange-100 bg-orange-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-orange-900/50 dark:bg-orange-950/20">
          <div className="space-y-3 text-gray-600 dark:text-gray-300">
            {Array.isArray(selectedProject.challenges) ? (
                selectedProject.challenges.map((point, index) => (
                <div key={index} className="flex gap-3">
                    <span className="shrink-0 text-orange-400">
                        ▸
                        </span>
                        <p className="leading-8">
                             <strong>{point.split(":")[0]}:</strong>
                           {point.substring(point.indexOf(":") + 1)}
                        </p>
                            </div>
                            ))
                        ) : (
                        <div className="flex gap-3">
                            <span className="shrink-0 text-orange-400">
                                ▸
                                </span>
                                <p className="leading-8">
                                    {selectedProject.challenges}
                                    </p>
                                    </div>
                                )}
                        </div>
                    </div>

        </div>



        <div className="mb-10">

          <div className="mb-4 flex items-center gap-3">
            <div className="h-7 w-1.5 rounded-full bg-purple-500" />

            <h3 className="text-2xl font-bold">
              What I Learned
            </h3>
          </div>

          <div className="rounded-2xl border border-purple-100 bg-purple-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-purple-900/50 dark:bg-purple-950/20">
           <div className="space-y-3 text-gray-600 dark:text-gray-300">
            {Array.isArray(selectedProject.learning) ? (
                selectedProject.learning.map((point, index) => (
                <div key={index} className="flex gap-3">
                    <span className="shrink-0 text-purple-500">
                        ▸
                        </span>
                        <p className="leading-8">
                            {point}
                            </p>
                            </div>
                            ))
                        ) : (
                        <div className="flex gap-3">
                            <span className="shrink-0 text-purple-500">
                                ▸
                                </span>
                                <p className="leading-8">
                                    {selectedProject.learning}
                                    </p>
                                    </div>
                                )}
                            </div>
                    </div>
            </div>



        <div className="border-t border-gray-200 dark:border-[#293142] pt-8">

          <button
            onClick={() => setSelectedProject(null)}
            className="rounded-full bg-[#FACC15] px-7 py-3 font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#EAB308] hover:shadow-lg active:scale-95"
          >
            Close Case Study
          </button>

        </div>

      </div>
    </div>
  </div>
)}

      </div>
    </section>
  );
}