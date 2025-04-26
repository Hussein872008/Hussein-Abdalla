import React from 'react'
import "./Projects.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"


const ProjctsData = [
  {
    id: 1,
    title: "Netflix Clone",
    img: IMG1,
    github: "https://github.com/Hussein872008/Netflix-Clone",
    demo: "https://netflix-movies-lone.vercel.app/",
  },
  {
    id: 2,
    title: "Portfolio",
    img: IMG2,
    github: "https://github.com/Hussein872008/appportfilio",
    demo:"https://portfilio-mu.vercel.app/",
  },
  {
    id: 3,
    title: "Coffee Shop",
    img: IMG3,
    github: "https://github.com/Hussein872008/Coffee",
    demo:"https://coffee-bay-alpha.vercel.app/",
  },
  {
    id: 4,
    title: "E-commerce",
    img: IMG4,
    github: "https://github.com/Hussein872008/E-commerce",
    demo:"https://e-commerce-ten-cyan-65.vercel.app/",
  },
  {
    id: 5,
    title: "Lexend",
    img: IMG5,
    github: "https://github.com/Hussein872008/lexend",
    demo:"https://lexend-xi.vercel.app/",
  },
  {
    id: 6,
    title: "Portfolio Item 6",
    img: IMG6,
    github: "#",
    demo:"#",
  },
];





const Projects = () => {
  return (
    <section className="projects" id='projects'>
      <div className="top_sec">
      <h5>My Recent Work</h5>
      <h2>Explore My Work</h2>
      </div>
      <div className="container container_projects">
      {ProjctsData.map(({id , title , github , demo , img})=>(
        <article className="portfolio_item" key={id}>
          <div className="portfolio_item_image">
            <img src={img} alt="" />
          </div>
          <h3>
            {title}
          </h3>
          <div className="portfolio_item_btns">
            <a href={github} className='btn ' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
      </article>
      ))}

      </div>
    </section>
  )
}

export default Projects