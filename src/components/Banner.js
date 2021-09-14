import React from "react";

export default function Banner(myRef) {
  return (
    <div id="scene" ref={myRef}>
      <div data-depth="0.2" id="image-banner1" class="image-banner"></div>
      <div data-depth="0.4" id="image-banner2" class="image-banner"></div>
      <div data-depth="0.6" id="image-banner3" class="image-banner"></div>
      <div data-depth="0.8" id="image-banner4" class="image-banner"></div>
    </div>
    // <div id="image-banner"></div>
  );
}
