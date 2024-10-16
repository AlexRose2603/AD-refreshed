import styled from "styled-components";
import { BsPersonVcard } from "react-icons/bs";
import { MdPersonOutline } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import { GrLocation } from "react-icons/gr";

export const ContactsBlock = styled.div`
  color: white;
`;
export const ContactsList = styled.ul`
  font-size: 16px;
  line-height: 19px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    font-size: 12px;
    line-height: 14px;
  }

  @media screen and (min-width: 360px) and (max-width: 768px) {
    font-size: 13px;
  }
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 360px) and (max-width: 1919px) {
    gap: 10px;
  }
`;

export const CircleBox = styled.div`
  width: 28px;
  height: 28px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 360px) and (max-width: 1919px) {
    width: 20px;
    height: 20px;
  }
`;

const IconsBlackWhiteStyles = ` 
fill: black;
  width: 18px;
  height: 18px;

   @media screen and (min-width: 360px) and (max-width: 1919px) {
    width: 14px;
    height: 14px;
  }`;

export const MailIcon = styled(MdMailOutline)`
  ${IconsBlackWhiteStyles}
`;

export const PhoneIcon = styled(PiPhone)`
  ${IconsBlackWhiteStyles}
`;

export const LocationIcon = styled(GrLocation)`
  ${IconsBlackWhiteStyles}
  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 20px;
    height: 14px;
  }
`;

export const IpnIcon = styled(BsPersonVcard)`
  ${IconsBlackWhiteStyles}
`;

export const PersonIcon = styled(MdPersonOutline)`
  ${IconsBlackWhiteStyles}
  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 18px;
    height: 16px;
  }
`;
export const ContactLink = styled.a`
  color: white;
  margin-right: 10px;
  font-size: 16px;
  transition: all 0.4s ease;
  &:hover {
    color: #fe9901;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    font-size: 12px;
  }
  @media screen and (min-width: 360px) and (max-width: 1919px) {
    font-size: 13px;
  }
`;
