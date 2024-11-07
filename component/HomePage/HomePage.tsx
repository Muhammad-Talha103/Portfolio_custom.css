"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "./HeroSection";
import FrontendText from "./FrontendText";
import RunningSlider from "./Slider";
import HomePageOutCome from "./HomePageOutcome";
import "./HomePage.css";
const HomePage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="home-section">
      <div className="home-container">
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <div className="hero-section-container">
                <HeroSection />
              </div>
              <div className="Frontend-container">
                <FrontendText />
              </div>
              <div className="slider-container">
                <RunningSlider />
              </div>
              <div className="outcome-container">
                <HomePageOutCome />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HomePage;