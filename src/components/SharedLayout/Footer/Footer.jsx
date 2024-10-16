// import { animateScroll as scroll } from "react-scroll";
// import { HiMiniArrowUp } from "react-icons/hi2";

import logo from "../../../assets/images/footer/logo.png";
import Contacts from "./Contacts/Contacts";
import {
  Block,
  Container,
  Facebook,
  Insta,
  LinksBlock,
  LogoImg,
  MenuLink,
  SocItem,
  SocLink,
  SocList,
  Socials,
  SubTitle,
  Telegram,
  // UpButton,
  YouTube,
} from "./Footer.styled";

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // };
  return (
    <>
      <Container>
        <div>
          <LogoImg src={logo} alt="" />
          <Socials>
            <SocList>
              <SocItem>
                <SocLink href="https://www.facebook.com/people/%D0%9A%D0%BB%D1%83%D0%B1-%D1%8E%D1%80%D0%B8%D0%B4%D0%B8%D1%87%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B7%D0%B0%D1%85%D0%B8%D1%81%D1%82%D1%83-%D0%B2%D0%BE%D0%B4%D1%96%D1%8F-AD/100085880271956/">
                  <Facebook />
                </SocLink>
              </SocItem>
              <SocItem>
                <SocLink href="https://www.instagram.com/club_a.d/?igshid=MzRlODBiNWFlZA%3D%3D">
                  <Insta />
                </SocLink>
              </SocItem>
              <SocItem>
                <SocLink href="https://t.me/a_d_club_shop">
                  <Telegram />
                </SocLink>
              </SocItem>
              <SocItem>
                <SocLink href="https://www.youtube.com/@advokat_boltik">
                  <YouTube />
                </SocLink>
              </SocItem>
            </SocList>
          </Socials>
        </div>

        <LinksBlock>
          <Block>
            <SubTitle>Мапа сайту</SubTitle>
            <MenuLink to="/" onClick={handleLinkClick}>
              Головна
            </MenuLink>
            <MenuLink to="/services" onClick={handleLinkClick}>
              Наші послуги
            </MenuLink>
          </Block>
          <div style={{ width: "170px" }}>
            <SubTitle>Корисні посилання</SubTitle>
            <a
              href="https://docs.google.com/document/d/191sRiQL-CD70V9gCWi1VVN6QyVlaQ5ZSp4XJTCNvWg0/edit"
              target="_blank"
              rel="noreferrer noopener"
            >
              Договір публічної оферти
            </a>
          </div>
        </LinksBlock>

        <Contacts />

        {/* <UpButton onClick={scrollToTop} smooth={true}>
          {" "}
          <HiMiniArrowUp
            style={{ width: "25px", height: "25px", fill: "#c74810" }}
          />
        </UpButton> */}
      </Container>
    </>
  );
};

export default Footer;
