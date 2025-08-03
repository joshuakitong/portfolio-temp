import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const lastMouse = useRef({ x: 0, y: 0 });
  let isMouseDown = false;
  let hasMoved = false;

  useEffect(() => {
    const cursor = cursorRef.current;

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

        el.classList.forEach((cls) => {
          if (cls.startsWith("cursor-")) {
            el.classList.remove(cls);
          }
        });

        el.classList.add("cursor-none");
      });

      if (isMouseDown) {
        cursor.style.backgroundColor = "#EAB308"; // yellow-500
      } else if (hovering) {
        cursor.style.backgroundColor = "#3B82F6"; // blue-500
      } else {
        cursor.style.backgroundColor = "#FFFFFF";
      }
    };

    const moveCursor = (e) => {
      if (!hasMoved) {
        hasMoved = true;
        gsap.to(cursor, { opacity: 1, duration: 0.4, ease: "power2.out" });
      }

      lastMouse.current = { x: e.clientX, y: e.clientY };

      gsap.to(cursor, {
        x: e.clientX - 8,
        y: e.clientY - 8,
        duration: 0.1,
        ease: "power2.out",
      });

      updateColor({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      isMouseDown = true;
      gsap.to(cursor, {
        scale: 1.25,
        duration: 0.1,
        ease: "power2.out",
      });
      updateColor(lastMouse.current);
    };

    const handleMouseUp = () => {
      isMouseDown = false;
      gsap.to(cursor, {
        scale: 1,
        duration: 0.15,
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
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 z-50 pointer-events-none rounded-full mix-blend-difference opacity-0"
      style={{
        backgroundColor: "#fff",
        boxShadow: "0 0 12px rgba(59,130,246,1), 0 0 48px rgba(59,130,246,0.15)",
        transform: "scale(1)",
      }}
    />
  );
}
