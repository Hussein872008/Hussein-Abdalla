import React from 'react'
import "./Footer.css"
import { FaFacebook , FaInstagram , FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a  className='footer_logo' href="#">Hussein Abdalla</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/husseinabdalla010" target='_blank'><FaFacebook /></a>
        <a href="https://www.instagram.com/husseinabdalla010/" target='_blank'><FaInstagram /></a>
        <a href="https://x.com/Hussein99432152" target='_blank'><FaTwitter /></a>
      </div>
      <div className="footer_copyright">
        <small>
          @copy: <a href="#">Hussein Abdalla</a> All Rights Reserved
        </small>
      </div>
    </footer>
  )
}

export default Footer