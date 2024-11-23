"use client"

import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: "supaspark",
    technologies: "react, tailwind and framer motion",
    year: "2024",
    image: "/images/supaspark.png",
    link: "https://reactandmotion.vercel.app/"
  },
  {
    id: 2,
    title: "pricecard",
    technologies: "javascript and GSAP",
    year: "2023",
    image: "/images/pricecard.png", 
    link : "https://symphonious-cranachan-6d7191.netlify.app/"
  },
  {
    id: 3,
    title: "Real Estate ",
    technologies: "Web design ,Figma",
    year: "2023",
    image: "/images/realestate.png",
    
  },
  {
    id: 4,
    title: "Web agency",
    technologies: "Web design, figma",
    year: "2024",
    image: "/images/webagency.png",
  
  },
  {
    id: 5,
    title: "Gym",
    technologies: "Figma,Web design",
    year: "2023",
    image: "/images/gym.png"
  }
]

export default function Card() {
  const [hoveredId, setHoveredId] = useState(null)

  const handleClick = (link) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <div id="works" className="grid gap-8  p-4 md:p-8 place-items-center">
      {projects.map((project) => (
        <div
          key={project.id}
          className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 w-full max-w-[700px] ${
            project.link ? 'cursor-pointer' : ''
          } ${hoveredId === project.id ? 'scale-[1.02]' : ''}`}
          onClick={() => handleClick(project.link)}
          onMouseEnter={() => setHoveredId(project.id)}
          onMouseLeave={() => setHoveredId(null)}
          role={project.link ? 'link' : 'article'}
          tabIndex={project.link ? 0 : undefined}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && project.link) {
              handleClick(project.link)
            }
          }}
        >
          <div className="aspect-[3/2] w-full bg-gray-200 dark:bg-gray-700">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center justify-between p-4">
            <div>
              <h2 className="text-xl font-medium text-gray-800 dark:text-white">
                {project.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {project.technologies}
              </p>
            </div>
            <span className="text-lg text-gray-600 dark:text-gray-300">
              {project.year}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
