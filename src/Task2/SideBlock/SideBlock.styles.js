import styled from "styled-components";

export const Wrapper = styled.aside`
  max-width: 270px;
  height: 600px;
  border-radius: 15px;
  padding: 36px 24px 24px 24px;
  background-color: #1a1c22;
  margin-inline: auto;
`;
export const Header = styled.div`
  text-align: center;
  color: #ffff;

  h4 {
    letter-spacing: 1px;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    margin-block: 24px 8px;
  }

  p {
    font-size: 14px;
    line-height: 16px;
    color: #c1c1c4;
    font-weight: 300;
  }
`;

export const UserImg = styled.div`
  margin: 0 auto;
  width: 100px;
  img {
    height: 100px;
  }
`;

export const MessageButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 2px solid #46a11b;
  background-color: transparent;
  color: #ffff;
  line-height: 22px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 6px;
  margin-bottom: 33px;
  margin-top: 23px;
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 80px;
`;
