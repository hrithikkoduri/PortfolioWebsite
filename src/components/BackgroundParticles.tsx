"use client"

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

export default function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!canvasRef.current) return
    
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    if (!ctx) return
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)
    
    // Increased particle count for more connections
    const particleCount = 150
    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string
    }> = []

    // More vibrant colors with higher opacity
    const colors = theme === 'dark' 
      ? [
          'rgba(255, 255, 255, 0.25)',    // Brighter white
          'rgba(16, 185, 129, 0.3)',      // Vibrant green (accent)
          'rgba(59, 130, 246, 0.3)',      // Bright blue
          'rgba(236, 72, 153, 0.3)',      // Pink
          'rgba(249, 115, 22, 0.25)',     // Orange
          'rgba(168, 85, 247, 0.3)'       // Purple
        ]
      : [
          'rgba(0, 0, 0, 0.2)',           // Darker black
          'rgba(16, 185, 129, 0.25)',     // Vibrant green (accent)
          'rgba(59, 130, 246, 0.25)',     // Bright blue
          'rgba(236, 72, 153, 0.25)',     // Pink
          'rgba(249, 115, 22, 0.2)',      // Orange
          'rgba(168, 85, 247, 0.25)'      // Purple
        ]

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1.1,    // Increased base size
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((particle, i) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw thicker particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Draw thicker connecting lines
        particles.forEach((otherParticle, j) => {
          if (i === j) return
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y, 
              otherParticle.x, otherParticle.y
            )
            gradient.addColorStop(0, particle.color)
            gradient.addColorStop(1, otherParticle.color)
            
            ctx.strokeStyle = gradient
            ctx.lineWidth = 0.8  // Increased line width
            ctx.globalAlpha = 0.6 * (1 - distance / 200) // Increased base opacity
            ctx.stroke()
            ctx.globalAlpha = 1
            ctx.lineWidth = 1  // Reset line width
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 h-full w-full"
      style={{ position: 'fixed' }}
    />
  )
} 