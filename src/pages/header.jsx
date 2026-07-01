import React, { useState } from "react";
import styles from "../css/header.module.css";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from './home';
import Certifications from './certifications';
import AboutMe from './AboutMe';
import ContactUs from './Contact';
import ProjectCard from './Projects';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div style={{ height: 'fit-content' }}>
      <header className={styles.header}>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <span className={styles.icon}>&#9776;</span>
        </div>
        <nav className={`${styles.navbar} ${isMenuOpen ? styles.showNavbar : ""}`}>
          <a href="#home" className={styles.navLink}>Home</a>
          <a href="#about" className={styles.navLink}>About</a>

          <a href="#projects" className={styles.navLink}>Projects</a>

          <a href="#certificates" className={styles.navLink}>Certificates</a>

          <a href="#contact" className={styles.navLink}>Contact</a>
        </nav>
      </header>
      <div id="home" style={{ height: '100svh' }}>
        <Home />
      </div>
      <div id="about" >
        <AboutMe />
      </div>
      <div id="projects">
        <ProjectCard />
      </div>
      <div id="certificates">
        <Certifications />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
    </div>
  );
};

export default Header;
