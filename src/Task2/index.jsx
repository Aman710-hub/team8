import React from "react";
import SideBlock from "./SideBlock/SideBlock";
import MainBlock from "./MainBlock/MainBlock";
import Navbar from "./Navbar/Navbar";
import { Wrapper, NavContainer } from "./index.styles";
const Task2 = () => {
  return (
    <>
      <Wrapper>
        <NavContainer>
          <Navbar />
        </NavContainer>
        <SideBlock />
        <MainBlock />
      </Wrapper>
    </>
  );
};

export default Task2;

