import { useRef, useEffect, useState } from "react";
import { skills } from "../data/skills";
import mb from "../assets/mbuyi.jpeg"


export default function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`bg-white dark:bg-[#121212] py-16 md:py-20 lg:py-24 px-6 relative overflow-hidden transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      {/* Background decoration */}
      <div className="absolute bottom-20 left-10 pointer-events-none opacity-20">
        <svg width="150" height="150" viewBox="0 0 150 150">
          <path
            d="M20,50 Q50,20 80,50 Q110,80 80,110 Q50,140 20,110 Q-10,80 20,50"
            fill="none"
            stroke="#D9F3F0"
            className="dark:stroke-[#2A5A58]"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2
              className="text-[clamp(2.25rem,7vw,4.8rem)] leading-[1.1] font-medium text-[#040404] dark:text-white mb-6"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                letterSpacing: "-0.5px",
              }}
            >
              About Me
            </h2>

            <div className="space-y-6">
              <p
                className="text-[16px] md:text-[18px] text-[#646873] dark:text-[#A0A0A0] leading-relaxed"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Hello, I'm Christian Mukuna Mbuyi, a driven software developer
                intern with a recent diploma in ICT Application Development from
                the Cape Peninsula University of Technology.
              </p>

              <p
                className="text-[16px] md:text-[18px] text-[#646873] dark:text-[#A0A0A0] leading-relaxed"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                My development journey started with a state diploma in commerce
                and administration, which gave me foundational exposure to HTML,
                CSS, JavaScript, and Visual Studio. I've developed strong skills
                in Java, Android programming, design patterns, and
                object-oriented principles.
              </p>

              <p
                className="text-[16px] md:text-[18px] text-[#646873] dark:text-[#A0A0A0] leading-relaxed"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                I'm experienced with Git, GitHub, React with TypeScript, and
                client-server programming using sockets. I'm passionate about
                creating innovative software solutions and always ready for new
                challenges.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h3
                className="font-semibold text-[20px] text-[#040404] dark:text-white mb-4"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Technical Skills
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-[#F5F5F5] dark:bg-[#2A2A2A] rounded-lg px-4 py-3 text-center hover:bg-[#E5E5E5] dark:hover:bg-[#333333] transition-colors"
                  >
                    <span
                      className="text-[14px] font-medium text-[#040404] dark:text-white"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[#F5CDB3] dark:text-[#D4A574] hover:text-[#E7B18E] dark:hover:text-[#F5CDB3] transition-colors group"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                <span className="font-medium text-[16px] relative">
                  Let's work together
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transform group-hover:translate-x-1 transition-transform"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative">
              {/* Background shape */}
              <div className="absolute -top-8 -right-8 w-[80%] h-[80%] bg-[#EAF9FA] dark:bg-[#1E3A39] rounded-lg -z-10"></div>

              {/* Main image */}
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={mb}
                  alt="Christian Mukuna Mbuyi"
                  className="w-full h-[500px] object-cover transform transition-transform duration-500 hover:scale-105"
                />

                {/* Floating element */}
                <div className="absolute bottom-6 left-6 bg-white dark:bg-[#1E1E1E] rounded-lg p-4 shadow-lg border border-[#F2F2F2] dark:border-[#333333]">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#4ADE80] rounded-full"></div>
                    <span
                      className="text-[14px] font-medium text-[#040404] dark:text-white"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      Available for projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

