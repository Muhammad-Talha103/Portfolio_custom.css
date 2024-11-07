
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import projects from "./ProjectsNames";
import "./Project.css";

export default function ProjectsPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProjects(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showProjects && (
        <div className="projects-page">
          <div className="projects-container">
            <h1 className="projects-title">Our Projects</h1>
            <motion.div
              className="projects-grid"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.3,
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                  whileHover={{ transition: { duration: 0.2 } }}
                  onHoverStart={() => setHoveredId(project.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  className="project-card"
                >
                  <div className="project-content">
                    <h2 className="project-title">{project.title}</h2>
                    <p className="project-description">{project.description}</p>
                    <div className="project-links">
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link github-link"
                      >
                        <FiGithub className="icon" />
                        GitHub
                      </Link>
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link live-link"
                      >
                        <FiExternalLink className="icon" />
                        Live Demo
                      </Link>
                    </div>
                  </div>
                  <div className="hover-line-container">
                    {hoveredId === project.id && (
                      <motion.div
                        className="hover-line"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
}
