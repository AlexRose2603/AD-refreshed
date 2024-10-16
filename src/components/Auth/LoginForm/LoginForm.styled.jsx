import { Field, Form } from "formik";
import styled from "styled-components";
// import backImg from "../../../assets/images/swiper1.jpg";

// export const OverlayLog = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100.7vh;
//   background: rgba(0, 0, 0, 0.8);
//   z-index: 2;
//   overflow: hidden;
// `;

export const StyledForm = styled(Form)`
  padding: 40px;
  background-color: white;
  width: 716px;
  border-radius: 30px;
  margin: 0 auto;

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    /* width: 330px; */
    max-width: 80%;
  }
`;

export const FieldContainer = styled.div`
  position: relative;
  background: #f6f7fb;
  margin-bottom: 20px;
  border-radius: 30px;
  z-index: 3;
`;

export const StyledInput = styled(Field)`
  padding: 25px;
  margin-top: 5px;
  background-color: transparent;
  border: none;
  width: 100%;
  outline: none;
  font-size: 22px;
  margin-left: auto;
  transition: border-color 0.3s ease;
  &:focus {
    border: 1px solid #cacaca;
    border-radius: 30px;
  }
  &.error {
    border-color: tomato;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    padding: 20px;
    font-size: 16px;
    border-radius: 22px;
    margin-top: 3px;
  }

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    font-size: 14px;
    padding: 20px;
  }
`;

export const Label = styled.label`
  /* font-size: 16px;
  color: #cd9c8a;
  position: absolute;
  top: -10px;
  transition: all 0.3s ease; */

  /* ${FieldContainer}:focus-within &,
  ${StyledInput}:valid + & {
    transform: translateY(-1px);
    font-size: 14px; */
  /* } */
`;
export const ErrorLogMsg = styled.div`
  color: tomato;
  font-size: 16px;
  margin-top: -18px;
  padding-left: 25px;
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    font-size: 12px;
  }
`;

export const LoginBtn = styled.button`
  padding: 24px 30px;
  text-align: center;
  display: block;
  margin: 0 auto 30px;
  width: 100%;
  background-color: #fe9901;
  border: 1px solid #fe9901;
  border-radius: 50px;
  font-size: 20px;
  font-weight: bold;
  transition: all 0.3s ease;
  &:hover {
    color: black;
    background-color: #fe9901;
  }

  @media screen and (min-width: 360px) and (max-width: 1919px) {
    padding: 20px 25px;
    font-size: 16px;
    border-radius: 40px;
  }
`;

export const LastText = styled.p`
  color: rgba(38, 38, 38, 0.4);
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  span {
    color: #fe9901;
    text-decoration: underline;
  }
  @media screen and (min-width: 360px) and (max-width: 768px) {
    font-size: 14px;
    letter-spacing: 0;
  }
`;

export const FailedLogInMsg = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: tomato;
  text-align: center;
  margin-bottom: 15px;

  @media screen and (min-width: 360px) and (max-width: 1919px) {
    font-size: 14px;
  }
`;
