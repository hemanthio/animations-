'use client'

import Image from 'next/image'
import React ,{useRef} from 'react'
import {motion, useScroll,useTransform} from 'framer-motion'
const Card = ({i,title,description,src,link,color}) => {
   
  const container = useRef(null)
const {scrollYProgress} = useScroll({
  target:container,
  offset:["start end","start start"]
})

const scale =useTransform(scrollYProgress,[0,1],[2,1]) 


  return (
    <div 
    ref={container}
     className='h-screen flex items-center justify-center sticky top-0'>
    <div style={{backgroundColor:color, top:`calc(-5vh + ${i * 25}px)`}} 
    className='w-[1000px] h-[500px] relative top-[-10%] rounded-xl'>

   <motion.div style={{opacity:scrollYProgress}}>
   <Image className='object-cover rounded-xl'
   fill
    src={`/images/${src}`} 
    alt='image'
   />
   </motion.div>

    </div> 

    </div>
  )
}

export default Card