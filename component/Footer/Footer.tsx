"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import "./Footer.css";
const Footer = () => {
  const [showContent, setShowContent] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setShowContent(false);
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [pathname]);

  const currentYear = new Date().getFullYear();

  const SocialLinks = [
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
    <footer className="footer">
      {showContent && (
        <div className="footer-container">
          <Link href="/">
            <h1 className="footer-title">
              Muhammad <span className="highlighted-text">Talha</span>
            </h1>
          </Link>
          <p className="footer-text">© {currentYear} Portfolio</p>
          <span className="social-links">
            <ul className="social-links-list">
              {SocialLinks.map((link) => (
                <li key={link.url} className="social-link-item">
                  <Link href={link.url} target="_blank">
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </span>
        </div>
      )}
    </footer>
  );
};

export default Footer;