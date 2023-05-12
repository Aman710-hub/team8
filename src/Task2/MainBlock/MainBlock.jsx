import React from "react";
import TeamBox from "../TeamBox/TeamBox";
import FrameworksBox from "../FrameworksBox/FrameworksBox";
import LanguageBox from "../LanguageBox/LanguageBox";
import cake from "../../assets/icons/Cake.svg";

import {
  Wrapper,
  Header,
  About,
  Title,
  Team,
  TeamTitle,
  ProjectsLinks,
  Frameworks,
  LanguagesBlock,
  Languages,
} from "./MainBlock.styles";

const MainBlock = () => {
  return (
    <Wrapper>
      <Header>
        <p>Projects & Skills </p>
        <p>Education & Work </p>
      </Header>
      <About>
        <Title>About me</Title>
        <p>
          About me Front-end developer with 4 years of experience. Passionate
          about solving complex problems and building innovative solutions. I
          have a strong understanding of software development best practices.
          Collaborative team player with effective communication skills.
        </p>
      </About>
      <Team>
        <TeamTitle>Team</TeamTitle>
        <TeamBox isTeam={true} text="Cool Developers" />
      </Team>
      <section>
        <Title>Projects</Title>
        <ProjectsLinks>
          <TeamBox text="Team8s" />
          <TeamBox text="Banking App" />
          <TeamBox text="Snake" />
          <TeamBox text="Shopping App" />
          <TeamBox text="E-learning" />
        </ProjectsLinks>
      </section>
      <section>
        <Title>Frameworks</Title>
        <Frameworks>
          <FrameworksBox text="Node" color="#5A9E54" />
          <FrameworksBox text="Figma" color="#8D3DF5" />
          <FrameworksBox text="React" color="#00A4D3" />
          <FrameworksBox text="Spark" color="#E57609" />
          <FrameworksBox text="Rudy" color="#900E04" />
          <FrameworksBox
            text="Django"
            color="
#194838"
          />
        </Frameworks>
      </section>

      <LanguagesBlock>
        <Title>Languages</Title>
        <Languages>
          <LanguageBox icon={cake} />
          <LanguageBox icon={cake} />
          <LanguageBox icon={cake} />
          <LanguageBox icon={cake} />
          <LanguageBox icon={cake} />
          <LanguageBox icon={cake} />
          <LanguageBox icon={cake} />
          <LanguageBox icon={cake} />
        </Languages>
      </LanguagesBlock>
    </Wrapper>
  );
};

export default MainBlock;
