'use client'

import React,{useEffect, useRef} from 'react'
import { useScroll,motion } from 'framer-motion'


const Paragraph = ({value}) => {

    const element = useRef(null)
    const {scrollYProgress} = useScroll({
        target: element,
        offset:["start 0.9", "start 0.25"]
    })

  

  return (
    <>
    
    <motion.p 
    ref={element}
    style={{opacity:scrollYProgress}}
     className='text-5xl max-w-[1280px] p-16 font-roboto tracking-tight leading-tight font-bold'>
        {value}
    </motion.p>
  
    </>
  )
}

export default Paragraph