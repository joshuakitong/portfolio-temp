import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "workoutgpt",
    title: "WorkoutGPT",
    description:
      "An AI-powered workout generator that features a multi-step form wizard for personalized workout generation, dynamic session regeneration, CRUD functionalities, user authentication, and data persistence.",
    tech: ["Nuxt.js", "Tailwind CSS", "GSAP", "Pinia", "Node.js", "Gemini API", "Firebase"],
    link: "https://workoutgpt-2d445.web.app/",
  },
  {
    id: "cryptoguessr",
    title: "CryptoGuessr",
    description:
      "A cryptocurrency-themed web app that features three interactive mini-games that challenge users on their crypto knowledge through trivia, guessing games, and market data, with user authentication, and data persistence.",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "CoinGecko API", "Firebase", "Vercel"],
    link: "https://cryptoguessr-amber.vercel.app/",
  },
  {
    id: "habitrack",
    title: "HabiTrack",
    description:
      "A habit tracker app that offers full CRUD functionality, enabling users to track their habit progress with user authentication, and data persistence.",
    tech: ["React", "Tailwind CSS", "Vite", "Firebase"],
    link: "https://habitrack-afeb2.web.app/",
  },
  {
    id: "portfoliov1",
    title: "Portfolio (Diverse)",
    description:
      "A responsive, single-page portfolio that showcases my diverse background and skills across technical and creative fields.",
    tech: ["React", "Tailwind CSS", "CRA", "Framer Motion", "Github Pages"],
    link: "https://joshuakitong.github.io/portfolio-webdev-music-gaming/",
  },
];

export default function ProjectsSection() {
  const containerRef = useRef([]);
  const titleRef = useRef(null);

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

    containerRef.current.forEach((el) => {
      const title = el.querySelector(".project-title");
      const description = el.querySelector(".project-description");
      const techItems = el.querySelectorAll(".project-tech");

      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
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

      gsap.fromTo(
        title,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      const split = new SplitType(description, {
        types: "words",
        tagName: "span",
      });

      gsap.set(description, { opacity: 1 });

      gsap.from(split.words, {
        opacity: 0,
        y: 10,
        stagger: 0.02,
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.fromTo(
        techItems,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.05,
          duration: 0.4,
          delay: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div>
      <h2
        ref={titleRef}
        className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center"
      >
        Projects
      </h2>

      {projects.map((project, index) => (
        <section
          key={project.id}
          ref={(el) => (containerRef.current[index] = el)}
          id={project.id}
          className="w-full px-6 py-6 mb-12 mx-auto text-white relative bg-white/5 border border-white/10 rounded-4xl max-w-6xl"
        >
          <div className="flex items-center justify-center gap-3 mb-3 project-title">
            <img
              src={`projects/${project.id}.ico`}
              alt={`${project.title} favicon`}
              className="w-6 h-6"
            />
            <h3 className="text-xl sm:text-2xl font-bold text-blue-500">
              {project.title}
            </h3>
          </div>

          <p className="project-description text-gray-200 text-sm sm:text-lg mb-4 text-center">
            {project.description}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="project-tech text-xs sm:text-md border border-white/10 text-gray-200 rounded-full px-3 py-1"
              >
                {tech}
              </span>
            ))}
          </div>

          <img
            src={`projects/${project.id}.gif`}
            alt={`${project.title} demo`}
            className="rounded-xl w-full mx-auto mb-6 border border-white/10"
          />

          <div className="flex justify-end">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-500 border border-blue-500 rounded-full px-4 py-2 text-sm hover:bg-blue-500 hover:text-white transition-colors hover-target backdrop-blur-xs"
            >
              <ExternalLink size={16} />
              Visit Site
            </a>
          </div>
        </section>
      ))}
    </div>
  );
}
