import React from "react";

export default function About() {
  return (
    <div>
      {/* <div className="pageDiv" id="image-banner-about" /> */}
      <div className="aboutPage">
        <picture>
          <source
            media="(max-width:499px)"
            srcSet="./img/borders1-long.png"
            alt="text border"
          ></source>
          <source
            media="(min-width:500px)"
            srcSet="./img/borders1.png"
            alt="text border"
          ></source>
          <img id="aboutImg" src="./img/borders1.png" alt="text border" />
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
