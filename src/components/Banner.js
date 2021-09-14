import React, { useEffect, useRef } from "react";
import Parallax from "parallax-js";

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
    <div id="scene" ref={sceneEl} data-limit-x="75" data-limit-y="40">
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
    // <div id="image-banner"></div>
  );
}
