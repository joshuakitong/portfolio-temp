import { useEffect, useRef } from "react";
import { Download, Github, Linkedin } from "lucide-react";
import { gsap } from "gsap";
import SplitType from "split-type";

export default function Contact({ onVisibleChange }) {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const textRefs = useRef([]);
  const buttonRefs = useRef([]);

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
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

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
        trigger: sectionRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    textRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          delay: 1 + i * 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    buttonRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power2.out",
          delay: 1.5 + i * 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    const observer = new IntersectionObserver(
      ([entry]) => onVisibleChange?.(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
    >
      <h2
        ref={titleRef}
        className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center"
      >
        Contact
      </h2>

      <div className="text-gray-200 text-md sm:text-lg space-y-4 text-center mb-8">
        <p
          ref={paragraphRef}
          className="text-center mb-6"
        >
          I'm currently open to full-time roles or freelance opportunities where I can bring value with my front-end web development skills. If you’re hiring, have a project in mind, or simply want to connect, feel free to reach out. You can also check out my links below for more info.
        </p>

        <p ref={(el) => (textRefs.current[0] = el)}>
          Email: <a href="mailto:joshuakitong@gmail.com" className="text-blue-500 hover:underline">joshuakitong@gmail.com</a>
        </p>
        <p ref={(el) => (textRefs.current[1] = el)}>Phone: (+63) 905-737-9500</p>
        <p ref={(el) => (textRefs.current[2] = el)}>Location: Baguio City, Philippines</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          ref={(el) => (buttonRefs.current[0] = el)}
          href="https://github.com/joshuakitong"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center text-sm sm:text-base bg-white/5 border border-white/10 text-white hover:bg-blue-500 hover:shadow-[0_0_8px_0_rgba(59,130,246,0.15)] rounded-full p-3 transition-colors transition-shadow duration-300 backdrop-blur-xs"
        >
          <Github size="100%" className="w-4 h-4 sm:w-5 sm:h-5" />
          GitHub
        </a>

        <a
          ref={(el) => (buttonRefs.current[1] = el)}
          href="https://www.linkedin.com/in/joshua-christopher-kitong-65805a2a9/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center text-sm sm:text-base bg-white/5 border border-white/10 text-white hover:bg-blue-500 hover:shadow-[0_0_8px_0_rgba(59,130,246,0.15)] rounded-full p-3 transition-colors transition-shadow duration-300 backdrop-blur-xs"
        >
          <Linkedin size="100%" className="w-4 h-4 sm:w-5 sm:h-5" />
          LinkedIn
        </a>

        <a
          ref={(el) => (buttonRefs.current[2] = el)}
          href={`${import.meta.env.BASE_URL}resume/Joshua_Kitong_Resume_2025.pdf`}
          download
          className="flex gap-2 items-center text-sm sm:text-base bg-white/5 border border-white/10 text-white hover:bg-blue-500 hover:shadow-[0_0_8px_0_rgba(59,130,246,0.15)] rounded-full p-3 transition-colors transition-shadow duration-300 backdrop-blur-xs"
        >
          <Download size="100%" className="w-4 h-4 sm:w-5 sm:h-5" />
          Resume
        </a>
      </div>
    </section>
  );
}
