import React from 'react'
import "./About.css"
import ImageMe from "../../assets/me-about.jpg"
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="top_sec">
        <h5>Get to know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ImageMe} alt="About me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FiUsers className='about_icon'/>
              <h5>Experience</h5>
              <small>1 year working</small>
            </div>

            <div className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </div>

            <div className="about_card">
              <FaAward className='about_icon'/>
              <h5>Projects</h5>
              <small>5 Completed</small>
            </div>
          </div>

          <p>
            I'm a passionate Frontend Developer with a strong focus on building responsive and interactive web applications. I specialize in technologies like React, Tailwind CSS, and modern JavaScript. I love turning ideas into reality through clean code and sleek design.
          </p>
          
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
