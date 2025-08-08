import { useRef, useEffect, useState } from "react";
import { skills } from "../data/skills";



export default function Skills() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`py-12 md:py-24 transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <SkillItem 
              key={index} 
              skill={skill} 
              visible={visible} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillItem({ skill, visible }) {
  const [count, setCount] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);
  const animationRef = useRef(null);

  useEffect(() => {
    if (visible) {
      // Clear any existing animation
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      const duration = 1500; // Animation duration in ms
      const startTime = performance.now();
      const startValue = 0;
      const endValue = skill.value;

      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing function for smooth animation (easeOutQuad)
        const easedProgress = 1 - (1 - progress) * (1 - progress);
        
        const currentValue = Math.floor(easedProgress * endValue);
        setCount(currentValue);
        setProgressWidth(currentValue);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          // Ensure we reach exactly 100% at the end
          setCount(endValue);
          setProgressWidth(endValue);
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    } else {
      setCount(0);
      setProgressWidth(0);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [visible, skill.value]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium">{skill.name}</span>
        <span className="text-gray-600">{count}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-black h-2.5 rounded-full transition-all duration-1500 ease-out"
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
    </div>
  );
}

