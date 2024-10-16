import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  z-index: 4;
  top: 30%;
  left: 9%;
  width: 933px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 625px;
  }
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    width: auto;
    left: 0;
    top: 11%;
    padding: 0 15px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 30px;
  color: white;
  font-size: 79px;
  font-weight: 800;
  line-height: 89px;

  @media screen and (min-width: 769px) and (max-width: 1919px) {
    font-size: 60px;
    line-height: 60px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 360px) and (max-width: 768px) {
    font-size: 43px;
    margin-bottom: 20px;
    line-height: 100%;
    letter-spacing: 0%;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  margin-bottom: 56px;
  color: white;

  @media screen and (min-width: 769px) and (max-width: 1919px) {
    font-size: 16px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 360px) and (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 25px;
    line-height: 23px;
    letter-spacing: 0;
  }
`;
