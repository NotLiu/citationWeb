import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Responsive } from "./../utilities/Responsive";
import MobileNav from "./MobileNavBar";
import DesktopNav from "./DesktopNavBar";

function NavBar() {
  return (
    <div>
      <Responsive displayIn={["Mobile"]}>
        <MobileNav />
      </Responsive>
      <Responsive displayIn={["Tablet"]}>
        <MobileNav />
      </Responsive>
      <Responsive displayIn={["Laptop"]}>
        <DesktopNav />
      </Responsive>
    </div>
  );
}

export default NavBar;
