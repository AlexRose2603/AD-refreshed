import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 270px;
  color: black;
`;

export const BookCover = styled.img`
  margin-bottom: 10px;
  height: 340px;
  object-fit: cover;
`;

export const BookTitle = styled.h2`
  margin-bottom: 10px;
`;
export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.p`
  margin-bottom: 10px;
`;

export const MoreDetailsBtn = styled(Link)`
  font-size: 14px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  font-weight: 300;
  padding: 15px 30px;
  width: 100%;
  color: black;
  border: 2px solid #cd9c8a;
  transition: all 0.3s linear;
  &:hover {
    background-color: #cd9c8a;
    color: white;
  }
`;
