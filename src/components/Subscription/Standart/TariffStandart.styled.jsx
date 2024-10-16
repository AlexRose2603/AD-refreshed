import styled from "styled-components";

export const ImgWrapper = styled.div`
  position: relative;
  margin-bottom: 100px;
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    margin-bottom: 60px;
  }

  img {
    max-height: 294px;
    object-fit: cover;
    @media screen and (min-width: 360px) and (max-width: 1279px) {
      height: 153px;
    }
  }
`;
export const Title = styled.h2`
  position: absolute;
  text-align: center;
  font-size: 86px;
  font-weight: 900;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    font-size: 45px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 56px;
  font-weight: 800;
  letter-spacing: 0;
  margin-bottom: 40px;

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    font-size: 35px;
    text-align: center;
  }
`;

export const Block = styled.div`
  display: flex;
  gap: 30px;

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    flex-direction: column;
  }
`;

export const DetailsBlock = styled.div`
  background-color: white;
  border-radius: 40px;
  padding: 50px;
  /* width: 70%; */
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    padding: 20px;
  }
`;

export const BuyTariffBlock = styled.div`
  background-color: white;
  border-radius: 40px;
  padding: 40px 20px;
`;

export const DetailsInfoList = styled.ul`
  margin-bottom: 20px;
`;

export const InfoItem = styled.li`
  display: flex;
  align-items: center;
  row-gap: 30px;
  column-gap: 20px;

  @media screen and (min-width: 360px) and (max-width: 768px) {
    justify-content: center;
  }
`;

export const MonthPeople = styled.div`
  display: flex;
  align-items: center;
  row-gap: 30px;
  column-gap: 20px;
  @media screen and (min-width: 360px) and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ItemBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 500;

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    font-size: 14px;
  }
`;
export const Price = styled.p`
  font-size: 30px;
  font-weight: 700;
  line-height: 35px;

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    font-size: 20px;
  }
`;
