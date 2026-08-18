"use client";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default function Hero() {
  return (
      
    <section
    id="hero"
    className="relative flex min-h-screen flex-col items-center px-4 pt-24 text-center md:flex-row md:items-center md:pl-8 md:pr-100 md:pt-20 md:text-left">

      {/* Left Content */}
      {/*Availability Badge*/}
      <div className="relative flex w-full max-w-3xl flex-col items-center text-center md:-top-10 md:items-start md:text-left">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/60 px-5 py-2.5 text-sm font-medium tracking-wide text-gray-600 shadow-[0_0_18px_rgba(34,197,94,0.15)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_24px_rgba(34,197,94,0.25)] dark:border-[#374151] dark:bg-[#151B28]/60 dark:text-gray-300 md:-ml-2">
        <span className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.7)]" />
        <span>Open to AI/ Data roles</span>
        <span className="text-gray-400">·</span>
        <span>London</span>
      </div>

       <p className="text-lg font-medium text-gray-700 dark:text-gray-400">
        Hello,
        </p>

        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-black dark:text-white md:text-5xl">
            I'm Mayank Kulkarni
        </h1>

        <p className="mt-6 text-xl text-gray-700 dark:text-gray-300 md:text-2xl">
            I{" "}
            <TypeAnimation
            sequence={[
                "build AI Products.", 2000,
                "build Agentic AI Systems.", 2000,
                "build Data Pipelines.", 2000,
                "translate problems into Products.", 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
             className="font-semibold text-blue-600 dark:text-blue-400"
            />
            </p>

      <p className="mt-6 max-w-2xl text-base leading-7 text-gray-700 dark:text-gray-400 md:text-lg md:leading-8">
        Master's student at <strong className="font-semibold text-gray-900 dark:text-white">University College London</strong>
        <br />
        I ship AI products and production Data Pipelines across Intelligent Systems using <strong className="font-semibold text-gray-900 dark:text-white">Agentic AI</strong>, <strong className="font-semibold text-gray-900 dark:text-white">Machine Learning</strong>, and <strong className="font-semibold text-gray-900 dark:text-white">User Focused Analytics</strong>.
      </p>

      <div className="mt-10">
  {/* Buttons */}
  <div className="flex flex-wrap justify-center gap-3 md:-ml-3 md:justify-start md:gap-5">
    <button
    onClick={() => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });}}
    className="rounded-full bg-[#FACC15] px-6 py-3 font-medium text-black transition-all duration-300 hover:scale-105 hover:brightness-105 active:scale-95">
    View My Work
    </button>

    <a
  href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=mayankkulkarni65@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full border border-gray-300 bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:border-black hover:bg-black hover:text-white active:scale-95 dark:border-[#3B4556] dark:bg-[#1A2130] dark:text-gray-200 dark:hover:border-gray-500 dark:hover:bg-[#293142] dark:hover:text-white"
>
  Email for Resume
</a>
  </div>

  {/* Social Icons */}
  <div className="mt-8 flex items-center justify-center gap-6 md:-mr-10 md:justify-start">
    <a
      href="https://www.linkedin.com/in/mayank-kulkarni-3466b1232/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 transition-all duration-300 hover:scale-125 hover:text-[#0A66C2]"
    >
      <FaLinkedin size={24} />
    </a>

    <a
      href="https://github.com/MayankK10"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 transition-all duration-300 hover:scale-125 hover:text-black dark:text-gray-300 dark:hover:text-white"
    >
      <FaGithub size={24} />
    </a>

    <a
      href="mailto:mayankkulkarni65@gmail.com"
      className="text-gray-500 transition-all duration-300 hover:scale-125 hover:text-[#EA4335]"
    >
      <FaEnvelope size={24} />
    </a>
  </div>
</div>

</div>
  {/* Right Image */}
<div className="relative mt-12 mb-12 flex w-full justify-center md:absolute md:-right-10 md:top-48/100 md:z-10 md:mt-0 md:w-auto md:-translate-y-1/2">
{/* Animated Glow */}
  <div className="absolute -inset-12 -z-10 rounded-[4rem] bg-gradient-to-br from-blue-400/35 via-purple-400/25 to-cyan-300/30 blur-3xl animate-image-glow" />
  
  <img
    src="/medium.jpg"
    alt="Mayank Kulkarni"
    className="h-[320px] w-[300px] rounded-3xl object-cover md:h-[420px] md:w-[400px]"
  />
</div>

{/* Scroll Indicator */}
<button
  type="button"
  onClick={() => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  aria-label="Scroll to About section"
  className="absolute bottom-2 left-1/2 -translate-x-1/2 cursor-pointer md:bottom-8">
  <div className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-gray-400/70 transition-all duration-300 hover:border-blue-500 dark:border-gray-500/70 dark:hover:border-blue-400">
    <span className="mt-2 h-2 w-1 rounded-full bg-blue-600 dark:bg-blue-400 animate-scroll-dot" />
  </div>
</button>

</section>
  );
}