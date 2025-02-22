import { useState } from 'react'
import './App.css'
import Header from './pages/header';
import Home from './pages/home';
import Certifications from './pages/certifications';
import AboutMe from './pages/AboutMe';
import ContactUs from './pages/Contact';
import ProjectCard from './pages/Projects';
import { BrowserRouter as Router,Routes,Route,Link,NavLink } from "react-router-dom";

// import ContactSample from './pages/email';
function App() {
  const smoothScrollToSection = (sectionId) => { 
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <Router>
      <Header/>
      {/* <Email/> */}
      {/* <AboutMe/>
      <ProjectCard/> */}

        {/* <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutMe />}></Route>
          <Route path="/projects" element={<ProjectCard />}></Route>
          <Route path="/certificates" element={<Certifications />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
        </Routes> */}


      </Router> 
    </>
  )
}

export default App
