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
   
  

    <div className='relative w-full h-screen overflow-hidden'>
      <Image
        src={img} 
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        className='w-full h-full'
      />
    </div>


<div className='absolute top-32  right-16 '>
<h1 className='text-2xl  uppercase font-bold font-[helvetica]'>Hemanth</h1>
<h1 className='text-2xl pb-4  font-[helvetica]'>Designer &amp; Developer</h1>
<h2 className='text-[32px]  w-[440px] leading-tight font-bold font-[roboto] tracking-tight'>Transforming ideas into responsive, high-performing websites</h2>
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

