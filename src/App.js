import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Banner from "./components/Banner";
import About from "./components/About";
import Leaderboards from "./components/Leaderboards";
import Credits from "./components/Credits";
import React from "react";
import ParallaxBG from "./components/Parallax"

function App() {
  return (
    <Router>
      <div className="App">
        <ParallaxBG />
        <div id="nav-bar">
          <div id="nav-name">
            <a href="/">Citation</a>
          </div>
          <ul id="nav">
            <li>
              <Link to="/about" id="about-but">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/credits" id="about-but">
                CREDITS
              </Link>
            </li>
            <li>
              <Link to="/leaderboards" id="about-but">
                LEADERBOARDS
              </Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/">
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
