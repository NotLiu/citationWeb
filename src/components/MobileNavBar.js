import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: black;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  height: 100vh;
  text-align: left;
  padding: 0rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 20;
`;

const NavContainer = styled.div`
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  background-color: black;
`;

const NavLogo = styled(NavLink)`
  color: black;
  position: absolute;
  top: 1em;
  left: 1em;
  align-self: center;
  background-color: pink;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  flex-grow: 1;
`;

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  border: none;
  background: black;
  cursor: pointer;
  padding: 0rem;
  margin-top: 2em;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 5px;
    background: ${({ open }) => open ? 'white' : 'black'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
      background: white;
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
      background: white;
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      background: white;
    }
  }
`

const Menu = ({ open }) => {
    return (
      <StyledMenu open={open}>
        <a href="/">
          <span role="img" aria-label="about citation">💁🏻‍♂️</span>
          about
        </a>
        <a href="/">
          <span role="img" aria-label="achievements">💸</span>
          achievements
          </a>
        <a href="/">
          <span role="img" aria-label="contact us">📩</span>
          hallpass.games
          </a>
      </StyledMenu>
    )
  }

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

const MobileNav = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
      <div ref={node}>
          <Nav>
            <NavContainer>
                <NavLogo exact to="/">
                citation
                </NavLogo>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </NavContainer>
          </Nav>
      </div>
  )  
}

const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};

export default MobileNav;