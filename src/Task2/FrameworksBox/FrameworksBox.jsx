import React from "react";
import { Wrapper } from "./FrameworksBox.styles";
const FrameworksBox = ({ text, color }) => {
  return <Wrapper color={color}>{text}</Wrapper>;
};

export default FrameworksBox;
