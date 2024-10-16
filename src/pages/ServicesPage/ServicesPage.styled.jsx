import styled from "styled-components";

const ItemStyles = `
  border: 1px solid #e6e7eb;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;

export const Box = styled.div`
  position: relative;
  margin-bottom: 100px;
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    margin-bottom: 60px;
  }
`;

export const ViewPic = styled.img`
  max-height: 294px;
  object-fit: cover;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    max-height: 196px;
  }
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    height: 153px;
  }
`;

export const Title = styled.h2`
  font-size: 86px;
  font-weight: 900;
  letter-spacing: 0;

  text-align: center;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 769px) and (max-width: 1919px) {
    font-size: 58px;
  }

  @media screen and (min-width: 360px) and (max-width: 768px) {
    font-size: 35px;
    width: 300px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 56px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    font-size: 46px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    font-size: 35px;
    margin-bottom: 25px;
  }
`;

export const ServiceList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  border-radius: 35px;
  margin-bottom: 100px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    border-radius: 25px;
    margin-bottom: 94px;
  }

  @media screen and (min-width: 360px) and (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    margin-bottom: 60px;
  }
`;

export const Item = styled.li`
  ${ItemStyles}
  padding: 40px;
  width: 33.33%;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    padding: 30px;
    height: 265px;
  }
  @media screen and (min-width: 360px) and (max-width: 768px) {
    width: 100%;
    padding: 30px;
  }
`;

export const ItemName = styled.h4`
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

  span {
    color: #fe9901;
    font-weight: 700;
  }

  @media screen and (min-width: 360px) and (max-width: 1919px) {
    font-size: 14px;
  }
`;
export const Item2 = styled.li`
  ${ItemStyles}
  padding: 20px;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    padding: 15px;
  }
  @media screen and (min-width: 360px) and (max-width: 768px) {
    width: 100%;
    padding: 25px 15px;
  }
`;

export const BlockOfComplaints = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 100px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    gap: 20px;
    margin-bottom: 94px;
  }
  @media screen and (min-width: 360px) and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 60px;
    gap: 45px;
  }
`;

export const Block = styled.div`
  background-color: white;
  border-radius: 35px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    border-radius: 25px;
  }
  @media screen and (min-width: 360px) and (max-width: 768px) {
    border-radius: 28px;
    width: 100%;
  }
`;

export const BlockName = styled.p`
  padding: 60px 40px;
  font-size: 27px;
  font-weight: 700;
  text-align: center;
  /* height: 203px; */

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    padding: 45px 30px;
    font-size: 20px;
    height: 150px;
  }
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    font-size: 20px;
    line-height: 23px;
    /* height: 160px; */
    padding: 25px;
  }
`;

export const BlockList = styled.ul`
  display: flex;
  @media screen and (min-width: 360px) and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const BlockItem = styled.li`
  ${ItemStyles}
  padding: 40px;
  width: 50%;
  height: 210px;
  p {
    font-size: 20px;
    font-weight: 700;
    margin-top: 20px;

    @media screen and (min-width: 360px) and (max-width: 1919px) {
      font-size: 16px;
      margin-top: 15px;
    }
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    padding: 30px;
    height: 180px;
  }
  @media screen and (min-width: 360px) and (max-width: 768px) {
    width: 100%;
    padding: 25px;
    height: auto;
  }
`;

export const ListOfDocs = styled.ul`
  display: flex;
  margin-bottom: 100px;
  background-color: white;
  border-radius: 35px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    margin-bottom: 94px;
    border-radius: 25px;
  }
  @media screen and (min-width: 360px) and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 60px;
    border-radius: 28px;
  }
`;

export const ItemName2 = styled.p`
  margin: 20px 0;
  font-size: 20px;
  font-weight: 700;

  p {
    font-size: 16px;
    @media screen and (min-width: 1280px) and (max-width: 1919px) {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 360px) and (max-width: 1919px) {
    margin: 15px 0;
    font-size: 16px;
  }
`;

export const DiscountNotice = styled.div`
  padding: 33px 40px;
  background-color: #262626;
  border-radius: 62px;
  text-align: center;
  color: white;
  font-size: 18px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    padding: 25px 0;
    border-radius: 45px;
    font-size: 13px;
    line-height: 16px;
  }

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    padding: 25px 20px;
    border-radius: 28px;
    font-size: 14px;
  }

  span {
    color: #fe9901;
    font-weight: 700;
  }
`;
