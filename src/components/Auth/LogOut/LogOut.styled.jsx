import styled from "styled-components";

export const LogoutBtn = styled.button`
  font-size: 18px;
  font-family: "Raleway", sans-serif;
  color: ${({ isMainPage }) => (isMainPage ? "white" : "black")};
  margin-left: auto;
  background-color: transparent;
  padding: 7px;
  border: none;

  @media screen and (max-width: 1279px) {
    display: none;
  }
`;
