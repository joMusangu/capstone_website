'use client'

import { useEffect, useRef } from 'react'

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Try to play audio when component mounts
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          // Set volume to a reasonable level
          audioRef.current.volume = 0.5
          audioRef.current.muted = false
          await audioRef.current.play()
          console.log('Audio started playing successfully')
        } catch (error) {
          console.log('Audio autoplay was prevented by browser policy:', error)
          // Try to play on user interaction
          const playOnInteraction = () => {
            if (audioRef.current) {
              audioRef.current.play().catch(console.log)
            }
          }
          document.addEventListener('click', playOnInteraction, { once: true })
          document.addEventListener('touchstart', playOnInteraction, { once: true })
        }
      }
    }

    // Small delay to ensure the component is fully mounted
    const timer = setTimeout(playAudio, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="hidden">
      <audio
        ref={audioRef}
        loop
        preload="auto"
        aria-label="Background audio"
      >
        <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3" type="audio/mpeg" />
        <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}
