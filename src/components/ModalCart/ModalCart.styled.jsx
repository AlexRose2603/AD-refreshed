import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { GoTrash } from "react-icons/go";

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 18px;
    color: white;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    min-height: 0;
  }
  to {
    opacity: 1;
    min-height: 400px;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    min-height: 400px;
  }
  to {
    opacity: 0;
    min-height: 0;
  }
`;

export const Wrapper = styled.div`
  width: 30%;
  background-color: #f79443;
  position: absolute;
  z-index: 20;
  top: 85%;
  left: 69%;
  border: 2px solid #c74810;
  padding: 20px 15px;
  overflow: hidden;
  max-height: 600px;
  overflow-y: scroll;

  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  animation: ${(props) =>
    props.isOpen
      ? css`
          ${fadeIn} 0.5s ease forwards
        `
      : css`
          ${fadeOut} 0.5s ease forwards
        `};
`;

export const CartTitle = styled.h3`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 22px;
  color: white;
  margin-bottom: 10px;
`;
export const Line = styled.div`
  height: 2px;
  width: 100%;
  background-color: #c74810;
  margin-bottom: 20px;
`;
export const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const CartImg = styled.img`
  width: 90px;
  height: 100px;
  margin-right: 20px;
`;

export const Info = styled.div`
  text-align: left;
  margin-right: 20px;
  width: 40%;
  p {
    color: white;
    font-size: 16px;
  }
`;

export const ModalProductName = styled.p`
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Trash = styled(GoTrash)`
  width: 18px;
  height: 18px;
  fill: white;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;
export const TotalPrice = styled.p`
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-align: right;
  margin-bottom: 20px;
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 15px;
`;

const CommonLinkStyles = `
border: 1px solid white;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
   text-align: center;
  padding: 10px 0;
    color: white;
  background-color: #cd9c8a;
  border-radius: 5px;
  transition: all 0.3s ease;
`;
export const CheckoutLink = styled(Link)`
  ${CommonLinkStyles}
  &:hover {
    background-color: transparent;
    border: 1px solid black;
  }
`;

export const CartLink = styled(Link)`
  ${CommonLinkStyles}
  background-color:transparent;
  &:hover {
    background-color: #cd9c8a;
    border: 1px solid black;
  }
`;
