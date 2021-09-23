import React from "react";

export default function About() {
  return (
    <div>
      {/* <div className="pageDiv" id="image-banner-about" /> */}
      <div id="aboutPage">
        <picture>
          <source
            media="(max-width:499px)"
            srcSet="./img/borders1-long.png"
          ></source>
          <source
            media="(min-width:500px)"
            srcSet="./img/borders1.png"
          ></source>
          <img id="aboutImg" src="./img/borders1.png" />
        </picture>
        <div id="aboutText">
          <h1 className="header">ABOUT CITATION</h1>
          <span className="aboutTextAlignL">
            <h3 className="aboutTextAlignL">ABOUT Header</h3>
            About TEXT
          </span>
        </div>
      </div>
    </div>
  );
}
