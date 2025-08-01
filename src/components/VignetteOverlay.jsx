import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function VignetteOverlay() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      gsap.to([leftRef.current, rightRef.current], {
        opacity: 0.7,
        duration: 1,
        ease: "power2.out",
      });
      clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        gsap.to([leftRef.current, rightRef.current], {
          opacity: 0.25,
          duration: 1,
          ease: "power2.inOut",
        });
      }, 500);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-10">
      <div
        ref={leftRef}
        className="absolute -top-12 -left-22 sm:-left-18 w-8 h-[110%] bg-blue-500 blur-2xl"
        style={{ opacity: 0.25 }}
      />
      <div
        ref={rightRef}
        className="absolute -top-12 -right-22 sm:-right-18 w-8 h-[110%] bg-blue-500 blur-2xl"
        style={{ opacity: 0.25 }}
      />
    </div>
  );
}
