import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "HTML5", "XML", "CSS3", "C#", "Java", "Python", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "React", "Next.js", "Vue.js", "Nuxt.js",
      "AngularJS", "Angular", "Flask",
      "Tailwind CSS", "Kendo UI", "Material UI",
      "Bootstrap", "Framer Motion", "GSAP"
    ],
  },
  {
    category: "Backend & Databases",
    items: ["Node.js", "Firebase Firestore", "REST APIs", "ASP.NET", "LINQ", "PL/SQL"],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Git", "Bitbucket", "npm", "Vite",
      "Visual Studio Code", "Agile/Scrum",
      "GitHub Pages", "Render", "Firebase Hosting", "Vercel"
    ],
  },
  {
    category: "Soft Skills",
    items: [
      "Problem Solving", "Critical Thinking", "Attention to Detail", "Adaptability", "Communication", "Management", "Creativity"
    ],
  },
];

export default function SkillsSection() {
  const titleRef = useRef(null);
  const containerRef = useRef(null);

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

    const titles = gsap.utils.toArray(".skill-title");
    gsap.fromTo(
      titles,
      { y: -25, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.35,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    const allSkillItems = gsap.utils.toArray(".skill-item");
    gsap.fromTo(
      allSkillItems,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <>
      <h2
        ref={titleRef}
        className="text-3xl sm:text-4xl mb-8 text-center font-bold text-white"
      >
        Skills
      </h2>
      <div ref={containerRef} className="space-y-12">
        {skills.map((section, index) => (
          <div key={index}>
            <h3 className="skill-title opacity-0 text-blue-500 text-lg sm:text-xl font-semibold mb-4">
              {section.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {section.items.map((skill, i) => (
                <div
                  key={i}
                  className="skill-item opacity-0 text-gray-200 text-sm sm:text-md bg-white/5 border border-white/10 rounded-full px-4 py-2 transition-shadow duration-300 hover:shadow-[0_0_8px_0_rgba(59,130,246,0.15)]"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
