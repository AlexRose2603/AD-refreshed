import { Field, Form } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";
import regImg from "../../../assets/images/registration.jpg";
import regImgMob from "../../../assets/images/registration-mob.jpg";
import { LiaEyeSolid } from "react-icons/lia";
import { LiaEyeSlash } from "react-icons/lia";

export const OverReg = styled.div`
  background-image: url(${regImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  padding: 145px 0;
  margin-bottom: -1px;

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    background-image: url(${regImgMob});
    padding: 35px 0;
  }
`;

export const TitleBox = styled.div`
  text-align: center;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    gap: 10px;
  }

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    gap: 13px;
    margin-bottom: 30px;
  }

  img {
    width: 58px;
    height: 29px;
    margin: 0 auto;
  }

  p {
    color: rgba(38, 38, 38, 0.4);
    @media screen and (min-width: 360px) and (max-width: 1279px) {
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
    }
  }
`;

export const Title = styled.h2`
  font-size: 27px;
  font-weight: 700;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    font-size: 25px;
  }
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0;
  }
`;

export const StyledForm = styled(Form)`
  max-width: 1238px;
  border: 1px solid #e6e7eb;
  border-radius: 30px;
  margin: 0 auto;
  padding: 40px;
  background-color: white;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    padding: 35px;
    max-width: 1057px;
  }

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    padding: 33px 16px;
    /* max-width: 328px; */
    max-width: 80%;
    border-radius: 24px;
  }
`;

export const List = styled.ul`
  margin-bottom: 40px;
  display: flex;
  gap: 20px;

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const ListItem = styled.li`
  background: #f6f7fb;
  margin-bottom: 20px;
  border-radius: 30px;
  position: relative;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    border-radius: 25px;
    margin-bottom: 15px;
  }
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    border-radius: 23px;
    margin-bottom: 16px;
  }
`;

export const Input = styled(Field)`
  padding: 25px;
  font-size: 18px;
  font-weight: 500;
  outline: none;
  border: 1px solid transparent;
  transition: border-color 0.3s;
  background-color: transparent;
  width: 100%;
  border-radius: 30px;
  position: relative;
  margin-top: 5px;
  &:focus {
    border-color: #cacaca;
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
    padding: 20px 33px;
    border-radius: 24px;
    font-size: 14px;
    font-weight: 500;
    margin-top: 0;
    &::placeholder {
    }
  }
`;

export const Label = styled.label`
  /* font-size: 18px;
  color: #7d7d7d;
  padding-left: 30px;

  transition: transform 0.3s, font-size 0.3s; */
  /* ${ListItem}:focus-within &,
  ${Input}:valid + & {
  } */
`;
export const ErrorMsg = styled.div`
  color: tomato;
  margin-top: -18px;
  padding-left: 20px;
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    font-size: 12px;
  }
`;

const PasswordIconStyles = `
 position: absolute;
  width: 25px;
  height: 25px;
  right: 10%;
  top: 40%;
  @media screen and (min-width: 360px) and (max-width: 768px) {
    width:18px;
    height: 18px;
    top: 38%;
  }`;

export const ClosedEyeIcon = styled(LiaEyeSolid)`
  ${PasswordIconStyles}
`;

export const OpenedEyeIcon = styled(LiaEyeSlash)`
  ${PasswordIconStyles}
`;

export const SubmitBtn = styled.button`
  padding: 24px 30px;
  text-align: center;
  display: block;
  margin: 0 auto;
  background-color: #fe9901;
  border: 1px solid #fe9901;
  border-radius: 50px;
  font-size: 20px;
  font-weight: 700;
  width: 50%;
  transition: all 0.3s ease;
  &:hover {
    color: white;
    transform: scale(1.05);
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    padding: 20px 25px;
    font-size: 16px;
    border-radius: 40px;
  }

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    padding: 20px 25px;
    font-size: 16px;
    border-radius: 40px;
    width: 100%;
  }
`;

export const LoginText = styled.p`
  color: #c74810;
  text-align: center;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  margin-top: 20px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    font-size: 14px;
    margin-top: 15px;
  }

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    flex-direction: column;
    font-size: 14px;
    margin-top: 16px;
  }
`;

export const StyledLink = styled(Link)`
  color: #fe9901;
  font-size: 17px;
  transition: all 0.3s ease;
  &:hover {
    color: black;
  }
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    font-size: 14px;
  }
`;
