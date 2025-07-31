import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    title: "Educational Background",
    text: "I hold a degree in Information Technology, majoring in Software Development, from the University of Baguio.",
  },
  {
    title: "Professional Experience",
    text: "I worked as a front-end web developer for over 3 years, building web-based systems for utility cooperatives in the U.S. My work primarily involved ASP.NET (C#), AngularJS, HTML, CSS, and Kendo UI, with additional experience in Angular and PL/SQL.\n\nI also trained newly hired front-end developers, led code reviews for the Philippines team, and gained experience facilitating daily stand-ups and presenting during sprint reviews.",
  },
  {
    title: "Creative Detour",
    text: "I took a few years to pursue creative careers in music production and gaming content creation. During this time, I strengthened my problem-solving, critical thinking, adaptability, communication, and management skills, while also gaining a deeper creative perspective and a stronger understanding of user experience and engagement.",
  },
  {
    title: "Return to Tech",
    text: "I'm now back in tech, building modern web applications primarily using React, Next.js, Vue.js, Nuxt.js, Node.js, Firebase, and more.",
  },
];

export default function AboutTimeline() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    const items = gsap.utils.toArray(".timeline-item");
    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef}>
      <div className="max-w-2xl mx-auto relative">
        <h2
          ref={titleRef}
          className="text-3xl mb-8 text-center font-bold text-white"
        >
          About
        </h2>
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item mb-6 relative">
            <div className="bg-white/5 border border-white/10 rounded-4xl p-6 backdrop-blur-md transition-shadow duration-500 hover:shadow-[0_0_16px_0px_rgba(59,130,246,0.1)]">
              <h3 className="text-lg font-semibold flex items-center gap-2 text-blue-500">
                {item.title}
              </h3>
              {item.text.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-sm mt-2 text-gray-200">{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
