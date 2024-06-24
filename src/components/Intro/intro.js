import React, { useState } from "react"; 
import { Link } from 'react-scroll'; 
import './intro.css';

import Tabs from '../../components/Tabs/tabs'

import profileImg from '../../assets/profile.png';
import selfie from '../../assets/selfie.png';
import emailIcon from '../../assets/icons/emailIcon.svg';
import linkedinIcon from '../../assets/icons/linkedinIcon.svg';
import githubIcon from '../../assets/icons/githubIcon.svg';
import cvIcon from '../../assets/icons/cvIcon.svg';

import Pdf from '../../assets/CV_Yuhan_Wang.pdf';

const Intro = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section id="intro">
      <div className="introContent">
        <div className="column left">
          <img src={selfie} alt="profile" className='introImg'/>
          <h3 className="hi">Hi, I'm Yuhan Wang</h3>
          <div className="socialIcons">
            <Link type='email' className="socialIcon" onClick={() => { window.location.href = 'mailto:ywang70@smith.edu'; } }><img src={emailIcon} alt='email' className="socialIconImg" /></Link>
            <Link type='linkedin' className="socialIcon" onClick={() => window.open('https://www.linkedin.com/in/yuhan-wang-yw/', '_blank', 'noopener,noreferrer')}><img src={linkedinIcon} alt='LinkedIn'className="socialIconImg" /></Link>
            <Link type='github' className="socialIcon" onClick={() => window.open('https://github.com/yuhanwww', '_blank', 'noopener,noreferrer')}><img src={githubIcon} alt='Github' className="socialIconImg" /></Link>
            <a href = {Pdf} target = "_blank" className="socialIcon" ><img src={cvIcon} alt='CV' className="socialIconImg" /></a>
          </div>
        </div>
        <div className='column right'>
          <Tabs>
            <div label="Intro">
              <p className='introPara'>
                I am a junior at Smith College, double majoring in Art History & Computer Science.
                <br/><br/>
                I love to explore the intersection between art and technology-- generally fields that involve visual elements, creativity, and human aspects, like digital art, interface design, and virtual exhibitions.
                <br/>
                *Fun fact: I can't stop when start creating something digital, like making this web page.
                <br/><br/>
                I enjoy solving design challenges and reflecting through the process to gain insights! Currently, I work as a studio design partner at the Smith College Design Thinking Initiative, and am also a research assistant at the Prof. Christophe Golé's Phyllotaxis Plant Lab.
              </p> 
            </div>
            <div label="Academic">
              <p className='introPara'>
                My main focus is Human Computer Interaction, Software Engineering, and Machine Learning.
                <br/><br/>
                Majoring in both art history and computer science allows me to develop interdisciplinary problem solving skills, to integrate information, methods of inquiry, research skills, and experiential learning. I have a huge passion for visual elements, which is closely connected to my enthusiasm in interface design and digital humanity.
                <br/><br/>
                In the next 10 years, I see myself pursuing a higher degree and working in a field that explores the design and use of technology. 
              </p> 
            </div>
            <div label="Other">
              <p className='introPara'>
                I love design and creation (both physical and digital). For physical creations, thanks to my working at DTI, I learned to do crochet, sewing, woodwork, and operate machines like laser cutter, vinyl cutter, and 3d printer. For digital creations,  You can have a peek at the things that I made at my Instagram!
                <br/><br/>
                In my free time, I am also an artistic swimming performer and street dance enthusiast :))
                <br/> <br/>  
              </p>
            </div>
        </Tabs>
        </div>

        
      </div>
    </section>
  )
}

export default Intro;
