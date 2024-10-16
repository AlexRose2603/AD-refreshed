import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 150px;
  position: relative;

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    margin-bottom: 60px;
  }

  img {
    @media screen and (min-width: 360px) and (max-width: 1279px) {
      height: 100vh;
    }
  }
`;
export const HeroGuy = styled.img`
  position: absolute;
  width: 50%;
  height: 85%;
  top: 15%;
  left: 50%;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    left: 53%;
  }

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    display: none;
  }
`;

export const YellowOne = styled.img`
  position: absolute;
  width: 28%;
  height: 65%;
  top: 35%;
  left: 63%;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    left: 66%;
  }
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    display: none;
  }
`;

export const YellowTwo = styled.img`
  position: absolute;
  width: 30%;
  height: 67%;
  top: 33%;
  left: 62%;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    left: 65%;
  }
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    display: none;
  }
`;

export const YellowThree = styled.img`
  position: absolute;
  width: 32%;
  height: 70%;
  top: 31%;
  left: 61%;
  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    left: 64%;
  }
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    display: none;
  }
`;

export const ScrollDownBox = styled.div`
  color: white;
  text-align: center;
  position: absolute;
  top: 85%;
  left: 48%;
  img {
    width: 23px;
    height: 40px;
    margin: 0 auto;
    @media screen and (min-width: 360px) and (max-width: 1279px) {
      width: 20px;
      height: 34px;
    }
  }

  @media screen and (min-width: 360px) and (max-width: 768px) {
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const Text1 = styled.p`
  font-weight: 900;
  font-size: 14px;
  margin-bottom: 2px;
  @media screen and (min-width: 360px) and (max-width: 1919px) {
    font-size: 12px;
  }
`;

export const Text2 = styled.p`
  font-size: 12px;
  margin-bottom: 3px;
`;
