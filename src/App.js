// import "./App.css";
import { React, BrowserRouter,Switch,Route,NavLink } from "react-router-dom";
import NavBar from "./components/NavBar";
import styled from 'styled-components';
// import ParallaxBG from "./components/Parallax";

const Container = styled.div`
  color: #316685;
  text-align: center;
  font-size: calc(1.5rem + 2vw);
  margin-top: 10%;
`

// placeholders for eventual page components
const Home = () => {
  return (
    <div>
      Home
    </div>
  )
}

const About = () => {
  return (
    <div>
      About
    </div>
  )
}

const Achievements = () => {
  return (
    <div>
      Achievements
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/achievements" component={Achievements} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
