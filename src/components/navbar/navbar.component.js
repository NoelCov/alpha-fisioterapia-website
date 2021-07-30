import React, { useState } from "react";

import { StaticImage } from "gatsby-plugin-image";

import {
  NavbarContainer,
  LinksContainer,
  LinkContainer,
  HamburgerMenu,
  HamburgerBar,
} from "./navbar.styles";

const Navbar = () => {
  const [hidden, toggleHidden] = useState(true);

  const onClick = () => {
    toggleHidden(!hidden);
  }

  return (
    <NavbarContainer>
      <StaticImage
        src="https://i.ibb.co/j6dCzdj/alpha-LOGO-05-removebg-preview.png"
        alt="company-logo"
        height={100}
        width={100}
      />

      <HamburgerMenu onClick={onClick}>
        <HamburgerBar />
        <HamburgerBar />
        <HamburgerBar />
      </HamburgerMenu>

      <LinksContainer hidden={hidden}>
        <LinkContainer>Crea una cita</LinkContainer>
        <LinkContainer>Porque nosotros?</LinkContainer>
        <LinkContainer>Nuestro trabajo</LinkContainer>
        <LinkContainer>Acerca de</LinkContainer>
      </LinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
