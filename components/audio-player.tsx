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
          audioRef.current.volume = 0.3
          await audioRef.current.play()
        } catch (error) {
          console.log('Audio autoplay was prevented by browser policy')
          // Audio will be available for manual play
        }
      }
    }

    // Small delay to ensure the component is fully mounted
    const timer = setTimeout(playAudio, 500)
    
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
        <source src="https://us-tuna-sounds-files.voicemod.net/cdf5679d-b438-4c79-b479-b97f5ebf7589-1680304223348.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}
