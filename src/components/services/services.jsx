import React from 'react'
import './services.css'
import {HiCheck} from 'react-icons/hi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
            <ul className="service__list">
              <li>
              <HiCheck className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
              <HiCheck className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
              <HiCheck className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
              <HiCheck className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
              <HiCheck className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
              <HiCheck className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
            </ul>
        </article>

{/* ===============web development============ */}


        <article className="services">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
            <ul className="service__list">
              <li>
              <HiCheck className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
              <HiCheck className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
              <HiCheck className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
              <HiCheck className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
              <HiCheck className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
              <HiCheck className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
              <HiCheck className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
            </ul>
        </article>

      {/* ===========content creation============ */}
        <article className="services">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

            <ul className="service__list">
              <li>
              <HiCheck className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
              <HiCheck className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
              <HiCheck className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
              <HiCheck className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
              <HiCheck className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
              <HiCheck className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
            </ul>
          
        </article>
      </div>
    </section>
  )
}

export default services