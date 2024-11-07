"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfileImage from "@/images/mainImage.png";
import "./About.css";
import SkillsComponent from "./Skills";
import Education from "./Education";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div>
      <motion.div
        className="about-container"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
        transition={{ duration: 0.5 }}
      >
        <h2 className="quote">
          The spark of passion spreads light on the path of our purpose.
        </h2>
        <motion.div
          className="content-wrapper"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={itemVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="biography-section">
            <h2 className="biography-title">Biography</h2>
            <p className="biography-text">
              I&apos;m <span className="highlight">Muhammad Talha</span>, a{" "}
              <span className="highlight">Frontend developer</span> dedicated to
              creating engaging and intuitive user experiences. Specializing in{" "}
              <span className="highlight">HTML, CSS</span>, and{" "}
              <span className="highlight">JavaScript</span>, as well as{" "}
              <span className="highlight">Next.js 14</span> and{" "}
              <span className="highlight">Tailwind CSS</span>, I transform ideas
              into beautiful, functional web applications.
            </p>
            <p className="biography-text">
              I thrive in collaborative environments, where I can blend
              creativity with technical skills to deliver high-quality results
              that stand out and perform seamlessly. Each project offers a
              chance to explore the latest design trends and ensure seamless
              functionality.
            </p>
            <p className="biography-text">
              My goal is to craft digital experiences that resonate with users,
              forging meaningful connections that extend beyond the screen.
            </p>
            <p className="biography-text">
              I am committed to continuous learning, keeping up with industry
              trends to implement innovative solutions. By leveraging agile
              methodologies, I ensure efficient project management and
              collaboration, delivering high-quality results on time.
            </p>
          </div>
          <div className="image-section">
            <div className="image-container">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={ProfileImage}
                  alt="ProfileImage"
                  className="profile-image"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
        <SkillsComponent />
        <Education />
      </motion.div>
    </div>
  );
};

export default About;