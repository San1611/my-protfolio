import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Website for Company: Puspadeep",
    description: "Developed a website for the company Puspadeep",
    image: "../../assets/puspadeep.png", 
    link: "https://puspadeep.netlify.app/"
  },
  {
    title: "Sample College Website : VIT VELLORE",
    description: "Sample website for our college. Created as a part of College club for club activities.",
    image: "../../assets/college.png",
    link: "https://san1611.github.io/project2_collegewebsite/"
  },
  {
    title: "Advanced Calculator",
    description: "Designed and developed a smart calculator whch can perform advanced calculations",
    image: "../../assets/calculator.png",
    link: "https://san1611.github.io/Calculator/"
  },
  {
    title: "Quizzler",
    description: "Designed and developed an application to take quiizes and generate score at the end",
    image: "../../assets/quizzler.png",
    link: "https://san1611.github.io/Calculator/"
  }
];

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
