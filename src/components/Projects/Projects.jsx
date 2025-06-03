import React from 'react'
import "./Projects.css"
import IMG1 from "../../assets/netflix-image.png"
import IMG2 from "../../assets/coffe-image.png"
import IMG3 from "../../assets/coffe-image.png"
import IMG4 from "../../assets/hussein-store-image.png"
import IMG5 from "../../assets/lexend-image.png"
import IMG6 from "../../assets/coffe-image.png"


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
    title: "Lexend",
    img: IMG5,
    github: "https://github.com/Hussein872008/lexend",
    demo:"https://lexend-xi.vercel.app/",
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
    title: "Hussein's Store",
    img: IMG4,
    github: "https://github.com/Hussein872008/Hussein-Store",
    demo:"https://hussein-store.vercel.app/",
  },
  {
    id: 5,
    title: "Portfolio Item 5 ",
    img: IMG2,
    github: "#",
    demo:"#",
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
