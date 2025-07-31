import NavBar from "./components/NavBar";
import VignetteOverlay from "./components/VignetteOverlay";
import StaticBackground from "./components/StaticBackground";
import CustomCursor from "./components/CustomCursor";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white font-cascadia">
      <NavBar />
      <VignetteOverlay />
      <StaticBackground />
      <CustomCursor />

      <div id="home" className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen max-w-[1600px] mx-auto pt-20 md:pt-0 px-6">
        <Home />
      </div>
      <div id="about" className="relative z-10 items-center justify-between min-h-screen max-w-[1600px] mx-auto pt-24 px-6" >
        <About />
      </div>
      <div id="skills" className="relative z-10 flex items-center justify-between min-h-screen max-w-[1600px] mx-auto pt-24 px-6" >
        <span className="text-center w-full">Skills</span>
      </div>
      <div id="projects" className="relative z-10 flex items-center justify-between min-h-screen max-w-[1600px] mx-auto pt-24 px-6" >
        <span className="text-center w-full">Projects</span>
      </div>
      <div id="others" className="relative z-10 flex items-center justify-between min-h-screen max-w-[1600px] mx-auto pt-24 px-6" >
        <span className="text-center w-full">Others</span>
      </div>
      <div id="contact" className="relative z-10 flex items-center justify-between min-h-screen max-w-[1600px] mx-auto pt-24 px-6" >
        <span className="text-center w-full">Contact</span>
      </div>
    </div>
  );
}

export default App;
