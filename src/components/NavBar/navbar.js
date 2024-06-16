import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt="logo" className='logo'/>
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        {/* <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link> */}
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>
        {/* <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Gallery</Link> */}
        {/* <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Contact</Link> */}
      </div>
      <button className="desktopMenuButton" onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }}>
        <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>
    </nav>
  ) 
}

export default NavBar