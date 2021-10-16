import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

//styles
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
  background-color: black
`;

const NavLogo = styled(NavLink)`
  color: black;
  position: absolute;
  left: 1em;
  align-self: center;
  background-color: pink;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  flex-grow: 1;
`;

const NavList = styled.ul`
  display: flex;
  text-decoration: none;
`;

const NavBullet = styled.li`
  display: flex;
  flex-direction: column;
  background-color: red;
  width: ${(props) => (props.width ? props.width : "200px")};
`;
const NavItem = styled(NavLink)`
  margin: 10px;
  color: white;
  background-color: tomato;
  text-align: center;
  display: block;
  padding: 15px;
  text-decoration: none;
`;

const DesktopNav = () => {
    return (
         <Nav onClick={(e) => e.stopPropagation()}>
            <NavContainer>
              {/* <NavLogo exact to="/">
                citation
              </NavLogo> */}
              <NavList>
                <NavBullet>
                  <NavItem exact to="/about">
                    about
                  </NavItem>
                </NavBullet>
                <NavBullet width="500px">
                  <NavItem exact to="/play">
                    play
                  </NavItem>
                </NavBullet>
                <NavBullet>
                  <NavItem exact to="/achievements">
                    achievements
                  </NavItem>
                </NavBullet>
              </NavList>
            </NavContainer>
          </Nav>
    )
}

export default DesktopNav