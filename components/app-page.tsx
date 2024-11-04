'use client'

import { Button } from "@/components/ui/button"
import { Github, LaptopMinimal } from "lucide-react"
import { useEffect, useState } from 'react'

export function Page() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_#0d1d31_0%,_#0c0d13_100%)]">
      {mounted && (
        <div className="stars">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="star"></div>
          ))}
        </div>
      )}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          MoocFlix: Learn Anytime, Anywhere
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Unlock the future of education with MoocFlix. Our scalable platform blends advanced video streaming and learning management, allowing you to elevate your skills through immersive, on-demand courses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
        <a href="https://github.com/iSparshP/moocflix" target="_blank" rel="noopener noreferrer">
          <Button 
            className="bg-white text-black hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105"
            style={{
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
            }}
          >
            <Github className="mr-2 h-5 w-5" />
            View on GitHub
          </Button>
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <Button 
            className="bg-white text-black hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105"
            style={{
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
            }}
          >
            <LaptopMinimal className="mr-2 h-5 w-5" />
            Have Fun Learning
          </Button>
        </a>
        </div>
      </div>
      <style jsx global>{`
        .stars {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 120%;
          transform: rotate(-45deg);
        }

        .star {
          --star-color: white;
          --star-tail-length: 6em;
          --star-tail-height: 2px;
          --star-width: calc(var(--star-tail-length) / 6);
          --fall-duration: 9s;
          --tail-fade-duration: var(--fall-duration);

          position: absolute;
          top: var(--top-offset);
          left: 0;
          width: var(--star-tail-length);
          height: var(--star-tail-height);
          color: var(--star-color);
          background: linear-gradient(45deg, currentColor, transparent);
          border-radius: 50%;
          filter: drop-shadow(0 0 6px currentColor);
          transform: translate3d(104em, 0, 0);
          animation: fall var(--fall-duration) var(--fall-delay) linear infinite, tail-fade var(--tail-fade-duration) var(--fall-delay) ease-out infinite;
        }

        .star::before, .star::after {
          position: absolute;
          content: '';
          top: 0;
          left: calc(var(--star-width) / -2);
          width: var(--star-width);
          height: 100%;
          background: linear-gradient(45deg, transparent, currentColor, transparent);
          border-radius: inherit;
          animation: blink 2s linear infinite;
        }

        .star::before {
          transform: rotate(45deg);
        }

        .star::after {
          transform: rotate(-45deg);
        }

        @keyframes fall {
          to {
            transform: translate3d(-30em, 0, 0);
          }
        }

        @keyframes tail-fade {
          0%, 50% {
            width: var(--star-tail-length);
            opacity: 1;
          }

          70%, 80% {
            width: 0;
            opacity: 0.4;
          }

          100% {
            width: 0;
            opacity: 0;
          }
        }

        @keyframes blink {
          50% {
            opacity: 0.6;
          }
        }

        ${[...Array(50)].map((_, i) => `
          .star:nth-child(${i + 1}) {
            --star-tail-length: ${6 + Math.random() * 3}em;
            --top-offset: ${Math.random() * 100}vh;
            --fall-duration: ${Math.random() * 6 + 6}s;
            --fall-delay: ${Math.random() * 10}s;
          }
        `).join('')}
      `}</style>
    </div>
  )
}