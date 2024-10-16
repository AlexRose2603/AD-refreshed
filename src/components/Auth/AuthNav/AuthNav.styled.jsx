import styled from "styled-components";
import { Link } from "react-router-dom";
export const AuthLinks = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-left: auto;
  font-size: 16px;

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    display: none;
  }
`;

export const AuthLink = styled(Link)`
  color: ${({ isMainPage }) => (isMainPage ? "white" : "black")};
  font-weight: 500;
  transition: all 0.3s ease;
  &:hover {
    color: #fe9901;
  }
  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    font-size: 14px;
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 20px;
  background-color: white;
`;
