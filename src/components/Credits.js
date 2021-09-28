import React from "react";

export default function Credits() {
  return (
    <div>
      <div className="aboutPage">
        <picture>
          <source
            media="(max-width:499px)"
            srcSet="./img/borders3-long.png"
            alt="text border"
          ></source>
          <source
            media="(min-width:500px)"
            srcSet="./img/borders3.png"
            alt="text border"
          ></source>
          <img id="creditsImg" src="./img/borders3.png" alt="text border" />
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
