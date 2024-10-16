import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  color: black;
  padding: 80px 100px 100px;
`;
export const GoBackLink = styled(Link)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #cd9c8a;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  margin-left: -70px;
  /* margin-top: -50px; */
  &:hover {
    background-color: #f79443;
    transform: scale(1.1);
  }
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 40px;
  /* justify-content: space-between; */
`;

export const ProductImg = styled.img`
  max-width: 600px;
  height: 600px;
  object-fit: cover;
`;

export const InfoBox = styled.div`
  width: 35%;
  padding: 15px 20px;
`;

export const ProductName = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
`;

export const Price = styled.p`
  font-size: 22px;
  margin-bottom: 15px;
`;

export const Description = styled.p`
  font-size: 20px;
  margin-bottom: 65px;
`;
export const Amount = styled.p`
  font-size: 18px;
`;

export const PurchaseBox = styled.div`
  margin-bottom: 20px;
  margin-top: 10px;
  display: flex;
  gap: 20px;
`;

export const AddToCartBtn = styled.button`
  padding: 15px 35px;
  width: 100%;
  font-size: 18px;
  font-weight: 300;
  text-transform: uppercase;
  border: 1px solid black;
  &:hover {
    background-color: #f79443;
    border: 1px solid #f79443;
    color: white;
  }
`;

export const BuyBtnLink = styled(Link)`
  padding: 15px;
  font-size: 18px;

  text-align: center;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: 1px solid #f79443;
  background-color: #f79443;
  transition: all 0.4s ease;
  &:hover {
    background-color: black;
  }
`;
