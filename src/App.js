import "./App.css";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Banner from "./components/Banner";
import About from "./components/About";
import Leaderboards from "./components/Leaderboards";
import Credits from "./components/Credits";
import React from "react";
// import ParallaxBG from "./components/Parallax";

function App() {
  const aboutRef = React.useRef(null);
  const leaderRef = React.useRef(null);
  const creditRef = React.useRef(null);
  const [page, setPage] = React.useState(<About />);
  const [boardType, setBoardType] = React.useState("Total");
  const [leaderboardList, setLeaderboardList] = React.useState([]);

  return (
    // <Router>
    <div className="App">
      {/* <ParallaxBG /> */}
      {/* <img src="./img/citation2.png"></img> */}
      <div id="nav-bar">
        <div id="nav-name">
          <button
            className="about-but"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Citation
          </button>
        </div>
        <ul id="nav">
          <li>
            <button
              className="about-but"
              onClick={() => {
                aboutRef.current.scrollIntoView();
              }}
            >
              ABOUT
            </button>
          </li>
          <li>
            <button
              className="about-but"
              onClick={() => {
                creditRef.current.scrollIntoView();
              }}
            >
              CREDITS
            </button>
          </li>
          <li>
            <button
              className="about-but"
              onClick={() => {
                leaderRef.current.scrollIntoView();
              }}
            >
              LEADERBOARDS
            </button>
          </li>
          {/* <li>
              <Link to="/about" className="about-but">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/credits" className="about-but">
                CREDITS
              </Link>
            </li>
            <li>
              <Link to="/leaderboards" className="about-but">
                LEADERBOARDS
              </Link>
            </li> */}
        </ul>
      </div>
      <Banner />
      {/* <Switch>
          <Route exact path="/">
            <Banner />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/leaderboards">
            <Leaderboards />
          </Route>
          <Route exact path="/credits">
            <Credits />
          </Route>
        </Switch> */}
      <div className="postBannerPage">
        <div ref={aboutRef} className="pages">
          <About />
        </div>
        <div ref={creditRef} className="pages">
          <Credits />
        </div>
        <div ref={leaderRef} className="pages">
          <Leaderboards
            boardType={boardType}
            setBoardType={setBoardType}
            leaderboardList={leaderboardList}
            setLeaderboardList={setLeaderboardList}
          />
        </div>

        {/* <Contact /> */}
      </div>
    </div>
    // </Router>
  );
}

export default App;
