"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaGit, FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiSanity,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoFirebase } from "react-icons/bi";
import "./Slider.css";

export default function RunningSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const progressRef = useRef<number>(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const totalWidth = slider.scrollWidth / 2;
    const duration = 40000;
    const animate = (currentTime: number) => {
      if (lastTimeRef.current !== 0) {
        const deltaTime = currentTime - lastTimeRef.current;
        if (!isPaused) {
          progressRef.current += (deltaTime / duration) * totalWidth;
          progressRef.current %= totalWidth;
        }
        slider.style.transform = `translateX(-${progressRef.current}px)`;
      }
      lastTimeRef.current = currentTime;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  const icons = [
    { Icon: FaHtml5, color: "hover-red", name: "HTML5" },
    { Icon: FaCss3Alt, color: "hover-blue", name: "CSS3" },
    { Icon: SiJavascript, color: "hover-yellow", name: "JavaScript" },
    { Icon: SiTypescript, color: "hover-blue-dark", name: "TypeScript" },
    { Icon: SiNextdotjs, color: "hover-black", name: "Next.js" },
    { Icon: SiRedux, color: "hover-purple", name: "Redux" },
    { Icon: RiTailwindCssFill, color: "hover-sky", name: "Tailwind CSS" },
    { Icon: BiLogoFirebase, color: "hover-yellow-dark", name: "Firebase" },
    { Icon: FaGithub, color: "hover-gray-dark", name: "GitHub" },
    { Icon: FaReact, color: "hover-blue-dark", name: "React" },
    { Icon: FaGit, color: "hover-orange", name: "Git" },
    { Icon: SiSanity, color: "hover-gray-dark", name: "Sanity" },
  ];

  return (
    <div className="slider-container">
      <div ref={sliderRef} className="slider">
        {[...Array(2)].map((_, setIndex) => (
          <React.Fragment key={setIndex}>
            {icons.map(({ Icon, color, name }, iconIndex) => (
              <div
                key={`${setIndex}-${iconIndex}`}
                className="icon-wrapper"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <Icon className={`icon ${color}`} title={name} />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}