import React from 'react'
import "./Home.css"
import Me from "../../assets/me.png"
import CV from "../../assets/cv.pdf"
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa'




const Home = () => {
  return (
    <div className='home'>
      <div className="container home_container">
        <h4>
          Hello I'm
        </h4>
        <h1>
          Hussein Abdalla
        </h1>
        <h4 className="text-light">
          Frontend Developer
        </h4>
        <div className="btns">
          <a href={CV} download className='btn'>
            Download CV
          </a>
          <a href="#contact" className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
        <div className="me">
          <img src={Me} alt="me" />
        </div>
        <a href="#about" className='scroll_down'>Scroll Down</a>



        <div className="home_socials">
          <a href="https://www.linkedin.com/in/hussein-abdalla-hussein" target='_blank'><FaLinkedin /></a>
          <a href="https://github.com/Hussein872008" target='_blank'><FaGithub /></a>
          <a href="https://www.facebook.com/husseinabdalla010" target='_blank'><FaFacebook /></a>
        </div>
      </div>
    </div>
  )
}

export default Home