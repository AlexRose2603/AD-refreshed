import styled from "styled-components";
import { MdOutlineDone } from "react-icons/md";

export const SubTitle = styled.h4`
  font-size: 56px;
  font-weight: 800;
  line-height: 67.2px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    font-size: 46px;
    line-height: 46px;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    font-size: 35px;
    margin-bottom: 25px;
    line-height: 120%;
    letter-spacing: 0%;
  }
`;

export const TarifBox = styled.div`
  display: flex;
  gap: 210px;
  margin-bottom: 100px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    gap: 150px;
    margin-bottom: 70px;
  }

  @media screen and (min-width: 769px) and (max-width: 1279px) {
    gap: 3%;
  }

  @media screen and (min-width: 360px) and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 0;
    margin-bottom: 30px;
  }
`;

export const SectionName = styled.div`
  width: 568px;

  h3 {
    text-align: left;
  }

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    width: auto;
  }
`;

export const TarifDescription = styled.div`
  width: 684px;
  p {
    font-size: 18px;
    &:not(:first-child) {
      margin-top: 20px;
    }
    @media screen and (min-width: 360px) and (max-width: 768px) {
      font-size: 14px;
      font-weight: 400;
      line-height: 150%;
    }
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    font-size: 14px;
    line-height: 21px;
  }
  @media screen and (min-width: 360px) and (max-width: 768px) {
    width: auto;
  }
`;

////////////TARIFFS///////////////
export const TariffsWrapper = styled.div`
  display: flex;
  gap: 15px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    gap: 10px;
    justify-content: center;
  }

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    display: flex;
    /* flex-wrap: wrap; */
    align-items: center;
    justify-content: center;
    row-gap: 50px;
  }

  /* @media screen and (min-width: 360px) and (max-width: 768px) {
    flex-wrap: nowrap;
    align-items: center;
    gap: 15px;
  } */
`;

export const TariffList = styled.ul`
  text-align: center;
  display: flex;
  width: 100%;

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    flex-direction: column;
  }
`;

export const TariffItem = styled.li`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 30px;
  border: 1px solid #e6e7eb;
  transition: all 0.4s ease;
  &:hover {
    border: 1px solid #fe9901;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    padding: 30px 15px;
    border-radius: 20px;
  }

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    padding: 30px 15px;
    border: 1px solid #fe9901;
  }
`;

export const Name = styled.div`
  font-size: 27px;
  font-weight: 700;
  padding: 0 43px;
  height: 100px;
  text-align: center;
  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    font-size: 25px;
    padding: 0 25px;
  }
  @media screen and (min-width: 360px) and (max-width: 768px) {
    font-size: 25px;
    padding: 0 20px;
    letter-spacing: 0;
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 85%;
  background-color: #e4e4e4;
  margin: 20px auto;

  @media screen and (min-width: 360px) and (max-width: 1919px) {
    margin: 15px auto;
    width: 93%;
  }
`;
export const Price = styled.div`
  font-size: 36px;
  font-weight: 700;
  text-align: center;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    font-size: 26px;
    padding: 0 25px;
  }
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    font-size: 26px;
    line-height: 35px;
  }
`;

export const BenefitsList = styled.ul`
  padding: 0 30px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    padding: 0 10px;
  }
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    padding: 0;
  }
`;

export const Item = styled.li`
  display: flex;

  gap: 10px;
  text-align: left;
  font-size: 16px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 360px) and (max-width: 1919px) {
    font-size: 14px;
  }
`;

export const BenefitItem = styled.p`
  /* margin-bottom: 10px; */
`;

export const DoneIcon = styled(MdOutlineDone)`
  width: 45px;
  height: 45px;
  fill: #27ae60;
  margin-top: -5px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 30px;
    height: 30px;
  }
`;

export const SubInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  margin-bottom: 20px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

export const MonthsBox = styled.div``;

export const VariableList = styled.ul``;

export const VariableItem = styled.li`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 23px 0;
  width: 100%;
`;

export const SubscribeBtn = styled.button`
  cursor: pointer;
  transition: all 0.4s ease;
  display: block;
  border-radius: 50px;
  border: 1px solid #fe9901;
  background-color: #fe9901;
  margin-top: 20px;
  padding: 23px 191px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  &:hover {
    background-color: #fe9901;
    color: #ffffff;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    border-radius: 36px;
    padding: 16px 0;
    margin-top: 15px;
    font-size: 16px;
  }
  @media screen and (min-width: 360px) and (max-width: 768px) {
    border-radius: 40px;
    padding: 20px 0;
    margin-top: 15px;
    font-size: 16px;
    background-color: #fe9901;
    color: #ffffff;
  }
`;

export const PaginationStyles = styled.div`
  .swiper-pagination {
    position: relative;
    margin-top: 40px;
  }
  .swiper-pagination-bullet {
    width: 13px;
    height: 13px;
    border: 1px solid #fe9901;
  }

  .swiper-pagination-bullet-active {
    background-color: #fe9901;
    width: 15px;
    height: 15px;
  }
`;

export const SlideBox = styled.div`
  .swiper-slide {
    display: flex;
    justify-content: center;
  }
`;

export const Select = styled.select`
  border-width: 0;
  font-size: 16px;

  select::-ms-expand {
    margin-left: 10px;
  }
`;

export const Option = styled.option`
  background-color: white;

  font-size: 12px;

  &:hover {
    color: #fe9901;
  }

  &:checked {
  }
`;
