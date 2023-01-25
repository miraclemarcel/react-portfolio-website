import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio-item-image">
            <img src= {IMG1} alt="project 1" />
          </div>
          <h3>This is a radom picture from dribble</h3>
         <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://dribbble.com/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio-item-image">
            <img src= {IMG2} alt="project 2" />
          </div>
          <h3>This is a radom picture from dribble</h3>
         <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio-item-image">
            <img src= {IMG3} alt="project 3" />
          </div>
          <h3>This is a radom picture from dribble</h3>
         <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://dribbble.com/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio-item-image">
            <img src= {IMG4} alt="project 4" />
          </div>
          <h3>This is a radom picture from dribble</h3>
         <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://dribbble.com/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio-item-image">
            <img src= {IMG5} alt="project 5" />
          </div>
          <h3>This is a radom picture from dribble</h3>
         <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://dribbble.com/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio-item-image">
            <img src= {IMG6} alt="project 6" />
          </div>
          <h3>This is a radom picture from dribble</h3>
         <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://dribbble.com/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        
  
      </div>
    </section>
  )
}

export default portfolio