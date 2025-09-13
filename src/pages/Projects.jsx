import React from 'react';
import styles from '../css/Projects.module.css';
import textToSpeech from '../assets/textToSpeech.png';
import Traveltrek from '../assets/TravelTrek.jpeg';
import StockWise from '../assets/StockWise.png';

const ProjectCard = () => {
  const projects = [
    {
      image: textToSpeech,
      title: 'Text To Speech Converter',
      description:
        'The Text to Speech Converter app converts text into audible speech, offering various voice and language options for a more accessible, hands-free experience.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      website: 'https://text-to-speech.vercel.app', // <-- live project link
      github: 'https://github.com/yourusername/text-to-speech', // <-- GitHub repo
    },
    {
      image: Traveltrek,
      title: 'Travel Trek',
      description:
        'Travel Trek helps travelers explore destinations by state or season, offering details on popular spots, food, accommodations, routes, and YouTube videos for better trip planning.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      website: 'https://trektravelwebsite.netlify.app/',
      github: 'https://github.com/SujiGayatri/Travel-Trek',
    },
    {
      image: StockWise,
      title: 'StockWise',
      description:
        'StockWise is an AI-powered clothing inventory app that suggests outfits, detects deadstock, and generates combinations from natural language prompts.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      website: 'https://stock-wise-lac.vercel.app/',
      github: 'https://github.com/SujiGayatri/Stock-Wise',
    },
  ];

  return (
    <div className={styles.projectContainer}>
      <h1 className={styles.heading}>PROJECTS</h1>
      {projects.map((project, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.imageContainer}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h6 className={styles.title}>{project.title}</h6>
            <p className={styles.description}>{project.description}</p>
            <h4 className={styles.techTitle}>Technologies Used:</h4>
            <ul className={styles.technologies}>
              {project.technologies.map((tech, techIndex) => (
                <li key={techIndex} className={styles.techItem}>
                  {tech}
                </li>
              ))}
            </ul>
            <div className={styles.buttons}>
  <a
    href={project.website}
    target="_blank"
    rel="noopener noreferrer"
    className={`${styles.button} ${styles.demoButton}`}
  >
    Live Demo
  </a>
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className={`${styles.button} ${styles.githubButton}`}
  >
     GitHub
  </a>
</div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
