// "use client"

// import React, { useState, useEffect, useRef } from 'react'
// import { motion } from 'framer-motion'

// const images = [
//   "/images/cactus.jpg", // Adjust the image names accordingly
//   "/images/house.jpg",
//   "/images/rock.jpg",
//   "/images/tree.jpg"
// ]

// export default function Component() {
//   const [currentImage, setCurrentImage] = useState(0)
//   const refs = useRef(images.map(() => React.createRef()))
//   const containerRef = useRef(null)

//   useEffect(() => {
//     const observers = refs.current.map((ref, index) => {
//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setCurrentImage(index)
//           }
//         },
//         { threshold: 0.5 }
//       )
//       if (ref.current) {
//         observer.observe(ref.current)
//       }
//       return observer
//     })

//     return () => {
//       observers.forEach((observer) => observer.disconnect())
//     }
//   }, [])

//   return (
//     <div className="min-h-screen">
      
//       <div ref={containerRef} className="sticky top-0 flex justify-center items-center h-screen">
//         <div className="w-[600px] mx-4 bg-gray-200 rounded-lg overflow-hidden shadow-xl">
//           <motion.div
//             className="relative h-[350px] md:h-[400px]"
//             animate={{ opacity: 1 }}
//             initial={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             {images.map((src, index) => (
//               <motion.img
//                 key={index}
//                 src={src}
//                 alt={`Image ${index + 1}`}
//                 className="absolute top-0 left-0 w-full h-full object-cover"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: currentImage === index ? 1 : 0 }}
//                 transition={{ duration: 0.5 }}
//               />
//             ))}
//           </motion.div>
//           <div className="flex justify-center space-x-4 p-4">
//             {[1, 2, 3, 4].map((num) => (
//               <motion.div
//                 key={num}
//                 className={`w-12 h-12 flex items-center justify-center rounded-md ${
//                   currentImage === num - 1 ? 'bg-gray-600 text-white' : 'bg-gray-400'
//                 }`}
//                 animate={{ scale: currentImage === num - 1 ? 1.1 : 1 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//               >
//                 {num}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {images.map((_, index) => (
//         <div key={index} ref={refs.current[index]} className="h-screen" />
//       ))}
//     </div>
//   )
// }


"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const images = [
  "/images/cactus.jpg",
   "/images/house.jpg",
  "/images/rock.jpg",
  "/images/tree.jpg"
]

export default function Component() {
  const [currentImage, setCurrentImage] = useState(0)
  const refs = useRef(images.map(() => React.createRef()))
  const containerRef = useRef(null)

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCurrentImage(index)
          }
        },
        { threshold: 0.5 }
      )
      if (ref.current) {
        observer.observe(ref.current)
      }
      return observer
    })

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [])

  return (
    <div className="min-h-screen ">
      
      <div className="sticky top-0 flex justify-center items-center min-h-screen  p-4">
        <div ref={containerRef} className="w-full h-[500px] max-md:h-[350px] max-w-3xl aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
          <motion.div
            className="relative w-full h-full "
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {images.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                className="absolute top-0 left-0 w-full h-full  object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: currentImage === index ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              />
            ))}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-4">
              {[1, 2, 3, 4].map((num) => (
                <motion.div
                  key={num}
                  className={`w-12 h-12 max-md:w-8 max-md:h-8 max-md:rounded-[6px] flex items-center justify-center rounded-xl text-lg font-semibold ${
                    currentImage === num - 1 ? 'bg-white text-black' : 'bg-black/50 text-white'
                  }`}
                  animate={{ scale: currentImage === num - 1 ? 1.1 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {num}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      {images.map((_, index) => (
        <div key={index} ref={refs.current[index]} className="h-screen" />
      ))}
    </div>
  )
}