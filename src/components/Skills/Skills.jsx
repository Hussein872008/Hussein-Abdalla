import React from 'react'
import "./Skills.css"
import CSS from "../../assets/css3.svg"
import Epressjs from "../../assets/epressjs.svg"
import Figma from "../../assets/figma.svg"
import JavaScript from "../../assets/javascript.svg"
import Mongodp from "../../assets/mongodp.svg"
import NodeJS from "../../assets/nodejs.svg"
import ReactJS from "../../assets/react.svg"
import Tailwind from "../../assets/tailwindcss.svg"

const SkillsData = [
  {
    id: 1,
    title: "CSS",
    img: CSS,
    desc: "User Interface"
  },
  {
    id: 2,
    title: "Epressjs",
    img: Epressjs,
    desc: "Node Framework"
  },
  {
    id: 3,
    title: "JavaScript",
    img: JavaScript,
    desc: "Interaction"
  },
  {
    id: 4,
    title: "Figma",
    img: Figma,
    desc: "Design Tolls"
  },
  {
    id: 5,
    title: "ReactJS",
    img: ReactJS,
    desc: "Framework"
  },
  {
    id: 6,
    title: "Tailwind",
    img: Tailwind,
    desc: "User Interface"
  },
  {
    id: 7,
    title: "NodeJS",
    img: NodeJS,
    desc: "Web Server"
  },
  {
    id: 8,
    title: "Mongodp",
    img: Mongodp,
    desc: "Database"
  }
];




const Skills = () => {
  return (
    <section className='skills' id='skills'>
      <div className="top_sec">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
    </div>
    <div className="container container_skills">
      {SkillsData.map(({id , title , desc , img})=>(
          <article className='card_skill' key={id}>
          <div className="icon">
            <img src={img} alt="" />
          </div>
          <div className="content">
            <h5>
              {title}
            </h5>
            <p className='text-light'>
              {desc}
            </p>
          </div>
        </article>
      ))}

    </div>
    </section>
  )
}

export default Skills