import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const paragraph = `I'm a front-end web developer with a degree in Information Technology, majoring in Software Development, and over three years of professional experience building web-based systems for U.S. utility cooperatives where my primary tech stack included ASP.NET (C#), AngularJS, HTML, CSS, and Kendo UI, along with additional exposure to Angular and PL/SQL. I also trained new hires, led code reviews for the Philippines team, and gained experience in facilitating daily stand-ups and presenting during sprint reviews.\n

I took a few years to pursue creative careers in music production, competitive gaming and content creation. Now, I'm back in tech, building modern web applications primarily using React, Next.js, Vue.js, Nuxt.js, Node.js, Firebase, and more, combining technical expertise with creative insight.`;

export default function AboutTimeline() {
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.to(containerRef.current, {
      boxShadow: "0 0 16px rgba(59,130,246,0.15)",
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "power2.inOut",
    });

    requestAnimationFrame(() => {
      const rawText = paragraphRef.current.textContent;
      const parts = rawText.split("\n");

      paragraphRef.current.innerHTML = parts
        .map((part, index) => {
          const isLast = index === parts.length - 1;
          return `<p class="${isLast ? "" : "mb-2"}">${part}</p>`;
        })
        .join("");

      const split = new SplitType(paragraphRef.current, {
        types: "words",
        tagName: "span",
      });

      gsap.set(paragraphRef.current, { opacity: 1 });

      gsap.from(split.words, {
        opacity: 0,
        y: 10,
        stagger: 0.02,
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <>
      <h2
        ref={titleRef}
        className="text-3xl sm:text-4xl mb-8 text-center font-bold text-white"
      >
        About
      </h2>
      <div className="mb-6 relative">
        <div className="bg-white/5 border border-white/10 rounded-4xl p-6 opacity-0" ref={containerRef}>
          <p
            ref={paragraphRef}
            className="text-sm sm:text-lg text-gray-200 whitespace-pre-wrap opacity-0"
          >
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
}
