import React, { useEffect, useRef } from "react";
import Parallax from "parallax-js";
import ReactAudioPlayer from "react-audio-player";

export default function Banner() {
  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
      hoverOnly: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);

  return (
    <div>
      <div id="scene" ref={sceneEl} data-limit-x="73" data-limit-y="40">
        <div ref={sceneEl} data-depth="0.05" class="image-banner">
          <img src="./img/citation1.png" />
        </div>
        <div ref={sceneEl} data-depth="0.6" class="image-banner">
          <img src="./img/citation2.png" />
        </div>
        <div ref={sceneEl} data-depth="1.5" class="image-banner">
          <img src="./img/citation3.png" />
        </div>
        <div ref={sceneEl} data-depth="1" class="image-banner">
          <img src="./img/citation4.png" />
        </div>
      </div>
      <div>
        <ReactAudioPlayer
          id="audio"
          src="./sound/unethical_2.mp3"
          autoPlay={true}
          controls={true}
          loop={true}
        />
      </div>
    </div>

    // <div id="image-banner"></div>
  );
}
