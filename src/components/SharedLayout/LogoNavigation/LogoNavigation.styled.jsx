import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { TfiHeart } from "react-icons/tfi";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";

export const Container = styled.div`
  padding: 25px 100px;
  display: flex;
  align-items: center;
  gap: 30px;
  position: ${({ isMainPage }) => (isMainPage ? "absolute" : "relative")};
  background-color: ${({ isMainPage }) => (isMainPage ? "none" : "white")};
  z-index: 5;
  width: 100%;

  @media screen and (min-width: 360px) and (max-width: 768px) {
    padding: 25px 30px;
  }
`;
export const LogoLink = styled(NavLink)`
  img {
    width: 40px;
    height: 20px;
    display: inline-block;
  }
`;
export const BurgerIconWrapper = styled.div`
  margin-left: auto;
  position: relative;
  z-index: 150;
  cursor: pointer;
`;

export const BurgerIcon = styled(RxHamburgerMenu)`
  width: 30px;
  height: 30px;
  color: ${({ isMainPage }) => (isMainPage ? "white" : "black")};
`;

export const NavList = styled.ul`
  display: flex;
  gap: 60px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    gap: 30px;
  }
`;

export const Item = styled.li`
  color: ${({ isMainPage }) => (isMainPage ? "white" : "black")};
  position: relative;
`;
const BtnStyles = `
font-family: "Exo 2", sans-serif;
font-weight: 500;
font-size: 16px;
  letter-spacing: 1.6;
  color: ${({ isMainPage }) => (isMainPage ? "white" : "black")};
  padding: 8px 12px;
  transition: all 0.4s ease;
  &:hover {
    color: #FE9901;
  }

  @media screen and (min-width: 1280px) and (max-width:1919px) {
    font-size:14px;
  }
`;

export const ScrollLink = styled(Link)`
  ${BtnStyles}
  cursor: pointer;
`;

export const MainNavLink = styled(NavLink)`
  ${BtnStyles}
  color: ${({ isMainPage }) => (isMainPage ? "white" : "black")};
  &.active {
    color: #fe9901;

    &::after {
      content: "";
      display: block;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -5px;
      width: 90%;
      height: 2px;
      background-color: #fe9901;
    }
  }
`;
export const ClientTariff = styled.div`
  font-size: 18px;
  color: ${({ isMainPage }) => (isMainPage ? "white" : "black")};
`;

export const ShoppingBtnBox = styled.div`
  margin-left: auto;
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  button {
    background-color: transparent;
    border: none;
  }
`;
const HeartCartSvg = `
   width: 22px;
  height: 22px;
  color: white;
`;

export const HeartBtn = styled(TfiHeart)`
  ${HeartCartSvg}
`;
export const CartBtn = styled(BsHandbag)`
  ${HeartCartSvg}
  position: relative;
`;

export const CartCount = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid white;
  background-color: #f79443;
  font-size: 12px;
  color: white;
  position: absolute;
  right: 2%;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
