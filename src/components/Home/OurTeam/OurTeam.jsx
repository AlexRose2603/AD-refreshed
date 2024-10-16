import member1 from "../../../assets/images/main/our-team1.jpg";
import member2 from "../../../assets/images/main/our-team2.jpg";
import member3 from "../../../assets/images/main/our-team3.jpg";
import member4 from "../../../assets/images/main/our-team4.jpg";
import { Container, Title } from "../../../pages/HomePage/HomePage.styled";
import {
  Member,
  MemberInfo,
  MemberName,
  MemberPosition,
  SubTitle,
  TeamList,
} from "./OurTeam.styled";

const OurTeam = () => {
  return (
    <>
      <Container>
        <Title>Команда</Title>
        <SubTitle>Наші юристи</SubTitle>
        <TeamList>
          <Member>
            <img src={member1} alt="" />
            <MemberInfo>
              <MemberName>Криниця Петро Іванович</MemberName>
              <MemberPosition>Адвокат-Юрист</MemberPosition>
            </MemberInfo>
          </Member>
          <Member>
            <img src={member2} alt="" />
            <MemberInfo>
              <MemberName>Креативна Ірина Сергіївна</MemberName>
              <MemberPosition>Адвокат-Юрист</MemberPosition>
            </MemberInfo>
          </Member>
          <Member>
            <img src={member3} alt="" />
            <MemberInfo>
              <MemberName>Креативна Ірина Сергіївна</MemberName>
              <MemberPosition>Адвокат-Юрист</MemberPosition>
            </MemberInfo>
          </Member>
          <Member>
            <img src={member4} alt="" />
            <MemberInfo>
              <MemberName>Криниця Петро Іванович</MemberName>
              <MemberPosition>Адвокат-Юрист</MemberPosition>
            </MemberInfo>
          </Member>
        </TeamList>
      </Container>
    </>
  );
};
export default OurTeam;
