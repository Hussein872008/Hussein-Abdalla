import React from 'react'
import "./Services.css"
import { MdDesignServices } from 'react-icons/md'
import { IoIosRocket } from 'react-icons/io'
import { FaCode } from 'react-icons/fa'

const Services = () => {
  return (
    <section id='services'>
      <div className="top_sec">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className="container container_services">
        <article className="card">
          <MdDesignServices className='icon' />
          <h3>Web Design</h3>
          <p className="text-light">
            I craft user-friendly and visually appealing interfaces using tools like Figma and Tailwind CSS to deliver seamless user experiences.
          </p>
        </article>
        <article className="card">
          <IoIosRocket className='icon'/>
          <h3>Fast Performance</h3>
          <p className="text-light">
            I build high-performance websites optimized for speed and responsiveness, ensuring smooth browsing on all devices.
          </p>
        </article>
        <article className="card">
          <FaCode className='icon'/>
          <h3>Clean Code</h3>
          <p className="text-light">
            I write clean, maintainable, and well-structured code using modern JavaScript and React best practices for scalable development.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Services
