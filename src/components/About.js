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
        <div className="aboutText">
          <h1 className="header">WELCOME TO DREAM SCHOOL</h1>
          <p className="aboutTextAlignL">
            Welcome to Dream School - one of the planet's best schools for
            mystics and scholars of magic. One of the things that makes Dream
            School unique, is that it has a singular focus on the pursuit of new
            knowledge - it's a magical research university with the mission of
            advancing society's knowledge of the mystic arts and sciences.
            Another aspect that makes the school unique, and frankly, what makes
            it such a draw for the world's best and brightest, is that it is
            located above an ancient, unexplored source of magical energy: THE
            RATIO. The magical energy emanating from the depths below Dream
            School seems to exist in two competitive states at once. The
            scholars from long long ago named these states of energy ethical
            energy, and unethical energy. You remember being told that it's like
            the distinction between good magic and evil evil magic, but that's
            not exactly the best analogy - unethical magic and ethical magic can
            have the same outcomes, but only in the short term. Long-term,
            unethical magic damages the very fabric of society, corrupting those
            who pursue the mystical arts as a way to help society progress and
            improve. Casting unethical spells can not only get you kicked out of
            Dream School, but can also cause the entire community to become a
            worse place.
          </p>
        </div>
      </div>
    </div>
  );
}
