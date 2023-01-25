import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {TbFileSearch} from 'react-icons/tb'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3 Years Experience</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>50+ Clients Worldwide</small>
            </article>
            <article className='about__card'>
              <TbFileSearch className='about__icon' />
              <h5>Projects</h5>
              <small>20+ completed projects</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatibus 
          voluptas libero quod eligendi omnis asperiores vero hic veniam, explicabo aperiam, 
          quis natus recusandae dolorum quibusdam deleniti, iusto officiis! Error?</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>






    </section>
  )
}

export default about