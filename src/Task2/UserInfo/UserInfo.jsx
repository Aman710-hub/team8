import React from "react";
import { Wrapper } from "./UserInfo.styles";
const UserInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <img src={icon} alt="" />
      <p>{text}</p>
    </Wrapper>
  );
};

export default UserInfo;
