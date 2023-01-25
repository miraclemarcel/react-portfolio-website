import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'


const footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>PORTFOLIO</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#services">Home</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/miracle-marcel-164834147/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/miraclemarcel" target="_blank"><BsGithub /></a>
        <a href="https://www.dribble.com" target="_blank"><BsDribbble /></a>
      </div>

      <div className="copyright">
        <small> &copy; Copyright | All Rights Reserved, <a href="https://www.linkedin.com/in/miracle-marcel-164834147/" target="_blank">Miracle Marcel</a> 2022</small>
      </div>
    </footer>
  )
}

export default footer