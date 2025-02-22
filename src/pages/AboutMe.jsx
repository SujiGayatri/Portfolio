import React, { useState } from "react";
import styles from "../css/AboutMe.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaJava,
  FaPython,
  FaReact,
} from "react-icons/fa"; // Import skill icons
import { SiExpress, SiMongodb } from "react-icons/si";

function AboutMe() {
  const [activeTab, setActiveTab] = useState("skills"); // State to toggle between Skills and Education

  const education = [
    {
      degree: "Bachelor of Technology in CSE Specialization (AIML)",
      institution: "Aditya University",
      year: "2022 - 2026",
      description:
        "8.72",
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "Pragati Junior College",
      year: "2020 - 2022",
      description: "85.6%",
    },
  ];
  

  const skills = [
    { name: "HTML", icon: <FaHtml5 className={styles.skillIcon} /> },
    { name: "CSS", icon: <FaCss3Alt className={styles.skillIcon} /> },
    { name: "JavaScript", icon: <FaJsSquare className={styles.skillIcon} /> },
    { name: "React.js", icon: <FaReact className={styles.skillIcon} /> },
    { name: "Node.js", icon: <FaNodeJs className={styles.skillIcon} /> },
    { name: "Express.js", icon: <SiExpress className={styles.skillIcon} /> },
    { name: "MongoDB", icon: <SiMongodb className={styles.skillIcon} /> },
    { name: "Java", icon: <FaJava className={styles.skillIcon} /> },
    { name: "Python", icon: <FaPython className={styles.skillIcon} /> },
  ];

  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
  <h1 className={styles.title}>ABOUT ME</h1>
  <div className={styles.divider}></div>
  <p className={styles.description}>
    Hi! I'm a <span className={styles.highlight}>Full Stack Developer</span> with expertise in building
    dynamic and <span className={styles.highlight}>responsive web applications</span>. 
    I am passionate about creating seamless user experiences and constantly 
    <span className={styles.highlight}> exploring the latest technologies</span>.
    My expertise includes React, Node.js, and web development technologies.
    <br />
    <br />
    {/* <span className={styles.emphasis}></span>,  */}
    I thrive on solving challenging problems with innovative solutions and continuously expand my knowledge to stay ahead in the dynamic world of web development.
</p>
<div className={styles.resumeButtonContainer}>
  <a href="https://drive.google.com/file/d/1H6v3ymDeDMsen0rMd0gW7Pfi3eiNO73n/view?usp=sharing" target="_blank" rel="noopener noreferrer">
    <button className={styles.resumeButton}>Resume</button>
  </a>
</div>


</div>


      {/* Right Section */}
      <div className={styles.rightSection}>
        {/* Tab Navigation */}
        <div className={styles.tabNavigation}>
          <button
            className={`${styles.tabButton} ${
              activeTab === "skills" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "education" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "skills" && (
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillCard}>
                {/* <div></div> */}
                {skill.icon}
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "education" && (
          <div className={styles.educationContainer}>
            {education.map((edu, index) => (
              <div key={index} className={styles.educationCard}>
                <h3>{edu.degree}</h3>
                <p className={styles.institution}>{edu.institution}</p>
                <p className={styles.year}>{edu.year}</p>
                <p className={styles.description}>{edu.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutMe;
 