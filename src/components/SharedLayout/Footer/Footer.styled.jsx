import styled from "styled-components";
// import { BsPersonVcard } from "react-icons/bs";
// import { MdPersonOutline } from "react-icons/md";
import { BiLogoTelegram } from "react-icons/bi";
import { SiInstagram } from "react-icons/si";
import { TfiFacebook } from "react-icons/tfi";
import { TiSocialYoutube } from "react-icons/ti";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";

const IconStyles = `
 fill: #262626;
  width: 32px;
  height: 32px;
  transition: fill 0.3s ease;

   @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 20px;
    height: 20px;
  }

   @media screen and (min-width: 360px) and (max-width: 768px) {
    width: 22px;
    height: 22px;
  }
`;

export const Container = styled.div`
  padding: 93px 0;
  display: flex;
  gap: 193px;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 600;
  background-color: #262626;
  width: 100%;
  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    padding: 23px 130px;
    gap: 130px;
  }

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    padding: 40px 42px 40px 67px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 35px;
  }
`;

export const LogoImg = styled.img`
  width: 105px;
  height: 53px;
  margin: 0 auto;
  margin-bottom: 40px;
  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 70px;
    height: 35px;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 360px) and (max-width: 768px) {
    width: 88px;
    height: 42px;
    margin-bottom: 35px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 25px;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;

  @media screen and (min-width: 360px) and (max-width: 1919px) {
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 16px;
  }
`;

export const LinksBlock = styled.div`
  display: flex;
  gap: 100px;

  a {
    color: white;
    font-size: 16px;
    line-height: 19px;
    transition: all 0.4s ease;
    &:hover {
      color: #fe9901;
    }

    @media screen and (min-width: 1280px) and (max-width: 1919px) {
      font-size: 12px;
      line-height: 14px;
    }

    @media screen and (min-width: 360px) and (max-width: 768px) {
      font-size: 13px;
    }
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    gap: 65px;
  }

  @media screen and (min-width: 360px) and (max-width: 768px) {
    flex-direction: column;
    gap: 45px;
  }
`;
export const Block = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    gap: 10px;
    min-width: 100px;
  }

  @media screen and (min-width: 360px) and (max-width: 768px) {
  }
`;

export const MenuLink = styled(Link)`
  color: white;
  font-size: 16px;
  line-height: 19px;
  transition: all 0.4s ease;
  &:not(:last-child) {
    margin-bottom: 16px;
  }

  &:hover {
    color: #fe9901;
  }
  @media screen and (min-width: 360px) and (max-width: 1919px) {
    font-size: 12px;
    line-height: 14px;
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;

//////////////////////////////////////////////////

export const Socials = styled.div`
  margin-bottom: 30px;
`;

export const SocList = styled.ul`
  display: flex;

  gap: 20px;
`;

export const SocItem = styled.li`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #fe9901;
    transform: scale(1.1);
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 32px;
    height: 32px;
  }

  @media screen and (min-width: 360px) and (max-width: 768px) {
    width: 41px;
    height: 41px;
  }
`;

export const SocLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Facebook = styled(TfiFacebook)`
  ${IconStyles}
  ${SocItem}:hover & {
    fill: #121213;
    transform: scale(1.1);
  }
`;
export const Insta = styled(SiInstagram)`
  ${IconStyles}
  ${SocItem}:hover & {
    fill: #121213;
    transform: scale(1.1);
  }
`;

export const Telegram = styled(BiLogoTelegram)`
  ${IconStyles}
  ${SocItem}:hover & {
    fill: #121213;
    transform: scale(1.1);
  }
`;

export const YouTube = styled(TiSocialYoutube)`
  ${IconStyles}
  ${SocItem}:hover & {
    fill: #121213;
    transform: scale(1.1);
  }
`;

// export const UpButton = styled(Link)`
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   background-color: #cd9c8a;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition: all 0.3s ease;
//   margin-left: auto;
//   margin-right: 50px;
//   &:hover {
//     background-color: #f79443;
//     transform: scale(1.1);
//   }
// `;
