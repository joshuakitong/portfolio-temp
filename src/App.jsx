import StaticBackground from "./components/StaticBackground";
import CustomCursor from "./components/CustomCursor";
import MeSVGArt from "./components/MeSVGArt";

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white font-cascadia">
      <StaticBackground />
      <CustomCursor />
      <main className="relative p-6 z-10 flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-center">Hello! I'm Joshua Kitong</h1>
        <p className="text-2xl mt-4 text-gray-300 text-center">Front-End Web Developer</p>
        <div className="scale-60 sm:scale-100">
          <MeSVGArt />
        </div>
      </main>
    </div>
  );
}

export default App;
