import React from "react";
import "./Education.css";

const Education = () => {
  const educationList = [
    {
      institution: "The Educators School",
      degree: "Matriculation",
      year: "2017-18",
      description:
        "Completed secondary education with a focus on science subjects.",
    },
    {
      institution: "The Leeds College",
      degree: "Intermediate",
      year: "2019-21",
      description:
        "Achieved a strong foundation in engineering principles and mathematics, graduating with honors.",
    },
    {
      institution: "University of Sindh",
      degree: "Bachelors in Arts",
      year: "2022 - Present",
      description:
        "Pursuing a comprehensive education in arts with an emphasis on critical thinking and creative expression.",
    },
    {
      institution: "Monetechnical",
      degree: "Diploma in Electrical Engineering",
      year: "2022 - Present",
      description:
        "Currently studying electrical engineering, focusing on practical skills and foundational concepts in electronics and circuit design.",
    },
    {
      institution:
        "Governor Sindh Initiative of Artificial Intelligence, Web 3.0 and Metaverse (GIAIC)",
      degree: "Pursuing Software Development",
      year: "2022 - Present",
      description:
        "Engaged in advanced studies of software development, specializing in AI, Web 3.0 technologies, and immersive applications in the metaverse.",
    },
  ];

  return (
    <section className="education-section">
      <div className="education-container">
        <h2 className="education-title">Education</h2>
        <div className="education-grid">
          {educationList.map((edu, index) => (
            <div key={index} className="education-card">
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-year">{edu.year}</p>
              <p className="education-description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;