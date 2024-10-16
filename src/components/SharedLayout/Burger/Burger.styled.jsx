import { Link, NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 15px;
  background-color: #262626;
  position: fixed;
  top: 0;
  z-index: 999;
  overflow: auto;
`;

export const BurgerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px 0;
`;

export const BurgerLogoLink = styled(Link)`
  img {
    width: 40px;
    height: 20px;
  }
`;
export const CloseBtn = styled.div`
  /* padding: 10px 10px 0; */
`;
export const CloseIcon = styled(IoMdClose)`
  fill: #fcfcfc;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 30px;
  margin: 40px 0;
`;

export const NavItem = styled.li`
  position: relative;
`;

export const BurgerNavLink = styled(NavLink)`
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 0;
  color: white;

  &.active {
    color: #fe9901;

    &::after {
      content: "";
      display: block;
      position: absolute;
      left: 50%;
      bottom: -5%;
      transform: translateX(-50%);
      width: 100%;
      height: 1px;
      background-color: #fe9901;
    }
  }
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
`;

const BurgerBtnStyles = `
padding: 20px 0;
width: 100%;
font-size:16px;
font-weight: 700;
border-radius: 50px;
text-align: center;

  @media screen and (min-width: 600px) and (max-width: 1279px) {
      width: 70%;
    
    }
`;

export const RegLink = styled(Link)`
  ${BurgerBtnStyles}
  background-color: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.4);
`;
export const LoginLink = styled(Link)`
  ${BurgerBtnStyles}
  background-color: #fe9901;
  color: black;
`;

export const LogOutBtn = styled.button`
  ${BurgerBtnStyles}
  background-color: #fe9901;
  color: black;
  border-width: 0;
  margin: 0 auto 30px;
  display: block;
`;

export const ContactsWrapper = styled.div`
  padding: 0 35px 30px;
`;
