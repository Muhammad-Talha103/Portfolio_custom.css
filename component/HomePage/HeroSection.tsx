"use client";
import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Photo from "./Photo";
import "./HeroSection.css";

const HeroSection = () => {
  const socialLinks = [
    {
      icon: <FaFacebookF size={20} />,
      url: "https://www.facebook.com/talha.muhammad.565",
    },
    {
      icon: <IoLogoInstagram size={20} />,
      url: "https://www.instagram.com/talha_muhammad/",
    },
    {
      icon: <FaLinkedinIn size={20} />,
      url: "https://www.linkedin.com/in/muhammad-talha-aa1429240/",
    },
    {
      icon: <FaGithub size={20} />,
      url: "https://github.com/Muhammad-Talha103",
    },
  ];

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h3 className="hero-title">Frontend Developer</h3>
        <h2 className="hero-name">
          <span className="hero-highlight">Hello!</span> I am <br />
          Muhammad <span className="hero-highlight">Talha</span>
        </h2>
        <p className="hero-description">
          Build responsive, user-friendly websites and web applications using
          HTML, CSS, TypeScript, and modern frontend frameworks like Next.js &
          Tailwind CSS. Collaborate with designers and backend developers to
          deliver high-quality web experiences. Stay up-to-date with web
          development trends and best practices.
        </p>
        <div className="cta-container">
          <div className="button-container">
            <Link href="/contact">
              <button className="hire-button">Hire Me</button>
            </Link>
          </div>
          <div className="social-container">
            <ul className="social-list">
              {socialLinks.map((link) => (
                <li key={link.url} className="social-item">
                  <Link href={link.url} target="_blank">
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="photo-container">
        <Photo />
      </div>
    </div>
  );
};

export default HeroSection;