import StaticBackground from "./components/StaticBackground";
import CustomCursor from "./components/CustomCursor";
import MeSVGArt from "./components/MeSVGArt";

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white font-cascadia">
      <StaticBackground />
      <CustomCursor />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen max-w-[1600px] mx-auto p-6">
        
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold">Hello! I'm Joshua Kitong</h1>
          <p className="text-3xl mt-4 text-blue-500">Front-End Web Developer</p>
          <p className="mt-4 text-base md:text-lg text-gray-200 leading-relaxed">
            I'm a versatile web developer with a solid foundation in front-end development with over 3 years of professional experience building responsive and performant web applications.
            I specialize in modern JavaScript frameworks like React, Next.js, Vue.js, and Nuxt.js, and I'm experienced with back-end tools like Node.js and Firebase to create full-stack solutions.
          </p>

          {/* SVG Art — visible only on small screens */}
          <div className="mt-8 flex justify-center md:hidden">
            <MeSVGArt />
          </div>
        </div>

        {/* Right Side — visible only on medium screens and up */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2 mb-10 md:mb-0 hidden md:flex">
          <MeSVGArt />
        </div>
        
      </div>
    </div>

  );
}

export default App;
