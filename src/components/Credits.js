import React from "react";

export default function Credits() {
  return (
    <div>
      <div id="aboutPage">
        <picture>
          <source
            media="(max-width:499px)"
            srcSet="./img/borders3-long.png"
          ></source>
          <source
            media="(min-width:500px)"
            srcSet="./img/borders3.png"
          ></source>
          <img id="creditsImg" src="./img/borders3.png" />
        </picture>
        <div id="aboutText">
          <h1 className="header">CREDITS</h1>
          <span className="aboutTextAlignL">
            <h3 className="aboutTextAlignL">TEAM</h3>
            TEAM TEXT
          </span>
        </div>
      </div>
    </div>
  );
}
