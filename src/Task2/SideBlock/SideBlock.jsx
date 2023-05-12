import React from "react";
import message from "../../assets/icons/ChatCircleDots.svg";
import cake from "../../assets/icons/Cake.svg";
import envolope from "../../assets/icons/Envolope.svg";
import mapPin from "../../assets/icons/MapPin.svg";
import user from "../../assets/icons/user.svg";
import telegramm from "../../assets/icons/TelegramLogo.svg";
import linkdIn from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import behancel from "../../assets/icons/BehanceLogo.svg";
import userAvatar from "../../assets/icons/userAvatar.svg";
import UserInfo from "../UserInfo/UserInfo";
import {
  Header,
  UserImg,
  MessageButton,
  SocialMedia,
  Wrapper,
} from "./SideBlock.styles";

const SideBlock = () => {
  const userInfo = [
    { icon: user, text: "Front-end Developer" },
    { icon: cake, text: "3-5 years of experience" },
    { icon: mapPin, text: "Ukraine" },
    { icon: cake, text: "25 years old" },
    { icon: envolope, text: "nikita888@gmail.com" },
  ];
  return (
    <Wrapper>
      <Header>
        <UserImg>
          <img src={userAvatar} alt="avatar" />
        </UserImg>
        <h4>Nikita Maksimov</h4>
        <p>@StasyRivieraX</p>
      </Header>
      <MessageButton>
        <p>Message</p>
        <img src={message} alt="chat" />
      </MessageButton>
      <div>
        {userInfo.map((item, index) => {
          return <UserInfo key={index} icon={item.icon} text={item.text} />;
        })}
      </div>
      <SocialMedia>
        <img src={github} alt="github" />
        <img src={behancel} alt="behancel" />
        <img src={telegramm} alt="telegramm" />
        <img src={linkdIn} alt="linkdIn" />
      </SocialMedia>
    </Wrapper>
  );
};

export default SideBlock;
