import React from "react";
import { Wrapper } from "./LanguageBox.styles";
const LanguageBox = ({ icon }) => {
  return (
    <Wrapper>
      <img src={icon} alt="" />
    </Wrapper>
  );
};

export default LanguageBox;
