import React from 'react'
import "./portfolio.css"
import first_picture from '../../assets/Black-Jack.webp'
import second_picture from '../../assets/recruiter.png'
import third_picture from '../../assets/extension.jpg'


const projects = [
  {
    id: 1,
    image: first_picture,
    title: "Black Jack Game",
    github: "https://github.com/EsmerQuliyeva/BlackJackGame",
  },
  {
    id: 2,
    image: second_picture,
    title: "Business Project",
    github: "https://github.com/EsmerQuliyeva/project",
  },
  {
    id: 3,
    image: third_picture,
    title: "Extension",
    github: "https://github.com/EsmerQuliyeva/lead_tracker",
  },

]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projects.map(({ id, image, title, github}) => {
          return (<div key = {id} className="portfolio_item">
            <div className="portfolio_item-img">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target="_blank">Github</a>
            </div>
          </div>)
        })
        }
      </div>
    </section>
  )
}

export default Portfolio