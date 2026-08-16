import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import TechMarquee from "./components/Techmarquee";
import Background from "./components/Background";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <Navbar />
      <Hero />
      <Background />
      <TechMarquee />
       <About />
       <Experience />
       <Projects />
       <Stack />
       <Contact />
       <Footer />
    </div>
  );
}