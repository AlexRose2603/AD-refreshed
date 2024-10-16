import styled from "styled-components";
import { GoTrash } from "react-icons/go";
import Counter from "../Shop/AmountChange/AmountChange";

export const Wrapper = styled.ul`
  color: black;
  display: flex;
  gap: 40px;
  /* justify-content: space-around; */
  align-items: center;
  margin-bottom: 25px;

  li {
    &:not(:first-child) {
      width: 170px;
    }

    &:nth-child(2) {
      margin-right: 120px;
    }
    &:last-child {
      text-align: right;
    }
  }
`;

export const ProductImg = styled.img`
  width: 170px;
  height: 200px;
  object-fit: cover;
  margin-right: 20px;
`;

export const ProductName = styled.p`
  font-size: 20px;
`;

export const ProductPrice = styled.p`
  font-size: 20px;
  /* margin-left: 15%; */
`;
export const TotalPrice = styled.p`
  font-size: 20px;
`;

export const CounterCart = styled(Counter)`
  margin-left: 5%;
`;

export const Trash = styled(GoTrash)`
  width: 22px;
  height: 22px;
  cursor: pointer;
  margin-left: auto;
  margin-right: 40px;
  transition: all 0.3s ease;
  &:hover {
    fill: #f79443;
    transform: scale(1.1);
  }
`;
