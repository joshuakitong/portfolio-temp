import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const rgbRef = useRef(null);
  const lastMouse = useRef({ x: 0, y: 0 });
  let isMouseDown = false;

  useEffect(() => {
    const cursor = cursorRef.current;
    const rgb = rgbRef.current;

    const updateColor = ({ x, y }) => {
      const elements = document.querySelectorAll("a, button, .hover-target");
      let hovering = false;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInside =
          x >= rect.left &&
          x <= rect.right &&
          y >= rect.top &&
          y <= rect.bottom;

        if (isInside) hovering = true;
      });

      if (isMouseDown) {
        cursor.style.backgroundColor = "#eab308"; // yellow-500
      } else if (hovering) {
        cursor.style.backgroundColor = "#3b82f6"; // blue-500
      } else {
        cursor.style.backgroundColor = "#ffffff"; // white
      }
    };

    const moveCursor = (e) => {
      lastMouse.current = { x: e.clientX, y: e.clientY };

      gsap.to(cursor, {
        x: e.clientX - 8,
        y: e.clientY - 8,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(rgb, {
        x: e.clientX - 8,
        y: e.clientY - 8,
        duration: 0.15,
        ease: "power2.out",
      });

      updateColor({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      isMouseDown = true;

      gsap.to(cursorRef.current, {
        scale: 1.25,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(rgbRef.current, {
        scale: 1.25,
        duration: 0.2,
        ease: "power2.out",
      });

      updateColor(lastMouse.current);
    };

    const handleMouseUp = () => {
      isMouseDown = false;

      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.15,
        ease: "power2.out",
      });

      gsap.to(rgbRef.current, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });

      updateColor(lastMouse.current);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 z-50 pointer-events-none rounded-full mix-blend-difference"
        style={{
          backgroundColor: "#ffffff",
          transform: "scale(1)",
        }}
      />
      <div
        ref={rgbRef}
        className="fixed top-0 left-0 w-4 h-4 z-45 pointer-events-none rounded-full mix-blend-screen"
        style={{
          boxShadow: "0 0 12px red, 0 0 24px green, 0 0 36px blue",
          opacity: 1,
        }}
      />
    </>
  );
}
