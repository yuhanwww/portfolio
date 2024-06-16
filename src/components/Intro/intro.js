import React from 'react';
import './intro.css';
import profileImg from '../../assets/profile.png';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import { Link } from 'react-scroll'; 


const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hi">Hi<br/></span>
        <span className="introText">I'm <span className="introName">Yuhan Wang</span></span>
        <p className="introPara">junior at Smith College,<br/> majoring Art History & Computer Science.</p>
      </div>
      <img src={profileImg} alt="profile" className='bg'/>
    </section>
  )
}

export default Intro;
