"use client";

import {
  FaLinkedinIn,
  FaGithub,
  FaChevronUp,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full border-t border-[#D9DDE5] dark:border-[#293142] bg-transparent dark:border-[#293142] dark:bg-[#121824]">

      {/* Footer content */}
      <div className="relative mx-auto h-[200px] w-[80%]">

        {/* LOGO — LEFT */}
        <div className="absolute left-0 top-[50px]">
          <div className="text-3xl font-extrabold text-[#111827] dark:text-white">
            MK<span className="text-[#3B82F6]">.</span>
            </div>
        </div>


        {/* SOCIAL ICONS — RIGHT */}
        <div className="absolute right-0 top-[43px] flex gap-4">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mayank-kulkarni-3466b1232/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl border border-[#D9DDE5] bg-transparent text-[#64748B] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#B8BFCE] hover:text-[#6E40C9] dark:border-[#30394A] dark:text-gray-400 dark:hover:border-[#4B5563] dark:hover:text-[#A78BFA]"
          >
            <FaLinkedinIn size={21} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/MayankK10"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl border border-[#D9DDE5] bg-transparent text-[#64748B] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#B8BFCE] hover:text-[#6E40C9] dark:border-[#30394A] dark:text-gray-400 dark:hover:border-[#4B5563] dark:hover:text-[#A78BFA]"
          >
            <FaGithub size={23} />
          </a>

        </div>


        {/* COPYRIGHT — LEFT */}
        <p className="absolute bottom-[45px] left-0 text-sm text-[#9AA3B2]">
          © 2026 Mayank Kulkarni. Built with Node.js, React & Tailwind CSS.
        </p>


        {/* TOP BUTTON — RIGHT */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="absolute bottom-[15px] right-0 flex h-[46px] items-center gap-3 rounded-2xl border border-[#D9DDE5] dark:border-[#3B4556] bg-transparent px-5 text-sm text-[#9AA3B2] transition-all duration-300 hover:border-[#B8BFCE] hover:text-[#64748B] dark:text-gray-300 md:bottom-[30px]"
        >
          <FaChevronUp size={11} />
          <span>Top</span>
        </button>

      </div>

      {/* BOTTOM LINE */}
      <div className="h-[2px] w-full bg-[#111827]" />

    </footer>
  );
}