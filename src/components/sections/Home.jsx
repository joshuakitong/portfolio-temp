import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import MeSVGArt from "../MeSVGArt";

export default function Hero() {
  const helloRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.fromTo(helloRef.current, { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "+=0.1");

    tl.fromTo(titleRef.current, { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, "+=0.2");

    tl.fromTo(paragraphRef.current, { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "+=0.2");

    return () => {
      gsap.killTweensOf([helloRef.current, titleRef.current, paragraphRef.current]);
    };
  }, []);

  return (
    <>
      {/* Left Side */}
      <div className="w-full md:w-3/4 text-center md:text-left order-2 md:order-1">
        <h1 ref={helloRef} className="text-3xl md:text-4xl md:text-5xl font-bold opacity-0">
          Hello! I'm Joshua
        </h1>

        <p ref={titleRef} className="text-xl md:text-2xl mt-4 text-blue-500 font-semibold opacity-0">
          Front-End Web Developer
        </p>

        <p
          ref={paragraphRef}
          className="mt-4 text-base text-sm md:text-lg text-gray-200 leading-relaxed whitespace-pre-wrap w-full overflow-hidden opacity-0"
        >
          I'm a versatile web developer with a solid foundation in front-end development and over 3 years of professional experience building responsive and performant web applications. I specialize in modern JavaScript frameworks like React, Next.js, Vue.js, and Nuxt.js, and I'm experienced with back-end tools like Node.js and Firebase to create full-stack solutions.
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
    </>
  );
}
