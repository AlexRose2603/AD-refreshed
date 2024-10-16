import Slider from "./Slider1/Slider";
import heroImg from "../../assets/images/main/hero.jpg";
import heroImg2x from "../../assets/images/main/hero-2x.jpg";
import heroMob from "../../assets/images/main/hero-mob.jpg";
import heroMob2x from "../../assets/images/main/hero-mob-2x.jpg";
import uglyGuy from "../../assets/images/main/hero-guy.png";
import yellow from "../../assets/images/main/yellow1.png";
import yellow2 from "../../assets/images/main/yellow2.png";
import yellow3 from "../../assets/images/main/yellow3.png";
import scrollDown from "../../assets/images/main/goDown.png";

import {
  Container,
  HeroGuy,
  ScrollDownBox,
  Text1,
  Text2,
  YellowOne,
  YellowThree,
  YellowTwo,
} from "./Banner.styled";
const Banner = () => {
  return (
    <Container>
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet={`${heroImg} 1x, ${heroImg2x} 2x`}
          alt="dark background"
        />
        <source
          media="(min-width: 360px)"
          srcSet={`${heroMob} 1x, ${heroMob2x} 2x`}
          alt="dark background"
        />
        <img src={heroImg} alt="" />
      </picture>

      <YellowThree src={yellow3} alt="" />
      <YellowTwo src={yellow2} alt="" />
      <YellowOne src={yellow} alt="" />
      <HeroGuy src={uglyGuy} alt="" />
      <Slider />
      <ScrollDownBox>
        <Text1>Гортати до низу</Text1>
        <Text2>аби дізнатися більше</Text2>
        <img src={scrollDown} alt="" />
      </ScrollDownBox>
    </Container>
  );
};

export default Banner;
