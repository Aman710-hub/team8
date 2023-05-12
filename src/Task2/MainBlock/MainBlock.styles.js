import styled from "styled-components";

export const Wrapper = styled.section`
  width: 470px;
  height: 600px;
  border-radius: 15px;
  padding: 24px 32px 24px 32px;
  background-color: #1a1c22;
  margin-inline: auto;
  letter-spacing: 0.5px;
  color: #fff;
`;

export const Header = styled.div`
  display: flex;
  & p {
    margin-right: 16px;
    font-size: 16px;
    font-weight: 500;
    &:first-child {
      padding-bottom: 3px;
      color: #5bd424;
      border-bottom: 1px solid #5bd424;
    }
  }
`;

export const About = styled.div`
  color: #ffffff;
  font-size: 14px;
  line-height: 16px;
  font-weight: 300;
  margin: 24px 0 16px 0;

  p:first-child {
    margin-bottom: 10px;
  }
`;

export const Title = styled.h3`
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const Team = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const TeamTitle = styled.h3`
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;
  margin-bottom: 8px;
  margin-right: 16px;
  margin-bottom: 0;
`;

export const ProjectsLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

export const Frameworks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const LanguagesBlock = styled.div`
  margin-top: 16px;
`;

export const Languages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
