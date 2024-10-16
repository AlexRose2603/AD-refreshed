import styled from "styled-components";

export const Box = styled.div`
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
  font-size: 86px;
  font-weight: 900;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (min-width: 360px) and (max-width: 768px) {
    font-size: 45px;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    /* flex-wrap: nowrap; */
    gap: 15px;
  }
`;

export const TariffList = styled.ul`
  display: flex;
  text-align: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    /* flex-wrap: nowrap; */
    justify-content: center;
  }
`;

export const Price = styled.p`
  font-size: 22px;
  color: #bdbdbd;
  margin-bottom: 20px;
  margin-top: 90px;
  margin: 90px auto 20px;
  text-align: center;
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

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s ease, pointer-events 0.5s ease;

  &.visible {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const PopUp = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 70px 30px;
  border-radius: 20px;
  text-align: center;
  border: 2px solid #fe9901;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  min-width: 330px;
  height: 330px;
  opacity: 0;
  pointer-events: none;
  transition: transform 0.5s ease, opacity 0.5s ease;

  &.visible {
    opacity: 1;
    pointer-events: auto;
  }
  @media screen and (min-width: 360px) and (max-width: 768px) {
    height: 250px;
  }
`;

export const NotifyText = styled.div`
  font-size: 26px;
  font-weight: 500;
  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    margin-bottom: 30px;
  }

  @media screen and (min-width: 360px) and (max-width: 768px) {
    font-size: 16px;
  }
`;

const BtnStyles = `
   padding: 15px 55px;
  border-width: 0;
  border-radius: 25px;
   cursor: pointer;
   transform: all 0.2s ease;
  font-weight: 700;
  font-size: 18px;
   &:hover {
    transform: scale(1.1);
   }

    @media screen and (min-width: 1280px) and (max-width: 1919px) {
   padding: 10px 40px;
  }

   @media screen and (min-width: 360px) and (max-width:768px) {
    padding: 10px 35px;
     font-size: 16px;
    
   }
`;

export const OkayBtn = styled.button`
  ${BtnStyles}
  margin-top: 70px;
  margin-right: 50px;
  background-color: #fe9901;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    margin-top: 40px;
    margin-right: 30px;
  }
  @media screen and (min-width: 360px) and (max-width: 768px) {
    margin-top: 30px;
    margin-right: 20px;
  }
`;

export const CloseBtn = styled.button`
  ${BtnStyles}

  &:hover {
    border: 1px solid #fe9901;
  }
`;
