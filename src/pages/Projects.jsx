import React from "react";
import styles from "../css/Projects.module.css";

import textToSpeech from "../assets/textToSpeech.png";
import Traveltrek from "../assets/TravelTrek.jpeg";
import StockWise from "../assets/StockWise.png";
import SkySense from "../assets/SkySense.png";

const ProjectCard = () => {
  const projects = [
    {
      image: StockWise,
      title: "StockWise",
      badge: "⭐ Featured",
      description:
        "AI-powered clothing inventory app that recommends outfits, detects deadstock, and generates clothing combinations using natural language prompts.",
      technologies: ["React", "Node", "Express", "MongoDB"],
      website: "https://stock-wise-lac.vercel.app/",
      github: "https://github.com/SujiGayatri/Stock-Wise",
    },
    {
      image: SkySense,
      title: "SkySense",
      badge: "🌦 Full Stack",
      description:
        "Real-time weather dashboard with forecasts, travel scores, weather alerts, clothing suggestions and AI-generated summaries.",
      technologies: [
        "React",
        "Express",
        "MongoDB",
        "Open-Meteo API",
      ],
      website: "https://sky-sense-ixes.vercel.app/dashboard",
      github: "https://github.com/SujiGayatri/SkySense",
    },
    {
      image: Traveltrek,
      title: "Travel Trek",
      badge: "✈ Travel",
      description:
        "Explore destinations by state or season with travel routes, food recommendations, hotels and YouTube travel guides.",
      technologies: ["HTML", "CSS", "JavaScript"],
      website: "https://trektravelwebsite.netlify.app/",
      github: "https://github.com/SujiGayatri/Travel-Trek",
    },
    {
      image: textToSpeech,
      title: "Text To Speech",
      badge: "🔊 Utility",
      description:
        "Convert text into speech with multiple voices and language options for a more accessible experience.",
      technologies: ["HTML", "CSS", "JavaScript"],
      website: "https://text-to-speech.vercel.app",
      github: "https://github.com/yourusername/text-to-speech",
    },
  ];

  return (
    <section className={styles.projectSection}>
      <h1 className={styles.heading}>Projects</h1>

      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div className={styles.card} key={index}>
            {/* <span className={styles.badge}>{project.badge}</span> */}

            <div className={styles.imageContainer}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
              />

              <div className={styles.overlay}>
  <div className={styles.overlayButtons}>
    <a
      href={project.website}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.liveBtn}
    >
      Live Demo
    </a>

    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.githubBtn}
    >
      GitHub
    </a>
  </div>

  <p className={styles.overlayDescription}>
    {project.description}
  </p>
</div>
            </div>

            <div className={styles.content}>
              <h2 className={styles.title}>{project.title}</h2>

              <p className={styles.description}>{project.description}</p>

              <div className={styles.techContainer}>
                {project.technologies.map((tech, i) => (
                  <span key={i} className={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;