'use client'

import React,{useEffect, useRef} from 'react'
import { useScroll,motion, progress, useTransform } from 'framer-motion'


const Paragraph = ({value}) => {

    const element = useRef(null)
    const {scrollYProgress} = useScroll({
        target: element,
        offset:["start 0.7", "start 0.2"]
    })

   const words = value.split(' ')

  return (
    <>
    
    <p 
    ref={element}
    style={{opacity:scrollYProgress}}
     className='text-5xl flex flex-wrap leading-tight max-w-[1280px] p-16 font-[helvetica]tracking-tight font-bold'>
        {
            words.map((word,i)=>{
                const start = i / words.length
                const end = start + (1/words.length)
                return <Word key={i} range={
                    [start,end] } 
                    progress={scrollYProgress}
                    >{word}</Word>
            })
        }
    </p>
  
    </>
  )
}

const Word =({children,range,progress})=>{
    const opacity = useTransform(progress , range, [0,1])
    return(
        <span className='mr-[12px] mt-[12px] relative'>
        <span className='absolute opacity-[0.2]'>{children}</span>
<motion.span 
style={{opacity:opacity}}

         >{children}</motion.span>
    </span>
    )
}

export default Paragraph