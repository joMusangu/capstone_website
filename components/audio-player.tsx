'use client'

import { useEffect, useRef } from 'react'

export default function AudioPlayer() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // The iframe will handle autoplay
    // Note: Modern browsers may still block autoplay with sound
    // User interaction might be required for audio to play
  }, [])

  return (
    <div className="fixed top-4 right-4 z-50">
      <iframe
        ref={iframeRef}
        width="300"
        height="200"
        src="https://www.youtube.com/watch?v=YaG5SAw1n0c"
        title="Background Audio"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg shadow-lg opacity-90 hover:opacity-100 transition-opacity"
        style={{ 
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000
        }}
      />
    </div>
  )
}
