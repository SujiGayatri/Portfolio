import React from 'react';
import styles from '../css/Projects.module.css';
import textToSpeech from '../assets/textToSpeech.png';
import Traveltrek from '../assets/TravelTrek.jpeg';
import BusInOut from '../assets/busInOut.png'
const ProjectCard = () => {
  const projects = [
    {
      image: textToSpeech, // Replace with the project image URL
      title: 'Text To Speech Converter',
      description: 'The Text to Speech Converter app converts text into audible speech, offering various voice and language options for a more accessible, hands-free experience.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      image: Traveltrek, // Replace with the project image URL
      title: 'Travel Trek',
      description: 'Travel Trek helps travelers explore destinations by state or season, offering details on popular spots, food, accommodations, routes, and YouTube videos for better trip planning.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      image: BusInOut, // Replace with the project image URL
      title: 'Bus In/Out',
      description: 'Bus In/Out refers to a system that displays bus arrival and departure timings, typically indicating when a bus enters and exits a station or route.',
      technologies: ['React', 'Node.js', 'Expres','MongoDB'],
    },
  ];
 
  return (
    <div className={styles.projectContainer}>
      <h1 className={styles.heading}>PROJECTS</h1>
      {projects.map((project, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={project.image} alt={project.title} className={styles.image} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <h4 className={styles.techTitle}>Technologies Used:</h4>
            <ul className={styles.technologies}>
              {project.technologies.map((tech, techIndex) => (
                <li key={techIndex} className={styles.techItem}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
