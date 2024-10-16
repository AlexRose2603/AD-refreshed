import { Link } from "react-router-dom";
import styled from "styled-components";

export const Subtitle = styled.h2`
  font-size: 56px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 70px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    font-size: 46px;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    font-size: 35px;
    margin-bottom: 35px;
  }
`;

export const ListOfServices = styled.ul`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 60px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    margin-bottom: 43px;
    gap: 10px;
  }

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    flex-direction: column;
    margin-bottom: 30px;
  }
`;
export const Item = styled.li`
  padding: 40px;
  background-color: white;
  border-radius: 30px;
  border: 1px solid #e6e7eb;
  text-align: center;
  font-family: "Exo 2", sans-serif;
  width: 477px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    padding: 30px;
    border-radius: 22px;
    width: 348px;
  }

  @media screen and (min-width: 769px) and (max-width: 1279px) {
    margin: 0 auto;
  }
  @media screen and (min-width: 360px) and (max-width: 768px) {
    padding: 33px;
    border-radius: 25px;
    width: 330px;
    margin: 0 auto;
  }
`;
export const ItemTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 20px 0;

  @media screen and (min-width: 360px) and (max-width: 1919px) {
    margin: 15px 0;
    font-size: 16px;
  }
`;

export const ItemText = styled.p`
  font-size: 16px;
  font-weight: 400;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    font-size: 14px;
  }
`;

export const MoreDetailsLink = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`;
export const LinkToDetails = styled(Link)`
  color: #262626;
  padding: 24px 30px;
  border-radius: 50px;
  border: 1px solid #fe9901;
  font-weight: 700;
  font-size: 20px;
  transition: all 0.4s ease;
  &:hover {
    background-color: #fe9901;
    color: white;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    font-size: 16px;
    border-radius: 36px;
    padding: 17px 22px;
  }
  @media screen and (min-width: 360px) and (max-width: 1919px) {
    font-size: 16px;
    border-radius: 40px;
    padding: 20px 25px;
  }
`;
