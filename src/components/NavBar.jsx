import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Mail, Github, Linkedin } from "lucide-react";

const sections = ["About", "Skills", "Projects", "Contact"];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(window.scrollY > 10);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const linkRefs = useRef([]);
  const faviconRef = useRef(null);
  const underlineRef = useRef(null);
  const navRef = useRef(null);
  const socialsRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2 });

    tl.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
    );

    const isSmallScreen = window.innerWidth < 768;

    tl.fromTo(
      linkRefs.current,
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        stagger: isSmallScreen ? 0 : 0.1,
      },
      "-=0.5"
    );

    gsap.fromTo(
      socialsRefs.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.7,
        ease: "power2.out",
        delay: 2.75,
      }
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const scrollPos = window.scrollY + window.innerHeight / 2;

      const homeSection = document.getElementById("home");
      const homeRect = homeSection?.getBoundingClientRect();

      if (homeRect && homeRect.top <= window.innerHeight / 3 && homeRect.bottom >= window.innerHeight / 3) {
        setActiveSection("home");
        return;
      }

      const offsets = sections
        .map((section) => {
          const el = document.getElementById(section.toLowerCase());
          return el ? { id: section.toLowerCase(), top: el.offsetTop } : null;
        })
        .filter(Boolean);

      const current = offsets.findLast((offset) => scrollPos >= offset.top);
      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (activeSection === "home") return;

    const index = sections.findIndex(
      (sec) => sec.toLowerCase() === activeSection
    );
    const target = linkRefs.current[index];

    if (target && underlineRef.current) {
      const rect = target.getBoundingClientRect();
      const containerRect = target.parentElement.getBoundingClientRect();

      const x = rect.left - containerRect.left;
      const width = rect.width;

      gsap.to(underlineRef.current, {
        x,
        width,
        duration: 0,
      });
    }

    if (activeSection === "contact") {
      const reversed = [...socialsRefs.current].reverse();

      gsap.to(reversed, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.7,
        ease: "power2.out",
        pointerEvents: "none",
      });
    } else {
      gsap.to(socialsRefs.current, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
        pointerEvents: "auto",
      });
    }
  }, [activeSection]);

  return (
    <>
      <nav
        ref={navRef}
        className={`w-full fixed top-0 z-50 transition-bg duration-300 opacity-0 ${
          scrolled || isOpen ? "bg-black" : ""
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
          {/* Favicon/Logo */}
          <button
            ref={faviconRef}
            onClick={() => {
              setIsOpen(false);
              const section = document.getElementById("home");
              if (section) {
                section.scrollIntoView();
                history.pushState(null, null, "#home");
              }
            }}
            aria-label="Go to home section"
            onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 })}
            onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })}
            onMouseDown={(e) => gsap.to(e.currentTarget, { scale: 0.95, duration: 0.1 })}
            onMouseUp={(e) => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.1 })}
          >
            <img src="favicon.ico" alt="Logo" className="w-8 h-8" />
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 text-white relative">
            {sections.map((section, i) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                ref={(el) => (linkRefs.current[i] = el)}
                className="font-medium cursor-pointer inline-block relative z-10"
                onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 })}
                onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })}
                onMouseDown={(e) => gsap.to(e.currentTarget, { scale: 0.95, duration: 0.1 })}
                onMouseUp={(e) => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.1 })}
              >
                {section}
              </a>
            ))}
            {/* Animated Underline */}
            <div
              ref={underlineRef}
              className={`absolute -bottom-5 h-[4px] bg-white transition-all duration-300 w-0 translate-x-0 ${
                activeSection === "home" ? "opacity-0" : ""
              }`}
            />
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden z-50">
            <button
              className="relative w-8 h-6"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`absolute w-8 h-0.5 bg-white left-0 top-1 transition-all duration-300 ${
                  isOpen ? "rotate-45 top-5" : ""
                }`}
              />
              <span
                className={`absolute w-8 h-0.5 bg-white left-0 top-3 transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute w-8 h-0.5 bg-white left-0 top-5 transition-all duration-300 ${
                  isOpen ? "-rotate-45 top-5" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-black text-white overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 py-4 px-6 top-12" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium"
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </nav>
      {/* Socials */}
      <div className="fixed bottom-3 left-3 lg:bottom-5 lg:left-5 z-40 flex flex-col gap-2 sm:gap-3">
        <a
          ref={(el) => (socialsRefs.current[2] = el)}
          href="mailto:joshuakitong@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/5 border border-white/10 text-white hover:bg-blue-500 hover:shadow-[0_0_8px_0_rgba(59,130,246,0.15)] rounded-full p-3 transition-colors transition-shadow duration-300 backdrop-blur-xs opacity-0"
        >
          <Mail size="100%" className="w-3 h-3 sm:w-5 sm:h-5" />
        </a>
        <a
          ref={(el) => (socialsRefs.current[1] = el)}
          href="https://github.com/joshuakitong"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/5 border border-white/10 text-white hover:bg-blue-500 hover:shadow-[0_0_8px_0_rgba(59,130,246,0.15)] rounded-full p-3 transition-colors transition-shadow duration-300 backdrop-blur-xs opacity-0"
        >
          <Github size="100%" className="w-3 h-3 sm:w-5 sm:h-5" />
        </a>
        <a
          ref={(el) => (socialsRefs.current[0] = el)}
          href="https://www.linkedin.com/in/joshua-christopher-kitong-65805a2a9/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/5 border border-white/10 text-white hover:bg-blue-500 hover:shadow-[0_0_8px_0_rgba(59,130,246,0.15)] rounded-full p-3 transition-colors transition-shadow duration-300 backdrop-blur-xs opacity-0"
        >
          <Linkedin size="100%" className="w-3 h-3 sm:w-5 sm:h-5" />
        </a>
      </div>
    </>
  );
}
