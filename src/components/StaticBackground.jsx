import { useEffect, useRef } from "react";

export default function StaticBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let animationId;
    const draw = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      for (let i = 0; i < imageData.data.length; i += 4) {
        const brightness = 50 + Math.random() * 15;
        imageData.data[i] = brightness;
        imageData.data[i + 1] = brightness;
        imageData.data[i + 2] = brightness;
        imageData.data[i + 3] = 75 + Math.random() * 30;
      }
      ctx.putImageData(imageData, 0, 0);

      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}