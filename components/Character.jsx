// 'use client'

// import React,{useEffect, useRef} from 'react'
// import { useScroll,motion, progress, useTransform } from 'framer-motion'


// const Paragraph = ({value}) => {

//     const element = useRef(null)
//     const {scrollYProgress} = useScroll({
//         target: element,
//         offset:["start 0.7", "start 0.2"]
//     })

//    const words = value.split(' ')

//   return (
//     <>
    
//     <p 
//     ref={element}
//     style={{opacity:scrollYProgress}}
//      className='text-5xl flex flex-wrap leading-tight max-w-[1280px] p-16 inter-tight  tracking-tight font-medium'>
//         {
//             words.map((word,i)=>{
//                 const start = i / words.length
//                 const end = start + (1/words.length)
//                 return <Word key={i} range={
//                     [start,end] } 
//                     progress={scrollYProgress}
//                     >{word}</Word>
//             })
//         }
//     </p>
  
//     </>
//   )
// }

// const Word =({children,range,progress})=>{
//     const characters = children.split('')
//     const amount = range[1]-range[0]
//     const step = amount /children.length
//     return(
//         <span className='mr-[12px] mt-[12px] relative'>
//        {
//         characters.map((character,i)=>{
//             const start = range[0] + (i * step);
//             const end = range[0] + ((i + 1) * step);

//             return <Character key={i} 
//                   range={
//                     [start,end] } 
//                     progress={progress}
//                     >{character}</Character>
//         })
//        }
//     </span>
//     )


// }
// const Character =({children,range,progress})=>{
//     const opacity = useTransform(progress, range, [0,1])
//     return(
//         <span>
//         <span className='absolute opacity-[0.1]'>{children}</span>
//             <motion.span style={{opacity}}>
//             {children}
//         </motion.span>
//         </span>
        
//     )
// }



// export default Paragraph


'use client'

import React, { useEffect, useRef } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'

const Paragraph = ({ value }) => {
  const element = useRef(null)
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.7", "start 0.2"]
  })

  const words = value.split(' ')

  return (
    <>
      <p
        ref={element}
        style={{ opacity: scrollYProgress }}
        className='text-2xl md:text-5xl flex flex-wrap leading-tight max-w-[1280px] p-8 md:p-16 inter-tight tracking-normal font-medium'>
        {
          words.map((word, i) => {
            const start = i / words.length
            const end = start + (1 / words.length)
            return <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word>
          })
        }
      </p>
    </>
  )
}

const Word = ({ children, range, progress }) => {
  const characters = children.split('')
  const amount = range[1] - range[0]
  const step = amount / children.length
  return (
    <span className='mr-[8px] md:mr-[12px] mt-[8px] md:mt-[12px] relative'>
      {
        characters.map((character, i) => {
          const start = range[0] + (i * step)
          const end = range[0] + ((i + 1) * step)

          return <Character key={i} range={[start, end]} progress={progress}>{character}</Character>
        })
      }
    </span>
  )
}

const Character = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span>
      <span className='absolute opacity-[0.1]'>{children}</span>
      <motion.span style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  )
}

export default Paragraph
