'use client'

import { useState, useEffect } from 'react'

export default function Loader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 500) // Hide the loader after 500ms
          return 100
        }
        const increment = Math.floor(Math.random() * 20) + 1
        return Math.min(oldProgress + increment, 100)
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&display=swap');
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .glow-white {
          box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 50px #fff;
        }
      `}</style>
      <div className="mb-8">
        <span 
          className="text-white text-7xl font-bold"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {`${progress}%`}
        </span>
      </div>
      <div className="w-3/4 h-10 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-500 ease-out relative glow-white"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-white opacity-75 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-75 animate-shimmer"></div>
        </div>
      </div>
    </div>
  )
}