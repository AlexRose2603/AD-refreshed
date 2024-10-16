import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  padding: 50px 150px;
  color: black;
`;

export const Title = styled.h2`
  color: black;
  text-align: center;
  margin-bottom: 30px;
  font-size: 36px;
`;

export const SectionsList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const SectionItem = styled.li`
  color: black;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;

  &:first-child {
    width: 380px;
  }
  &:not(:first-child) {
    width: 170px;
    text-align: right;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #b4b2b2;
  margin-bottom: 25px;
`;
export const OrderInfoText = styled.div`
  text-align: center;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: bold;
`;
export const OrderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CouponWrapper = styled.div`
  p {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

export const CouponInput = styled.div`
  input {
    max-width: 350px;
    padding: 15px 0 15px 10px;
    border: 1px solid black;
    margin-right: 25px;
    &:focus {
      outline-color: #f79443;
    }
  }
`;

export const ApplyCouponBtn = styled.button`
  width: 220px;
  padding: 13px 22px;
  text-transform: uppercase;
  background-color: transparent;
  border: 1px solid black;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 1.1px;
  &:hover {
    background-color: #f79443;
    border-color: #f79443;
    color: white;
  }
`;

export const LinksBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 40%;
`;
export const TotalPrice = styled.p`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;

const CommonLinkStyles = `
text-transform: uppercase;
padding: 10px 0;
font-size: 18px;
  font-weight: bold;
  text-align: center;

`;

export const CheckoutLink = styled(Link)`
  ${CommonLinkStyles}
  background-color: #f79443;
  color: white;
`;

export const ReturnToStoreLink = styled(Link)`
  ${CommonLinkStyles}
  border: 1px solid black;
  color: black;
`;
