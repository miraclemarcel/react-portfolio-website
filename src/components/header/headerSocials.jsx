import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import{BsDribbble} from 'react-icons/bs'

const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/miracle-marcel-164834147/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/miraclemarcel" target="_blank"><BsGithub /></a>
        <a href="https://www.dribble.com" target="_blank"><BsDribbble /></a>
    </div>
  )
}

export default headerSocials