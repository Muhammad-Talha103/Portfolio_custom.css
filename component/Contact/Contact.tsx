"use client";

import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Form from "./Form";
import './Contact.css';
const Contact = () => {
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContact(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="contact-container">
      <AnimatePresence>
        {showContact && (
          <motion.div
            className="contact-wrapper"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div className="form-section" variants={itemVariants}>
              <Form />
            </motion.div>
            <motion.div className="contact-info" variants={itemVariants}>
              <motion.div className="contact-item" variants={itemVariants}>
                <FaPhoneAlt size={20} className="contact-icon" />
                <div className="contact-details">
                  <p className="contact-label">Phone:</p>
                  <Link href="tel:+923173940407">
                    <p className="contact-text">+92 317-3940407</p>
                  </Link>
                </div>
              </motion.div>
              <motion.div className="contact-item" variants={itemVariants}>
                <MdEmail size={20} className="contact-icon" />
                <div className="contact-details">
                  <p className="contact-label">Email:</p>
                  <Link href="mailto:talhagp908@gmail.com">
                    <p className="contact-text">talhagp908@gmail.com</p>
                  </Link>
                </div>
              </motion.div>
              <motion.div className="contact-item" variants={itemVariants}>
                <FaLocationDot size={20} className="contact-icon" />
                <div className="contact-details">
                  <p className="contact-label">Address:</p>
                  <p className="hyderabadtext">Hyderabad Sindh</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;