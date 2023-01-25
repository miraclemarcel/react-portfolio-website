import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'


const contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineEmail className='contact__icon' />
          <h4>Email</h4>
          <h5>marcellush123@gmail.com</h5>
          <a href="mailto:marcellush123@gmail.com">Send an email</a>
          </article>
          <article className="contact__option">
          <AiOutlineLinkedin className='contact__icon' />
          <h4>Linkedin</h4>
          <h5>Miracle Marcel</h5>
          <a href="https://www.linkedin.com/in/miracle-marcel-164834147/" target= '_blank'>Send a message</a>
          </article>
          <article className="contact__option">
          <BsWhatsapp className='contact__icon' />
          <h4>WhatsApp</h4>
          <h5 className='color-light'>Live Chat</h5>
          <a href="https://wa.me/+2349135960394" target= '_blank'>Send a message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type="email" name="email" placeholder='Enter Email' />
          <textarea name="message" rows="7" placeholder='Type Message Here...'></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact