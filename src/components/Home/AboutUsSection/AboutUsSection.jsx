import aboutUs from "../../../assets/images/main/about-us1.jpg";
import { Container } from "../../../pages/HomePage/HomePage.styled";
import Icon from "../../Icon/Icon";
import {
  AchievmentList,
  InfoBox,
  Item,
  Photo,
  SideOne,
  SubName,
  SubText,
  SubTitle,
  Text,
  Title,
} from "./AboutUsSection.styled";

const AboutUsSection = () => {
  return (
    <>
      <Container>
        <InfoBox>
          <SideOne>
            <Title>Про нас</Title>
            <SubTitle>
              Наша ціль захистити права водія у будь-якій cправі!
            </SubTitle>
            <Text>
              Lorem ipsum dolor sit amet consectetur. Amet sit amet nulla
              volutpat semper condimentum. Vel lorem faucibus leo quam quisque
              velit vel feugiat egestas. Venenatis nulla nisi ligula enim.
              Vulputate viverra nisi nullam montes tortor. At in massa mauris
              feugiat augue. Pharetra dui arcu et in dignissim. Diam non
              ultrices quis sed iaculis nibh rhoncus pellentesque id.{" "}
            </Text>
            <Text>
              Fames neque blandit arcu integer id. Rhoncus in urna viverra
              ultricies varius. Sapien arcu faucibus leo urna amet in in sed.
              Ipsum eu dolor lectus cras morbi mi metus.
            </Text>
          </SideOne>
          <Photo src={aboutUs} alt="" />
        </InfoBox>
        <AchievmentList>
          <Item>
            <Icon
              iconName="icon-justice"
              width="54px"
              height="54px"
              stroke="#fe9901"
              fill="#fe9901"
            />
            <div>
              <SubName>Серйозний досвід</SubName>
              <SubText>Більш ніж 10 років</SubText>
            </div>
          </Item>
          <Item>
            <Icon
              iconName="icon-handshake"
              width="54px"
              height="54px"
              stroke="#fe9901"
              fill="#fe9901"
            />
            <div>
              <SubName>Працюємо на результат</SubName>
              <SubText>Більш ніж 100 задоволених клієнтів</SubText>
            </div>
          </Item>
          <Item>
            <Icon
              iconName="icon-trophy"
              width="54px"
              height="54px"
              stroke="#fe9901"
              fill="#fe9901"
            />
            <div>
              <SubName>Ми завжди перемагаємо</SubName>
              <SubText>Більш ніж 50 виграних справ</SubText>
            </div>
          </Item>
          <Item>
            <Icon
              iconName="icon-justice2"
              width="54px"
              height="54px"
              stroke="#fe9901"
              fill="#fe9901"
            />
            <div>
              <SubName>Спеціалісти з великим стажем</SubName>
              <SubText>Юристи зі стажем роботи не менше 10 років</SubText>
            </div>
          </Item>
        </AchievmentList>
      </Container>
    </>
  );
};

export default AboutUsSection;
