import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)

  const cards = [
    { title: 'Card 1', bgColor: 'bg-red-500' },
    { title: 'Card 2', bgColor: 'bg-green-500' },
    { title: 'Card 3', bgColor: 'bg-blue-500' },
    { title: 'Card 4', bgColor: 'bg-yellow-500' },
    { title: 'Card 5', bgColor: 'bg-purple-500' },
  ]

  // Scroll handler to calculate scroll progress and adjust each card
  useEffect(() => {
    const handleScroll = () => {
      const maxScrollY = document.documentElement.scrollHeight - window.innerHeight
      const scrollY = window.scrollY
      const progress = scrollY / maxScrollY
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="h-[300vh] w-full flex justify-center items-center">
      <div className="relative w-72 h-96">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`absolute w-full h-full rounded-lg shadow-xl ${card.bgColor} flex items-center justify-center text-white text-xl font-bold`}
            style={{
              zIndex: cards.length - index, // Keep the stacking order
            }}
            initial={{ y: 0 }}
            animate={{
              y: scrollProgress >= index / cards.length ? -150 * index : 0, // Move card one by one based on scroll
            }}
            transition={{ duration: 0.5 }}
          >
            {card.title}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
