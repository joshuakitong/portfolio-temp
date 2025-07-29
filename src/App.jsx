import StaticBackground from "./components/StaticBackground";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white font-cascadia">
      <StaticBackground />
      <CustomCursor />
      <main className="relative z-10 flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Hello! I'm Joshua Kitong</h1>
        <p className="mt-4 text-gray-400">Front-End Web Developer</p>
      </main>
    </div>
  );
}

export default App;
