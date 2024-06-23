import React from 'react';
import './projects.css';
import phyllotaxis from '../../assets/phyllotaxis.png';
import exploreCSR from '../../assets/exploreCSR.png';
import makersmap from '../../assets/makersmap.png';
import myster_art_recognizer from '../../assets/myster_art_recognizer.png';
import valetbike from '../../assets/valetbike.png';
import bat_detection from '../../assets/bat_detection.png';
import ProjectCard from '../Cards/cards.js';

const projects = [
  {
    image: phyllotaxis,
    title: 'TDA on Phyllotaxis',
    description: "Apply Topological Data Analysis on the study of Phyllotaxis plant patterns in Prof. Christophe Golé's lab",
    link: 'https://example.com/project-one'
  },
  {
    image: exploreCSR,
    title: 'Brown exploreCSR',
    description: 'Digital art in code: Investigating SVG creativity, precision, and accessibility',
    link: 'https://example.com/project-two'
  }
];

const Projects = () => {
  return (
    <section id="projects">
        <h2 className="projectsTitle">Projects</h2>
        <span className="projectsDescription">I enjoy exploring the visual elements that improve the overall experiences</span>
        <div className="projectcards">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
    </section>
  )
}

export default Projects