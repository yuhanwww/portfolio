import React from 'react';
import './projects.css';
import phyllotaxis from '../../assets/phyllotaxis.png';
import exploreCSR from '../../assets/exploreCSR.png';
import makersmap from '../../assets/makersmap.png';
import myster_art_recognizer from '../../assets/myster_art_recognizer.png';
import valetbike from '../../assets/valetbike.png';
import bat_detection from '../../assets/bat_detection.png';



const Projects = () => {
  return (
    <section id="projects">
        <h2 className="projectstitle">Projects</h2>
        <span className="projectsDescription">I enjoy exploring the visual elements that improve the overall experiences</span>
        <div className="projectsImg">
          {/* <img src={phyllotaxis} alt="" className="projectsImg" />
          <img src={makersmap} alt="" className="projectsImg" />
          <img src={exploreCSR} alt="" className="projectsImg" />
          <img src={myster_art_recognizer} alt="" className="projectsImg" />
          <img src={valetbike} alt="" className="projectsImg" />
          <img src={bat_detection} alt="" className="projectsImg" /> */}
        </div>
        <button className="ProjectBtn">See More</button>
    </section>
  )
}

export default Projects