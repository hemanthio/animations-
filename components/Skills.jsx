'use client'

import React from 'react'

const tags = [
  { name: 'Three.js', color: 'bg-green-200 text-green-800', top: '15%', left: '50%' },
  { name: 'Three.js', color: 'bg-gray-200 text-gray-400', top: '15%', left: '30%' },
  { name: 'Framer Motion', color: 'bg-gray-200 text-gray-400', top: '30%', left: '25%' },
  { name: 'Next.js', color: 'bg-black text-white', top: '40%', left: '40%' },
  { name: 'GSAP', color: 'bg-gray-200 text-gray-400', top: '23%', left: '40%' },
  { name: 'Tailwind css', color: 'bg-pink-200 text-pink-800', top: '55%', left: '20%' },
  { name: 'Figma', color: 'bg-gray-200 text-gray-400', top: '45%', left: '60%' },
  { name: 'Figma', color: 'bg-blue-200 text-blue-800', top: '35%', left: '65%' },
  { name: 'Framer', color: 'bg-orange-200 text-orange-800', top: '50%', left: '45%' },
  { name: 'Framer', color: 'bg-gray-200 text-gray-400', top: '60%', left: '53%' },
  { name: 'Next.js', color: 'bg-gray-200 text-gray-400', top: '70%', left: '25%' },
  { name: 'Framer Motion', color: 'bg-pink-200 text-pink-800', top: '25%', left: '60%' },
  { name: 'GSAP', color: 'bg-purple-200 text-purple-800', top: '62%', left: '35%' },
  { name: 'Tailwind css', color: 'bg-gray-200 text-gray-400', top: '70%', left: '50%' },
  { name: 'Three.js', color: 'bg-gray-200 text-gray-400', top: '55%', left: '70%' },
]

export default function Skills() {
  return (
    <div className="w-full h-[800px] pt-16 bg-white flex flex-col items-center justify-center font-inter">
      <h1 className="text-3xl font-[helvetica] font-bold opacity-60">Skills</h1>
      <div className="w-[900px] h-[800px] relative">
        {tags.map((tag, index) => (
          <div
            key={index}
            className={`absolute px-12 py-3 text-xl font-semibold rounded-full ${tag.color}`}
            style={{
              top: tag.top,
              left: tag.left,
            }}
          >
            {tag.name}
          </div>
        ))}
      </div>
    </div>
  )
}
