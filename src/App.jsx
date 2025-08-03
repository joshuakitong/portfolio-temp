import NavBar from "./components/NavBar";
import VignetteOverlay from "./components/VignetteOverlay";
import StaticBackground from "./components/StaticBackground";
import CustomCursor from "./components/CustomCursor";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white font-cascadia">
      <NavBar />
      <VignetteOverlay />
      <StaticBackground />
      <CustomCursor />
      <ScrollToHash />

      <div id="home" className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen max-w-[1600px] mx-auto pt-20 md:pt-0 px-6">
        <Home />
      </div>
      <div id="about" className="relative z-10 items-center justify-between min-h-screen/2 max-w-4xl mx-auto scroll-mt-12 pt-12 px-6" >
        <About />
      </div>
      <div id="skills" className="relative z-10 items-center justify-between min-h-screen/2 max-w-[1600px] mx-auto scroll-mt-12 pt-12 px-6" >
        <Skills />
      </div>
      <div id="projects" className="relative z-10 items-center justify-between min-h-screen max-w-4xl mx-auto scroll-mt-12 pt-12 px-6">
        <Projects />
      </div>
      <div id="contact" className="relative z-10 items-center justify-between min-h-screen/2 max-w-md mx-auto scroll-mt-12 pt-12 px-6" >
        <Contact />
      </div>
      <footer className="text-sm text-white/50 text-center pt-24 pb-6">&copy; Joshua Kitong 2025. All Rights Reserved</footer>
    </div>
  );
}

export default App;
