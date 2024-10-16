import styled from "styled-components";

export const Container = styled.div`
  padding: 0 228px;
  margin-bottom: 160px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    padding: 0 100px;
    margin-bottom: 100px;
  }
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    padding: 0 15px;
    margin-bottom: 60px;
  }
`;

export const Title = styled.h3`
  color: #fe9901;
  font-size: 25px;
  font-weight: 300;
  line-height: 25px;
  margin-bottom: 10px;
  text-align: center;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    font-size: 20px;
  }

  @media screen and (min-width: 360px) and (max-width: 768px) {
    font-size: 15px;
  }
`;
