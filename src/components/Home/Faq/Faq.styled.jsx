import styled from "styled-components";
import { SlArrowDown } from "react-icons/sl";

export const Container = styled.div`
  padding: 120px 230px;
  background-color: white;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    padding: 80px 150px;
  }

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    padding: 0 15px;
    margin-bottom: 60px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 56px;
  font-weight: 800;
  line-height: 67.2px;
  margin-bottom: 60px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    font-size: 46px;
    line-height: 46px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    font-size: 35px;
    margin-bottom: 30px;
  }
`;

export const FaqBox = styled.div``;

export const BtnList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 60px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 360px) and (max-width: 768px) {
    /* justify-content: space-between; */
  }
`;

export const BtnItem = styled.li`
  border: 1px solid #e6e7eb;
  border-radius: 50px;
`;

export const BtnFaq = styled.button`
  padding: 24px 30px;
  background-color: white;
  font-size: 20px;
  font-weight: 700;
  transition: all 0.4s ease;
  border-width: 0;

  &:first-child {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    @media screen and (min-width: 360px) and (max-width: 768px) {
      border-top-left-radius: 40px;
      border-bottom-left-radius: 40px;
    }
  }
  &:last-child {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    @media screen and (min-width: 360px) and (max-width: 768px) {
      border-top-right-radius: 40px;
      border-bottom-right-radius: 40px;
    }
  }

  &:hover,
  &:active {
    background-color: #fe9901;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    padding: 16px 20px;
    font-size: 14px;
    line-height: 16px;
  }

  @media screen and (min-width: 360px) and (max-width: 768px) {
    padding: 20px 10px;
    font-size: 14px;
    line-height: 16px;
  }
`;

export const QuestionList = styled.ul`
  width: 100%;
`;

export const QuestionArrow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const Question = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 27px;
  font-weight: 700;
  line-height: 32px;
  padding-bottom: 24px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    font-size: 20px;
    line-height: 24px;
    padding-bottom: 16px;
  }
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    font-size: 20px;
    padding-bottom: 20px;
    line-height: 120%;
    width: 95%;
  }
`;
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e6e7eb;
`;

export const Answer = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  width: 95%;
  display: none;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    font-size: 14px;
  }
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    font-size: 14px;
    padding: 0;
  }
`;

export const Arrow = styled(SlArrowDown)`
  cursor: pointer;
  font-size: 24px;

  @media screen and (min-width: 360px) and (max-width: 1919px) {
    font-size: 18px;
  }
`;
