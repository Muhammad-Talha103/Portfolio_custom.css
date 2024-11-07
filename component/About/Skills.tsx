"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

interface CircularProgressBarProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  circleColor?: string;
  progressColor?: string;
  textColor?: string;
  label?: string;
  isVisible?: boolean;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  percentage,
  size = 120,
  strokeWidth = 10,
  progressColor = "#3b82f6",
  label,
  isVisible,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-progress-bar">
      <div className="svg-container" style={{ width: size, height: size }}>
        <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
          <circle
            className="circle-bg"
            strokeWidth={strokeWidth}
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <motion.circle
            className="progress-circle"
            stroke={progressColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            r={radius}
            cx={size / 2}
            cy={size / 2}
            initial={{
              strokeDasharray: circumference,
              strokeDashoffset: circumference,
            }}
            animate={
              isVisible
                ? { strokeDashoffset: offset }
                : { strokeDashoffset: circumference }
            }
            transition={{ duration: 1.5, ease: "easeInOut" }}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        </svg>
        <div className="progress-text-container" aria-hidden="true">
          <motion.span
            className="progress-text"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {percentage}%
          </motion.span>
        </div>
      </div>
      {label && <span className="skill-label">{label}</span>}
    </div>
  );
};

const skills = [
  { label: "HTML", percentage: 99, color: "#dc2626" },
  { label: "CSS", percentage: 95, color: "#3b82f6" },
  { label: "JAVASCRIPT", percentage: 85, color: "#facc15" },
  { label: "TYPESCRIPT", percentage: 90, color: "#2563eb" },
  { label: "NEXT.JS", percentage: 80, color: "#000000" },
  { label: "REACT", percentage: 65, color: "#61DAFB" },
  { label: "TAILWIND CSS", percentage: 87, color: "#0ea5e9" },
  { label: "GIT", percentage: 70, color: "#d97706" },
  { label: "GITHUB", percentage: 80, color: "#374151" },
  { label: "REDUX", percentage: 72, color: "#7c3aed" },
  { label: "CMS", percentage: 83, color: "#2563eb" },
  { label: "FIREBASE", percentage: 70, color: "#fbbf24" },
];

const SkillsComponent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={ref} className="skills-container">
      <div className="skills-inner-container">
        <h1 className="skills-heading">Skills</h1>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CircularProgressBar
                percentage={skill.percentage}
                progressColor={skill.color}
                label={skill.label}
                isVisible={isVisible}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;