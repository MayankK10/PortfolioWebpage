"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    setDarkMode(true);
  }
}, []);
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-transparent/80 shadow-[0_8px_30px_rgba(0,0,0,0.05)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-9xl items-center justify-between px-8 py-5">
        
        {/* Logo */}
        <a
        href="#hero"
        className="ml-8 text-2xl font-black tracking-tight transition-transform duration-300 hover:scale-105"
        >
          MK<span className="text-blue-600">.</span>
        </a>

        {/* Navigation */}
        <div className="flex items-center gap-10 text-[15px] font-medium text-gray-600 dark:text-gray-300">

          <a
          href="#about"
          className="relative transition-all duration-300 hover:-translate-y-0.5 hover:text-black dark:hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            About
          </a>
          <a
            href="#experience"
            className="relative transition-all duration-300 hover:-translate-y-0.5 hover:text-black dark:hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            Experience
          </a>
          <a
          href="#projects"
          className="relative transition-all duration-300 hover:-translate-y-0.5 hover:text-black dark:hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full">
  Projects
</a>
           <a
            href="#stack"
            className="relative transition-all duration-300 hover:-translate-y-0.5 hover:text-black dark:hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Tech Stack
          </a>
          

          <button
          onClick={() => {
            const newMode = !darkMode;
            setDarkMode(newMode);
            if (newMode) {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
              } 
            else {
              document.documentElement.classList.remove("dark");
              localStorage.setItem("theme", "light");
            }
          }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition-all duration-300 hover:scale-105 hover:border-black hover:bg-gray-100 active:scale-95 dark:border-[#374151] dark:text-gray-200 dark:hover:border-gray-500 dark:hover:bg-[#1A2130]">
            {darkMode ? (
              <Sun size={18} strokeWidth={1.8} />
            ) : (
            <Moon size={18} strokeWidth={1.8} />
            )}
          </button>

          <button onClick={() => {
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
              });
            }} 
              className="rounded-full bg-[#FACC15] px-6 py-3 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EAB308] hover:shadow-lg active:scale-95"
              >
            Let's Connect
          </button>
    
        </div>
      </div>
    </nav>
  );
}