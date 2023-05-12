import React from "react";
import logo from "../../assets/icons/Logo.svg";
import burger_menu from "../../assets/icons/burgerMenu.svg";
import arrow_left from "../../assets/icons/arrow-left.svg";
import { Wrapper, Logo, BurgerMenu, ArrowLeft, Container } from "./Navbar.styles";
const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <BurgerMenu className="burger_menu" src={burger_menu} alt="menu icon" />
        <ArrowLeft className="arrow_left" src={arrow_left} alt="arrow left" />
        <p>Back</p>
      </Container>
      <Logo className="logo" src={logo} alt="" />
    </Wrapper>
  );
};

export default Navbar;

