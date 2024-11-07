"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import services from "./ServicesName";
import { ServiceCardProps } from "./types";
import "./Services.css";

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="service-card"
  >
    <div className="service-icon">{icon}</div>
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
  </motion.div>
);

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="services-page">
      {isVisible && (
        <>
          <header className="services-header">
            <div className="services-header-content">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="services-title"
              >
                Our Front-End Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="services-subtitle"
              >
                Crafting beautiful and performant web experiences
              </motion.p>
            </div>
          </header>

          <main className="services-main">
            <div className="services-grid">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} index={index} />
              ))}
            </div>
          </main>

          <section className="services-footer">
            <div className="services-footer-content">
              <h2 className="footer-heading">
                Ready to elevate your web presence?
              </h2>
              <p className="footer-description">
                Let&apos;s create something amazing together!
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="footer-button"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>
          </section>
        </>
      )}
    </div>
  );
}