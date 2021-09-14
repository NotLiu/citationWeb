import React, { useEffect, useRef } from 'react'
import Parallax from 'parallax-js'

const ParallaxBG = () => {
    const sceneEl = useRef(null);
  
    useEffect(() => {
      const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        hoverOnly: true
      })
  
      parallaxInstance.enable();
  
      return () => parallaxInstance.disable();
    }, [])
  
    return (
      <div ref={sceneEl}>
        <div ref={sceneEl} data-depth="0.2">My first Layer!</div>
        <div ref={sceneEl} data-depth="0.6">My second Layer!</div>
    </div>
    )
  }

  export default ParallaxBG