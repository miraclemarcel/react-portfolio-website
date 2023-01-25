import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {TbTools} from 'react-icons/tb'
import {TbFileSearch} from 'react-icons/tb'
import {RiServiceLine} from 'react-icons/ri'
import {RiContactsBook2Line} from 'react-icons/ri'
// import {useState} from 'react'

const nav = () => {
  // const [activeNav, setActiveNav] = useState ['#']
  return (
    
    <nav>
      <a href="#" /*className= {activeNav == '#' ? 'active' : ''}*/><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><TbTools /></a>
      <a href="#portfolio"><TbFileSearch /></a>
      <a href="#services"><RiServiceLine /></a>
      <a href="#contact"><RiContactsBook2Line /></a>

    </nav>
  )
}

export default nav