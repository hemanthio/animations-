'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import img from './img.png'
import Hamburger from '@/components/hamburger'
import StackCard from '@/components/stackcard'
import Paragraph from '@/components/Paragraph'
import Word from '@/components/Word'
import Character from '@/components/Character'
import Cards from './Cards'
import Lenis from '@studio-freight/lenis'
import Loader from '@/components/Loader'
import Services from '@/components/Services'
import Getintouch from '@/components/Getintouch'
import Component from '@/components/Footer'
import Marquee from '@/components/Marquee'
import Skills from '@/components/Skills'


const paragraph = "Crafting high-performance web solutions, from engaging animations to fully responsive websites, designed to enhance user interaction and strengthen your online presence."


const Page = () => {

useEffect(()=>{
  const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
})

  return (

    
    <>
   
  <div className='h-screen bg-white'>
  <h1>hemanth</h1>
  <h1>Creative Developer</h1>
  </div>





    <Hamburger />

     <div className='bg-black text-white'>
    <div className='h-[40vh]'></div>
      {/* <Paragraph value={paragraph} /> */}
       {/* <Word value={paragraph}  /> */}
      <Character value={paragraph} />
    <div className='h-[30vh]'></div>
  </div>
  <Marquee />
  <Cards />
  
  <Services />
  <Getintouch />
  <Component />
    </>
  )
}

export default Page

