import React from "react";
import user from "../../assets/icons/2person.svg";
import externalLink from "../../assets/icons/externalLink.svg";
import { Wrapper } from "./TeamBox.styles";
const TeamBox = ({ isTeam, text }) => {
  return (
    <Wrapper>
      {isTeam ? (
        <img src={user} alt="user icon" />
      ) : (
        <img src={externalLink} alt="external link" />
      )}
      <p>{text}</p>
    </Wrapper>
  );
};

export default TeamBox;
