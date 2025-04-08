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
        <h5>Get to knew</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ImageMe} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FiUsers className='about_icon'/>
              <h5>
                Experience
              </h5>
              <small>
                3+ years working
              </small>
            </div>

            <div className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>
                Clients
              </h5>
              <small>
                200+ worldwide
              </small>
            </div>

            <div className="about_card">
              <FaAward className='about_icon'/>
              <h5>
                Projects
              </h5>
              <small>
                80+ Completed
              </small>
            </div>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error at, provident reiciendis voluptas sequi ab reprehenderit ducimus beatae molestias labore et corporis expedita adipisci itaque quis fuga mollitia, libero sed!</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        
        </div>
      </div>
    </section>
  )
}

export default About