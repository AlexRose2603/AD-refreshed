import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    margin-top: 20%;
  }
`;

export const BtnStyles = `
   padding: 24px 30px;
   font-weight: 700;
   font-size: 20px;
    border-radius: 50px;
   cursor: pointer;
   transition: all 0.4s ease;
   text-align:center;
   
  @media screen and (min-width: 1280px) and (max-width: 1919px) {
   padding: 16px 20px;
   font-size: 16px;
   border-radius: 33px;
  }

  @media screen and (min-width:769px) and (max-width:1279px) {
    width:80%;
  }
   @media screen and (min-width: 360px) and (max-width: 768px) {
    width: 100%;
    padding: 20px 0;
     font-size: 16px;
  }
`;
export const LearnMoreBtn = styled(ScrollLink)`
  ${BtnStyles}
  background-color: #FE9901;
  border: 2px solid #fe9901;
  color: black;
  &:hover {
    background-color: transparent;
    color: #fe9901;
  }
`;

export const JoinBtn = styled(Link)`
  ${BtnStyles}
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.41);
  color: white;
  &:hover {
    background-color: #fe9901;
    color: black;
  }
`;
