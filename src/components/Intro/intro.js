import React, { useState } from "react"; 
import { Link } from 'react-scroll'; 
import './intro.css';

import Tabs from '../../components/Tabs/tabs'

import profileImg from '../../assets/profile.png';
import emailIcon from '../../assets/icons/emailIcon.svg';
import linkedinIcon from '../../assets/icons/linkedinIcon.svg';
import githubIcon from '../../assets/icons/githubIcon.svg';
import cvIcon from '../../assets/icons/cvIcon.svg';

const Intro = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section id="intro">
      <div className="introContent">
        <div className="column left">
          <img src={profileImg} alt="profile" className='introImg'/>
          <div className="socialIcons">
            <Link type='email' onClick={() => { window.location.href = 'ywang70@smith.edu'; } }><img src={emailIcon} alt='email' className="socialIcon" /></Link>
            <Link type='linkedin' onClick={() => window.open('https://www.linkedin.com/in/yuhan-wang-yw/', '_blank', 'noopener,noreferrer')}><img src={linkedinIcon} alt='LinkedIn'className="socialIcon" /></Link>
            <Link type='github' onClick={() => window.open('https://github.com/yuhanwww', '_blank', 'noopener,noreferrer')}><img src={githubIcon} alt='Github' className="socialIcon" /></Link>
            <Link type='resume'><img src={cvIcon} alt='CV' className="socialIcon" /></Link>
          </div>
        </div>
        <div className='column right'>
          <Tabs />
        </div>

        
      </div>
    </section>
  )
}

export default Intro;
